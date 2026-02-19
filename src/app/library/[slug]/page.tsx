import { notFound } from "next/navigation";
import { libraryCategories } from "@/data/library";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return libraryCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cat = libraryCategories.find((c) => c.slug === slug);
  if (!cat) return { title: "Not Found" };
  return {
    title: `${cat.title} — Landscope Library`,
    description: `Explore ${cat.articleCount} articles about ${cat.title}.`,
  };
}

export default async function LibraryPage({ params }: PageProps) {
  const { slug } = await params;
  const cat = libraryCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  return (
    <section className="section">
      <div className="container">
        <h1 className="headline headline-1 section-title">
          <span className="span">{cat.title}</span>
        </h1>

        <p className="section-text">
          Explore our collection of {cat.articleCount} articles on{" "}
          {cat.title.toLowerCase()}.
        </p>

        <p
          className="card-text"
          style={{ color: "var(--text-wild-blue-yonder)" }}
        >
          Articles for this category are being curated. Check back soon for
          detailed content!
        </p>
      </div>
    </section>
  );
}
