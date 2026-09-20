import type { Service } from '@/lib/types';

export const servicesConfig: Service[] = [
  {
    id: 'web-development',
    title: 'Desarrollo Web',
    description:
      'Creamos sitios web modernos, rápidos y optimizados para conversión. Desde landing pages hasta plataformas completas.',
    icon: 'Globe',
    features: ['Diseño responsive', 'SEO on-page', 'Alto rendimiento'],
  },
  {
    id: 'mobile-apps',
    title: 'Aplicaciones Móviles',
    description:
      'Desarrollamos apps nativas e híbridas para iOS y Android que conectan tu negocio con tus clientes.',
    icon: 'Smartphone',
    features: ['iOS y Android', 'Notificaciones push', 'Offline ready'],
  },
  {
    id: 'digital-marketing',
    title: 'Marketing Digital',
    description:
      'Estrategias de marketing online que aumentan tu visibilidad y generan leads cualificados.',
    icon: 'TrendingUp',
    features: ['SEO & SEM', 'Social Media', 'Email Marketing'],
  },
  {
    id: 'branding',
    title: 'Branding & Diseño',
    description:
      'Identidades visuales memorables que comunican los valores de tu marca y conectan con tu audiencia.',
    icon: 'Palette',
    features: ['Logo & Identidad', 'Diseño UI/UX', 'Manual de marca'],
  },
];
