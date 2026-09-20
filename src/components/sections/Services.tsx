import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { servicesConfig } from '@/config/services';

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Servicios"
          title="Nuestros Servicios"
          subtitle="Ofrecemos soluciones completas para impulsar tu negocio al siguiente nivel."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesConfig.map((service, index) => (
            <Card key={service.id} variant="bordered" className="group">
              <div
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-300 group-hover:from-primary group-hover:to-primary/80 group-hover:shadow-lg group-hover:shadow-primary/25"
              >
                <Icon
                  name={service.icon}
                  className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-5 text-gray-500 leading-relaxed">{service.description}</p>
              {service.features && (
                <ul className="space-y-2.5">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-gray-600"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
