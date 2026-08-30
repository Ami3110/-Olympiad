"use client";

import { useState, useEffect } from "react";

export default function StudentLoginPortal() {
  const [identifier, setIdentifier] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [session, setSession] = useState(null);

  const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

  // Restore existing session on mount & fetch fresh status from Google Sheets
  useEffect(() => {
    try {
      const saved = localStorage.getItem("igo_user_session");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && (parsed.registrationId || parsed.email)) {
          setSession(parsed);
          // Silently refresh latest status from Google Sheet in background
          refreshLiveStatus(parsed.registrationId || parsed.email, true);
        }
      }
    } catch (e) {
      console.warn("Session restore error:", e);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const cleanId = identifier.trim();
    if (!cleanId) {
      setError("Please enter your Email address or Registration ID.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      if (!APPS_SCRIPT_URL) {
        throw new Error("Server endpoint is not configured.");
      }

      const url = `${APPS_SCRIPT_URL}?action=login&identifier=${encodeURIComponent(cleanId)}`;
      const res = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        throw new Error("Server response was not ok");
      }

      const data = await res.json();

      if (data && data.success) {
        const userSession = {
          registrationId: data.registrationId || cleanId,
          email: data.email || "",
          studentName: data.studentName || "",
          paymentStatus: data.paymentStatus || "Pending",
          registrationStatus: data.registrationStatus || "Registered",
          samplePaperAccess: data.samplePaperAccess || "No",
          samplePaperUrl: data.samplePaperUrl || "/sample-papers/",
          paymentVerifiedAt: data.paymentVerifiedAt || "",
        };

        setSession(userSession);
        localStorage.setItem("igo_user_session", JSON.stringify(userSession));
        setIdentifier("");
      } else {
        setError(data?.error || "Invalid email or registration ID.");
      }
    } catch (err) {
      console.error("Login request error:", err);
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const refreshLiveStatus = async (idToQuery, isSilent = false) => {
    const query = idToQuery || session?.registrationId || session?.email;
    if (!query || !APPS_SCRIPT_URL) return;

    if (!isSilent) setIsRefreshing(true);

    try {
      const url = `${APPS_SCRIPT_URL}?action=login&identifier=${encodeURIComponent(query)}`;
      const res = await fetch(url, { method: "GET" });
      const data = await res.json();

      if (data && data.success) {
        const updated = {
          ...session,
          registrationId: data.registrationId || session?.registrationId || query,
          email: data.email || session?.email || "",
          studentName: data.studentName || session?.studentName || "",
          paymentStatus: data.paymentStatus || "Pending",
          registrationStatus: data.registrationStatus || "Registered",
          samplePaperAccess: data.samplePaperAccess || "No",
          samplePaperUrl: data.samplePaperUrl || "/sample-papers/",
          paymentVerifiedAt: data.paymentVerifiedAt || "",
        };
        setSession(updated);
        localStorage.setItem("igo_user_session", JSON.stringify(updated));
      }
    } catch (err) {
      console.error("Live status refresh error:", err);
    } finally {
      if (!isSilent) setIsRefreshing(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("igo_user_session");
    setSession(null);
    setError("");
  };

  const isVerified = session?.paymentStatus?.toLowerCase() === "verified";
  const hasPaperAccess = session?.samplePaperAccess?.toLowerCase() === "yes";

  return (
    <div className="reg-split-card fullwidth-card" style={{ maxWidth: "1080px", margin: "0 auto" }}>
      {/* ── LEFT SIDE VISUAL BANNER ────────── */}
      <div className="reg-split-visual">
        <div className="reg-visual-img-wrap">
          <img
            src="/assets/images/student-exam-hall.jpg"
            alt="Student Examination Portal"
            className="reg-visual-img"
          />
        </div>
        <div className="reg-visual-overlay">
          <div className="reg-visual-caption">
            <h3 className="reg-visual-heading">Student &amp; Candidate Portal</h3>
            <p className="reg-visual-desc">
              Access your registration details, live payment verification status, and examination sample papers.
            </p>
          </div>
        </div>
      </div>

      {/* ── RIGHT SIDE PORTAL INTERFACE ────────── */}
      <div className="reg-split-form-container" style={{ padding: "28px 32px" }}>
        {session ? (
          /* ── LOGGED IN DASHBOARD ── */
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid #E2E8F0" }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#E65A00" }}>
                  Candidate Dashboard
                </div>
                <h2 style={{ fontFamily: "var(--display)", fontSize: "22px", fontWeight: "850", color: "#0F172A", margin: "2px 0 0" }}>
                  {session.studentName ? session.studentName : "Registered Student"}
                </h2>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                style={{
                  background: "#F1F5F9",
                  border: "1px solid #CBD5E1",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#475569",
                  cursor: "pointer",
                }}
              >
                Log Out
              </button>
            </div>

            {/* Registration ID Banner */}
            <div
              style={{
                background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
                border: "1.5px dashed #EA580C",
                borderRadius: "12px",
                padding: "12px 18px",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <div>
                <div style={{ fontSize: "11px", fontWeight: "800", color: "#9A3412", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Official Registration ID
                </div>
                <div style={{ fontSize: "20px", fontWeight: "900", color: "#C2410C", fontFamily: "var(--mono)", letterSpacing: "0.04em" }}>
                  {session.registrationId}
                </div>
              </div>
              {session.email && (
                <div style={{ fontSize: "12.5px", color: "#64748B", fontWeight: "600" }}>
                  ✉️ {session.email}
                </div>
              )}
            </div>

            {/* Live Payment Status Box */}
            <div
              style={{
                background: isVerified ? "#F0FDF4" : "#FFFBEB",
                border: `1.5px solid ${isVerified ? "#86EFAC" : "#FDE68A"}`,
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "20px" }}>{isVerified ? "✅" : "⏳"}</span>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "800", color: isVerified ? "#15803D" : "#B45309" }}>
                      Payment Status: {isVerified ? "Verified" : "Pending Verification"}
                    </div>
                    <div style={{ fontSize: "12px", color: isVerified ? "#166534" : "#92400E", marginTop: "2px" }}>
                      {isVerified
                        ? session.paymentVerifiedAt
                          ? `Payment confirmed by organizer on ${session.paymentVerifiedAt}.`
                          : "Payment has been successfully confirmed and verified."
                        : "Your registration is recorded. Payment verification by the organizer is in progress."}
                    </div>
                  </div>
                </div>

                {/* Live Refresh Button */}
                <button
                  type="button"
                  onClick={() => refreshLiveStatus()}
                  disabled={isRefreshing}
                  title="Check live status from Google Sheet"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #CBD5E1",
                    borderRadius: "8px",
                    padding: "6px 10px",
                    fontSize: "11.5px",
                    fontWeight: "750",
                    color: "#334155",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  <span style={{ display: "inline-block", transform: isRefreshing ? "rotate(360deg)" : "none", transition: "transform 0.5s ease" }}>
                    🔄
                  </span>
                  <span>{isRefreshing ? "Checking..." : "Refresh"}</span>
                </button>
              </div>
            </div>

            {/* Sample Paper Access Section */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #E2E8F0",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "16px",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748B", marginBottom: "4px" }}>
                Examination Resources
              </div>
              <h4 style={{ fontFamily: "var(--display)", fontSize: "16px", fontWeight: "800", color: "#0F172A", margin: "0 0 6px" }}>
                Sample Papers &amp; Question Bank
              </h4>

              {isVerified && hasPaperAccess ? (
                <div>
                  <p style={{ fontSize: "13px", color: "#475569", lineHeight: "1.5", margin: "0 0 12px" }}>
                    Your registration and payment have been verified. You can now download and practice with the official sample question papers.
                  </p>
                  <a
                    href={session.samplePaperUrl || "/sample-papers/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reg-submit-btn student-submit"
                    style={{ textDecoration: "none", display: "inline-flex", width: "auto", padding: "10px 20px" }}
                  >
                    <span>Access Sample Question Papers ➔</span>
                  </a>
                </div>
              ) : isVerified ? (
                <div>
                  <p style={{ fontSize: "13px", color: "#475569", lineHeight: "1.5", margin: "0 0 8px" }}>
                    Payment verified! Sample paper links are currently being synced for your subject selection.
                  </p>
                  <a
                    href="/sample-papers/"
                    style={{ fontSize: "13px", color: "#E65A00", fontWeight: "750", textDecoration: "none" }}
                  >
                    View General Sample Papers ➔
                  </a>
                </div>
              ) : (
                <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "20px" }}>🔒</span>
                  <div style={{ fontSize: "12.5px", color: "#64748B", lineHeight: "1.4" }}>
                    <strong style={{ color: "#334155" }}>Access Locked:</strong> Sample papers &amp; test materials will unlock automatically once your payment is verified by the organizer.
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ── LOGIN FORM ── */
          <div>
            <div className="reg-form-header" style={{ marginBottom: "16px" }}>
              <div className="reg-form-eyebrow">Candidate Portal</div>
              <h2 className="reg-form-title">Student Login &amp; Status</h2>
              <p style={{ fontSize: "13.5px", color: "#64748B", marginTop: "4px", lineHeight: "1.4" }}>
                Enter your registered <strong>Email Address</strong> or <strong>Registration ID</strong> (e.g. <code style={{ color: "#E65A00", fontWeight: "700" }}>OLY-2026-00006</code>) to check your status and access sample papers.
              </p>
            </div>

            {error && <div className="reg-error-msg">{error}</div>}

            <form onSubmit={handleLogin} className="reg-inner-form">
              <div className="reg-field">
                <label>
                  Email Address or Registration ID <span className="req">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. student@gmail.com or OLY-2026-00006"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="reg-input"
                  style={{ height: "42px", fontSize: "14px" }}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="reg-submit-btn student-submit"
                style={{ marginTop: "12px", height: "44px" }}
              >
                <span>{isLoading ? "Verifying..." : "Access Candidate Portal ➔"}</span>
              </button>

              <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid #F1F5F9", textAlign: "center" }}>
                <span style={{ fontSize: "13px", color: "#64748B" }}>
                  Haven't registered yet?{" "}
                  <a href="/registration/" style={{ color: "#E65A00", fontWeight: "750", textDecoration: "none" }}>
                    Register for Olympiad 2026 ➔
                  </a>
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
