import Link from "next/link";
import Image from "next/image";
import { Article } from "@/data/types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="card feature-card">
      <figure
        className="card-banner img-holder"
        style={{ "--width": 1602, "--height": 903 } as React.CSSProperties}
      >
        <Image
          src={article.imageUrl}
          width={1602}
          height={903}
          alt={article.title}
          className="img-cover"
          loading="lazy"
        />
      </figure>

      <div className="card-content">
        <div className="card-wrapper">
          <div className="card-tag">
            {article.tags.map((tag) => (
              <span key={tag} className="span hover-2">
                {tag}
              </span>
            ))}
          </div>
          <div className="wrapper">
            <span className="span">{article.readTime}</span>
          </div>
        </div>

        <h3 className="headline headline-3">
          <Link
            href={`/articles/${article.slug}`}
            className="card-title hover-2"
          >
            {article.title}
          </Link>
        </h3>

        <div className="card-wrapper">
          <div className="profile-card">
            <Image
              src={article.authorImage}
              width={48}
              height={48}
              alt={article.author}
              className="profile-banner"
              loading="lazy"
            />
            <div>
              <p className="card-title">{article.author}</p>
              <p className="card-subtitle">{article.date}</p>
            </div>
          </div>
          <Link href={`/articles/${article.slug}`} className="card-btn">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
