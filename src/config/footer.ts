import type { FooterConfig } from '@/lib/types';
import { siteConfig } from './site';

export const footerConfig: FooterConfig = {
  description: siteConfig.description,
  copyright: `© ${new Date().getFullYear()} ${siteConfig.companyName}. Todos los derechos reservados.`,
  navLinks: [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Contacto', href: '#contact' },
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos' },
  ],
};
