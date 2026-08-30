import { google } from "googleapis";

// Helper function to safely format and clean string values
const clean = (val) => {
  if (val === null || val === undefined) return "";
  if (typeof val === "string") return val.trim();
  return String(val).trim();
};

export async function POST(request) {
  try {
    const body = await request.json();
    const type = clean(body.type) || "Student"; // "Student" or "School"

    const sheetId = process.env.GOOGLE_SHEET_ID || "1sFJCrRnl8bQ2chHddxe4t1XsGv84jkxDMf-c25kNxa0";
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
      ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
      : undefined;

    // Validate environment setup without exposing keys
    if (!clientEmail || !privateKey) {
      console.error("[new-register API] Missing Google Service Account environment variables.");
      return Response.json(
        {
          success: false,
          error: "Registration service is temporarily unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Initialize Google Sheets Auth
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Determine unique server-generated Registration ID: OLY-2026-00001, OLY-2026-00002...
    let nextSeq = 1;
    try {
      const getRows = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: "A:A",
      });
      const rows = getRows.data.values || [];
      // Row 1 is header, so nextSeq = rows.length (e.g. 1 existing header -> row 2 -> 1)
      if (rows.length >= 1) {
        nextSeq = rows.length;
      }
    } catch (e) {
      // If range is empty or read error, fallback to timestamp sequence
      nextSeq = Math.floor(1000 + Math.random() * 9000);
    }

    const regId = `OLY-2026-${String(nextSeq).padStart(5, "0")}`;
    const regDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "medium",
    });

    // Normalize subjects and divisions array to comma-separated strings
    const subjectsStr = Array.isArray(body.subjects)
      ? body.subjects.map(clean).filter(Boolean).join(", ")
      : clean(body.subjects);

    const divisionsStr = Array.isArray(body.divisions)
      ? body.divisions.map(clean).filter(Boolean).join(", ")
      : clean(body.divisions);

    // Exact 27 columns as required:
    // 1. Registration ID
    // 2. Registration Type
    // 3. Registration Date
    // 4. Student Name
    // 5. Parent/Guardian Name
    // 6. Class
    // 7. School Name
    // 8. Coordinator Name
    // 9. Designation
    // 10. Board
    // 11. Email
    // 12. Phone
    // 13. City
    // 14. State
    // 15. Subjects
    // 16. Participating Divisions
    // 17. Estimated Student Count
    // 18. Special Instructions
    // 19. Payment Status
    // 20. Payment Amount
    // 21. UPI Transaction/UTR ID
    // 22. Payment Screenshot
    // 23. Registration Status
    // 24. Admin Notes
    // 25. Sample Paper Access
    // 26. Sample Paper URL
    // 27. Payment Verified At
    const rowValues = [
      regId,                                         // 1. Registration ID
      type,                                          // 2. Registration Type
      regDate,                                       // 3. Registration Date
      clean(body.studentName),                       // 4. Student Name
      clean(body.parentName),                        // 5. Parent/Guardian Name
      clean(body.studentClass),                      // 6. Class
      clean(body.schoolName),                        // 7. School Name
      clean(body.coordinatorName),                   // 8. Coordinator Name
      clean(body.designation),                       // 9. Designation
      clean(body.board),                             // 10. Board
      clean(body.email),                             // 11. Email
      clean(body.phone),                             // 12. Phone
      clean(body.city),                              // 13. City
      clean(body.state),                             // 14. State
      subjectsStr,                                   // 15. Subjects
      divisionsStr,                                  // 16. Participating Divisions
      clean(body.studentCount),                      // 17. Estimated Student Count
      clean(body.notes || body.specialInstructions), // 18. Special Instructions
      clean(body.paymentStatus) || "Pending",        // 19. Payment Status
      clean(body.paymentAmount),                     // 20. Payment Amount
      clean(body.utrId || body.upiTransactionId),    // 21. UPI Transaction/UTR ID
      clean(body.paymentScreenshot),                 // 22. Payment Screenshot
      "Submitted",                                   // 23. Registration Status
      "",                                            // 24. Admin Notes
      "Pending",                                     // 25. Sample Paper Access
      "",                                            // 26. Sample Paper URL
      "",                                            // 27. Payment Verified At
    ];

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "A:AA",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowValues],
      },
    });

    return Response.json({
      success: true,
      registrationId: regId,
      message: "Registration recorded successfully.",
    });
  } catch (err) {
    console.error("[new-register API Error]:", err?.message || err);
    return Response.json(
      {
        success: false,
        error: "Registration could not be submitted. Please try again.",
      },
      { status: 500 }
    );
  }
}
