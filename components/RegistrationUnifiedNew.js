"use client";

import { useState } from "react";

const DIVISIONS = [
  "Foundation (PG–UKG)",
  "Junior (Classes I–II)",
  "Primary (Classes III–V)",
  "Middle (Classes VI–VIII)",
  "Secondary (Classes IX–X)",
  "Senior Secondary (Classes XI–XII)",
];

const STUDENT_SUBJECTS = [
  "Mental Ability & Logical Thinking",
  "Mathematics & Reasoning",
  "Science & Environmental Awareness",
  "Artificial Intelligence & Emerging Tech",
  "Cybersecurity & Digital Citizenship",
  "English & Communication",
  "Financial Literacy",
  "Space Science & Astronomy",
];

const STUDENT_VISUAL = {
  src: "/assets/images/student-exam-hall.jpg",
  heading: "Where Curiosity Becomes Genius",
  desc: "Empowering individual students from PG to Class XII across 25+ modern & foundational subjects.",
  badge: "Student Registration",
  badgeColor: "#E65A00",
};

const SCHOOL_VISUAL = {
  src: "/assets/images/school-campus-building.jpg",
  heading: "Institutional Partnership & Examination Hubs",
  desc: "Enrolling schools across CBSE, ICSE, and State Boards for nationwide Olympiad rounds.",
  badge: "School Registration",
  badgeColor: "#0D7A67",
};

const initialSchoolState = {
  schoolName: "",
  coordinatorName: "",
  designation: "Principal / Coordinator",
  board: "CBSE",
  schoolEmail: "",
  contactNumber: "",
  city: "",
  state: "",
  divisions: ["Primary (Classes III–V)", "Middle (Classes VI–VIII)"],
  studentCount: "",
  notes: "",
};

const initialStudentState = {
  studentName: "",
  parentName: "",
  studentClass: "Class 5",
  schoolName: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  subjects: ["Mathematics & Reasoning", "Science & Environmental Awareness"],
  notes: "",
  utrId: "",
};

export default function RegistrationUnifiedNew() {
  const [activeTab, setActiveTab] = useState("student"); // 'student' or 'school'
  const [schoolData, setSchoolData] = useState(initialSchoolState);
  const [studentData, setStudentData] = useState(initialStudentState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState(null);
  const [error, setError] = useState("");

  const currentVisual = activeTab === "student" ? STUDENT_VISUAL : SCHOOL_VISUAL;

  const handleSchoolChange = (e) => {
    const { name, value } = e.target;
    setSchoolData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSchoolDivision = (div) => {
    setSchoolData((prev) => ({
      ...prev,
      divisions: prev.divisions.includes(div)
        ? prev.divisions.filter((d) => d !== div)
        : [...prev.divisions, div],
    }));
  };

  const toggleStudentSubject = (subj) => {
    setStudentData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subj)
        ? prev.subjects.filter((s) => s !== subj)
        : [...prev.subjects, subj],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    if (activeTab === "school" && schoolData.divisions.length === 0) {
      setError("Please select at least one participating division.");
      return;
    }
    if (activeTab === "student" && studentData.subjects.length === 0) {
      setError("Please select at least one Olympiad subject.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Posts straight to the Google Apps Script web app (same endpoint
    // components/RegistrationUnified.js uses) instead of /api/new-register
    // — that route needs a real Google Cloud service-account key, which
    // isn't set up; Apps Script runs under the Sheet owner's own account
    // instead, so no service-account credentials to manage. See
    // docs/apps-script-registration.gs for the script + deploy steps —
    // NEXT_PUBLIC_APPS_SCRIPT_URL in .env must point at a *live*
    // deployment for this to actually work.
    const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    try {
      const payload =
        activeTab === "student"
          ? {
              registrationType: "Student",
              ...studentData,
              paymentAmount: String(studentData.subjects.length * 80),
              paymentStatus: "Pending",
            }
          : {
              registrationType: "School",
              ...schoolData,
              paymentStatus: "Pending",
            };

      if (!APPS_SCRIPT_URL) {
        setError("Registration service isn't configured yet — NEXT_PUBLIC_APPS_SCRIPT_URL is missing.");
        return;
      }

      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data && data.success) {
        setSubmittedId(data.registrationId || "OLY-2026-RECORDED");
      } else {
        setError(data?.error || "Registration could not be submitted. Please try again.");
      }
    } catch (err) {
      console.error("Registration submission error:", err);
      setError("Registration could not be submitted. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reg-split-card fullwidth-card">
      {/* ── LEFT SIDE: DEDICATED TAB-DRIVEN IMAGE ────────── */}
      <div className="reg-split-visual">
        <div className="reg-visual-img-wrap">
          <img
            key={currentVisual.src}
            src={currentVisual.src}
            alt={currentVisual.heading}
            className="reg-visual-img"
          />
        </div>

        {/* Decorative Overlay */}
        <div className="reg-visual-overlay">
          <div className="reg-visual-caption">
            <h3 className="reg-visual-heading">{currentVisual.heading}</h3>
            <p className="reg-visual-desc">{currentVisual.desc}</p>
          </div>
        </div>
      </div>

      {/* ── RIGHT SIDE: TABBED REGISTRATION FORM ─────────── */}
      <div className="reg-split-form-container">
        {submittedId ? (
          <div className="reg-success-box" style={{ padding: "32px 24px", textAlign: "center" }}>
            <div className="reg-success-icon" style={{ margin: "0 auto 16px" }}>✓</div>
            
            <h3 className="reg-success-title" style={{ fontSize: "24px", color: "var(--ink)", marginBottom: "8px" }}>
              Registration Successful!
            </h3>

            {/* Generated Registration ID Banner */}
            <div
              style={{
                background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
                border: "2px dashed #EA580C",
                borderRadius: "12px",
                padding: "14px 20px",
                margin: "16px auto",
                maxWidth: "380px",
              }}
            >
              <div style={{ fontSize: "11.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "#9A3412" }}>
                Registration ID
              </div>
              <div style={{ fontSize: "24px", fontWeight: "900", color: "#C2410C", fontFamily: "var(--mono)", letterSpacing: "0.04em", marginTop: "2px" }}>
                {submittedId}
              </div>
            </div>

            <p className="reg-success-desc" style={{ maxWidth: "440px", margin: "0 auto 16px", color: "var(--ink-light)", fontSize: "14.5px" }}>
              Your registration has been recorded successfully in our national Olympiad database.
            </p>

            {/* Verification & Sample Paper Status Box */}
            <div
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "10px",
                padding: "14px 18px",
                margin: "0 auto 20px",
                maxWidth: "440px",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <span style={{ fontSize: "16px" }}>⏳</span>
                <span style={{ fontSize: "13.5px", fontWeight: "700", color: "#334155" }}>
                  Payment Status: <span style={{ color: "#D97706" }}>Pending Verification</span>
                </span>
              </div>
              <p style={{ fontSize: "12.5px", color: "#64748B", margin: 0, lineHeight: 1.5 }}>
                Sample paper access and examination admit kit will be activated immediately upon administrative payment confirmation.
              </p>
            </div>

            <button
              type="button"
              className="reg-submit-btn"
              style={{ background: activeTab === "student" ? "#E65A00" : "#0D7A67", maxWidth: "300px", margin: "0 auto" }}
              onClick={() => {
                setSubmittedId(null);
                if (activeTab === "school") setSchoolData(initialSchoolState);
                else setStudentData(initialStudentState);
              }}
            >
              Submit Another Registration
            </button>
          </div>
        ) : (
          <>
            {/* Form Header */}
            <div className="reg-form-header">
              <h2 className="reg-form-title">Registration Desk (Live Portal)</h2>
            </div>

            {/* Two Tabs: Student & School */}
            <div className="reg-tab-bar">
              <button
                type="button"
                className={`reg-tab-btn ${activeTab === "student" ? "active-student" : ""}`}
                onClick={() => {
                  setActiveTab("student");
                  setError("");
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Student</span>
              </button>

              <button
                type="button"
                className={`reg-tab-btn ${activeTab === "school" ? "active-school" : ""}`}
                onClick={() => {
                  setActiveTab("school");
                  setError("");
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18"></path>
                  <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
                  <path d="M9 7h1"></path>
                  <path d="M9 11h1"></path>
                  <path d="M14 7h1"></path>
                  <path d="M14 11h1"></path>
                  <path d="M9 17h6v4H9z"></path>
                </svg>
                <span>School</span>
              </button>
            </div>

            {error && <div className="reg-error-msg">{error}</div>}

            {/* ── FORM FIELDS ──────────────────────────────── */}
            <form onSubmit={handleSubmit} className="reg-inner-form">
              {activeTab === "student" ? (
                <>
                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>Student Name</label>
                      <input
                        type="text"
                        name="studentName"
                        placeholder="Aarav Sharma"
                        value={studentData.studentName}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>Parent / Guardian</label>
                      <input
                        type="text"
                        name="parentName"
                        placeholder="Rajesh Sharma"
                        value={studentData.parentName}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>Class / Grade</label>
                      <select
                        name="studentClass"
                        value={studentData.studentClass}
                        onChange={handleStudentChange}
                        className="reg-input"
                      >
                        <option value="Playgroup / Nursery">Playgroup / Nursery</option>
                        <option value="LKG / UKG">LKG / UKG</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                        <option value="Class 4">Class 4</option>
                        <option value="Class 5">Class 5</option>
                        <option value="Class 6">Class 6</option>
                        <option value="Class 7">Class 7</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                      </select>
                    </div>

                    <div className="reg-field">
                      <label>School Name</label>
                      <input
                        type="text"
                        name="schoolName"
                        placeholder="e.g. St. Xavier's School"
                        value={studentData.schoolName}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>WhatsApp / Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="10-digit mobile number"
                        value={studentData.phone}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="parent@example.com"
                        value={studentData.email}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="e.g. Dehradun"
                        value={studentData.city}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>State</label>
                      <input
                        type="text"
                        name="state"
                        placeholder="e.g. Uttarakhand"
                        value={studentData.state}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  {/* Subject Checkboxes */}
                  <div className="reg-field">
                    <label>
                      Select Olympiad Subjects <span className="req">*</span>
                      <span className="reg-sub-hint">(₹80 each)</span>
                    </label>
                    <div className="reg-checkbox-grid">
                      {STUDENT_SUBJECTS.map((subj) => {
                        const checked = studentData.subjects.includes(subj);
                        return (
                          <label key={subj} className={`reg-checkbox-item ${checked ? "checked" : ""}`}>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleStudentSubject(subj)}
                              style={{ accentColor: "#E65A00" }}
                            />
                            <span>{subj}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Optional UPI / UTR Reference */}
                  <div className="reg-grid-2" style={{ marginTop: "4px" }}>
                    <div className="reg-field">
                      <label>
                        UPI Ref / UTR ID <span style={{ fontSize: "11px", color: "var(--ink-light)", fontWeight: "normal" }}>(Optional if already paid)</span>
                      </label>
                      <input
                        type="text"
                        name="utrId"
                        placeholder="12-digit UPI UTR / Transaction ID"
                        value={studentData.utrId}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>
                    <div className="reg-field">
                      <label>
                        Special Notes <span style={{ fontSize: "11px", color: "var(--ink-light)", fontWeight: "normal" }}>(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="notes"
                        placeholder="Any additional remarks"
                        value={studentData.notes}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  {/* Dynamic Calculated Amount Box */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
                      border: "1.5px solid #FDBA74",
                      borderRadius: "10px",
                      padding: "10px 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "6px",
                      marginBottom: "10px",
                      boxShadow: "0 2px 8px rgba(230, 90, 0, 0.06)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "16px" }}>🧾</span>
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: "700", color: "#9A3412" }}>
                          Fee Calculation: {studentData.subjects.length} {studentData.subjects.length === 1 ? "Subject" : "Subjects"} &times; ₹80
                        </div>
                        <div style={{ fontSize: "11px", color: "#C2410C", opacity: 0.85 }}>
                          Standard National Examination Fee
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "#9A3412", fontWeight: "700", display: "block" }}>
                        Total Amount
                      </span>
                      <span style={{ fontSize: "18px", fontWeight: "900", color: "#EA580C", fontFamily: "var(--mono)" }}>
                        ₹{studentData.subjects.length * 80}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic UPI Payment Card with QR Code */}
                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1.5px solid #FDBA74",
                      borderRadius: "12px",
                      padding: "12px 14px",
                      marginBottom: "10px",
                      boxShadow: "0 2px 10px rgba(234, 88, 12, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    {/* QR Code */}
                    <div
                      style={{
                        width: "90px",
                        height: "90px",
                        minWidth: "90px",
                        background: "#000000",
                        padding: "4px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="/assets/images/payment-qr-scanner.jpg"
                        alt="PhonePe UPI Payment QR Code"
                        style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "4px" }}
                      />
                    </div>

                    {/* Payment Info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
                        <span style={{ fontSize: "10.5px", fontWeight: "800", background: "#FFEDD5", color: "#C2410C", padding: "2px 7px", borderRadius: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          UPI / PhonePe / GPay
                        </span>
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: "700", color: "#1E293B", lineHeight: 1.3 }}>
                        Scan &amp; Pay: <span style={{ color: "#EA580C", fontWeight: "900", fontFamily: "var(--mono)", fontSize: "15px" }}>₹{studentData.subjects.length * 80}</span>
                      </div>
                      <div style={{ fontSize: "11px", color: "#64748B", marginTop: "2px", lineHeight: 1.35 }}>
                        Scan using PhonePe, Google Pay, Paytm, or any UPI app to pay the registration fee.
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || studentData.subjects.length === 0}
                    className="reg-submit-btn student-submit"
                  >
                    <span>
                      {isSubmitting
                        ? "Submitting to Database..."
                        : `Submit Registration · Total ₹${studentData.subjects.length * 80} →`}
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>School Name</label>
                      <input
                        type="text"
                        name="schoolName"
                        placeholder="e.g. Delhi Public School"
                        value={schoolData.schoolName}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>Affiliation Board</label>
                      <select
                        name="board"
                        value={schoolData.board}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      >
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE / ISC">ICSE / ISC</option>
                        <option value="State Board">State Board</option>
                        <option value="Cambridge / IB">Cambridge / IB</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>Coordinator / Principal</label>
                      <input
                        type="text"
                        name="coordinatorName"
                        placeholder="e.g. Dr. Ananya Verma"
                        value={schoolData.coordinatorName}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>Designation</label>
                      <input
                        type="text"
                        name="designation"
                        placeholder="Principal / Coordinator"
                        value={schoolData.designation}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>Official Contact Number</label>
                      <input
                        type="tel"
                        name="contactNumber"
                        placeholder="Mobile / Office phone"
                        value={schoolData.contactNumber}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>School Email</label>
                      <input
                        type="email"
                        name="schoolEmail"
                        placeholder="principal@school.org"
                        value={schoolData.schoolEmail}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="e.g. Haridwar"
                        value={schoolData.city}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>State</label>
                      <input
                        type="text"
                        name="state"
                        placeholder="e.g. Uttarakhand"
                        value={schoolData.state}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  {/* Estimated Count & Notes */}
                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>
                        Estimated Student Count <span style={{ fontSize: "11px", color: "var(--ink-light)", fontWeight: "normal" }}>(Optional)</span>
                      </label>
                      <input
                        type="number"
                        name="studentCount"
                        placeholder="e.g. 150"
                        value={schoolData.studentCount}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>
                    <div className="reg-field">
                      <label>
                        Special Instructions <span style={{ fontSize: "11px", color: "var(--ink-light)", fontWeight: "normal" }}>(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="notes"
                        placeholder="Exam dates, requirements, etc."
                        value={schoolData.notes}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  {/* Participating Divisions */}
                  <div className="reg-field">
                    <label>
                      Participating Divisions <span className="req">*</span>
                    </label>
                    <div className="reg-checkbox-grid">
                      {DIVISIONS.map((div) => {
                        const checked = schoolData.divisions.includes(div);
                        return (
                          <label key={div} className={`reg-checkbox-item school-check ${checked ? "checked-school" : ""}`}>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleSchoolDivision(div)}
                              style={{ accentColor: "#0D7A67" }}
                            />
                            <span>{div}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Institutional Summary Box */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
                      border: "1.5px solid #86EFAC",
                      borderRadius: "10px",
                      padding: "10px 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "6px",
                      marginBottom: "12px",
                      boxShadow: "0 2px 8px rgba(13, 122, 103, 0.06)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "16px" }}>🏫</span>
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: "700", color: "#14532D" }}>
                          {schoolData.divisions.length} {schoolData.divisions.length === 1 ? "Division" : "Divisions"} Selected
                        </div>
                        <div style={{ fontSize: "11px", color: "#15803D", opacity: 0.9 }}>
                          Institutional Rate: ₹80 / student / subject &middot; Direct billing with test kit
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "#15803D", fontWeight: "700", display: "block" }}>
                        Advance Fee
                      </span>
                      <span style={{ fontSize: "15px", fontWeight: "800", color: "#16A34A", fontFamily: "var(--mono)" }}>
                        ₹0 (Post-Enrollment)
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || schoolData.divisions.length === 0}
                    className="reg-submit-btn school-submit"
                  >
                    <span>{isSubmitting ? "Submitting to Database..." : "Submit School Registration →"}</span>
                  </button>
                </>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
