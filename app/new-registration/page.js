import RegistrationUnifiedNew from "../../components/RegistrationUnifiedNew";

export const metadata = {
  title: "New Registration (Live Database) — India Genius Olympiad | Session 2026",
  description:
    "Register for India Genius Olympiad Session 2026. Direct database submission for students and schools across India.",
};

export default function NewRegistrationPage() {
  return (
    <section style={{ paddingTop: 12, paddingBottom: 16, minHeight: "calc(100vh - 76px)", display: "flex", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: "100%", padding: "0 clamp(12px, 2.5vw, 40px)" }}>
        <RegistrationUnifiedNew />
      </div>
    </section>
  );
}
