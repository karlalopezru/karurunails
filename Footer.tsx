import React, { useState } from 'react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="w-full bg-[#fff0f6]/85 backdrop-blur-md mt-16 border-t border-[#ffe8f3] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#ffe8f3]">
          {/* Brand & Studio Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-['Bricolage_Grotesque'] text-[22px] font-bold tracking-tight text-[#281622]">
                karuru.nails
              </span>
              <span className="material-symbols-outlined text-[18px] text-[#ab0045] animate-pulse">
                auto_awesome
              </span>
            </div>
            <p className="text-[13px] text-[#5b3f44] leading-relaxed max-w-sm">
              Estudio de uñas de autor y boutique e-commerce. Especialistas en manicure rusa, Soft Gel, Gel-X y nail art editorial de alta precisión.
            </p>
            <div className="space-y-1.5 text-[13px] text-[#5b3f44]">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#ab0045]">
                  location_on
                </span>
                <span>Av. Providencia 1245, Studio 402</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#6b49b5]">
                  schedule
                </span>
                <span>Lun - Sáb: 10:00 - 20:00 hrs</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#007e42]">
                  chat
                </span>
                <span>WhatsApp: +56 9 8765 4321</span>
              </p>
            </div>
          </div>

          {/* Servicios Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Bricolage_Grotesque'] text-[15px] font-bold text-[#281622]">
              Servicios
            </h4>
            <ul className="space-y-2 text-[13px] text-[#5b3f44]">
              <li>
                <button
                  onClick={() => onSelectTab('soft-gel')}
                  className="hover:text-[#ab0045] transition-colors cursor-pointer text-left"
                >
                  Soft Gel Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('gelish')}
                  className="hover:text-[#ab0045] transition-colors cursor-pointer text-left"
                >
                  Esmaltado Gelish
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('acrilicas')}
                  className="hover:text-[#ab0045] transition-colors cursor-pointer text-left"
                >
                  Esculpidas Acrílicas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('accesorios')}
                  className="hover:text-[#ab0045] transition-colors cursor-pointer text-left"
                >
                  Nail Charms & Care
                </button>
              </li>
            </ul>
          </div>

          {/* Ayuda & Guías */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Bricolage_Grotesque'] text-[15px] font-bold text-[#281622]">
              Ayuda & Guías
            </h4>
            <ul className="space-y-2 text-[13px] text-[#5b3f44]">
              <li>
                <button
                  onClick={() => setActiveModal('faq')}
                  className="hover:text-[#ab0045] transition-colors cursor-pointer text-left"
                >
                  Preguntas frecuentes
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('care')}
                  className="hover:text-[#ab0045] transition-colors cursor-pointer text-left"
                >
                  Cuidados de tus uñas
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('shipping')}
                  className="hover:text-[#ab0045] transition-colors cursor-pointer text-left"
                >
                  Envíos y entregas
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-[#ab0045] transition-colors cursor-pointer text-left"
                >
                  Aviso de Privacidad
                </button>
              </li>
            </ul>
          </div>

          {/* Club Karuru VIP Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-['Bricolage_Grotesque'] text-[15px] font-bold text-[#281622]">
              Club Karuru VIP
            </h4>
            <p className="text-[13px] text-[#5b3f44] leading-relaxed">
              Recibe colecciones cápsula, lanzamientos de citas y tips de cuidado profesional en tu bandeja.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-1 bg-white text-[#281622] placeholder:text-[#5b3f44]/60 text-xs rounded-full px-4 py-2.5 border border-[#ffe0f0] focus:outline-none focus:ring-2 focus:ring-[#ab0045]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#d6105a] text-white font-semibold text-xs px-6 py-2.5 hover:bg-[#ab0045] transition-colors shadow-xs cursor-pointer"
              >
                Suscribirme
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-[#007e42] font-semibold animate-fadeIn flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                ¡Bienvenida al Club VIP! Te enviamos un cupón de 10% de regalo.
              </p>
            )}

            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://instagram.com/karuru.nails"
                target="_blank"
                rel="noreferrer"
                className="text-[#5b3f44] hover:text-[#ab0045] transition-colors flex items-center gap-1 text-xs"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                <span>@karuru.nails</span>
              </a>
              <span className="text-[#5b3f44] hover:text-[#ab0045] transition-colors flex items-center gap-1 text-xs cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
                <span>TikTok</span>
              </span>
              <span className="text-[#5b3f44] hover:text-[#ab0045] transition-colors flex items-center gap-1 text-xs cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                <span>Facebook</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5b3f44]">
          <p>© 2025 karuru.nails Studio & Shop. Todos los derechos reservados.</p>
          <p className="text-[11px] font-bold tracking-wider text-[#ab0045] uppercase">
            Hecho con amor y brillo impecable
          </p>
        </div>
      </div>

      {/* Info Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
          />
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl z-10 border border-[#ffe8f3] space-y-4">
            <div className="flex justify-between items-center border-b border-[#ffe8f3] pb-3">
              <h3 className="font-['Bricolage_Grotesque'] text-xl font-bold text-[#281622]">
                {activeModal === 'faq' && 'Preguntas Frecuentes'}
                {activeModal === 'care' && 'Guía de Cuidados de tus Uñas'}
                {activeModal === 'shipping' && 'Envíos y Entregas en Studio'}
                {activeModal === 'privacy' && 'Aviso de Privacidad'}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 text-[#5b3f44] hover:text-[#281622]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="text-xs text-[#5b3f44] space-y-3 leading-relaxed max-h-80 overflow-y-auto">
              {activeModal === 'faq' && (
                <>
                  <p className="font-bold text-[#281622]">¿Cuánto tiempo dura el Soft Gel?</p>
                  <p>Entre 3 a 4 semanas completas sin levantamientos, dependiendo del crecimiento natural de tu uña.</p>
                  <p className="font-bold text-[#281622]">¿Puedo pedir diseño personalizado?</p>
                  <p>¡Claro! Puedes enviarnos tu foto de referencia por WhatsApp o mostrársela a tu artista al llegar.</p>
                  <p className="font-bold text-[#281622]">¿Qué incluye cada cita?</p>
                  <p>Todas las citas incluyen preparación rusa profunda con fresas diamantadas, nivelación y masaje hidratante.</p>
                </>
              )}
              {activeModal === 'care' && (
                <>
                  <p className="font-bold text-[#281622]">✦ Hidratación Diaria:</p>
                  <p>Aplica aceite de cutícula 2 veces al día para mantener el lecho ungueal flexible y saludable.</p>
                  <p className="font-bold text-[#281622]">✦ Protección:</p>
                  <p>Usa guantes al manipular productos de limpieza o cloro para proteger el sellado del brillo.</p>
                  <p className="font-bold text-[#281622]">✦ Nunca arranques tus uñas:</p>
                  <p>Si deseas retirarlas, agenda tu cita de retiro profesional seguro para no dañar las capas de queratina.</p>
                </>
              )}
              {activeModal === 'shipping' && (
                <>
                  <p className="font-bold text-[#281622]">Envíos Locales & Nacionales:</p>
                  <p>Despachamos pedidos en 24 a 48 horas hábiles. Envío gratuito en compras superiores a $500 MXN.</p>
                  <p className="font-bold text-[#281622]">Retiro en Studio:</p>
                  <p>Sin costo adicional. Puedes recoger tus productos de lunes a sábado de 10:00 a 20:00 hrs en Av. Providencia 1245, Studio 402.</p>
                </>
              )}
              {activeModal === 'privacy' && (
                <>
                  <p>En karuru.nails nos comprometemos con la seguridad y confidencialidad de tus datos. Tus datos de contacto se utilizan únicamente para la confirmación de tus citas y envíos de tienda.</p>
                </>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-full bg-[#ab0045] text-white text-xs font-semibold"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
