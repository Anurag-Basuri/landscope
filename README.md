# Landscope

A comprehensive knowledge hub for land resource management in India, built with [Next.js](https://nextjs.org) 16, React 19, and TypeScript.

## Features

- 🗺️ **Interactive Map** — Explore India by region and landform
- 🏔️ **Landforms** — Deep dives into six major physiographic divisions
- 🐾 **Flora & Fauna** — Biodiversity across landform zones
- ❓ **FAQ** — Frequently asked questions about geography and wildlife
- 📬 **Contact** — Get in touch form with embedded map

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env` file with the following:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

## Project Structure

```
src/
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── faq/page.tsx        # FAQ page
│   ├── contact/page.tsx    # Contact page
│   ├── landforms/          # Landforms index + detail pages
│   └── wildlife/           # Wildlife index + detail pages
├── components/             # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── IndiaMap.tsx
│   ├── LandformCard.tsx
│   ├── WildlifeCard.tsx
│   ├── FAQAccordion.tsx
│   └── BackToTop.tsx
└── data/                   # Typed content data
  ├── types.ts
  ├── landforms.ts
  ├── wildlife.ts
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
