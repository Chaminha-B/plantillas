import type { AboutConfig } from '@/lib/types';

export const aboutConfig: AboutConfig = {
  title: 'Sobre Nosotros',
  description:
    'Somos un equipo de profesionales apasionados por la tecnología y el diseño. Con más de 10 años de experiencia, hemos ayudado a cientos de empresas a transformar su presencia digital y alcanzar sus objetivos de negocio.',
  image: '/images/about.jpg',
  highlights: [
    'Más de 10 años de experiencia comprobada',
    'Equipo multidisciplinario de expertos',
    'Satisfacción 100% garantizada',
    'Soporte técnico continuo y personalizado',
  ],
  stats: [
    { value: '10+', label: 'Años de experiencia' },
    { value: '200+', label: 'Clientes satisfechos' },
    { value: '15+', label: 'Profesionales' },
    { value: '50+', label: 'Proyectos activos' },
  ],
};
