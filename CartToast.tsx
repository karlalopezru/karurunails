import React from 'react';

interface CartToastProps {
  isVisible: boolean;
  itemName: string;
  itemPrice: number;
  onClose: () => void;
  onUndo: () => void;
  onViewCart: () => void;
}

export const CartToast: React.FC<CartToastProps> = ({
  isVisible,
  itemName,
  itemPrice,
  onClose,
  onUndo,
  onViewCart
}) => {
  if (!isVisible) return null;

  return (
    <aside
      className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] sm:w-96 rounded-2xl bg-white/92 backdrop-blur-2xl border border-white/95 shadow-2xl p-4 transition-all duration-300 animate-slideUp"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        {/* Check Icon Badge */}
        <div className="w-10 h-10 rounded-full bg-[#91f8ae] flex items-center justify-center shrink-0">
          <span
            className="material-symbols-outlined text-[#007e42] text-[20px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>

        {/* Text Container */}
        <div className="flex-1 min-w-0">
          <span className="text-[11px] font-bold text-[#ab0045] uppercase tracking-wider block">
            ¡Agregado a tu carrito!
          </span>
          <p className="text-[13px] text-[#281622] truncate font-semibold">
            {itemName} (${itemPrice})
          </p>
        </div>

        {/* Close Toast Action */}
        <button
          onClick={onClose}
          className="p-1 rounded-full text-[#5b3f44] hover:text-[#281622] hover:bg-[#ffe0f0] transition-colors cursor-pointer"
          title="Cerrar notificación"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>

      {/* Actions Row */}
      <div className="mt-3 pt-2.5 flex items-center justify-between border-t border-[#ffe8f3]">
        <button
          onClick={onUndo}
          className="text-[12px] font-semibold text-[#5b3f44] hover:text-[#ab0045] transition-colors underline decoration-dotted cursor-pointer"
          type="button"
        >
          Deshacer
        </button>
        <button
          onClick={onViewCart}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#d6105a] text-white text-[12px] font-semibold px-4 py-1.5 hover:bg-[#ab0045] shadow-xs transition-colors cursor-pointer"
          type="button"
        >
          <span>Ver carrito</span>
          <span className="material-symbols-outlined text-[14px]">shopping_bag</span>
        </button>
      </div>
    </aside>
  );
};
