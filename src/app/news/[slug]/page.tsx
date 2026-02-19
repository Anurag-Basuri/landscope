import { notFound } from "next/navigation";
import { recentNews, popularPosts } from "@/data/news";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const allSlugs = [
    ...recentNews.map((n) => n.slug),
    ...popularPosts.map((p) => p.slug),
  ];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item =
    recentNews.find((n) => n.slug === slug) ||
    popularPosts.find((p) => p.slug === slug);
  if (!item) return { title: "Not Found" };
  return {
    title: `${item.title} — Landscope News`,
  };
}

export default async function NewsPage({ params }: PageProps) {
  const { slug } = await params;
  const news = recentNews.find((n) => n.slug === slug);
  const popular = popularPosts.find((p) => p.slug === slug);
  const item = news || popular;

  if (!item) notFound();

  return (
    <section className="section">
      <div className="container">
        <h1 className="headline headline-1 section-title">
          <span className="span">{item.title}</span>
        </h1>

        <div
          className="card-wrapper"
          style={{ justifyContent: "center", marginBlockEnd: "30px" }}
        >
          <span className="span">{item.readTime}</span>
          <span className="span">• {item.date}</span>
        </div>

        {news && (
          <div className="article-text">
            <p>{news.excerpt}</p>
            <p
              style={{
                marginTop: "20px",
                color: "var(--text-wild-blue-yonder)",
              }}
            >
              Full article content will be available soon.
            </p>
          </div>
        )}

        {!news && (
          <div className="article-text">
            <p style={{ color: "var(--text-wild-blue-yonder)" }}>
              Full article content will be available soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
