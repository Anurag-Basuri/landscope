/* ─── Core Types ─── */

export interface Landform {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  galleryImages: string[];
  sections: ContentSection[];
  facts: Fact[];
  vegetation: ContentSection;
  agriculture: ContentSection;
  floraIds: string[];
  faunaIds: string[];
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Wildlife {
  slug: string;
  name: string;
  scientificName: string;
  type: "flora" | "fauna";
  category: string;
  imageUrl: string;
  description: string;
  habitat: string;
  conservationStatus?: string;
  landformSlugs: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Comment {
  text: string;
  author: string;
  authorImage: string;
  date: string;
}
