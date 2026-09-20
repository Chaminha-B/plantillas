import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { heroConfig } from '@/config/hero';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50"
    >
      {/* Decoraciones de fondo */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Contenido izquierdo */}
          <div className="animate-fade-in-up">
            {heroConfig.badge && (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                {heroConfig.badge}
              </div>
            )}

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {heroConfig.title.split(' ').map((word, i) => {
                if (i === 0 || i === 1) {
                  return (
                    <span key={i} className="text-gradient">
                      {word}{' '}
                    </span>
                  );
                }
                return word + ' ';
              })}
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-500 sm:text-xl">
              {heroConfig.subtitle}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href={heroConfig.ctaLink} size="lg" variant="gradient">
                {heroConfig.ctaText}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="#services" variant="ghost" size="lg">
                Ver Servicios
              </Button>
            </div>

            {/* Stats */}
            {heroConfig.stats && heroConfig.stats.length > 0 && (
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
                {heroConfig.stats.map((stat, i) => (
                  <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contenido derecho - Visual */}
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 p-8 shadow-2xl">
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Resultado Garantizado</h3>
                    <p className="text-sm text-gray-500">Satisfacción 100%</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {['Profesionalidad', 'Calidad superior', 'Soporte continuo'].map(
                    (item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
