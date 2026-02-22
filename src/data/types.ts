/* ─── Core Types ─── */

export interface Landform {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  heroImageUrl: string;
  galleryImages: string[];
  stats: StatItem[];
  highlights: Highlight[];
  story: ContentSection[];
  ecology: ContentSection;
  agriculture: ContentSection;
  regionGroupId: string;
  signatureSpeciesSlugs: string[];
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

export interface StatItem {
  label: string;
  value: string;
  detail?: string;
}

export interface Highlight {
  title: string;
  description: string;
  accent?: string;
}

export interface RegionSubregion {
  id: string;
  label: string;
  description: string;
  states: string[];
  highlights: string[];
  color: string;
  keyPlaces: string[];
  climateBands: string[];
  elevationRange: string;
  signatureSpeciesSlugs: string[];
}

export interface RegionGroup {
  id: string;
  landformSlug: string;
  label: string;
  color: string;
  bright: string;
  dim: string;
  states: string[];
  subregions: RegionSubregion[];
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
  funFact?: string;
  galleryImages?: string[];
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
