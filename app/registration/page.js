import { Suspense } from "react";
import RegistrationUnified from "../../components/RegistrationUnified";

export const metadata = {
  title: "Registration — India Genius Olympiad | Session 2026",
  description:
    "Register for India Genius Olympiad Session 2026. Seamless online registration for both individual students and partner schools across India.",
};

export default function RegistrationPage() {
  return (
    <section style={{ paddingTop: 12, paddingBottom: 16, minHeight: "calc(100vh - 76px)", display: "flex", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: "100%", padding: "0 clamp(12px, 2.5vw, 40px)" }}>
        <Suspense fallback={<div style={{ padding: "40px", textAlign: "center", color: "#64748B" }}>Loading registration portal...</div>}>
          <RegistrationUnified />
        </Suspense>
      </div>
    </section>
  );
}
