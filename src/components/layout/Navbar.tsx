'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { NAV_ITEMS } from '@/lib/constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
              <span className="text-lg font-bold text-white">
                {siteConfig.companyName.charAt(0)}
              </span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              {siteConfig.companyName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Button href="#contact" size="sm">
              Pedir Cita
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="flex items-center justify-center rounded-xl p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-96 border-t border-gray-100 bg-white' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-base font-medium text-gray-600 transition-colors hover:bg-primary/5 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="border-t border-gray-100 pt-3">
            <Button href="#contact" className="w-full" onClick={() => setIsOpen(false)}>
              Pedir Cita
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
