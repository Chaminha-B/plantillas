import type { SiteConfig } from '@/lib/types';

export const siteConfig: SiteConfig = {
  companyName: 'CallAIcos',
  logo: '/images/logo.svg',
  description:
    'Soluciones digitales profesionales para tu negocio. Creamos presencia online que genera resultados.',
  phone: '+34 600 123 456',
  email: 'info@callaicos.com',
  whatsapp: '+34 600 123 456',
  address: 'Calle Ejemplo 123, 28001 Madrid, España',
  openingHours: [
    { day: 'Lunes - Viernes', hours: '9:00 - 18:00' },
    { day: 'Sábado', hours: '10:00 - 14:00' },
    { day: 'Domingo', hours: 'Cerrado' },
  ],
  socialLinks: [
    { platform: 'Facebook', url: 'https://facebook.com/callaicos', label: 'Facebook' },
    { platform: 'Instagram', url: 'https://instagram.com/callaicos', label: 'Instagram' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/callaicos', label: 'LinkedIn' },
  ],
};
