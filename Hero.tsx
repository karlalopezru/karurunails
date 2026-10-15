import React from 'react';
import { HERO_IMAGE_URL } from '../data/mockData';

interface HeroProps {
  onExploreDesigns: () => void;
  onExploreAccessories: () => void;
  onSelectHeroDesign: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreDesigns,
  onExploreAccessories,
  onSelectHeroDesign
}) => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-14 lg:pt-12 lg:pb-20 w-full overflow-hidden">
      {/* Ambient Gradient Glow Orbs (Contained Layer) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[44rem] h-[28rem] rounded-full bg-[#ffb2be]/35 blur-[120px]" />
        <div className="absolute top-[26rem] -right-20 w-[26rem] h-[26rem] rounded-full bg-[#af8dfe]/25 blur-[110px]" />
        <div className="absolute top-[50rem] -left-16 w-[30rem] h-[30rem] rounded-full bg-[#d6105a]/15 blur-[130px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Micro Badges / Eyebrow */}
          <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#ffe0f0] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#ab0045] animate-ping" />
            <span
              className="material-symbols-outlined text-[16px] text-[#ab0045]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span className="text-[11px] font-bold text-[#ab0045] uppercase tracking-wider">
              Estudio de Autor · Citas Abiertas 2025
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-['Bricolage_Grotesque'] text-[42px] sm:text-[54px] lg:text-[64px] font-extrabold text-[#281622] tracking-tight leading-[1.08]">
            Uñas que <span className="text-[#ab0045] italic">hablan</span> por ti.
          </h1>

          {/* Subtitle */}
          <p className="text-[17px] sm:text-[18px] text-[#5b3f44] max-w-xl leading-relaxed">
            Diseños en Soft Gel, Gelish y Acrílicas creados por artistas de uñas especializadas. Reserva tu cita en segundos o adquiere accesorios profesionales de tendencia.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreDesigns}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6105a] text-white font-semibold text-[14px] px-8 py-3.5 shadow-md hover:bg-[#ab0045] hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <span>Ver diseños</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>

            <button
              onClick={onExploreAccessories}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/85 backdrop-blur-md text-[#281622] font-semibold text-[14px] px-7 py-3.5 border border-[#ffe0f0] shadow-xs hover:bg-white hover:text-[#ab0045] transition-all duration-300 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#ab0045]">
                local_mall
              </span>
              <span>Comprar accesorios</span>
            </button>
          </div>

          {/* Social Proof Metric Microcopy */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <div className="flex -space-x-2">
              <span className="inline-flex w-8 h-8 rounded-full bg-[#ffd9de] items-center justify-center text-[#3f0015] text-[12px] font-bold shadow-xs">
                M
              </span>
              <span className="inline-flex w-8 h-8 rounded-full bg-[#eaddff] items-center justify-center text-[#24005b] text-[12px] font-bold shadow-xs">
                S
              </span>
              <span className="inline-flex w-8 h-8 rounded-full bg-[#fadaeb] items-center justify-center text-[#5b3f44] text-[12px] font-bold shadow-xs">
                V
              </span>
              <span className="inline-flex w-8 h-8 rounded-full bg-[#91f8ae] items-center justify-center text-[#00210d] text-[12px] font-bold shadow-xs">
                ★
              </span>
            </div>
            <div className="text-[13px] text-[#5b3f44]">
              <span className="font-bold text-[#281622]">✦ Más de 1,200 citas</span> atendidas este mes ·{' '}
              <span className="font-bold text-[#ab0045]">4.9/5 ★</span> de satisfacción
            </div>
          </div>
        </div>

        {/* Right Editorial Hero Visual */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          {/* Floating Backdrop Accent Card */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#ffb2be]/40 to-[#eaddff]/50 rounded-3xl blur-2xl -z-10" />
          <div className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl p-3 transition-transform duration-500 hover:scale-[1.01]">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#ffe8f3] group">
              <img
                src={HERO_IMAGE_URL}
                alt="Editorial nail art close up photo with metallic liquid chrome and hot pink French tips"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Elegant styled fallback in case of connection drop
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.img-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'img-fallback w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-[#ffe8f3] to-[#eaddff] p-6 text-center text-[#ab0045]';
                    fallback.innerHTML = `<span class="material-symbols-outlined text-4xl mb-2">auto_awesome</span><span class="font-bold text-lg">Chrome Wave Soft Gel</span><span class="text-xs text-[#5b3f44]">Estudio de Autor</span>`;
                    parent.appendChild(fallback);
                  }
                }}
              />

              {/* Top Floating Feature Chip */}
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-xs flex items-center gap-1.5">
                <span
                  className="material-symbols-outlined text-[16px] text-[#007e42]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span className="text-[12px] text-[#281622] font-semibold">Técnica Rusa Pro</span>
              </div>

              {/* Floating Pill Badge Over Photo (Clickable to inspect / book this exact set) */}
              <button
                onClick={onSelectHeroDesign}
                className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-lg flex items-center justify-between gap-3 text-left hover:bg-white transition-all cursor-pointer group/pill"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#ab0045] uppercase tracking-wider flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-[12px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      arrow_back_ios_new
                    </span>
                    Diseño de la semana
                  </span>
                  <span className="text-[16px] font-bold text-[#281622] group-hover/pill:text-[#ab0045] transition-colors">
                    Chrome Wave Soft Gel
                  </span>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-[#ab0045] leading-tight">
                    $480
                  </span>
                  <span className="text-[11px] text-[#5b3f44] font-medium">MXN · Agendar</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
