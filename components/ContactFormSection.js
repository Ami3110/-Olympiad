"use client";

import { useState } from "react";

export default function ContactFormSection({
  title = "Send Us a Message",
  sub = "Fill out the form below and our team will respond within 24 hours.",
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "School Registration",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" style={{ paddingTop: 48, paddingBottom: 64 }}>
      <div className="wrap">
        <div className="contact-main-grid">
          {/* Left Column: Inspiring Image Card */}
          <div className="contact-visual-card">
            <img
              src="/assets/images/student-champions.jpg"
              alt="India Genius Olympiad student champions and medal winners"
              className="contact-visual-img"
            />
            <div className="contact-visual-overlay" />
            <div className="contact-visual-badge">
              <span>🏆</span>
              <span>Inspiring Young Minds Across India</span>
            </div>
          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success-state">
                <div className="contact-success-icon">🎉</div>
                <h3 className="contact-success-title">Thank You for Connecting!</h3>
                <p className="contact-success-desc">
                  Your message has been received successfully. Our Olympiad coordination desk will review your inquiry and get back to you shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      category: "School Registration",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-head">
                  <h3 className="contact-form-title">{title}</h3>
                  <p className="contact-form-sub">{sub}</p>
                </div>

                {/* Name Input */}
                <div className="contact-field-group">
                  <label htmlFor="hp-contact-name" className="contact-label">
                    Full Name <span className="req-star">*</span>
                  </label>
                  <input
                    id="hp-contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name or institution contact"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                {/* Phone & Email Row */}
                <div className="contact-fields-row">
                  <div className="contact-field-group">
                    <label htmlFor="hp-contact-phone" className="contact-label">
                      Phone No. <span className="req-star">*</span>
                    </label>
                    <input
                      id="hp-contact-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field-group">
                    <label htmlFor="hp-contact-email" className="contact-label">
                      Email ID <span className="req-star">*</span>
                    </label>
                    <input
                      id="hp-contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@school.edu.in"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                </div>

                {/* Inquiry Category */}
                <div className="contact-field-group">
                  <label htmlFor="hp-contact-cat" className="contact-label">
                    Inquiry Category
                  </label>
                  <select
                    id="hp-contact-cat"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="contact-select"
                  >
                    <option value="School Registration">School Registration &amp; Batch Enrollment</option>
                    <option value="Student Registration">Individual Student Registration</option>
                    <option value="State Coordination">State / District Coordinator Connect</option>
                    <option value="Syllabus & Papers">Syllabus &amp; Sample Papers Guidance</option>
                    <option value="General Support">General Query / Helpdesk</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="contact-field-group">
                  <label htmlFor="hp-contact-msg" className="contact-label">
                    Message <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="hp-contact-msg"
                    name="message"
                    rows={3}
                    required
                    placeholder="Type your message here....."
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-textarea"
                  />
                </div>

                {/* Submit Button */}
                <div className="contact-form-footer">
                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Message ➔"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
