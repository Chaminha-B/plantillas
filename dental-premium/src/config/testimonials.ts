import type { Testimonial } from '@/lib/types';

export const testimonialsConfig: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'María García',
    role: 'Paciente de implantes',
    content:
      'Después de años con problemas dentales, Dental Premium me devolvió la sonrisa. El equipo es increíblemente profesional y el resultado ha sido espectacular.',
    avatar: '/images/avatar-1.jpg',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Carlos Rodríguez',
    role: 'Paciente de ortodoncia',
    content:
      'Mi hijo lleva brackets y el trato con los niños es excepcional. Ahora quiere ir al dentista sin miedo. ¡Recomendable 100%!',
    avatar: '/images/avatar-2.jpg',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Ana Martínez',
    role: 'Paciente de blanqueamiento',
    content:
      'El blanqueamiento fue rápido y sin dolor. En una sola sesión mi sonrisa quedó perfecta. ¡No puedo dejar de sonreír!',
    avatar: '/images/avatar-3.jpg',
    rating: 5,
  },
];
