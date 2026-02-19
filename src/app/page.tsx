import Image from "next/image";
import Link from "next/link";
import LibrarySlider from "@/components/LibrarySlider";
import ArticleCard from "@/components/ArticleCard";
import NewsCard from "@/components/NewsCard";
import { libraryCategories } from "@/data/library";
import { articles } from "@/data/articles";
import { recentNews, popularPosts } from "@/data/news";
import { latestComments } from "@/data/faq";

export default function HomePage() {
  return (
    <article>
      {/* ===== HERO ===== */}
      <section className="hero" id="home" aria-label="home">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Landscope Initiative</p>

            <h1 className="headline headline-1 section-title">
              Welcome to <span className="span">Landscope</span>
            </h1>

            <p className="hero-text">
              A comprehensive knowledge hub for land resource management in
              India. Explore our curated library of articles covering land
              classification, agricultural techniques, soil health, and
              sustainable practices.
            </p>

            <div className="input-wrapper">
              <input
                type="email"
                name="email_address"
                placeholder="Your email address"
                required
                className="input-field"
                autoComplete="off"
              />
              <button className="btn btn-primary">
                <span className="span">Get Started</span>
              </button>
            </div>
          </div>

          <div className="hero-banner">
            <Image
              src="/images/pattern.svg"
              width={531}
              height={540}
              alt="Map of India"
              className="w-100"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== LIBRARY / TOPICS ===== */}
      <LibrarySlider categories={libraryCategories} />

      {/* ===== POLICIES / FEATURED ===== */}
      <section className="section feature" id="featured" aria-label="feature">
        <div className="container">
          <h2 className="headline headline-2 section-title">
            <span className="span">Land Policy Overview</span>
          </h2>

          <p className="section-text">
            Explore featured articles on various land policies and regulations
            that shape India&apos;s land management landscape.
          </p>

          <ul className="feature-list">
            {articles.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== RECENT NEWS ===== */}
      <section
        className="section recent-post"
        id="recent"
        aria-label="recent post"
      >
        <div className="container">
          <div className="post-main">
            <h2 className="headline headline-2 section-title">
              <span className="span">Recent News</span>
            </h2>

            <p className="section-text">
              Stay up to date with the latest news and developments in land
              resource management across India.
            </p>

            <ul className="grid-list">
              {recentNews.map((news) => (
                <li key={news.slug}>
                  <NewsCard news={news} />
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="post-aside grid-list">
            {/* Popular Posts */}
            <div className="card aside-card">
              <h3 className="headline headline-2 aside-title">
                <span className="span">Popular Posts</span>
              </h3>

              <ul className="popular-list">
                {popularPosts.map((post) => (
                  <li key={post.slug}>
                    <div className="popular-card">
                      <figure
                        className="card-banner img-holder"
                        style={
                          {
                            "--width": 64,
                            "--height": 64,
                          } as React.CSSProperties
                        }
                      >
                        <Image
                          src={post.imageUrl}
                          width={64}
                          height={64}
                          alt={post.title}
                          className="img-cover"
                          loading="lazy"
                        />
                      </figure>

                      <div className="card-content">
                        <h4 className="headline headline-4">
                          <Link
                            href={`/news/${post.slug}`}
                            className="card-title hover-2"
                          >
                            {post.title}
                          </Link>
                        </h4>

                        <div className="warpper">
                          <span className="card-date">{post.date}</span>
                          <span className="card-time">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Comments */}
            <div className="card aside-card">
              <h3 className="headline headline-2 aside-title">
                <span className="span">Latest Comments</span>
              </h3>

              <ul className="comment-list">
                {latestComments.map((comment, i) => (
                  <li key={i}>
                    <div className="comment-card">
                      <blockquote className="card-text">
                        &ldquo;{comment.text}&rdquo;
                      </blockquote>

                      <div className="profile-card">
                        <Image
                          src={comment.authorImage}
                          width={32}
                          height={32}
                          alt={comment.author}
                          className="profile-banner"
                          loading="lazy"
                        />
                        <div>
                          <p className="card-title">{comment.author}</p>
                          <p className="card-date">{comment.date}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
