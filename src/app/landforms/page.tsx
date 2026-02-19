import { landforms } from "@/data/landforms";
import LandformCard from "@/components/LandformCard";

export const metadata = {
  title: "Landforms of India — Landscope",
  description:
    "Explore the six major landforms that define India's diverse geography.",
};

export default function LandformsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="headline headline-1 section-title">
          <span className="span">Landforms</span> of India
        </h1>
        <p
          className="section-text"
          style={{ maxWidth: "700px", margin: "0 auto 40px" }}
        >
          India&apos;s terrain is divided into six distinct physiographic
          divisions — from the highest mountains on Earth to sun-kissed tropical
          islands. Each supports unique ecosystems, cultures, and communities.
        </p>

        <div className="landforms-grid">
          {landforms.map((lf) => (
            <LandformCard key={lf.slug} landform={lf} />
          ))}
        </div>
      </div>
    </section>
  );
}
