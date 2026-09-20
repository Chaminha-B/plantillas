'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { faqConfig } from '@/config/faq';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="relative py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Preguntas Frecuentes"
          subtitle="Resolvemos tus dudas sobre nuestros servicios."
        />

        <div className="space-y-3">
          {faqConfig.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-primary/20 bg-white shadow-lg shadow-primary/5'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isOpen ? 'bg-primary/10' : 'bg-gray-100'
                    }`}
                  >
                    <HelpCircle
                      className={`h-5 w-5 transition-colors duration-300 ${
                        isOpen ? 'text-primary' : 'text-gray-400'
                      }`}
                    />
                  </div>
                  <span className="flex-1 pr-4 font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-gray-100 px-6 pb-5 pt-4">
                    <p className="ml-14 text-gray-500 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
