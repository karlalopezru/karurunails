import React from 'react';
import {
  SOFT_GEL_IMAGE_URL,
  GELISH_IMAGE_URL,
  ACRILICAS_IMAGE_URL,
  ACCESORIOS_IMAGE_URL
} from '../data/mockData';

interface SpecialtiesGridProps {
  onSelectCategory: (category: string) => void;
}

export const SpecialtiesGrid: React.FC<SpecialtiesGridProps> = ({ onSelectCategory }) => {
  const cards = [
    {
      id: 'soft-gel',
      title: 'Soft Gel',
      tagline: 'Ligereza & Duración natural',
      description: 'Estructura flexible de gel que cuida tu uña natural con acabado ultra pulido sin peso.',
      priceLabel: 'Inversión',
      price: 'Desde $420 MXN',
      badge: 'Top Ventas',
      badgeColor: 'text-[#ab0045]',
      imgUrl: SOFT_GEL_IMAGE_URL,
      alt: 'Soft Gel nail technique with pastel lavender fade'
    },
    {
      id: 'gelish',
      title: 'Gelish',
      tagline: 'Color Intenso & Resistencia',
      description: 'Esmaltado en gel curado con lámpara LED, brillo espejo intacto y nivelación perfecta.',
      priceLabel: 'Inversión',
      price: 'Desde $280 MXN',
      badge: '21 Días Brillo',
      badgeColor: 'text-[#6b49b5]',
      imgUrl: GELISH_IMAGE_URL,
      alt: 'Gelish manicure in high gloss cherry burgundy'
    },
    {
      id: 'acrilicas',
      title: 'Acrílicas',
      tagline: 'Esculpidas & Tendencia 3D',
      description: 'Extensiones resistentes con formas Almendra, Coffin o Stiletto y nail art personalizado.',
      priceLabel: 'Inversión',
      price: 'Desde $550 MXN',
      badge: 'Esculpidas 3D',
      badgeColor: 'text-[#007e42]',
      imgUrl: ACRILICAS_IMAGE_URL,
      alt: 'Sculpted acrylic nails with 3D crystal floral art'
    },
    {
      id: 'accesorios',
      title: 'Accesorios',
      tagline: 'Cuidado & Herramientas Pro',
      description: 'Aceites de cutícula, limas de cristal, charms cromados y kits de mantenimiento en casa.',
      priceLabel: 'Precios',
      price: 'Desde $85 MXN',
      badge: 'Shop Online',
      badgeColor: 'text-[#ab0045]',
      imgUrl: ACCESORIOS_IMAGE_URL,
      alt: 'Cuticle oils and glass nail care tools'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffe0f0] text-[#ab0045] text-[11px] font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[14px]">category</span>
            <span>Catálogo Exclusivo</span>
          </div>
          <h2 className="font-['Bricolage_Grotesque'] text-[32px] sm:text-[42px] font-extrabold text-[#281622] tracking-tight">
            Explora por especialidad
          </h2>
          <p className="text-[15px] text-[#5b3f44]">
            Desde técnicas de protección natural hasta extensiones de tendencia editorial.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-[13px] text-[#5b3f44]">
          <span className="material-symbols-outlined text-[18px] text-[#ab0045]">auto_fix_high</span>
          <span>Materiales hipoalergénicos grado premium</span>
        </div>
      </div>

      {/* 4 Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => onSelectCategory(card.id)}
            className="group relative rounded-2xl bg-white/75 backdrop-blur-xl border border-white/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 hover:-translate-y-1.5 cursor-pointer"
          >
            <div className="space-y-4">
              {/* Media Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#ffe8f3]">
                <img
                  src={card.imgUrl}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.card-fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'card-fallback w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-[#ffe8f3] to-[#eaddff] p-4 text-center text-[#ab0045]';
                      fallback.innerHTML = `<span class="material-symbols-outlined text-3xl mb-1">brush</span><span class="font-bold text-sm">${card.title}</span>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider ${card.badgeColor} shadow-xs`}>
                  {card.badge}
                </span>
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#6b49b5] uppercase tracking-wider block">
                  {card.tagline}
                </span>
                <h3 className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-[#281622] group-hover:text-[#ab0045] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[13px] text-[#5b3f44] leading-relaxed line-clamp-3">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-6 mt-4 flex items-center justify-between border-t border-[#ffe8f3]/60">
              <div>
                <span className="text-[11px] text-[#5b3f44] block font-medium">{card.priceLabel}</span>
                <span className="font-['Bricolage_Grotesque'] text-[17px] font-bold text-[#ab0045]">
                  {card.price}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#ffe0f0] text-[#281622] group-hover:bg-[#ab0045] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
