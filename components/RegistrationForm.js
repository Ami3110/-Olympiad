"use client";

import { useState } from "react";

// Mirrors the existing "School Registration" Google Form's fields exactly
// (School/Contact Details + Participation Details). Not wired to any
// backend — same simulated-submit pattern already used by
// ContactInteractive.js / ContactFormSection.js, since this project has no
// backend by design (see PROJECT_INFO.md). This page is intentionally not
// linked from the header, footer, or any other page — reachable only by
// its direct URL.
const DIVISIONS = [
  "Foundation (PG–UKG)",
  "Junior (I–II)",
  "Primary (III–V)",
  "Middle (VI–VIII)",
  "Secondary (IX–X)",
  "Senior Secondary (XI–XII)",
];

const initialState = {
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
  divisions: [],
  studentCount: "",
  notes: "",
};

export default function RegistrationForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleDivision = (division) => {
    setFormData((prev) => ({
      ...prev,
      divisions: prev.divisions.includes(division)
        ? prev.divisions.filter((d) => d !== division)
        : [...prev.divisions, division],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.divisions.length === 0) {
      setError("Select at least one division your school is participating in.");
      return;
    }
    setError("");
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="contact-success-state">
        <div className="contact-success-icon">🎉</div>
        <h3 className="contact-success-title">Registration Received!</h3>
        <p className="contact-success-desc">
          Thank you, {formData.schoolName || "your school"}. Our coordination desk will review the
          details and get back to you shortly.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setSubmitted(false);
            setFormData(initialState);
          }}
        >
          Submit Another Registration
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* School & Contact Details */}
      <div className="contact-field-group">
        <label htmlFor="reg-school-name" className="contact-label">
          School Name <span className="req-star">*</span>
        </label>
        <input
          id="reg-school-name"
          name="schoolName"
          type="text"
          required
          value={formData.schoolName}
          onChange={handleChange}
          className="contact-input"
        />
      </div>

      <div className="contact-field-group">
        <label htmlFor="reg-coordinator-name" className="contact-label">
          Principal / Coordinator Name <span className="req-star">*</span>
        </label>
        <input
          id="reg-coordinator-name"
          name="coordinatorName"
          type="text"
          required
          value={formData.coordinatorName}
          onChange={handleChange}
          className="contact-input"
        />
      </div>

      <div className="contact-field-group">
        <label htmlFor="reg-designation" className="contact-label">
          Designation <span className="req-star">*</span>
        </label>
        <input
          id="reg-designation"
          name="designation"
          type="text"
          required
          value={formData.designation}
          onChange={handleChange}
          className="contact-input"
        />
      </div>

      <div className="contact-field-group">
        <span className="contact-label">
          Affiliation Board <span className="req-star">*</span>
        </span>
        <div className="contact-radio-group">
          {["CBSE", "ICSE", "State Board"].map((opt) => (
            <label key={opt} className="contact-radio-option">
              <input
                type="radio"
                name="board"
                value={opt}
                checked={formData.board === opt}
                onChange={handleChange}
              />
              <span>{opt}</span>
            </label>
          ))}
          <label className="contact-radio-option">
            <input
              type="radio"
              name="board"
              value="Other"
              checked={formData.board === "Other"}
              onChange={handleChange}
            />
            <span>Other:</span>
            <input
              type="text"
              name="boardOther"
              value={formData.boardOther}
              onChange={handleChange}
              onFocus={() => setFormData((prev) => ({ ...prev, board: "Other" }))}
              className="contact-input contact-radio-other-input"
            />
          </label>
        </div>
      </div>

      <div className="contact-field-group">
        <label htmlFor="reg-school-email" className="contact-label">
          School Email
        </label>
        <input
          id="reg-school-email"
          name="schoolEmail"
          type="email"
          value={formData.schoolEmail}
          onChange={handleChange}
          className="contact-input"
        />
      </div>

      <div className="contact-field-group">
        <label htmlFor="reg-contact-number" className="contact-label">
          Contact Number <span className="req-star">*</span>
        </label>
        <input
          id="reg-contact-number"
          name="contactNumber"
          type="tel"
          required
          value={formData.contactNumber}
          onChange={handleChange}
          className="contact-input"
        />
      </div>

      <div className="contact-fields-row">
        <div className="contact-field-group">
          <label htmlFor="reg-city" className="contact-label">
            City <span className="req-star">*</span>
          </label>
          <input
            id="reg-city"
            name="city"
            type="text"
            required
            value={formData.city}
            onChange={handleChange}
            className="contact-input"
          />
        </div>
        <div className="contact-field-group">
          <label htmlFor="reg-state" className="contact-label">
            State <span className="req-star">*</span>
          </label>
          <input
            id="reg-state"
            name="state"
            type="text"
            required
            value={formData.state}
            onChange={handleChange}
            className="contact-input"
          />
        </div>
      </div>

      <div className="contact-field-group">
        <label htmlFor="reg-school-address" className="contact-label">
          School Address <span className="req-star">*</span>
        </label>
        <textarea
          id="reg-school-address"
          name="schoolAddress"
          rows={2}
          required
          value={formData.schoolAddress}
          onChange={handleChange}
          className="contact-textarea"
        />
      </div>

      {/* Participation Details */}
      <div className="contact-form-section-label">Participation Details</div>

      <div className="contact-field-group">
        <span className="contact-label">
          Divisions Participating <span className="req-star">*</span>
        </span>
        <div className="contact-checkbox-group">
          {DIVISIONS.map((division) => (
            <label key={division} className="contact-checkbox-option">
              <input
                type="checkbox"
                checked={formData.divisions.includes(division)}
                onChange={() => toggleDivision(division)}
              />
              <span>{division}</span>
            </label>
          ))}
        </div>
        {error && <p className="contact-field-error">{error}</p>}
      </div>

      <div className="contact-field-group">
        <label htmlFor="reg-student-count" className="contact-label">
          Approx. No. of Students Registering <span className="req-star">*</span>
        </label>
        <input
          id="reg-student-count"
          name="studentCount"
          type="number"
          min="1"
          required
          value={formData.studentCount}
          onChange={handleChange}
          className="contact-input"
        />
      </div>

      <div className="contact-field-group">
        <label htmlFor="reg-notes" className="contact-label">
          Notes / Message (additional)
        </label>
        <textarea
          id="reg-notes"
          name="notes"
          rows={2}
          value={formData.notes}
          onChange={handleChange}
          className="contact-textarea"
        />
      </div>

      <div className="contact-form-footer">
        <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Registration ➔"}
        </button>
      </div>
    </form>
  );
}
