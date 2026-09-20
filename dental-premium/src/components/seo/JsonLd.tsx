import { siteConfig } from '@/config/site';

interface JsonLdProps {
  type?: 'LocalBusiness' | 'Organization' | 'WebSite';
}

export function JsonLd({ type = 'LocalBusiness' }: JsonLdProps) {
  const baseData = {
    '@context': 'https://schema.org',
    name: siteConfig.companyName,
    description: siteConfig.description,
    url: 'https://callaicos.com',
    logo: siteConfig.logo,
  };

  const schemas = {
    LocalBusiness: {
      ...baseData,
      '@type': 'LocalBusiness',
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address,
      },
      openingHoursSpecification: siteConfig.openingHours.map((item) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: item.day.split(' - ')[0],
        opens: item.hours.split(' - ')[0],
        closes: item.hours.split(' - ')[1],
      })),
      sameAs: siteConfig.socialLinks.map((link) => link.url),
    },
    Organization: {
      ...baseData,
      '@type': 'Organization',
      sameAs: siteConfig.socialLinks.map((link) => link.url),
    },
    WebSite: {
      ...baseData,
      '@type': 'WebSite',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://callaicos.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas[type]),
      }}
    />
  );
}
