import Link from "next/link";

export const metadata = {
  title: "About — Landscope",
  description: "Learn about Landscope and India's geographic diversity.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 className="headline headline-1 section-title">
          About <span className="span">Landscope</span>
        </h1>

        <div className="about-content">
          <p>
            <strong>Landscope</strong> is a platform dedicated to exploring and
            understanding India&apos;s extraordinary geographic diversity. Our
            mission is to make knowledge about India&apos;s landforms,
            ecosystems, and wildlife accessible, engaging, and inspiring.
          </p>

          <h2 className="headline headline-2" style={{ marginTop: "40px" }}>
            Why India&apos;s Geography Matters
          </h2>
          <p>
            India is one of the most geographically diverse countries on Earth.
            Within its 3.3 million square kilometres, you&apos;ll find the
            world&apos;s highest mountain range, one of the largest river
            plains, ancient plateaus rich in minerals, a vibrant desert, over
            7,500 km of coastline, and tropical island archipelagos.
          </p>
          <p>
            This diversity sustains over 45,000 plant species and nearly 100,000
            animal species — making India one of the world&apos;s 17
            mega-diverse countries. Understanding these landscapes is critical
            for conservation, sustainable development, and appreciating the
            natural heritage that supports 1.4 billion people.
          </p>

          <h2 className="headline headline-2" style={{ marginTop: "40px" }}>
            What We Cover
          </h2>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: "2" }}>
            <li>
              🏔️ <strong>The Himalayan Mountains</strong> — world&apos;s
              youngest and highest range
            </li>
            <li>
              🌾 <strong>The Northern Plains</strong> — India&apos;s
              agricultural heartland
            </li>
            <li>
              🏜️ <strong>The Peninsular Plateau</strong> — ancient bedrock and
              mineral wealth
            </li>
            <li>
              🐪 <strong>The Thar Desert</strong> — sand, resilience, and
              culture
            </li>
            <li>
              🌊 <strong>The Coastal Plains</strong> — 7,500 km of diverse
              coastline
            </li>
            <li>
              🏝️ <strong>The Islands</strong> — coral atolls and volcanic
              archipelagos
            </li>
          </ul>

          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Link href="/landforms" className="btn btn-primary">
              Start Exploring →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
