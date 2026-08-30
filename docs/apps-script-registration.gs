/**
 * India Genius Olympiad — Registration → Google Sheets bridge.
 *
 * This is NOT part of the Next.js app — it's the code for a separate
 * Google Apps Script *bound to your Google Sheet*. Deploy it as a Web App
 * and put its /exec URL into .env as NEXT_PUBLIC_APPS_SCRIPT_URL.
 *
 * Both registration forms in this repo already know how to call this
 * endpoint (components/RegistrationUnified.js at /registration/, and
 * components/RegistrationUnifiedNew.js at /new-registration/ once it's
 * switched over) — this script accepts both of their slightly different
 * field-name variants defensively (see the `pick()` helper below).
 *
 * ── HOW TO DEPLOY ──────────────────────────────────────────────────
 * 1. Open the target Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1sFJCrRnl8bQ2chHddxe4t1XsGv84jkxDMf-c25kNxa0/edit
 * 2. Extensions → Apps Script.
 * 3. Delete any placeholder code in Code.gs, paste this whole file in.
 * 4. Save (Ctrl+S). Name the project something like "IGO Registration".
 * 5. Deploy → New deployment → gear icon → "Web app".
 *      - Description: anything.
 *      - Execute as: Me (your account).
 *      - Who has access: Anyone.
 *    Click Deploy. Authorize when Google prompts (it's your own script
 *    touching your own Sheet — the "unsafe" warning is expected, click
 *    through it: Advanced → Go to <project name> (unsafe) → Allow).
 * 6. Copy the Web app URL it gives you (ends in /exec).
 * 7. Put that URL in this repo's .env as:
 *      NEXT_PUBLIC_APPS_SCRIPT_URL="<the URL you copied>"
 * 8. Restart `npm run dev` (NEXT_PUBLIC_ vars are read at server start).
 *
 * If you ever need to change this script's code again, edit it in
 * Apps Script, then Deploy → Manage deployments → edit (pencil) →
 * New version → Deploy. Editing the code alone does NOT update the live
 * /exec URL until you redeploy a new version this way.
 * ─────────────────────────────────────────────────────────────────── */

const SHEET_ID = "1sFJCrRnl8bQ2chHddxe4t1XsGv84jkxDMf-c25kNxa0";
const SHEET_NAME = "Sheet1"; // change if your tab is named differently

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME)
      || SpreadsheetApp.openById(SHEET_ID).getSheets()[0];

    // Header row, written once if the sheet is empty.
    const HEADERS = [
      "Registration ID", "Registration Type", "Registration Date",
      "Student Name", "Parent/Guardian Name", "Class", "School Name",
      "Coordinator Name", "Designation", "Board", "Email", "Phone",
      "City", "State", "Subjects", "Participating Divisions",
      "Estimated Student Count", "Special Instructions", "Payment Status",
      "Payment Amount", "UPI Transaction/UTR ID", "Payment Screenshot",
      "Registration Status",
    ];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    // Accepts either component's field names.
    const pick = (...keys) => {
      for (const k of keys) {
        if (body[k] !== undefined && body[k] !== null && body[k] !== "") return body[k];
      }
      return "";
    };
    const joinArr = (v) => (Array.isArray(v) ? v.filter(Boolean).join(", ") : (v || ""));

    const type = pick("registrationType", "type") || "Student";
    const nextSeq = sheet.getLastRow(); // header counts as row 1, so this is a natural running count
    const regId = "OLY-2026-" + String(nextSeq).padStart(5, "0");
    const regDate = Utilities.formatDate(new Date(), "Asia/Kolkata", "dd MMM yyyy, HH:mm");

    const addressInfo = pick("schoolAddress", "address");
    const notesInfo = pick("specialInstructions", "notes");
    const combinedNotes = addressInfo && notesInfo 
      ? `Address: ${addressInfo} | Notes: ${notesInfo}`
      : (addressInfo ? `Address: ${addressInfo}` : notesInfo);

    const row = [
      regId,
      type,
      regDate,
      pick("studentName"),
      pick("parentName"),
      pick("className", "studentClass"),
      pick("schoolName"),
      pick("coordinatorName"),
      pick("designation"),
      pick("board"),
      pick("email", "schoolEmail"),
      pick("phone", "contactNumber"),
      pick("city"),
      pick("state"),
      joinArr(body.subjects),
      joinArr(body.participatingDivisions || body.divisions),
      pick("estimatedStudentCount", "studentCount"),
      combinedNotes,
      pick("paymentStatus") || "Pending",
      pick("paymentAmount"),
      pick("utr", "utrId"),
      pick("paymentScreenshot"),
      "Submitted",
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, registrationId: regId }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// So a plain GET to the /exec URL (e.g. opening it in a browser to sanity
// check the deployment) doesn't just error out.
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "IGO registration endpoint is live. POST JSON to submit." }))
    .setMimeType(ContentService.MimeType.JSON);
}
