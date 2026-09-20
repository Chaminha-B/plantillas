import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ctaConfig } from '@/config/cta';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-24">
      {/* Decoraciones */}
      <div className="absolute inset-0 dot-pattern opacity-[0.05]" />
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          ¿Listo para empezar?
        </div>

        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {ctaConfig.title}
        </h2>
        <p className="mb-10 text-lg text-gray-400">{ctaConfig.subtitle}</p>

        <Button
          href={ctaConfig.ctaLink}
          size="lg"
          variant="gradient"
          className="animate-pulse-glow"
        >
          {ctaConfig.ctaText}
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
