import { Check, Award, Users, Clock, TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { aboutConfig } from '@/config/about';

const statsIcons = [Award, Users, Clock, TrendingUp];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gray-50 py-24">
      {/* Decoración */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Sobre Nosotros"
          title={aboutConfig.title}
          subtitle={aboutConfig.description}
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Imagen */}
          <div className="relative animate-slide-in-left">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 shadow-2xl">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/80 shadow-lg">
                    <svg
                      className="h-10 w-10 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-500">Imagen del equipo</p>
                </div>
              </div>
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-20" />
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-accent/20" />
          </div>

          {/* Contenido */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              ¿Por qué elegirnos?
            </h3>
            <ul className="mb-10 space-y-5">
              {aboutConfig.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-gray-600 leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            {aboutConfig.stats && aboutConfig.stats.length > 0 && (
              <div className="grid grid-cols-2 gap-6">
                {aboutConfig.stats.map((stat, i) => {
                  const Icon = statsIcons[i % statsIcons.length];
                  return (
                    <div
                      key={i}
                      className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100"
                    >
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
