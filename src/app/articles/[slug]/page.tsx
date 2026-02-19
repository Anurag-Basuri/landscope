import { notFound } from "next/navigation";
import Image from "next/image";
import { articles, getArticleBySlug } from "@/data/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} — Landscope`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  /* Simple markdown-like rendering: split on double newline for paragraphs,
     and convert ## headings. */
  const blocks = article.content.split("\n\n");

  return (
    <article>
      <div className="article-header1">{article.title}</div>

      <div className="article-heading">
        <div className="card-wrapper" style={{ justifyContent: "center" }}>
          <div className="card-tag">
            {article.tags.map((t) => (
              <span key={t} className="span hover-2">
                {t}
              </span>
            ))}
          </div>
          <div className="wrapper">
            <span className="span">{article.readTime}</span>
            <span className="span">• {article.date}</span>
          </div>
        </div>
      </div>

      <figure
        className="img-holder"
        style={
          {
            "--width": 1200,
            "--height": 600,
            maxWidth: "60%",
            margin: "24px auto",
            borderRadius: "var(--radius-16)",
          } as React.CSSProperties
        }
      >
        <Image
          src={article.imageUrl}
          width={1200}
          height={600}
          alt={article.title}
          className="img-cover"
          priority
        />
      </figure>

      <div className="article-text">
        {blocks.map((block, i) => {
          if (block.startsWith("## ")) {
            return <h2 key={i}>{block.replace("## ", "")}</h2>;
          }
          if (block.startsWith("- ")) {
            const items = block.split("\n").filter((l) => l.startsWith("- "));
            return (
              <ul
                key={i}
                style={{ paddingLeft: "2rem", marginBlockEnd: "16px" }}
              >
                {items.map((item, j) => (
                  <li
                    key={j}
                    style={{ listStyle: "disc", marginBottom: "8px" }}
                  >
                    {item.replace("- ", "")}
                  </li>
                ))}
              </ul>
            );
          }
          if (block.startsWith("**") && block.endsWith("**")) {
            return (
              <p key={i}>
                <strong>{block.replace(/\*\*/g, "")}</strong>
              </p>
            );
          }
          return <p key={i}>{block}</p>;
        })}
      </div>
    </article>
  );
}
