'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { galleryConfig } from '@/config/gallery';

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(galleryConfig.map((img) => img.category).filter(Boolean))];

  const filteredImages =
    selectedCategory === 'all'
      ? galleryConfig
      : galleryConfig.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portafolio"
          title="Nuestro Portafolio"
          subtitle="Proyectos que hablan por nosotros."
        />

        {/* Filtros */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as string)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>

        {/* Grid de imágenes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200"
            >
              {/* Placeholder visual */}
              <div className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
                    <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-500">{image.category}</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="w-full p-6">
                  <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="font-semibold text-white">{image.alt}</p>
                    {image.category && (
                      <p className="mt-1 text-sm text-white/70">{image.category}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
