import React, { useState } from 'react';
import { LOGO_URL } from '../data/mockData';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  cartCount,
  onOpenCart,
  onOpenBooking,
  searchQuery,
  onSearchChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'soft-gel', label: 'Soft Gel' },
    { id: 'gelish', label: 'Gelish' },
    { id: 'acrilicas', label: 'Acrílicas' },
    { id: 'accesorios', label: 'Accesorios' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/80 backdrop-blur-md border-b border-[#ffe8f3] shadow-[0_2px_12px_rgba(40,22,34,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Left: Brand Wordmark & Nav */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => {
              onSelectTab('inicio');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 group text-left transition-transform hover:scale-[1.02]"
            aria-label="Karuru Nails Inicio"
          >
            <img
              alt="Karuru Nails Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={LOGO_URL}
              onError={(e) => {
                // Resilient fallback if logo image encounters network hiccups
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex items-center gap-1">
              <span className="font-['Bricolage_Grotesque'] font-bold text-[22px] tracking-tight text-[#281622]">
                karuru.nails
              </span>
              <span className="text-[#ab0045] font-bold text-xs animate-pulse">✦</span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`text-[14px] font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-[#ab0045] font-bold'
                      : 'text-[#5b3f44] hover:text-[#ab0045]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ab0045] rounded-full animate-fadeIn" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: Search, Cart, Appointment CTA, Profile, Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="relative hidden md:flex items-center w-56 lg:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar servicios o tonos..."
              className="w-full bg-[#ffffff]/90 text-[#281622] placeholder:text-[#5b3f44]/60 text-sm rounded-full pl-9 pr-4 py-2 border border-[#ffe0f0] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#ab0045] transition-all"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-[#5b3f44] pointer-events-none">
              search
            </span>
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-2 text-[#5b3f44] hover:text-[#ab0045] text-xs font-bold"
                title="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Reserve CTA */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ab0045] text-white text-xs font-semibold hover:bg-[#8f003a] transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            <span>Citas 2025</span>
          </button>

          {/* Shopping Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-full hover:bg-[#ffe0f0] text-[#281622] transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Ver carrito"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#ab0045] text-white text-[10px] font-bold flex items-center justify-center leading-none shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Badge Button */}
          <button
            onClick={() => onSelectTab('inicio')}
            className="w-8 h-8 rounded-full bg-[#ab0045] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
            title="Mi cuenta"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#281622] hover:text-[#ab0045] rounded-full hover:bg-[#ffe0f0] transition-colors"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#ffe8f3] px-6 py-4 space-y-3">
          <div className="relative mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar diseños o tonos..."
              className="w-full bg-[#fff0f6] text-[#281622] text-sm rounded-full pl-9 pr-4 py-2 border border-[#ffe0f0]"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-[#5b3f44]">
              search
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentTab === item.id
                    ? 'bg-[#ffe8f3] text-[#ab0045] font-bold'
                    : 'text-[#5b3f44] hover:bg-[#fff0f6]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-full bg-[#ab0045] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Agendar Cita en Vivo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
