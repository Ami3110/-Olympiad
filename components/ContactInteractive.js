"use client";

import { useState } from "react";

export default function ContactInteractive() {
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
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Clean Top Bar with Back Button & Leadership Header */}
      <section style={{ paddingTop: 32, paddingBottom: 54 }}>
        <div className="wrap">
          <div style={{ marginBottom: 24 }}>
            <a className="page-back-btn light-variant" href="/" aria-label="Back to Home" style={{ margin: 0 }}>
              <svg className="back-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </a>
          </div>

          <div className="section-head">
            <div className="section-eyebrow">Direct Leadership Connect</div>
            <h1 className="section-title" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: 8 }}>
              Reach Our National Conveners
            </h1>
            <p className="section-desc">
              Our founders and conveners are directly accessible to school principals, educators, and state coordinators.
            </p>
          </div>

          <div className="founder-grid">
            {/* Dr. Amit Sehgal */}
            <div className="founder-card">
              <div className="founder-profile-row">
                <img
                  className="founder-photo founder-photo-amit"
                  src="/assets/images/amit-sehgal.jpg"
                  alt="Dr. Amit Sehgal"
                />
                <div>
                  <h3 className="founder-name">Dr. Amit Sehgal</h3>
                  <div className="founder-tag">Founder &amp; Convener</div>
                  <p className="founder-role-text">Founder &ndash; India Genius Olympiad</p>
                  <p className="founder-role-text">Uttarakhand State President &ndash; India Genius Foundation</p>
                </div>
              </div>
              <a className="founder-phone-btn" href="tel:+918077074761">
                <span>📞</span>
                <span>+91 80770 74761</span>
              </a>
            </div>

            {/* Mr. Rishi Kant Upadhyaya */}
            <div className="founder-card">
              <div className="founder-profile-row">
                <img
                  className="founder-photo founder-photo-rishi"
                  src="/assets/images/rishi-kant-upadhyaya.jpg"
                  alt="Mr. Rishi Kant Upadhyaya"
                />
                <div>
                  <h3 className="founder-name">Mr. Rishi Kant Upadhyaya</h3>
                  <div className="founder-tag" style={{ color: "var(--teal)", background: "rgba(13, 122, 103, 0.08)" }}>
                    Co-Founder &amp; Innovation Lead
                  </div>
                  <p className="founder-role-text">Co-Founder &ndash; India Genius Olympiad</p>
                  <p className="founder-role-text">Founder &ndash; Deep Connection Innovation Pvt Ltd</p>
                </div>
              </div>
              <a className="founder-phone-btn" href="tel:+919540944490">
                <span>📞</span>
                <span>+91 95409 44490</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Official Registration Portals */}
      <section style={{ background: "var(--bg-elev)", paddingTop: 54, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Official Portals</div>
            <h2 className="section-title">Direct Registration Channels</h2>
            <p className="section-desc">
              Choose your participation path below to submit your details directly via our official Google Forms portal.
            </p>
          </div>

          <div className="contact-channels-grid">
            {[
              {
                icon: "🏫",
                title: "School Registration",
                desc: "Register your institution and coordinate class-wise student batches across multiple subjects.",
                cta: "Register School ➔",
                href: "/registration/?tab=school",
                accent: "var(--flame)",
              },
              {
                icon: "🧑‍🎓",
                title: "Student Registration",
                desc: "Individual students and parents can enroll directly for chosen Olympiad subjects and divisions.",
                cta: "Register Student ➔",
                href: "/registration/?tab=student",
                accent: "var(--teal)",
              },
              {
                icon: "🤝",
                title: "School Connect Network",
                desc: "Partner with India Genius Foundation for educational workshops, science fests, and school exhibitions.",
                cta: "Connect School ↗",
                href: "https://forms.gle/tt83cHHLN2n4B7YR6",
                accent: "var(--gold)",
              },
            ].map(({ icon, title, desc, cta, href, accent }) => (
              <div key={title} className="contact-channel-card" style={{ borderTop: `4px solid ${accent}` }}>
                <span className="contact-channel-icon">{icon}</span>
                <h3 className="contact-channel-title">{title}</h3>
                <p className="contact-channel-desc">{desc}</p>
                <a
                  className="contact-channel-btn"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderColor: accent, color: "var(--ink)" }}
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Get In Touch / Send Us a Message Section (At Bottom before Footer) */}
      <section style={{ paddingTop: 54, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <div className="section-eyebrow">Support &amp; Inquiries</div>
            <h2 className="section-title">Get in Touch With Us</h2>
            <p className="section-desc">
              Have questions about school registrations, student participation, or academic frameworks? Send our coordination desk a message.
            </p>
          </div>

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
                    <h3 className="contact-form-title">Send Us a Message</h3>
                    <p className="contact-form-sub">Fill out the form below and our team will respond within 24 hours.</p>
                  </div>

                  {/* Name Input */}
                  <div className="contact-field-group">
                    <label htmlFor="contact-name" className="contact-label">
                      Full Name <span className="req-star">*</span>
                    </label>
                    <input
                      id="contact-name"
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
                      <label htmlFor="contact-phone" className="contact-label">
                        Phone No. <span className="req-star">*</span>
                      </label>
                      <input
                        id="contact-phone"
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
                      <label htmlFor="contact-email" className="contact-label">
                        Email ID <span className="req-star">*</span>
                      </label>
                      <input
                        id="contact-email"
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
                    <label htmlFor="contact-cat" className="contact-label">
                      Inquiry Category
                    </label>
                    <select
                      id="contact-cat"
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
                    <label htmlFor="contact-msg" className="contact-label">
                      Message <span className="req-star">*</span>
                    </label>
                    <textarea
                      id="contact-msg"
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
    </>
  );
}
