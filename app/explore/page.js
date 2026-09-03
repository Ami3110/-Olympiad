import { Suspense } from "react";
import ExploreHeartOfIndiaClient from "./ExploreHeartOfIndiaClient";

export const metadata = {
  title: "Explore the Heart of India — Cultural & Regional Olympiad Syllabus | India Genius Olympiad",
  description:
    "Embark on a journey through the vibrant cultures, traditions, and languages of India. Explore state-wise Olympiad syllabus across Haryana, Punjab, Chandigarh, Telugu (Andhra & Telangana), Arunachal Pradesh, Uttarakhand and more.",
};

export default function ExplorePage() {
  return (
    <main style={{ minHeight: "80vh", background: "#FFFFFF" }}>
      <Suspense fallback={<div style={{ padding: 60, textAlign: "center" }}>Loading Regional Tracks...</div>}>
        <ExploreHeartOfIndiaClient />
      </Suspense>
    </main>
  );
}
