import React from 'react';

export const TrustSignals: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Trust Card 1 */}
        <div className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#ffd9de] flex items-center justify-center shrink-0">
            <span
              className="material-symbols-outlined text-[#ab0045] text-[24px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield_with_heart
            </span>
          </div>
          <div className="space-y-1">
            <h2 className="font-['Bricolage_Grotesque'] text-[16px] font-bold text-[#281622]">
              Pago 100% seguro
            </h2>
            <p className="text-[13px] text-[#5b3f44] leading-relaxed">
              Transacciones protegidas con tarjeta, transferencia o directo en estudio sin recargos.
            </p>
          </div>
        </div>

        {/* Trust Card 2 */}
        <div className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#eaddff] flex items-center justify-center shrink-0">
            <span
              className="material-symbols-outlined text-[#6b49b5] text-[24px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              event_available
            </span>
          </div>
          <div className="space-y-1">
            <h2 className="font-['Bricolage_Grotesque'] text-[16px] font-bold text-[#281622]">
              Cita confirmada al instante
            </h2>
            <p className="text-[13px] text-[#5b3f44] leading-relaxed">
              Elige fecha y hora en vivo con recordatorio automatizado por WhatsApp sin esperas.
            </p>
          </div>
        </div>

        {/* Trust Card 3 */}
        <div className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#91f8ae] flex items-center justify-center shrink-0">
            <span
              className="material-symbols-outlined text-[#007e42] text-[24px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              loyalty
            </span>
          </div>
          <div className="space-y-1">
            <h2 className="font-['Bricolage_Grotesque'] text-[16px] font-bold text-[#281622]">
              Precios claros y sin sorpresas
            </h2>
            <p className="text-[13px] text-[#5b3f44] leading-relaxed">
              Todos los precios incluyen limado, preparación rusa y garantía de retención de 7 días.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
