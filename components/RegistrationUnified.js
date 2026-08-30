"use client";

import { useState } from "react";

const DIVISIONS = [
  "Foundation (PG–UKG)",
  "Junior (I–II)",
  "Primary (III–V)",
  "Middle (VI–VIII)",
  "Secondary (IX–X)",
  "Senior Secondary (XI–XII)",
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
  heading: "Institutional Partnership & Examination Hubs.",
  desc: "Enrolling schools across CBSE, ICSE, and State Boards for nationwide Olympiad rounds.",
  badge: "School Registration",
  badgeColor: "#0D7A67",
};

const initialSchoolState = {
  schoolName: "",
  coordinatorName: "",
  designation: "",
  board: "CBSE",
  boardOther: "",
  schoolEmail: "",
  contactNumber: "",
  city: "",
  state: "",
  schoolAddress: "",
  divisions: ["Primary (III–V)", "Middle (VI–VIII)"],
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

export default function RegistrationUnified() {
  const [activeTab, setActiveTab] = useState("student"); // 'student' or 'school'
  const [schoolData, setSchoolData] = useState(initialSchoolState);
  const [studentData, setStudentData] = useState(initialStudentState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState("");
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
    if (isSubmitting) return;

    if (activeTab === "school") {
      if (!schoolData.schoolName.trim()) {
        setError("Please enter the School Name.");
        return;
      }
      if (!schoolData.coordinatorName.trim()) {
        setError("Please enter the Principal / Coordinator Name.");
        return;
      }
      if (!schoolData.designation.trim()) {
        setError("Please enter Designation.");
        return;
      }
      if (schoolData.board === "Other" && !schoolData.boardOther.trim()) {
        setError("Please specify the Affiliation Board.");
        return;
      }
      if (!schoolData.schoolEmail.trim()) {
        setError("Please enter the School Email.");
        return;
      }
      if (!schoolData.contactNumber.trim()) {
        setError("Please enter the Contact Number.");
        return;
      }
      if (!schoolData.city.trim()) {
        setError("Please enter City.");
        return;
      }
      if (!schoolData.state.trim()) {
        setError("Please enter State.");
        return;
      }
      if (!schoolData.schoolAddress.trim()) {
        setError("Please enter the School Address.");
        return;
      }
      if (schoolData.divisions.length === 0) {
        setError("Please select at least one participating division.");
        return;
      }
      if (!schoolData.studentCount) {
        setError("Please specify approximate number of students registering.");
        return;
      }
    }

    if (activeTab === "student" && studentData.subjects.length === 0) {
      setError("Please select at least one Olympiad subject.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    try {
      const resolvedBoard =
        schoolData.board === "Other" && schoolData.boardOther?.trim()
          ? `Other (${schoolData.boardOther.trim()})`
          : schoolData.board;

      const payload = {
        registrationType: activeTab === "student" ? "Student" : "School",
        studentName: activeTab === "student" ? studentData.studentName : "",
        parentName: activeTab === "student" ? studentData.parentName : "",
        className: activeTab === "student" ? studentData.studentClass : "",
        schoolName: activeTab === "student" ? studentData.schoolName : schoolData.schoolName,
        coordinatorName: activeTab === "school" ? schoolData.coordinatorName : "",
        designation: activeTab === "school" ? schoolData.designation : "",
        board: activeTab === "school" ? resolvedBoard : "",
        email: activeTab === "student" ? studentData.email : schoolData.schoolEmail,
        phone: activeTab === "student" ? studentData.phone : schoolData.contactNumber,
        city: activeTab === "student" ? studentData.city : schoolData.city,
        state: activeTab === "student" ? studentData.state : schoolData.state,
        address: activeTab === "school" ? schoolData.schoolAddress : "",
        schoolAddress: activeTab === "school" ? schoolData.schoolAddress : "",
        subjects: activeTab === "student" ? studentData.subjects : [],
        participatingDivisions: activeTab === "school" ? schoolData.divisions : [],
        estimatedStudentCount: activeTab === "school" ? schoolData.studentCount : "",
        specialInstructions: activeTab === "student" ? (studentData.notes || "") : (schoolData.notes || ""),
        paymentAmount: activeTab === "student" ? String(studentData.subjects.length * 80) : "",
        utr: activeTab === "student" ? (studentData.utrId || "") : "",
        paymentScreenshot: "",
      };

      if (APPS_SCRIPT_URL) {
        const response = await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify(payload),
        });
        const result = await response.json();
        if (result && result.success) {
          setRegistrationId(result.registrationId || "");
          setSubmitted(true);
        } else {
          setError(result?.error || "Registration could not be submitted. Please try again.");
        }
      } else {
        // Fallback for development if URL not yet configured in env
        setRegistrationId("OLY-2026-RECORDED");
        setSubmitted(true);
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
        {submitted ? (
          <div className="reg-success-box">
            <div className="reg-success-icon">✓</div>
            <h3 className="reg-success-title">
              {activeTab === "student" ? "Student Registration Received!" : "School Registration Received!"}
            </h3>
            {registrationId && (
              <div
                style={{
                  background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
                  border: "2px dashed #EA580C",
                  borderRadius: "12px",
                  padding: "10px 16px",
                  margin: "12px auto",
                  maxWidth: "340px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "#9A3412" }}>
                  Registration ID
                </div>
                <div style={{ fontSize: "20px", fontWeight: "900", color: "#C2410C", fontFamily: "var(--mono)", letterSpacing: "0.04em", marginTop: "2px" }}>
                  {registrationId}
                </div>
              </div>
            )}
            <p className="reg-success-desc">
              Thank you for registering with India Genius Olympiad.
              {activeTab === "student"
                ? " We have recorded your submission. Admit card and syllabus guidance will be sent to your registered contact."
                : " Our institutional desk will contact your school coordinator with the examination kit."}
            </p>
            <button
              type="button"
              className="reg-submit-btn"
              style={{ background: activeTab === "student" ? "#E65A00" : "#0D7A67" }}
              onClick={() => {
                setSubmitted(false);
                setRegistrationId("");
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
              <h2 className="reg-form-title">Registration Desk</h2>
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
                      <label>
                        Student Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        required
                        placeholder="Aarav Sharma"
                        value={studentData.studentName}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>
                        Parent / Guardian <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        placeholder="Rajesh Sharma"
                        value={studentData.parentName}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>
                        Class / Grade <span className="req">*</span>
                      </label>
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
                      <label>
                        School Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        name="schoolName"
                        required
                        placeholder="e.g. St. Xavier's School"
                        value={studentData.schoolName}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>
                        WhatsApp / Phone <span className="req">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="10-digit mobile number"
                        value={studentData.phone}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="parent@example.com"
                        value={studentData.email}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>
                        City <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="e.g. Dehradun"
                        value={studentData.city}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>
                        State <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
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

                  {/* Optional UPI / UTR Reference */}
                  <div className="reg-grid-2" style={{ marginBottom: "4px" }}>
                    <div className="reg-field">
                      <label>
                        UPI Ref / UTR ID <span style={{ fontSize: "11px", color: "var(--ink-light)", fontWeight: "normal" }}>(Optional if already paid)</span>
                      </label>
                      <input
                        type="text"
                        name="utrId"
                        placeholder="12-digit UPI UTR / Transaction ID"
                        value={studentData.utrId || ""}
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
                        value={studentData.notes || ""}
                        onChange={handleStudentChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || studentData.subjects.length === 0}
                    className="reg-submit-btn student-submit"
                  >
                    <span>
                      {isSubmitting
                        ? "Processing..."
                        : `Complete Registration · Total ₹${studentData.subjects.length * 80} →`}
                    </span>
                  </button>
                </>
              ) : (
                <>
                  {/* School Name */}
                  <div className="reg-field">
                    <label>
                      School Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      required
                      placeholder="e.g. Delhi Public School"
                      value={schoolData.schoolName}
                      onChange={handleSchoolChange}
                      className="reg-input"
                    />
                  </div>

                  {/* Principal / Coordinator Name & Designation */}
                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>
                        Principal / Coordinator Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        name="coordinatorName"
                        required
                        placeholder="e.g. Dr. Ananya Verma"
                        value={schoolData.coordinatorName}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>
                        Designation <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        name="designation"
                        required
                        placeholder="Principal / Coordinator"
                        value={schoolData.designation}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  {/* Affiliation Board */}
                  <div className="reg-field">
                    <label>
                      Affiliation Board <span className="req">*</span>
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "8px", marginTop: "3px" }}>
                      {["CBSE", "ICSE", "State Board", "Other"].map((b) => (
                        <label
                          key={b}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                            padding: "6px 10px",
                            background: schoolData.board === b ? "rgba(13, 122, 103, 0.08)" : "#F8FAFC",
                            border: `1.5px solid ${schoolData.board === b ? "#0D7A67" : "#E2E8F0"}`,
                            borderRadius: "7px",
                            cursor: "pointer",
                            fontSize: "12px",
                            fontWeight: schoolData.board === b ? "700" : "500",
                            color: schoolData.board === b ? "#0D7A67" : "#334155",
                            transition: "all 0.15s ease",
                          }}
                        >
                          <input
                            type="radio"
                            name="board"
                            value={b}
                            checked={schoolData.board === b}
                            onChange={handleSchoolChange}
                            style={{ accentColor: "#0D7A67", width: "15px", height: "15px" }}
                          />
                          <span>{b}</span>
                        </label>
                      ))}
                    </div>
                    {schoolData.board === "Other" && (
                      <input
                        type="text"
                        name="boardOther"
                        placeholder="Please specify affiliation board"
                        value={schoolData.boardOther || ""}
                        onChange={handleSchoolChange}
                        className="reg-input"
                        style={{ marginTop: "6px" }}
                        required
                      />
                    )}
                  </div>

                  {/* School Email & Contact Number */}
                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>
                        School Email <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        name="schoolEmail"
                        required
                        placeholder="principal@school.org"
                        value={schoolData.schoolEmail}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>
                        Contact Number <span className="req">*</span>
                      </label>
                      <input
                        type="tel"
                        name="contactNumber"
                        required
                        placeholder="Mobile / Office phone"
                        value={schoolData.contactNumber}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  {/* City & State */}
                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>
                        City <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="e.g. Haridwar"
                        value={schoolData.city}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>
                        State <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        placeholder="e.g. Uttarakhand"
                        value={schoolData.state}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>
                  </div>

                  {/* School Address */}
                  <div className="reg-field">
                    <label>
                      School Address <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="schoolAddress"
                      required
                      placeholder="Complete campus address with PIN code"
                      value={schoolData.schoolAddress}
                      onChange={handleSchoolChange}
                      className="reg-input"
                    />
                  </div>

                  {/* Participation Details Header */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #0D7A67 0%, #064E3B 100%)",
                      color: "#FFFFFF",
                      padding: "8px 12px",
                      borderRadius: "7px",
                      fontSize: "12.5px",
                      fontWeight: "700",
                      letterSpacing: "0.03em",
                      marginTop: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span>📋</span> Participation Details
                  </div>

                  {/* Participating Divisions */}
                  <div className="reg-field">
                    <label>
                      Divisions Participating <span className="req">*</span>
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

                  {/* Approx Student Count & Notes */}
                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>
                        Approx. No. of Students Registering <span className="req">*</span>
                      </label>
                      <input
                        type="number"
                        name="studentCount"
                        required
                        placeholder="e.g. 150"
                        value={schoolData.studentCount}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
                    </div>

                    <div className="reg-field">
                      <label>
                        Notes / Message (additional) <span style={{ fontSize: "11px", color: "var(--ink-light)", fontWeight: "normal" }}>(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="notes"
                        placeholder="Preferred dates, exam kit notes, etc."
                        value={schoolData.notes}
                        onChange={handleSchoolChange}
                        className="reg-input"
                      />
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
                    <span>{isSubmitting ? "Processing..." : "Submit School Registration →"}</span>
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
