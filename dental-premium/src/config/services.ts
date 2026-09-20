import type { Service } from '@/lib/types';

export const servicesConfig: Service[] = [
  {
    id: 'implants',
    title: 'Implantes Dentales',
    description:
      'Recupera tu sonrisa con implantes de titanio de última generación. Resultados naturales y duraderos.',
    icon: 'Zap',
    features: ['Implantes de titanio', 'Coronas personalizadas', 'Garantía de por vida'],
  },
  {
    id: 'orthodontics',
    title: 'Ortodoncia',
    description:
      'Alineadores invisibles y brackets para conseguir la sonrisa perfecta. Tratamientos para todas las edades.',
    icon: 'Smile',
    features: ['Invisalign', 'Brackets cerámicos', 'Ortodoncia lingual'],
  },
  {
    id: 'whitening',
    title: 'Blanqueamiento',
    description:
      'Luce una sonrisa blanca y luminosa con nuestros tratamientos de blanqueamiento profesional.',
    icon: 'Sparkles',
    features: ['Blanqueamiento láser', 'Resultados inmediatos', 'Sin sensibilidad'],
  },
  {
    id: 'cleaning',
    title: 'Limpieza Dental',
    description:
      'Mantén tus encías sanas y tu boca libre de sarro con limpiezas profesionales.',
    icon: 'Shield',
    features: ['Eliminación de sarro', 'Pulido dental', 'Prevención de enfermedades'],
  },
  {
    id: 'endodontics',
    title: 'Endodoncia',
    description:
      'Tratamiento de conductos indoloro para salvar dientes dañados. Técnicas mínimamente invasivas.',
    icon: 'Heart',
    features: ['Tratamiento indoloro', 'Microscopio dental', 'Una sola visita'],
  },
  {
    id: 'pediatric',
    title: 'Odontopediatría',
    description:
      'Cuidado dental para los más pequeños. Hacemos que ir al dentista sea una experiencia divertida.',
    icon: 'Baby',
    features: ['Ambiente infantil', 'Tratamientos preventivos', 'Educación bucal'],
  },
];
