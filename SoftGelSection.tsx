import React, { useState } from 'react';
import { NAIL_SERVICES, SOFT_GEL_IMAGE_URL, HERO_IMAGE_URL } from '../data/mockData';
import { NailService } from '../types';

interface SoftGelSectionProps {
  onOpenBookingForService: (serviceId: string) => void;
  onAddToCart: (service: NailService) => void;
}

export const SoftGelSection: React.FC<SoftGelSectionProps> = ({
  onOpenBookingForService,
  onAddToCart
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'chrome' | 'natural' | 'editorial'>('all');

  const softGelServices = NAIL_SERVICES.filter((s) => s.category === 'soft-gel');

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full animate-fadeIn">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffe8f3] text-[#ab0045] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">stars</span>
            <span>Sistema Gel-X & Soft Gel de Autor</span>
          </div>
          <h2 className="font-['Bricolage_Grotesque'] text-[36px] sm:text-[46px] font-extrabold text-[#281622] leading-tight">
            Soft Gel: Ligereza absoluta y brillo espejo.
          </h2>
          <p className="text-[16px] text-[#5b3f44] leading-relaxed">
            Tips formulados 100% en gel puro que se adhieren con base rubber curada en lámpara LED. Sin polvo, sin olores agresivos y con un cuidado total de tu lámina ungueal.
          </p>
        </div>

        {/* Guarantee Badge */}
        <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[#ffe0f0] shadow-xs flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-[#ffd9de] flex items-center justify-center text-[#ab0045]">
            <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
          </div>
          <div className="text-xs">
            <span className="font-bold text-[#281622] block">Retención de 4 semanas</span>
            <span className="text-[#5b3f44]">Garantía Karuru 7 días de ajuste</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
            selectedFilter === 'all'
              ? 'bg-[#ab0045] text-white shadow-xs'
              : 'bg-white text-[#5b3f44] border border-[#ffe0f0] hover:bg-[#fff0f6]'
          }`}
        >
          Todos los diseños ({softGelServices.length})
        </button>
        <button
          onClick={() => setSelectedFilter('chrome')}
          className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
            selectedFilter === 'chrome'
              ? 'bg-[#ab0045] text-white shadow-xs'
              : 'bg-white text-[#5b3f44] border border-[#ffe0f0] hover:bg-[#fff0f6]'
          }`}
        >
          Efectos Chrome & Metálicos
        </button>
        <button
          onClick={() => setSelectedFilter('natural')}
          className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
            selectedFilter === 'natural'
              ? 'bg-[#ab0045] text-white shadow-xs'
              : 'bg-white text-[#5b3f44] border border-[#ffe0f0] hover:bg-[#fff0f6]'
          }`}
        >
          Nude & Ombré Ethereal
        </button>
        <button
          onClick={() => setSelectedFilter('editorial')}
          className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
            selectedFilter === 'editorial'
              ? 'bg-[#ab0045] text-white shadow-xs'
              : 'bg-white text-[#5b3f44] border border-[#ffe0f0] hover:bg-[#fff0f6]'
          }`}
        >
          Aura & Relieves 3D
        </button>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {softGelServices.map((service) => (
          <div
            key={service.id}
            className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Media Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#ffe8f3]">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.sg-fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'sg-fallback w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-[#ffe8f3] to-[#eaddff] p-4 text-center text-[#ab0045]';
                      fallback.innerHTML = `<span class="material-symbols-outlined text-4xl mb-1">auto_awesome</span><span class="font-bold text-sm">${service.name}</span>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
                {service.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#ab0045] shadow-xs">
                    {service.badge}
                  </span>
                )}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#281622]/80 backdrop-blur-md text-white text-[11px] font-medium">
                  {service.durationMinutes} min · Manicure Rusa
                </div>
              </div>

              {/* Information */}
              <div className="p-6 space-y-3">
                <span className="text-[11px] font-bold text-[#6b49b5] uppercase tracking-wider block">
                  {service.tagline}
                </span>
                <h3 className="font-['Bricolage_Grotesque'] text-[22px] font-bold text-[#281622]">
                  {service.name}
                </h3>
                <p className="text-[14px] text-[#5b3f44] leading-relaxed">
                  {service.description}
                </p>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-[#fff0f6] text-[#5b3f44] border border-[#ffe0f0]"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 border-t border-[#ffe8f3] mt-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#5b3f44] block">Inversión completa</span>
                <span className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-[#ab0045]">
                  ${service.price} MXN
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onAddToCart(service)}
                  className="p-2.5 rounded-full bg-white border border-[#ffe0f0] text-[#281622] hover:bg-[#ffe8f3] hover:text-[#ab0045] transition-colors cursor-pointer"
                  title="Guardar en carrito para después"
                >
                  <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                </button>
                <button
                  onClick={() => onOpenBookingForService(service.id)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#d6105a] hover:bg-[#ab0045] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                >
                  <span>Agendar cita</span>
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
