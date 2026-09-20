import type { SiteConfig } from '@/lib/types';

export const siteConfig: SiteConfig = {
  companyName: 'Dental Premium',
  logo: '/images/logo.svg',
  description:
    'Clínica dental de confianza en Madrid. Tratamientos de calidad con la última tecnología y un equipo de profesionales comprometidos con tu salud bucal.',
  phone: '+34 911 234 567',
  email: 'info@dentalpremium.es',
  whatsapp: '+34 600 123 456',
  address: 'Calle de Serrano 45, 28001 Madrid, España',
  openingHours: [
    { day: 'Lunes - Viernes', hours: '9:00 - 20:00' },
    { day: 'Sábado', hours: '9:00 - 14:00' },
    { day: 'Domingo', hours: 'Cerrado' },
  ],
  socialLinks: [
    { platform: 'Facebook', url: 'https://facebook.com/dentalpremium', label: 'Facebook' },
    { platform: 'Instagram', url: 'https://instagram.com/dentalpremium', label: 'Instagram' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/dentalpremium', label: 'LinkedIn' },
  ],
};
