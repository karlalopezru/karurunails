import React from 'react';

interface BookingBannerProps {
  onOpenBooking: () => void;
}

export const BookingBanner: React.FC<BookingBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
      <div className="rounded-3xl p-8 lg:p-12 bg-gradient-to-r from-white/90 via-[#fff0f6]/85 to-[#ffe8f3]/80 backdrop-blur-xl border border-white/90 shadow-lg relative overflow-hidden">
        {/* Decorative background accent circle */}
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#ffd9de]/35 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-bold text-[#ab0045] tracking-wider uppercase">
              Experiencia sin fricción
            </span>
            <h2 className="font-['Bricolage_Grotesque'] text-[32px] sm:text-[42px] font-extrabold text-[#281622] leading-tight">
              Agenda en 3 pasos sencillos
            </h2>
            <p className="text-[15px] text-[#5b3f44] leading-relaxed">
              Sin llamadas molestas ni mensajes perdidos. Elige el estilo de tus sueños y asegura tu horario en minutos.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 rounded-full bg-[#d6105a] text-white font-semibold text-[14px] px-8 py-3.5 shadow-md hover:bg-[#ab0045] transition-all duration-300 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Agendar ahora tu cita</span>
              </button>
            </div>
          </div>

          {/* Right Column 3 Steps */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-xs space-y-2 hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 rounded-full bg-[#ab0045] text-white text-[12px] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-['Bricolage_Grotesque'] text-[16px] font-bold text-[#281622]">
                Elige tu diseño
              </h3>
              <p className="text-[13px] text-[#5b3f44] leading-relaxed">
                Selecciona tu técnica, largo preferido y añade nail art personalizado a tu gusto.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-xs space-y-2 hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 rounded-full bg-[#6b49b5] text-white text-[12px] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-['Bricolage_Grotesque'] text-[16px] font-bold text-[#281622]">
                Selecciona horario
              </h3>
              <p className="text-[13px] text-[#5b3f44] leading-relaxed">
                Calendario interactivo en vivo. Recibe tu pase digital y recordatorios al celular.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-xs space-y-2 hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 rounded-full bg-[#007e42] text-white text-[12px] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-['Bricolage_Grotesque'] text-[16px] font-bold text-[#281622]">
                ¡Luce uñas únicas!
              </h3>
              <p className="text-[13px] text-[#5b3f44] leading-relaxed">
                Llega al estudio, relájate con una bebida de cortesía y disfruta de tu manicure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
