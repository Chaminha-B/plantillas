'use client';

import { useState, type FormEvent } from 'react';
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { contactConfig } from '@/config/contact';

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: 'Dirección', value: siteConfig.address, href: null },
  { icon: Clock, label: 'Horario', value: siteConfig.openingHours.map(h => `${h.day}: ${h.hours}`).join(' | '), href: null },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Decoración */}
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contacto"
          title={contactConfig.title}
          subtitle={contactConfig.subtitle}
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Info de contacto */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">{item.label}</h4>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-gray-900 transition-colors hover:text-primary">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-gray-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, '').replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-3 rounded-2xl bg-green-500 p-4 text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25"
            >
              <MessageCircle className="h-6 w-6" />
              <div>
                <p className="font-semibold">¿Prefieres WhatsApp?</p>
                <p className="text-sm text-green-100">Respuesta inmediata</p>
              </div>
            </a>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-gray-100 bg-gray-50 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tu teléfono"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
