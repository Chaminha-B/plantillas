import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';
import { siteConfig } from '@/config/site';
import { footerConfig } from '@/config/footer';

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decoración */}
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <span className="text-lg font-bold text-white">
                  {siteConfig.companyName.charAt(0)}
                </span>
              </div>
              <span className="text-xl font-bold">{siteConfig.companyName}</span>
            </div>
            <p className="mb-6 max-w-sm text-gray-400 leading-relaxed">
              {footerConfig.description}
            </p>
            <div className="flex gap-3">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-400 transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25"
                  aria-label={link.label}
                >
                  <Icon name={link.platform} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          <div className="lg:col-span-3">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/60">
              Enlaces
            </h4>
            <ul className="space-y-3">
              {footerConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1 text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/60">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-gray-400">{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">{footerConfig.copyright}</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="/privacidad" className="transition-colors hover:text-white">
                Privacidad
              </a>
              <a href="/terminos" className="transition-colors hover:text-white">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
