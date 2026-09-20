'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export function WhatsAppButton() {
  const whatsappUrl = getWhatsAppLink(
    siteConfig.whatsapp,
    `Hola, me gustaría recibir más información sobre sus servicios.`
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110 hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
