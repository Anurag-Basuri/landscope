export interface Article {
  slug: string;
  title: string;
  tags: string[];
  readTime: string;
  author: string;
  authorImage: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  content: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  badge: string;
  imageUrl: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  date: string;
  content: string;
}

export interface PopularPost {
  slug: string;
  title: string;
  imageUrl: string;
  readTime: string;
  date: string;
}

export interface LibraryCategory {
  slug: string;
  title: string;
  imageUrl: string;
  articleCount: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Comment {
  text: string;
  author: string;
  authorImage: string;
  date: string;
}
