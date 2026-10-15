/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSignals } from './components/TrustSignals';
import { SpecialtiesGrid } from './components/SpecialtiesGrid';
import { BookingBanner } from './components/BookingBanner';
import { CartToast } from './components/CartToast';
import { CartDrawer } from './components/CartDrawer';
import { BookingModal } from './components/BookingModal';
import { SoftGelSection } from './components/SoftGelSection';
import { GelishSection } from './components/GelishSection';
import { AcrilicasSection } from './components/AcrilicasSection';
import { AccesoriosSection } from './components/AccesoriosSection';
import { Footer } from './components/Footer';
import { INITIAL_CART, NAIL_SERVICES } from './data/mockData';
import { CartItem, AccessoryProduct, NailService } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('inicio');
  const [cart, setCart] = useState<CartItem[]>(INITIAL_CART);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string>('softgel-chrome-wave');
  const [searchQuery, setSearchQuery] = useState('');

  // Toast state (initially visible as seen in prototype screenshot!)
  const [toast, setToast] = useState<{
    isVisible: boolean;
    itemName: string;
    itemPrice: number;
    lastAddedId?: string;
  }>({
    isVisible: true,
    itemName: 'Kit Aceite de Cutícula Rosa & Vainilla',
    itemPrice: 120,
    lastAddedId: 'kit-aceite-cuticula'
  });

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (item: AccessoryProduct | NailService) => {
    const isService = 'durationMinutes' in item;
    const newItemId = item.id;

    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.id === newItemId);
      if (existing) {
        return prevCart.map((ci) =>
          ci.id === newItemId ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prevCart,
        {
          id: newItemId,
          type: isService ? 'service' : 'product',
          title: item.name,
          subtitle: isService
            ? `${(item as NailService).technique} · ${(item as NailService).durationMinutes} min`
            : (item as AccessoryProduct).categoryLabel,
          price: item.price,
          quantity: 1,
          imageUrl: item.imageUrl
        }
      ];
    });

    setToast({
      isVisible: true,
      itemName: item.name,
      itemPrice: item.price,
      lastAddedId: newItemId
    });
  };

  const handleUndoCart = () => {
    if (toast.lastAddedId) {
      setCart((prev) => prev.filter((i) => i.id !== toast.lastAddedId));
    }
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setBookingServiceId(serviceId);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fff8f9] text-[#281622] font-sans antialiased relative selection:bg-[#ab0045] selection:text-white flex flex-col justify-between">
      {/* Fixed Ambient Background Gradient Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#d6105a]/15 blur-[100px]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#af8dfe]/20 blur-[120px]" />
        <div className="absolute -bottom-48 left-1/4 w-[30rem] h-[30rem] rounded-full bg-[#ffb2be]/25 blur-[130px]" />
      </div>

      {/* Header Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim().length > 0 && currentTab === 'inicio') {
            setCurrentTab('accesorios');
          }
        }}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-transparent flex-1">
        {currentTab === 'inicio' && (
          <div className="flex flex-col w-full relative">
            <Hero
              onExploreDesigns={() => {
                setCurrentTab('soft-gel');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreAccessories={() => {
                setCurrentTab('accesorios');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectHeroDesign={() => handleOpenBooking('softgel-chrome-wave')}
            />

            <TrustSignals />

            <SpecialtiesGrid
              onSelectCategory={(catId) => {
                setCurrentTab(catId);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <BookingBanner onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {currentTab === 'soft-gel' && (
          <SoftGelSection
            onOpenBookingForService={(serviceId) => handleOpenBooking(serviceId)}
            onAddToCart={(service) => handleAddToCart(service)}
          />
        )}

        {currentTab === 'gelish' && (
          <GelishSection
            onOpenBookingForService={(serviceId) => handleOpenBooking(serviceId)}
            onAddToCart={(service) => handleAddToCart(service)}
          />
        )}

        {currentTab === 'acrilicas' && (
          <AcrilicasSection
            onOpenBookingForService={(serviceId) => handleOpenBooking(serviceId)}
            onAddToCart={(service) => handleAddToCart(service)}
          />
        )}

        {currentTab === 'accesorios' && (
          <AccesoriosSection
            searchFilter={searchQuery}
            onAddToCart={(product) => handleAddToCart(product)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* System Toast Notification (matching prototype) */}
      <CartToast
        isVisible={toast.isVisible}
        itemName={toast.itemName}
        itemPrice={toast.itemPrice}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
        onUndo={handleUndoCart}
        onViewCart={() => {
          setToast((prev) => ({ ...prev, isVisible: false }));
          setIsCartOpen(true);
        }}
      />

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCart([])}
      />

      {/* Interactive Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={bookingServiceId}
      />
    </div>
  );
}
