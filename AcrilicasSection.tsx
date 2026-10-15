import React from 'react';
import { ACRILICAS_IMAGE_URL, NAIL_SERVICES } from '../data/mockData';
import { NailService } from '../types';

interface AcrilicasSectionProps {
  onOpenBookingForService: (serviceId: string) => void;
  onAddToCart: (service: NailService) => void;
}

export const AcrilicasSection: React.FC<AcrilicasSectionProps> = ({
  onOpenBookingForService,
  onAddToCart
}) => {
  const acrylicServices = NAIL_SERVICES.filter((s) => s.category === 'acrilicas');

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full animate-fadeIn">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#91f8ae]/40 text-[#007e42] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">architecture</span>
            <span>Escultura de Alta Precisión · Curvatura C</span>
          </div>
          <h2 className="font-['Bricolage_Grotesque'] text-[36px] sm:text-[46px] font-extrabold text-[#281622] leading-tight">
            Acrílicas Esculpidas: Arte tridimensional y resistencia total.
          </h2>
          <p className="text-[16px] text-[#5b3f44] leading-relaxed">
            Trabajamos exclusivamente con moldes esculturales a la medida de tu dedo (sin tips plásticos genéricos). Diseñamos ápices biomecánicos que equilibran el peso para evitar fracturas o dolor en uñas largas.
          </p>
        </div>

        {/* Feature List Pill Card */}
        <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-md border border-[#ffe0f0] shadow-xs space-y-2 text-xs text-[#5b3f44] shrink-0">
          <div className="flex items-center gap-2 font-bold text-[#281622]">
            <span className="material-symbols-outlined text-[18px] text-[#ab0045]">diamond</span>
            <span>Estándares Karuru Acrílicas</span>
          </div>
          <p>✦ Monómero libre de MMA (100% seguro)</p>
          <p>✦ Pinzado de Curvatura C estilizada</p>
          <p>✦ Encapsulados y relieves 3D de autor</p>
        </div>
      </div>

      {/* Acrylic Sets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {acrylicServices.map((service) => (
          <div
            key={service.id}
            className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#ffe8f3]">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.ac-fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'ac-fallback w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-[#ffe8f3] to-[#eaddff] p-4 text-center text-[#ab0045]';
                      fallback.innerHTML = `<span class="material-symbols-outlined text-4xl mb-1">flare</span><span class="font-bold text-sm">${service.name}</span>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#007e42] shadow-xs">
                  {service.badge}
                </span>
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#281622]/80 backdrop-blur-md text-white text-[11px] font-medium">
                  {service.durationMinutes} min · Escultura
                </span>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-[11px] font-bold text-[#6b49b5] uppercase tracking-wider block">
                  {service.technique}
                </span>
                <h3 className="font-['Bricolage_Grotesque'] text-[22px] font-bold text-[#281622]">
                  {service.name}
                </h3>
                <p className="text-[14px] text-[#5b3f44] leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-[#fff0f6] text-[#5b3f44] border border-[#ffe0f0]"
                    >
                      ✦ {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#ffe8f3] mt-4 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#5b3f44] block">Inversión</span>
                <span className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-[#ab0045]">
                  ${service.price} MXN
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onAddToCart(service)}
                  className="p-2.5 rounded-full bg-white border border-[#ffe0f0] text-[#281622] hover:bg-[#ffe8f3] hover:text-[#ab0045] transition-colors cursor-pointer"
                  title="Guardar en carrito"
                >
                  <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                </button>
                <button
                  onClick={() => onOpenBookingForService(service.id)}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#ab0045] hover:bg-[#8f003a] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                >
                  <span>Agendar escultura</span>
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
