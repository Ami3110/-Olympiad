import RegistrationForm from "../../components/RegistrationForm";

// Intentionally not linked from Header.js, Footer.js, or any other page —
// reachable only via its direct URL. noindex keeps it out of search too.
export const metadata = {
  title: "School Registration",
  robots: { index: false, follow: false },
};

export default function RegistrationPage() {
  return (
    <section style={{ paddingTop: 48, paddingBottom: 64 }}>
      <div className="wrap" style={{ maxWidth: 640, margin: "0 auto" }}>
        <div className="contact-form-card">
          <div className="contact-form-head">
            <h1 className="contact-form-title" style={{ fontSize: 24 }}>
              School Registration
            </h1>
            <p className="contact-form-sub">
              India Genius Olympiad — Session 2026–27. Fields marked with an asterisk (*) are required.
            </p>
          </div>
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}
