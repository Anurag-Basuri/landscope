# Landscope

A comprehensive knowledge hub for land resource management in India, built with [Next.js](https://nextjs.org) 16, React 19, and TypeScript.

## Features

- 📚 **Library** — Curated articles on land classification, agriculture, soil health, and case studies
- 📜 **Policies** — Detailed coverage of India's land policies and legislation
- 📰 **News** — Latest updates on land resource management
- ❓ **FAQ** — Frequently asked questions about land conservation
- 📬 **Contact** — Get in touch form with embedded map

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx            # Home page
│   ├── faq/page.tsx        # FAQ page
│   ├── contact/page.tsx    # Contact page
│   ├── articles/[slug]/    # Dynamic article pages
│   ├── library/[slug]/     # Dynamic library category pages
│   └── news/[slug]/        # Dynamic news pages
├── components/             # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LibrarySlider.tsx
│   ├── ArticleCard.tsx
│   ├── NewsCard.tsx
│   ├── FAQAccordion.tsx
│   └── BackToTop.tsx
└── data/                   # Typed content data
    ├── types.ts
    ├── articles.ts
    ├── news.ts
    ├── library.ts
    └── faq.ts
```

## Adding Content

Add a new article by appending an object to the array in `src/data/articles.ts`:

```typescript
{
  slug: "my-new-article",
  title: "My New Article",
  tags: ["#Land"],
  readTime: "5 mins read",
  // ...
}
```

It's automatically available at `/articles/my-new-article`.

## Tech Stack

- **Next.js 16** with App Router
- **React 19** with TypeScript
- **Vanilla CSS** with CSS custom properties (dark theme)
