export interface OpeningHour {
  day: string;
  hours: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface SiteConfig {
  companyName: string;
  logo: string;
  description: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  openingHours: OpeningHour[];
  socialLinks: SocialLink[];
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
  stats?: HeroStat[];
  backgroundImage?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface AboutConfig {
  title: string;
  description: string;
  image?: string;
  highlights: string[];
  stats?: HeroStat[];
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  formEndpoint?: string;
}

export interface CTAConfig {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  description: string;
  copyright: string;
  navLinks: NavLink[];
}

export interface TemplateConfig {
  site: SiteConfig;
  theme: ThemeConfig;
  hero: HeroConfig;
  about: AboutConfig;
  services: Service[];
  features: Feature[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  faq: FAQ[];
  contact: ContactConfig;
  cta: CTAConfig;
  footer: FooterConfig;
}
