import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'shipping' | 'pickup'>('pickup');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const shippingCost = deliveryMethod === 'shipping' ? (subtotal >= 500 ? 0 : 90) : 0;
  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    if (promoCode.trim().toUpperCase() === 'KARURU10') {
      setDiscountPercent(10);
      setPromoSuccess('¡Cupón del 10% de descuento aplicado!');
    } else if (promoCode.trim().toUpperCase() === 'VIPNAILS') {
      setDiscountPercent(15);
      setPromoSuccess('¡Cupón VIP del 15% de descuento aplicado!');
    } else {
      setPromoError('Cupón inválido. Prueba con KARURU10');
    }
  };

  const handleCompletePurchase = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      const orderNum = `KR-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderConfirmed(orderNum);
      setIsCheckingOut(false);
      onClearCart();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-2xl h-full shadow-2xl flex flex-col z-10 border-l border-[#ffe8f3]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#ffe8f3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#ab0045]">
              shopping_bag
            </span>
            <h2 className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-[#281622]">
              Tu Carrito ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#5b3f44] hover:text-[#281622] hover:bg-[#ffe0f0] transition-colors cursor-pointer"
            aria-label="Cerrar carrito"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {orderConfirmed ? (
          /* Order Confirmation Screen */
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#91f8ae] flex items-center justify-center text-[#007e42] shadow-sm animate-bounce">
              <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
            <span className="text-[11px] font-bold text-[#ab0045] uppercase tracking-wider">
              ¡Pedido confirmado con éxito!
            </span>
            <h3 className="font-['Bricolage_Grotesque'] text-[24px] font-bold text-[#281622]">
              Orden #{orderConfirmed}
            </h3>
            <p className="text-[14px] text-[#5b3f44] leading-relaxed max-w-xs">
              Hemos recibido tu orden. Te enviamos la confirmación por WhatsApp y correo electrónico con el número de seguimiento.
            </p>
            <div className="p-4 rounded-2xl bg-[#fff0f6] border border-[#ffe0f0] w-full text-left space-y-1 text-xs text-[#5b3f44]">
              <div className="flex justify-between font-bold text-[#281622]">
                <span>Método de entrega:</span>
                <span>{deliveryMethod === 'pickup' ? 'Retiro en Studio 402' : 'Envío Exprés'}</span>
              </div>
              <p>Horario de entrega: Lun - Sáb 10:00 - 20:00 hrs</p>
            </div>
            <button
              onClick={() => {
                setOrderConfirmed(null);
                onClose();
              }}
              className="w-full py-3 rounded-full bg-[#ab0045] text-white font-semibold text-sm shadow-md hover:bg-[#8f003a] transition-all cursor-pointer"
            >
              Seguir explorando
            </button>
          </div>
        ) : (
          <>
            {/* Scrollable Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-[#ffe8f3]">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
                  <div className="w-16 h-16 rounded-full bg-[#ffe8f3] flex items-center justify-center text-[#ab0045]">
                    <span className="material-symbols-outlined text-[32px]">production_quantity_limits</span>
                  </div>
                  <h3 className="font-['Bricolage_Grotesque'] text-lg font-bold text-[#281622]">
                    Tu carrito está vacío
                  </h3>
                  <p className="text-sm text-[#5b3f44] max-w-xs">
                    Explora nuestros aceites de autor, limas de cristal y kits profesionales para tus uñas.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5 items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover bg-[#ffe8f3] shrink-0 border border-[#ffe0f0]"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[14px] font-bold text-[#281622] truncate">
                        {item.title}
                      </h4>
                      {item.subtitle && (
                        <p className="text-[12px] text-[#5b3f44] truncate">{item.subtitle}</p>
                      )}
                      <span className="font-['Bricolage_Grotesque'] text-[15px] font-bold text-[#ab0045]">
                        ${item.price} MXN
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 bg-[#fff0f6] px-2 py-1 rounded-full border border-[#ffe0f0]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[#5b3f44] hover:text-[#ab0045] font-bold text-xs"
                        aria-label="Restar uno"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-[#281622] w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[#5b3f44] hover:text-[#ab0045] font-bold text-xs"
                        aria-label="Sumar uno"
                      >
                        +
                      </button>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1 text-[#5b3f44]/60 hover:text-[#ba1a1a] transition-colors"
                      title="Eliminar producto"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Bottom summary and checkout area */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#ffe8f3] bg-[#fff8f9] space-y-4">
                {/* Free shipping banner */}
                <div className="px-3.5 py-2 rounded-xl bg-white border border-[#ffe0f0] text-xs text-[#5b3f44] flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#007e42]">local_shipping</span>
                    {subtotal >= 500
                      ? '¡Felicidades! Tienes envío gratis'
                      : `Faltan $${500 - subtotal} para envío gratis`}
                  </span>
                  <span className="font-bold text-[#ab0045] text-[11px]">$500 MXN</span>
                </div>

                {/* Delivery selector */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      deliveryMethod === 'pickup'
                        ? 'border-[#ab0045] bg-[#ffe8f3] text-[#ab0045] font-bold'
                        : 'border-[#ffe0f0] bg-white text-[#5b3f44]'
                    }`}
                  >
                    🏪 Retiro en Studio (Gratis)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('shipping')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      deliveryMethod === 'shipping'
                        ? 'border-[#ab0045] bg-[#ffe8f3] text-[#ab0045] font-bold'
                        : 'border-[#ffe0f0] bg-white text-[#5b3f44]'
                    }`}
                  >
                    🚚 Envío Exprés ($90)
                  </button>
                </div>

                {/* Promo code form */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Cupón (ej: KARURU10)"
                    className="flex-1 bg-white text-[#281622] text-xs px-3.5 py-2 rounded-full border border-[#ffe0f0] uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-[#ab0045]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-full bg-[#281622] text-white text-xs font-semibold hover:bg-black transition-colors"
                  >
                    Aplicar
                  </button>
                </form>
                {promoSuccess && <p className="text-[11px] text-[#007e42] font-semibold">{promoSuccess}</p>}
                {promoError && <p className="text-[11px] text-[#ba1a1a] font-semibold">{promoError}</p>}

                {/* Pricing totals */}
                <div className="space-y-1.5 text-xs text-[#5b3f44]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#281622]">${subtotal} MXN</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#007e42]">
                      <span>Descuento aplicado ({discountPercent}%)</span>
                      <span className="font-semibold">-${discountAmount} MXN</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Entrega</span>
                    <span className="font-semibold text-[#281622]">
                      {shippingCost === 0 ? 'Gratis' : `$${shippingCost} MXN`}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#ffe8f3] flex justify-between text-sm font-bold text-[#281622]">
                    <span>Total a pagar</span>
                    <span className="font-['Bricolage_Grotesque'] text-lg text-[#ab0045]">
                      ${total} MXN
                    </span>
                  </div>
                </div>

                {/* Checkout button */}
                <button
                  onClick={handleCompletePurchase}
                  disabled={isCheckingOut}
                  className="w-full py-3.5 rounded-full bg-[#d6105a] hover:bg-[#ab0045] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isCheckingOut ? (
                    <span>Procesando pago seguro...</span>
                  ) : (
                    <>
                      <span>Proceder al Pago Seguro</span>
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
