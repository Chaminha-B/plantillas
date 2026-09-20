import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.companyName,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
  keywords: [
    'dentista',
    'clínica dental',
    'implantes dentales',
    'ortodoncia',
    'blanqueamiento dental',
    'Madrid',
  ],
  authors: [{ name: siteConfig.companyName }],
  creator: siteConfig.companyName,
  metadataBase: new URL('https://dentalpremium.es'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://dentalpremium.es',
    siteName: siteConfig.companyName,
    title: siteConfig.companyName,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.companyName,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
