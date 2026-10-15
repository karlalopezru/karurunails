import React, { useState } from 'react';
import { ACCESSORY_PRODUCTS } from '../data/mockData';
import { AccessoryProduct } from '../types';

interface AccesoriosSectionProps {
  onAddToCart: (product: AccessoryProduct) => void;
  searchFilter: string;
}

export const AccesoriosSection: React.FC<AccesoriosSectionProps> = ({
  onAddToCart,
  searchFilter
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [quickViewProduct, setQuickViewProduct] = useState<AccessoryProduct | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos los productos' },
    { id: 'aceites', label: 'Aceites & Cuidado' },
    { id: 'limas', label: 'Limas & Herramientas' },
    { id: 'charms', label: 'Nail Charms 3D' },
    { id: 'kits', label: 'Kits de Mantenimiento' }
  ];

  const filteredProducts = ACCESSORY_PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch =
      !searchFilter ||
      product.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      product.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full animate-fadeIn">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffe8f3] text-[#ab0045] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">local_mall</span>
            <span>Boutique de Cuidado & Nail Art Profesional</span>
          </div>
          <h2 className="font-['Bricolage_Grotesque'] text-[36px] sm:text-[46px] font-extrabold text-[#281622] leading-tight">
            Accesorios de salón para consentir tus manos.
          </h2>
          <p className="text-[16px] text-[#5b3f44] leading-relaxed">
            Fórmulas botánicas desarrolladas en nuestro estudio, limas de cristal templado que no astillan y charms cromados en tendencia para lucir uñas perfectas entre citas.
          </p>
        </div>

        {/* Free shipping perk */}
        <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[#ffe0f0] shadow-xs flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-[#91f8ae] flex items-center justify-center text-[#007e42]">
            <span className="material-symbols-outlined text-[20px]">local_shipping</span>
          </div>
          <div className="text-xs">
            <span className="font-bold text-[#281622] block">Envío gratis sobre $500 MXN</span>
            <span className="text-[#5b3f44]">O retira gratis en Studio Providencia</span>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-[#ab0045] text-white shadow-xs'
                : 'bg-white text-[#5b3f44] border border-[#ffe0f0] hover:bg-[#fff0f6]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white/60 rounded-3xl border border-[#ffe0f0]">
          <span className="material-symbols-outlined text-4xl text-[#5b3f44]/60 mb-2">search_off</span>
          <h3 className="font-['Bricolage_Grotesque'] text-lg font-bold text-[#281622]">
            No encontramos productos para "{searchFilter}"
          </h3>
          <p className="text-xs text-[#5b3f44] mt-1">Intenta con otra palabra clave o restablece los filtros.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Media Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#ffe8f3]">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.acc-fallback')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'acc-fallback w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-[#ffe8f3] to-[#eaddff] p-4 text-center text-[#ab0045]';
                        fallback.innerHTML = `<span class="material-symbols-outlined text-4xl mb-1">spa</span><span class="font-bold text-sm">${product.name}</span>`;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#ab0045] shadow-xs">
                      {product.badge}
                    </span>
                  )}
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md text-[#281622] hover:text-[#ab0045] transition-colors shadow-xs"
                    title="Vista rápida"
                  >
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                  </button>
                </div>

                {/* Info Container */}
                <div className="p-6 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#6b49b5] uppercase tracking-wider">
                      {product.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-[#5b3f44] font-semibold">
                      <span className="text-[#ab0045]">★ {product.rating}</span>
                      <span>({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-['Bricolage_Grotesque'] text-[19px] font-bold text-[#281622] group-hover:text-[#ab0045] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-[13px] text-[#5b3f44] leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="text-[11px] text-[#007e42] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007e42]" />
                    <span>{product.stock} unidades disponibles en estudio</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 border-t border-[#ffe8f3] mt-2 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-[#ab0045]">
                      ${product.price} MXN
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#5b3f44]/60 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-[#5b3f44] block">IVA incluido</span>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#d6105a] hover:bg-[#ab0045] text-white text-xs font-semibold shadow-md transition-all cursor-pointer group-hover:scale-102"
                >
                  <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                  <span>Agregar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setQuickViewProduct(null)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
          />
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl z-10 border border-[#ffe8f3] space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-[#ab0045] uppercase tracking-wider">
                {quickViewProduct.categoryLabel}
              </span>
              <button
                onClick={() => setQuickViewProduct(null)}
                className="p-1 text-[#5b3f44] hover:text-[#281622]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <img
              src={quickViewProduct.imageUrl}
              alt={quickViewProduct.name}
              className="w-full h-56 rounded-2xl object-cover bg-[#ffe8f3]"
            />
            <h3 className="font-['Bricolage_Grotesque'] text-2xl font-bold text-[#281622]">
              {quickViewProduct.name}
            </h3>
            <p className="text-sm text-[#5b3f44] leading-relaxed">
              {quickViewProduct.description}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-[#ffe8f3]">
              <div>
                <span className="text-xs text-[#5b3f44] block">Precio especial</span>
                <span className="font-['Bricolage_Grotesque'] text-2xl font-bold text-[#ab0045]">
                  ${quickViewProduct.price} MXN
                </span>
              </div>
              <button
                onClick={() => {
                  onAddToCart(quickViewProduct);
                  setQuickViewProduct(null);
                }}
                className="px-6 py-3 rounded-full bg-[#ab0045] text-white font-semibold text-xs shadow-md hover:bg-[#8f003a] flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span>Agregar al carrito</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
