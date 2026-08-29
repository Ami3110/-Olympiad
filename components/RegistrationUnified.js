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
  heading: "Where Curiosity Becomes Genius.",
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
};

export default function RegistrationUnified() {
  const [activeTab, setActiveTab] = useState("student"); // 'student' or 'school'
  const [schoolData, setSchoolData] = useState(initialSchoolState);
  const [studentData, setStudentData] = useState(initialStudentState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="reg-submit-btn student-submit"
                  >
                    <span>{isSubmitting ? "Processing..." : "Complete Student Registration →"}</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="reg-grid-2">
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

                    <div className="reg-field">
                      <label>
                        Affiliation Board <span className="req">*</span>
                      </label>
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
                      <label>
                        Coordinator / Principal <span className="req">*</span>
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

                  <div className="reg-grid-2">
                    <div className="reg-field">
                      <label>
                        Official Contact Number <span className="req">*</span>
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
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
