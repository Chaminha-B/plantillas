import type { AboutConfig } from '@/lib/types';

export const aboutConfig: AboutConfig = {
  title: 'Sobre Dental Premium',
  description:
    'Somos una clínica dental comprometida con la excelencia. Nuestro equipo de profesionales cuenta con la última tecnología y más de 15 años de experiencia cuidando sonrisas.',
  image: '/images/about.jpg',
  highlights: [
    'Tecnología dental de última generación',
    'Equipo de profesionales altamente cualificados',
    'Tratamientos personalizados y sin dolor',
    'Garantía en todos nuestros tratamientos',
  ],
  stats: [
    { value: '15+', label: 'Años de experiencia' },
    { value: '10K+', label: 'Pacientes atendidos' },
    { value: '8', label: 'Especialistas' },
    { value: '24h', label: 'Urgencias' },
  ],
};
