import { Suspense } from "react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistrationModal from "../components/RegistrationModal";

export const metadata = {
  title: {
    default: "India Genius Olympiad | Where Curiosity Becomes Genius",
    template: "%s | India Genius Olympiad",
  },
  description:
    "India Genius Olympiad is a premier national-level multi-subject competition designed to discover, encourage, and recognize the academic talent of students from Pre-Primary (PG) to Class XII.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Suspense fallback={null}>
          <RegistrationModal />
        </Suspense>
      </body>
    </html>
  );
}
