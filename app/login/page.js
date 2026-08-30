import StudentLoginPortal from "../../components/StudentLoginPortal";

export const metadata = {
  title: "Candidate Login & Status Portal — India Genius Olympiad 2026",
  description:
    "Check your India Genius Olympiad registration status, verify payment confirmation, and access official sample question papers.",
};

export default function LoginPage() {
  return (
    <section
      style={{
        paddingTop: 24,
        paddingBottom: 36,
        minHeight: "calc(100vh - 76px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "100%", padding: "0 clamp(12px, 2.5vw, 40px)" }}>
        <StudentLoginPortal />
      </div>
    </section>
  );
}
