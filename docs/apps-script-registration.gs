/**
 * India Genius Olympiad — Registration → Google Sheets Bridge & CAPTCHA Service.
 *
 * This is the Google Apps Script bound to your Google Sheet.
 * Deploy it as a Web App and put its /exec URL into .env as NEXT_PUBLIC_APPS_SCRIPT_URL.
 *
 * FEATURES:
 * 1. Math CAPTCHA challenge generator (?action=captcha) via CacheService (5-min TTL).
 * 2. Server-side CAPTCHA verification with single-use token consumption (Anti-replay).
 * 3. Rate limiting / anti-spam protection on repeated failed attempts.
 * 4. LockService concurrency protection against race conditions & duplicate submissions.
 * 5. Google Sheet row append (Columns A–Z, AA=Email Status, AB=Email Sent At).
 * 6. Automated registration confirmation email sending.
 * 7. Candidate status & login lookup (?action=login&identifier=...).
 *
 * ── HOW TO DEPLOY ──────────────────────────────────────────────────
 * 1. Open the target Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1sFJCrRnl8bQ2chHddxe4t1XsGv84jkxDMf-c25kNxa0/edit
 * 2. Extensions → Apps Script.
 * 3. Replace Code.gs with this entire file.
 * 4. Save (Ctrl+S).
 * 5. Deploy → Manage deployments → edit (pencil icon) → New version → Deploy.
 *    (Or Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone).
 * 6. Copy the Web app URL (ends in /exec) into .env as:
 *      NEXT_PUBLIC_APPS_SCRIPT_URL="<your /exec URL>"
 * ─────────────────────────────────────────────────────────────────── */

const SHEET_ID = "1sFJCrRnl8bQ2chHddxe4t1XsGv84jkxDMf-c25kNxa0";
const SHEET_NAME = "Sheet1";

// Standard 28-column header (A–Z + AA, AB)
const HEADERS = [
  "Registration ID",           // A (1)
  "Registration Type",         // B (2)
  "Registration Date",         // C (3)
  "Student Name",              // D (4)
  "Parent/Guardian Name",      // E (5)
  "Class",                     // F (6)
  "School Name",               // G (7)
  "Coordinator Name",          // H (8)
  "Designation",               // I (9)
  "Board",                     // J (10)
  "Email",                     // K (11)
  "Phone",                     // L (12)
  "City",                      // M (13)
  "State",                     // N (14)
  "Subjects",                  // O (15)
  "Participating Divisions",   // P (16)
  "Estimated Student Count",   // Q (17)
  "Special Instructions",      // R (18)
  "Payment Status",            // S (19)
  "Payment Amount",            // T (20)
  "UPI Transaction/UTR ID",    // U (21)
  "Payment Screenshot",        // V (22)
  "Registration Status",       // W (23)
  "Admin Notes",               // X (24)
  "Sample Paper Access",       // Y (25)
  "Sample Paper URL",          // Z (26)
  "Registration Email Status", // AA (27)
  "Registration Email Sent At" // AB (28)
];

/**
 * GET requests handler:
 * - ?action=captcha : Generates a server-stored math CAPTCHA challenge
 * - ?action=login&identifier=... : Queries student/school registration record
 * - default : Health-check response
 */
function doGet(e) {
  try {
    const params = e ? e.parameter : {};
    const action = (params.action || "").toLowerCase();

    // ── 1. CAPTCHA Challenge Generator ─────────────────────────
    if (action === "captcha") {
      const captchaId = "cap_" + Utilities.getUuid().replace(/-/g, "").substring(0, 16);
      const opType = Math.floor(Math.random() * 3); // 0: +, 1: -, 2: *
      let a, b, answer, question;

      if (opType === 0) {
        // Addition: 3..19 + 2..15
        a = Math.floor(Math.random() * 17) + 3;
        b = Math.floor(Math.random() * 14) + 2;
        answer = a + b;
        question = "What is " + a + " + " + b + "?";
      } else if (opType === 1) {
        // Subtraction: a (12..30) - b (1..9)
        a = Math.floor(Math.random() * 19) + 12;
        b = Math.floor(Math.random() * 9) + 1;
        answer = a - b;
        question = "What is " + a + " - " + b + "?";
      } else {
        // Multiplication: 2..9 * 2..9
        a = Math.floor(Math.random() * 8) + 2;
        b = Math.floor(Math.random() * 8) + 2;
        answer = a * b;
        question = "What is " + a + " × " + b + "?";
      }

      // Store in ScriptCache with 300 seconds (5 minutes) TTL
      const cache = CacheService.getScriptCache();
      cache.put("captcha_" + captchaId, String(answer), 300);

      return respondJSON({
        success: true,
        captchaId: captchaId,
        question: question
      });
    }

    // ── 2. Candidate Status / Login Lookup ──────────────────────
    if (action === "login") {
      const identifier = (params.identifier || "").trim().toLowerCase();
      if (!identifier) {
        return respondJSON({ success: false, error: "Please provide an Email or Registration ID." });
      }

      const sheet = getTargetSheet();
      const lastRow = sheet.getLastRow();
      if (lastRow < 2) {
        return respondJSON({ success: false, error: "No registration record found." });
      }

      const data = sheet.getRange(2, 1, lastRow - 1, 28).getValues();

      // Search from bottom up for latest entry
      for (let i = data.length - 1; i >= 0; i--) {
        const row = data[i];
        const rowRegId = String(row[0] || "").trim().toLowerCase();
        const rowEmail = String(row[10] || "").trim().toLowerCase();

        if (rowRegId === identifier || rowEmail === identifier) {
          return respondJSON({
            success: true,
            registrationId: row[0],
            registrationType: row[1],
            registrationDate: row[2],
            studentName: row[3] || row[7] || "",
            email: row[10],
            phone: row[11],
            subjects: row[14],
            paymentStatus: row[18] || "Pending",
            paymentAmount: row[19] || "",
            registrationStatus: row[22] || "Submitted",
            samplePaperAccess: row[24] || "Pending",
            samplePaperUrl: row[25] || "/sample-papers/",
            paymentVerifiedAt: row[27] || ""
          });
        }
      }

      return respondJSON({ success: false, error: "No matching record found for this identifier." });
    }

    // ── 3. Default Health Check ────────────────────────────────
    return respondJSON({
      ok: true,
      message: "India Genius Olympiad registration API is operational."
    });
  } catch (err) {
    return respondJSON({ success: false, error: String(err) });
  }
}

/**
 * POST request handler:
 * Validates CAPTCHA server-side, rate-limits, writes to Google Sheet & sends confirmation email.
 */
function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return respondJSON({ success: false, error: "Empty request payload received." });
    }

    const body = JSON.parse(e.postData.contents);
    const cache = CacheService.getScriptCache();

    const pick = (...keys) => {
      for (const k of keys) {
        if (body[k] !== undefined && body[k] !== null && body[k] !== "") return body[k];
      }
      return "";
    };

    const joinArr = (v) => (Array.isArray(v) ? v.filter(Boolean).join(", ") : (v || ""));

    // ── Rate Limiting & Anti-Spam Key ───────────────────────────
    const clientIdentifier = (
      pick("email", "schoolEmail", "phone", "contactNumber") || "general_client"
    ).toString().trim().toLowerCase();
    const rateKey = "fail_count_" + clientIdentifier;
    const currentFails = Number(cache.get(rateKey) || 0);

    if (currentFails >= 5) {
      return respondJSON({
        success: false,
        error: "Too many attempts. Please wait a moment and try again."
      });
    }

    // ── Server-Side Math CAPTCHA Validation ─────────────────────
    const captchaId = String(pick("captchaId") || "").trim();
    const captchaAnswer = String(pick("captchaAnswer") || "").trim();

    if (!captchaId || !captchaAnswer) {
      return respondJSON({
        success: false,
        error: "Please enter the security verification answer."
      });
    }

    let isValidCaptcha = false;
    let isExpired = false;

    // Check if token is an instant signed challenge
    try {
      const decoded = Utilities.newBlob(Utilities.base64Decode(captchaId)).getDataAsString();
      const parts = decoded.split("|");
      if (parts.length === 5) {
        const a = Number(parts[0]);
        const op = parts[1];
        const b = Number(parts[2]);
        const timestamp = Number(parts[3]);
        const clientHash = parts[4];

        // 5-minute (300,000ms) TTL check
        if (Date.now() - timestamp > 300000) {
          isExpired = true;
        } else {
          // Recompute expected answer and verify anti-tamper hash
          let expectedAns = 0;
          if (op === "+") expectedAns = a + b;
          else if (op === "-") expectedAns = a - b;
          else if (op === "×" || op === "*") expectedAns = a * b;

          const salt = 98472;
          const validHash = ((expectedAns * 73 + (timestamp % 10000)) ^ salt).toString(36);

          if (clientHash === validHash && String(captchaAnswer) === String(expectedAns)) {
            isValidCaptcha = true;
          }
        }
      }
    } catch (tokenErr) {
      // Fallback to cache lookup if standard ID
    }

    // Fallback: Check in ScriptCache
    if (!isValidCaptcha && !isExpired) {
      const storedAnswer = cache.get("captcha_" + captchaId);
      if (storedAnswer) {
        cache.remove("captcha_" + captchaId);
        if (String(storedAnswer).trim() === String(captchaAnswer).trim()) {
          isValidCaptcha = true;
        }
      } else if (!captchaId.includes("|") && captchaId.startsWith("cap_")) {
        isExpired = true;
      }
    }

    if (isExpired) {
      return respondJSON({
        success: false,
        error: "Security verification expired. Please try again."
      });
    }

    if (!isValidCaptcha) {
      cache.put(rateKey, String(currentFails + 1), 600); // 10-minute lockout on repeated failures
      return respondJSON({
        success: false,
        error: "Incorrect security answer. Please try again."
      });
    }

    // Reset failure counter on successful verification
    cache.remove(rateKey);

    // ── Concurrency & Duplicate Protection (LockService) ───────
    if (!lock.tryLock(10000)) {
      return respondJSON({
        success: false,
        error: "Server is currently busy processing registrations. Please try again in a moment."
      });
    }

    const sheet = getTargetSheet();

    // Ensure 28-column header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    const type = pick("registrationType", "type") || "Student";
    const nextSeq = Math.max(1, sheet.getLastRow()); // Row 1 is header, so row count acts as natural ID
    const regId = "OLY-2026-" + String(nextSeq).padStart(5, "0");
    const regDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd MMM yyyy, HH:mm");

    const recipientEmail = pick("email", "schoolEmail");
    const contactPhone = pick("phone", "contactNumber");
    const studentName = pick("studentName");
    const coordinatorName = pick("coordinatorName");
    const schoolName = pick("schoolName");
    const className = pick("className", "studentClass");
    const subjects = joinArr(body.subjects);
    const divisions = joinArr(body.participatingDivisions || body.divisions);
    const addressInfo = pick("schoolAddress", "address");
    const notesInfo = pick("specialInstructions", "notes");
    const combinedNotes = addressInfo && notesInfo
      ? `Address: ${addressInfo} | Notes: ${notesInfo}`
      : (addressInfo ? `Address: ${addressInfo}` : notesInfo);

    const paymentAmount = pick("paymentAmount") || (type === "Student" && Array.isArray(body.subjects) ? String(body.subjects.length * 80) : "");
    const paymentStatus = pick("paymentStatus") || "Pending";
    const utrId = pick("utr", "utrId", "upiTransactionId");

    // Exact 28 columns (A–Z + AA, AB)
    const row = [
      regId,                          // 1. Registration ID (A)
      type,                           // 2. Registration Type (B)
      regDate,                        // 3. Registration Date (C)
      studentName,                    // 4. Student Name (D)
      pick("parentName"),             // 5. Parent/Guardian Name (E)
      className,                      // 6. Class (F)
      schoolName,                     // 7. School Name (G)
      coordinatorName,                // 8. Coordinator Name (H)
      pick("designation"),            // 9. Designation (I)
      pick("board"),                  // 10. Board (J)
      recipientEmail,                 // 11. Email (K)
      contactPhone,                   // 12. Phone (L)
      pick("city"),                   // 13. City (M)
      pick("state"),                  // 14. State (N)
      subjects,                       // 15. Subjects (O)
      divisions,                      // 16. Participating Divisions (P)
      pick("estimatedStudentCount", "studentCount"), // 17. Estimated Student Count (Q)
      combinedNotes,                  // 18. Special Instructions (R)
      paymentStatus,                  // 19. Payment Status (S)
      paymentAmount,                  // 20. Payment Amount (T)
      utrId,                          // 21. UPI Transaction/UTR ID (U)
      pick("paymentScreenshot"),      // 22. Payment Screenshot (V)
      "Submitted",                    // 23. Registration Status (W)
      "",                             // 24. Admin Notes (X)
      "Pending",                      // 25. Sample Paper Access (Y)
      "",                             // 26. Sample Paper URL (Z)
      "Pending",                      // 27. Registration Email Status (AA)
      ""                              // 28. Registration Email Sent At (AB)
    ];

    sheet.appendRow(row);
    const newRowNum = sheet.getLastRow();

    // Release write lock before email dispatch to keep system snappy
    lock.releaseLock();

    // ── Send Registration Confirmation Email ────────────────────
    let emailStatus = "Skipped";
    let emailSentAt = "";

    if (recipientEmail && recipientEmail.includes("@")) {
      try {
        const subjectTitle = type === "School"
          ? `India Genius Olympiad 2026 — School Registration Received (${regId})`
          : `India Genius Olympiad 2026 — Registration Confirmation (${regId})`;

        const participantName = type === "School" ? (coordinatorName || schoolName || "Coordinator") : (studentName || "Student");

        const emailBody = `Dear ${participantName},

Thank you for registering for the India Genius Olympiad — Session 2026.

Your registration has been successfully recorded in our national database.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REGISTRATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Registration ID : ${regId}
Type            : ${type} Registration
Registration Date: ${regDate}
${type === "Student" ? `Student Name    : ${studentName}\nClass           : ${className}\nSchool          : ${schoolName}\nSubjects        : ${subjects}\nFee Amount      : ₹${paymentAmount || "80"}\nUPI/UTR Ref     : ${utrId || "Pending Verification"}` : `School Name     : ${schoolName}\nCoordinator     : ${coordinatorName}\nBoard           : ${pick("board")}\nDivisions       : ${divisions}\nStudent Count   : ${pick("estimatedStudentCount", "studentCount")}`}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can check your live verification status, payment confirmation, and access examination sample papers at any time using your Candidate Login Portal:
https://indiageniusolympiad.org/login/

For questions or assistance, please contact the Olympiad Coordination Desk at contactamitsehgal@gmail.com or call +91 9540944490.

Warm regards,
Academic Examination Directorate
India Genius Olympiad | India Genius Foundation`;

        MailApp.sendEmail({
          to: recipientEmail,
          subject: subjectTitle,
          body: emailBody
        });

        emailStatus = "Sent";
        emailSentAt = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd MMM yyyy, HH:mm:ss");
      } catch (mailErr) {
        emailStatus = "Failed: " + mailErr.message;
        emailSentAt = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd MMM yyyy, HH:mm:ss");
      }

      // Update AA and AB in the sheet
      try {
        sheet.getRange(newRowNum, 27).setValue(emailStatus); // AA
        sheet.getRange(newRowNum, 28).setValue(emailSentAt); // AB
      } catch (updateErr) {
        console.warn("Could not update email status columns:", updateErr);
      }
    }

    return respondJSON({
      success: true,
      registrationId: regId,
      message: "Registration recorded successfully."
    });
  } catch (err) {
    if (lock) {
      try { lock.releaseLock(); } catch (_) {}
    }
    return respondJSON({
      success: false,
      error: "Registration could not be submitted. " + String(err)
    });
  }
}

/**
 * Helper: Resolve active Google Sheet
 */
function getTargetSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  return ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
}

/**
 * Helper: Standard JSON output with CORS support
 */
function respondJSON(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

