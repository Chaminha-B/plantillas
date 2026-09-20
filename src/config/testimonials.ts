import type { Testimonial } from '@/lib/types';

export const testimonialsConfig: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'María García',
    role: 'CEO, TechStart',
    content:
      'CallAIcos transformó completamente nuestra presencia online. El equipo es increíblemente profesional y el resultado superó todas nuestras expectativas.',
    avatar: '/images/avatar-1.jpg',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Carlos Rodríguez',
    role: 'Director, InnovaLab',
    content:
      'La aplicación móvil que desarrollaron para nosotros ha aumentado nuestras ventas un 40%. Su atención al detalle es excepcional.',
    avatar: '/images/avatar-2.jpg',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Ana Martínez',
    role: 'Fundadora, GreenLife',
    content:
      'Desde que trabajamos con CallAIcos, nuestra visibilidad en redes sociales se ha triplicado. Definitivamente recomendamos sus servicios.',
    avatar: '/images/avatar-3.jpg',
    rating: 5,
  },
];
