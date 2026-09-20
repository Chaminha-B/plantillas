import { SectionHeader } from '@/components/ui/SectionHeader';
import { Icon } from '@/components/ui/Icon';
import { featuresConfig } from '@/config/features';

export function Features() {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Decoraciones */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Ventajas"
          title="¿Por qué somos diferentes?"
          subtitle="Características que nos destacan y nos hacen tu mejor elección."
          className="!text-white [&_span]:!bg-white/10 [&_span]:!text-white [&_p]:!text-gray-400"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresConfig.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                <Icon
                  name={feature.icon}
                  className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
