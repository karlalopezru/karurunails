import React, { useState } from 'react';
import { GELISH_IMAGE_URL, GELISH_PALETTE, NAIL_SERVICES } from '../data/mockData';
import { NailService } from '../types';

interface GelishSectionProps {
  onOpenBookingForService: (serviceId: string) => void;
  onAddToCart: (service: NailService) => void;
}

export const GelishSection: React.FC<GelishSectionProps> = ({
  onOpenBookingForService,
  onAddToCart
}) => {
  const [selectedShade, setSelectedShade] = useState(GELISH_PALETTE[0]);
  const [selectedFinish, setSelectedFinish] = useState<'glossy' | 'matte' | 'shimmer'>('glossy');

  const gelishServices = NAIL_SERVICES.filter((s) => s.category === 'gelish');

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full animate-fadeIn">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eaddff] text-[#6b49b5] text-xs font-bold uppercase tracking-wider">
          <span className="material-symbols-outlined text-[16px]">palette</span>
          <span>Esmaltado Semipermanente & Nivelación Rusa</span>
        </div>
        <h2 className="font-['Bricolage_Grotesque'] text-[36px] sm:text-[46px] font-extrabold text-[#281622] leading-tight">
          Gelish de alta fidelidad: 21 días de brillo continuo.
        </h2>
        <p className="text-[16px] text-[#5b3f44] leading-relaxed">
          Pigmentos minerales puros curados con luz LED de baja temperatura. Aplicamos técnica de nivelación con base rubber para crear un arco anatómico perfecto que no se descarapela.
        </p>
      </div>

      {/* Interactive Color Selector Studio */}
      <div className="rounded-3xl p-6 sm:p-8 bg-white/80 backdrop-blur-xl border border-white/90 shadow-xl mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Swatches Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#ab0045] uppercase tracking-wider block">
                  Catálogo de Tonos 2025
                </span>
                <h3 className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-[#281622]">
                  Selecciona tu tono preferido
                </h3>
              </div>
              <span className="text-xs text-[#5b3f44] bg-[#ffe8f3] px-3 py-1 rounded-full font-semibold">
                Tono: {selectedShade.name}
              </span>
            </div>

            {/* Swatch bubbles */}
            <div className="grid grid-cols-5 gap-3">
              {GELISH_PALETTE.map((shade) => {
                const isSelected = selectedShade.name === shade.name;
                return (
                  <button
                    key={shade.name}
                    onClick={() => setSelectedShade(shade)}
                    className={`group flex flex-col items-center gap-1.5 p-2 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#ab0045] bg-[#ffe8f3]/80 ring-2 ring-[#ab0045]/30 scale-105'
                        : 'border-[#ffe0f0] bg-white hover:border-[#ab0045]/40'
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-full shadow-inner border border-white/80 transition-transform group-hover:scale-110 relative"
                      style={{ backgroundColor: shade.hex }}
                    >
                      {isSelected && (
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xs drop-shadow-md">
                          ✓
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-[#281622] truncate w-full text-center">
                      {shade.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Finish Selector */}
            <div className="pt-2">
              <span className="text-xs font-bold text-[#281622] uppercase tracking-wider block mb-2">
                Acabado final deseado:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSelectedFinish('glossy')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    selectedFinish === 'glossy'
                      ? 'border-[#ab0045] bg-[#ffe8f3] text-[#ab0045]'
                      : 'border-[#ffe0f0] bg-white text-[#5b3f44]'
                  }`}
                >
                  ✨ Glossy Espejo
                </button>
                <button
                  onClick={() => setSelectedFinish('matte')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    selectedFinish === 'matte'
                      ? 'border-[#ab0045] bg-[#ffe8f3] text-[#ab0045]'
                      : 'border-[#ffe0f0] bg-white text-[#5b3f44]'
                  }`}
                >
                  🌫 Velvet Matte
                </button>
                <button
                  onClick={() => setSelectedFinish('shimmer')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    selectedFinish === 'shimmer'
                      ? 'border-[#ab0045] bg-[#ffe8f3] text-[#ab0045]'
                      : 'border-[#ffe0f0] bg-white text-[#5b3f44]'
                  }`}
                >
                  🪐 Shimmer Galáctico
                </button>
              </div>
            </div>
          </div>

          {/* Right Live Simulation Card */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-[#ffe8f3] via-white to-[#fff0f6] rounded-3xl p-6 border border-white shadow-md flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative w-40 h-48 rounded-full flex items-center justify-center shadow-lg transition-colors duration-500 overflow-hidden border-4 border-white"
              style={{ backgroundColor: selectedShade.hex }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/40 pointer-events-none" />
              <div className="relative z-10 text-white font-bold text-xs uppercase tracking-widest drop-shadow-md px-3 text-center">
                {selectedShade.name}
                <span className="block text-[10px] opacity-90 capitalize font-normal mt-1">
                  Acabado {selectedFinish}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#ab0045] uppercase tracking-wider">
                Simulación en tiempo real
              </span>
              <h4 className="font-['Bricolage_Grotesque'] text-lg font-bold text-[#281622]">
                Esmaltado Gelish Personalizado
              </h4>
              <p className="text-xs text-[#5b3f44] max-w-xs">
                {selectedShade.desc} · Incluye manicure combinada con torno y aceite orgánico.
              </p>
            </div>

            <div className="w-full flex gap-2 pt-2">
              <button
                onClick={() => onOpenBookingForService('gelish-cherry-gloss')}
                className="flex-1 py-3 rounded-full bg-[#ab0045] hover:bg-[#8f003a] text-white text-xs font-semibold shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Agendar con este tono</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gelish Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {gelishServices.map((service) => (
          <div
            key={service.id}
            className="rounded-3xl p-6 bg-white/80 backdrop-blur-xl border border-white/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center"
          >
            <img
              src={service.imageUrl}
              alt={service.name}
              className="w-full sm:w-44 aspect-square rounded-2xl object-cover bg-[#ffe8f3] shrink-0 border border-[#ffe0f0]"
            />
            <div className="flex-1 space-y-2">
              <span className="text-[10px] font-bold text-[#6b49b5] uppercase tracking-wider">
                {service.technique}
              </span>
              <h3 className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-[#281622]">
                {service.name}
              </h3>
              <p className="text-[13px] text-[#5b3f44] leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#5b3f44] block">Inversión</span>
                  <span className="font-['Bricolage_Grotesque'] text-lg font-bold text-[#ab0045]">
                    ${service.price} MXN
                  </span>
                </div>
                <button
                  onClick={() => onOpenBookingForService(service.id)}
                  className="px-5 py-2.5 rounded-full bg-[#ab0045] hover:bg-[#8f003a] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  Agendar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
