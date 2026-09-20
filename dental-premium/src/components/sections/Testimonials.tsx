import { Star, Quote } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { testimonialsConfig } from '@/config/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonios"
          title="Lo que dicen nuestros clientes"
          subtitle="La satisfacción de nuestros clientes es nuestra mejor carta de presentación."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsConfig.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-2xl bg-white p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Comilla decorativa */}
              <div className="absolute -top-4 left-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/25">
                  <Quote className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Estrellas */}
              <div className="mb-5 flex gap-1 pt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Contenido */}
              <p className="mb-6 text-gray-600 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                    <span className="text-lg font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
