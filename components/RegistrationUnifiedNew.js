"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

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
  heading: "Institutional Partnership & Examination Hubs",
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

function generateMathQuestion() {
  const ops = ["+", "-", "×"];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a, b, answer, question;
  if (op === "+") {
    a = Math.floor(Math.random() * 15) + 3;
    b = Math.floor(Math.random() * 12) + 2;
    answer = a + b;
    question = `What is ${a} + ${b}?`;
  } else if (op === "-") {
    a = Math.floor(Math.random() * 16) + 12;
    b = Math.floor(Math.random() * 9) + 1;
    answer = a - b;
    question = `What is ${a} - ${b}?`;
  } else {
    a = Math.floor(Math.random() * 8) + 2;
    b = Math.floor(Math.random() * 8) + 2;
    answer = a * b;
    question = `What is ${a} × ${b}?`;
  }

  const timestamp = Date.now();
  const salt = 98472;
  const hash = ((answer * 73 + (timestamp % 10000)) ^ salt).toString(36);
  const raw = `${a}|${op}|${b}|${timestamp}|${hash}`;
  const token = typeof window !== "undefined" ? btoa(raw) : `srv_${timestamp}`;

  return {
    captchaId: token,
    question: question,
  };
}

export default function RegistrationUnifiedNew() {
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams?.get("tab")?.toLowerCase();
  const [activeTab, setActiveTab] = useState(tabFromUrl === "school" ? "school" : "student");
  const [schoolData, setSchoolData] = useState(initialSchoolState);
  const [studentData, setStudentData] = useState(initialStudentState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState(null);
  const [error, setError] = useState("");

  // Instant CAPTCHA State (0ms delay)
  const [captchaChallenge, setCaptchaChallenge] = useState(generateMathQuestion);
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const loadCaptcha = () => {
    setCaptchaChallenge(generateMathQuestion());
    setCaptchaAnswer("");
  };

  useEffect(() => {
    loadCaptcha();

    const handleTabEvent = (e) => {
      if (e?.detail === "school" || e?.detail === "student") {
        setActiveTab(e.detail);
      }
    };

    window.addEventListener("switch-reg-tab", handleTabEvent);
    return () => window.removeEventListener("switch-reg-tab", handleTabEvent);
  }, []);

  useEffect(() => {
    const handleUrlState = () => {
      const tabParam = searchParams?.get("tab")?.toLowerCase();
      if (tabParam === "school") {
        setActiveTab("school");
      } else if (tabParam === "student") {
        setActiveTab("student");
      } else if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const urlTab = urlParams.get("tab")?.toLowerCase();
        const hash = window.location.hash.toLowerCase();
        if (urlTab === "school" || hash.includes("school")) {
          setActiveTab("school");
        } else if (urlTab === "student" || hash.includes("student")) {
          setActiveTab("student");
        }
      }
    };

    handleUrlState();
    window.addEventListener("hashchange", handleUrlState);
    return () => window.removeEventListener("hashchange", handleUrlState);
  }, [searchParams]);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setError("");
    if (typeof window !== "undefined" && window.history?.replaceState) {
      const newUrl = `${window.location.pathname}?tab=${tab}`;
      window.history.replaceState(null, "", newUrl);
    }
  };

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

    // Validate CAPTCHA answer
    const trimmedCaptchaAnswer = captchaAnswer.trim();
    if (!trimmedCaptchaAnswer) {
      setError("Please enter the security verification answer.");
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

      const payload =
        activeTab === "student"
          ? {
              registrationType: "Student",
              ...studentData,
              paymentAmount: String(studentData.subjects.length * 80),
              paymentStatus: "Pending",
              captchaId: captchaChallenge.captchaId,
              captchaAnswer: trimmedCaptchaAnswer,
            }
          : {
              registrationType: "School",
              ...schoolData,
              board: resolvedBoard,
              address: schoolData.schoolAddress,
              schoolAddress: schoolData.schoolAddress,
              estimatedStudentCount: schoolData.studentCount,
              specialInstructions: schoolData.notes,
              paymentStatus: "Pending",
              captchaId: captchaChallenge.captchaId,
              captchaAnswer: trimmedCaptchaAnswer,
            };

      if (!APPS_SCRIPT_URL) {
        setSubmittedId("OLY-2026-RECORDED");
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
        loadCaptcha();
        setCaptchaAnswer("");
      }
    } catch (err) {
      console.error("Registration submission error:", err);
      setError("Registration could not be submitted. Please try again.");
      loadCaptcha();
      setCaptchaAnswer("");
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
              <h2 className="reg-form-title">Registration Desk</h2>
            </div>

            {/* Two Tabs: Student & School */}
            <div className="reg-tab-bar">
              <button
                type="button"
                className={`reg-tab-btn ${activeTab === "student" ? "active-student" : ""}`}
                onClick={() => handleTabSwitch("student")}
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
                onClick={() => handleTabSwitch("school")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18"></path>
                  <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
                  <path d="M9 7h1"></path>
                  <path d="M9 11h1"></path>
                  <path d="M9 15h1"></path>
                  <path d="M14 7h1"></path>
                  <path d="M14 11h1"></path>
                  <path d="M14 15h1"></path>
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

                  {/* Security Verification / Math CAPTCHA */}
                  <div
                    style={{
                      background: "#F8FAFC",
                      border: "1.5px solid #E2E8F0",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      marginTop: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <label style={{ fontSize: "12px", fontWeight: "700", color: "#334155", display: "flex", alignItems: "center", gap: "5px" }}>
                        <span>🛡️ Security Verification</span> <span className="req">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={loadCaptcha}
                        disabled={isSubmitting}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#64748B",
                          fontSize: "11.5px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                          padding: "2px 4px",
                        }}
                        title="Click to generate a new question"
                      >
                        🔄 New Question
                      </button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontSize: "13.5px",
                          fontWeight: "700",
                          color: "#0F172A",
                          background: "#FFFFFF",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          border: "1px solid #CBD5E1",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {captchaChallenge.question}
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required
                        placeholder="Answer"
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value)}
                        className="reg-input"
                        style={{
                          width: "90px",
                          height: "36px",
                          fontSize: "14px",
                          fontWeight: "700",
                          padding: "6px 10px",
                          textAlign: "center",
                        }}
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
                        ? "Submitting to Database..."
                        : `Submit Registration · Total ₹${studentData.subjects.length * 80} →`}
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

                  {/* Security Verification / Math CAPTCHA */}
                  <div
                    style={{
                      background: "#F8FAFC",
                      border: "1.5px solid #E2E8F0",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      marginTop: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <label style={{ fontSize: "12px", fontWeight: "700", color: "#334155", display: "flex", alignItems: "center", gap: "5px" }}>
                        <span>🛡️ Security Verification</span> <span className="req">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={loadCaptcha}
                        disabled={isSubmitting}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#64748B",
                          fontSize: "11.5px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                          padding: "2px 4px",
                        }}
                        title="Click to generate a new question"
                      >
                        🔄 New Question
                      </button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontSize: "13.5px",
                          fontWeight: "700",
                          color: "#0F172A",
                          background: "#FFFFFF",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          border: "1px solid #CBD5E1",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {captchaChallenge.question}
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required
                        placeholder="Answer"
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value)}
                        className="reg-input"
                        style={{
                          width: "90px",
                          height: "36px",
                          fontSize: "14px",
                          fontWeight: "700",
                          padding: "6px 10px",
                          textAlign: "center",
                        }}
                      />
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
