import Link from "next/link";
import Image from "next/image";
import { NewsItem } from "@/data/types";

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="recent-post-card">
      <figure
        className="card-banner img-holder"
        style={{ "--width": 271, "--height": 258 } as React.CSSProperties}
      >
        <Image
          src={news.imageUrl}
          width={271}
          height={258}
          alt={news.title}
          className="img-cover"
          loading="lazy"
        />
      </figure>

      <div className="card-content">
        <span className="card-badge">{news.badge}</span>

        <h3 className="headline headline-3 card-title">
          <Link href={`/news/${news.slug}`} className="link hover-2">
            {news.title}
          </Link>
        </h3>

        <p className="card-text">{news.excerpt}</p>

        <div className="card-wrapper">
          <div className="card-tag">
            {news.tags.map((tag) => (
              <span key={tag} className="span hover-2">
                {tag}
              </span>
            ))}
          </div>
          <div className="wrapper">
            <span className="span">{news.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
