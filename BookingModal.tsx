import React, { useState } from 'react';
import { NailService, NailArtist, BookingAppointment } from '../types';
import { NAIL_SERVICES, NAIL_ARTISTS, TIME_SLOTS, SHAPES, LENGTHS, ADD_ONS } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  onAppointmentBooked?: (appointment: BookingAppointment) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  onAppointmentBooked
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || NAIL_SERVICES[0].id
  );
  const [selectedShape, setSelectedShape] = useState<string>('Almendra');
  const [selectedLength, setSelectedLength] = useState<string>('M');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<NailArtist>(NAIL_ARTISTS[0]);

  // Date selection (defaults to tomorrow)
  const today = new Date();
  const nextDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i + 1);
    return {
      dayName: d.toLocaleDateString('es-ES', { weekday: 'short' }),
      dayNumber: d.getDate(),
      month: d.toLocaleDateString('es-ES', { month: 'short' }),
      isoDate: d.toISOString().split('T')[0]
    };
  });

  const [selectedDate, setSelectedDate] = useState<string>(nextDays[0].isoDate);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(TIME_SLOTS[0]);

  // Contact Info
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingAppointment | null>(null);

  if (!isOpen) return null;

  const currentService =
    NAIL_SERVICES.find((s) => s.id === selectedServiceId) || NAIL_SERVICES[0];

  const lengthExtraPrice =
    selectedLength === 'M' ? 40 : selectedLength === 'L' ? 70 : selectedLength === 'XL' ? 110 : 0;

  const addOnsPrice = selectedAddOns.reduce((sum, addOnId) => {
    const found = ADD_ONS.find((a) => a.id === addOnId);
    return sum + (found ? found.price : 0);
  }, 0);

  const totalPrice = currentService.price + lengthExtraPrice + addOnsPrice;

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    const newAppointment: BookingAppointment = {
      id: `KR-APPT-${Math.floor(1000 + Math.random() * 9000)}`,
      serviceId: currentService.id,
      serviceName: currentService.name,
      technique: currentService.technique,
      shape: selectedShape,
      length: LENGTHS.find((l) => l.id === selectedLength)?.label,
      addOns: selectedAddOns,
      artist: selectedArtist,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      totalPrice,
      customerName,
      customerPhone,
      customerEmail,
      notes,
      status: 'confirmada'
    };

    setConfirmedBooking(newAppointment);
    setStep(4);
    if (onAppointmentBooked) {
      onAppointmentBooked(newAppointment);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/45 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/90 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#ffe8f3] shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#ab0045]">
              calendar_month
            </span>
            <div>
              <h2 className="font-['Bricolage_Grotesque'] text-[20px] font-bold text-[#281622]">
                Reserva de Cita · Karuru Studio
              </h2>
              <span className="text-[12px] text-[#5b3f44]">
                Paso {step} de 3 {step === 4 ? '· ¡Confirmada!' : ''}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#5b3f44] hover:text-[#281622] hover:bg-[#ffe0f0] transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Progress bar */}
        {step < 4 && (
          <div className="grid grid-cols-3 gap-2 py-3 shrink-0">
            <div
              className={`h-1.5 rounded-full transition-all ${
                step >= 1 ? 'bg-[#ab0045]' : 'bg-[#ffe0f0]'
              }`}
            />
            <div
              className={`h-1.5 rounded-full transition-all ${
                step >= 2 ? 'bg-[#ab0045]' : 'bg-[#ffe0f0]'
              }`}
            />
            <div
              className={`h-1.5 rounded-full transition-all ${
                step >= 3 ? 'bg-[#ab0045]' : 'bg-[#ffe0f0]'
              }`}
            />
          </div>
        )}

        {/* Body content */}
        <div className="overflow-y-auto flex-1 pr-1 space-y-6 pt-2">
          {step === 1 && (
            <div className="space-y-6">
              {/* Select Service */}
              <div>
                <label className="block text-xs font-bold text-[#281622] uppercase tracking-wider mb-2">
                  1. Selecciona el servicio base
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {NAIL_SERVICES.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all flex items-start gap-3 ${
                        selectedServiceId === srv.id
                          ? 'border-[#ab0045] bg-[#ffe8f3]/80 shadow-xs ring-2 ring-[#ab0045]/20'
                          : 'border-[#ffe0f0] bg-white hover:border-[#ab0045]/50'
                      }`}
                    >
                      <img
                        src={srv.imageUrl}
                        alt={srv.name}
                        className="w-12 h-12 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-[#6b49b5] uppercase block">
                          {srv.category}
                        </span>
                        <h4 className="text-[13px] font-bold text-[#281622] truncate">
                          {srv.name}
                        </h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-[#5b3f44]">{srv.durationMinutes} min</span>
                          <span className="font-['Bricolage_Grotesque'] text-xs font-bold text-[#ab0045]">
                            ${srv.price} MXN
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Select Shape */}
              <div>
                <label className="block text-xs font-bold text-[#281622] uppercase tracking-wider mb-2">
                  2. Forma de la uña
                </label>
                <div className="flex flex-wrap gap-2">
                  {SHAPES.map((shape) => (
                    <button
                      type="button"
                      key={shape}
                      onClick={() => setSelectedShape(shape)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        selectedShape === shape
                          ? 'bg-[#ab0045] text-white shadow-xs'
                          : 'bg-white text-[#5b3f44] border border-[#ffe0f0] hover:border-[#ab0045]'
                      }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Length */}
              <div>
                <label className="block text-xs font-bold text-[#281622] uppercase tracking-wider mb-2">
                  3. Largo deseado
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {LENGTHS.map((len) => (
                    <button
                      type="button"
                      key={len.id}
                      onClick={() => setSelectedLength(len.id)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        selectedLength === len.id
                          ? 'border-[#ab0045] bg-[#ffe8f3] text-[#ab0045] font-bold ring-2 ring-[#ab0045]/20'
                          : 'border-[#ffe0f0] bg-white text-[#5b3f44] hover:bg-[#fff0f6]'
                      }`}
                    >
                      <span className="block text-xs font-bold">{len.label}</span>
                      <span className="block text-[10px] text-[#5b3f44] mt-0.5">{len.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-xs font-bold text-[#281622] uppercase tracking-wider mb-2">
                  4. Complementos y Nail Art (Opcionales)
                </label>
                <div className="space-y-2">
                  {ADD_ONS.map((addOn) => {
                    const isChecked = selectedAddOns.includes(addOn.id);
                    return (
                      <div
                        key={addOn.id}
                        onClick={() => toggleAddOn(addOn.id)}
                        className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-colors ${
                          isChecked
                            ? 'border-[#ab0045] bg-[#ffe8f3]/60'
                            : 'border-[#ffe0f0] bg-white hover:bg-[#fff0f6]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="rounded text-[#ab0045] focus:ring-[#ab0045]"
                          />
                          <span className="text-xs font-semibold text-[#281622]">
                            {addOn.name}
                          </span>
                        </div>
                        <span className="font-['Bricolage_Grotesque'] text-xs font-bold text-[#ab0045]">
                          + ${addOn.price} MXN
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              {/* Select Artist */}
              <div>
                <label className="block text-xs font-bold text-[#281622] uppercase tracking-wider mb-2">
                  1. Selecciona a tu artista de uñas
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {NAIL_ARTISTS.map((artist) => (
                    <div
                      key={artist.id}
                      onClick={() => setSelectedArtist(artist)}
                      className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                        selectedArtist.id === artist.id
                          ? 'border-[#ab0045] bg-[#ffe8f3] ring-2 ring-[#ab0045]/20 shadow-xs'
                          : 'border-[#ffe0f0] bg-white hover:border-[#ab0045]/50'
                      }`}
                    >
                      <div className="w-14 h-14 mx-auto rounded-full overflow-hidden mb-2 border-2 border-white shadow-xs">
                        <img
                          src={artist.avatar}
                          alt={artist.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xs font-bold text-[#281622]">{artist.name}</h4>
                      <p className="text-[10px] text-[#ab0045] font-semibold mt-0.5">
                        {artist.role}
                      </p>
                      <div className="mt-1 flex items-center justify-center gap-1 text-[11px] text-[#5b3f44]">
                        <span>★ {artist.rating}</span>
                        <span>({artist.reviews})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Select Date */}
              <div>
                <label className="block text-xs font-bold text-[#281622] uppercase tracking-wider mb-2">
                  2. Fecha disponible
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {nextDays.map((d) => (
                    <button
                      type="button"
                      key={d.isoDate}
                      onClick={() => setSelectedDate(d.isoDate)}
                      className={`p-2.5 rounded-2xl border text-center transition-all cursor-pointer ${
                        selectedDate === d.isoDate
                          ? 'border-[#ab0045] bg-[#ab0045] text-white shadow-xs'
                          : 'border-[#ffe0f0] bg-white text-[#5b3f44] hover:bg-[#fff0f6]'
                      }`}
                    >
                      <span className="block text-[10px] uppercase font-bold">{d.dayName}</span>
                      <span className="block text-base font-bold my-0.5">{d.dayNumber}</span>
                      <span className="block text-[9px] uppercase opacity-80">{d.month}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Time Slot */}
              <div>
                <label className="block text-xs font-bold text-[#281622] uppercase tracking-wider mb-2">
                  3. Horarios disponibles en vivo
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-2 px-3 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer ${
                        selectedTimeSlot === slot
                          ? 'border-[#ab0045] bg-[#ffe8f3] text-[#ab0045] ring-2 ring-[#ab0045]/20'
                          : 'border-[#ffe0f0] bg-white text-[#5b3f44] hover:bg-[#fff0f6]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleConfirmBooking} id="bookingForm" className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#fff0f6] border border-[#ffe0f0] space-y-2">
                <span className="text-[10px] font-bold text-[#ab0045] uppercase tracking-wider">
                  Resumen de tu selección
                </span>
                <div className="flex justify-between items-center text-sm font-bold text-[#281622]">
                  <span>{currentService.name}</span>
                  <span className="text-[#ab0045] font-['Bricolage_Grotesque']">
                    ${totalPrice} MXN
                  </span>
                </div>
                <div className="text-xs text-[#5b3f44] space-y-1">
                  <p>
                    ✦ Forma: {selectedShape} · Largo:{' '}
                    {LENGTHS.find((l) => l.id === selectedLength)?.label}
                  </p>
                  <p>✦ Artista asignada: {selectedArtist.name}</p>
                  <p>
                    ✦ Fecha y Hora: {selectedDate} a las {selectedTimeSlot}
                  </p>
                  {selectedAddOns.length > 0 && (
                    <p>✦ Complementos: {selectedAddOns.length} extra(s)</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#281622] mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Ej: Camila Ramos"
                  className="w-full bg-white text-sm px-4 py-2.5 rounded-full border border-[#ffe0f0] focus:outline-none focus:ring-2 focus:ring-[#ab0045]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#281622] mb-1">
                    WhatsApp para recordatorio *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+56 9 1234 5678"
                    className="w-full bg-white text-sm px-4 py-2.5 rounded-full border border-[#ffe0f0] focus:outline-none focus:ring-2 focus:ring-[#ab0045]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#281622] mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="camila@gmail.com"
                    className="w-full bg-white text-sm px-4 py-2.5 rounded-full border border-[#ffe0f0] focus:outline-none focus:ring-2 focus:ring-[#ab0045]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#281622] mb-1">
                  Notas especiales o referencias (opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="¿Deseas colores específicos o traes uñas previas para retirar?"
                  className="w-full bg-white text-sm px-4 py-2 rounded-2xl border border-[#ffe0f0] focus:outline-none focus:ring-2 focus:ring-[#ab0045]"
                />
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#ffe0f0] flex items-center gap-2 text-xs text-[#5b3f44]">
                <span className="material-symbols-outlined text-[#007e42] text-[18px]">verified</span>
                <span>
                  No cobramos anticipo forzoso. Puedes pagar con tarjeta o efectivo directo al finalizar tu servicio en estudio.
                </span>
              </div>
            </form>
          )}

          {step === 4 && confirmedBooking && (
            <div className="text-center space-y-4 py-2">
              <div className="w-16 h-16 rounded-full bg-[#91f8ae] flex items-center justify-center text-[#007e42] mx-auto shadow-sm animate-pulse">
                <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  task_alt
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#ab0045] uppercase tracking-wider">
                  ¡Cita agendada exitosamente!
                </span>
                <h3 className="font-['Bricolage_Grotesque'] text-[24px] font-bold text-[#281622]">
                  Pase Digital {confirmedBooking.id}
                </h3>
              </div>

              {/* Digital Pass Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-tr from-[#ffe8f3] via-white to-[#eaddff]/40 border-2 border-white shadow-xl text-left space-y-3 relative overflow-hidden">
                <div className="flex justify-between items-start border-b border-[#ffe0f0] pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#6b49b5] uppercase">
                      Studio de Uñas Karuru
                    </span>
                    <h4 className="font-['Bricolage_Grotesque'] text-lg font-bold text-[#281622]">
                      {confirmedBooking.serviceName}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-[#ab0045] uppercase">Inversión</span>
                    <p className="font-['Bricolage_Grotesque'] text-lg font-bold text-[#ab0045]">
                      ${confirmedBooking.totalPrice} MXN
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-[#5b3f44]">
                  <div>
                    <span className="block font-bold text-[#281622]">Cliente:</span>
                    <span>{confirmedBooking.customerName}</span>
                  </div>
                  <div>
                    <span className="block font-bold text-[#281622]">Especialista:</span>
                    <span>{confirmedBooking.artist.name}</span>
                  </div>
                  <div>
                    <span className="block font-bold text-[#281622]">Fecha:</span>
                    <span>{confirmedBooking.date}</span>
                  </div>
                  <div>
                    <span className="block font-bold text-[#281622]">Hora:</span>
                    <span>{confirmedBooking.timeSlot}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block font-bold text-[#281622]">Ubicación:</span>
                    <span>Av. Providencia 1245, Studio 402</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#ffe0f0]">
                  <span className="text-[11px] text-[#007e42] font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                    Recordatorio enviado por WhatsApp
                  </span>
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-[#ffe0f0] text-xs font-mono font-bold text-[#281622]">
                    [QR]
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 rounded-full bg-[#ab0045] text-white text-xs font-semibold hover:bg-[#8f003a] shadow-md transition-all cursor-pointer"
                >
                  Listo, cerrar y ver estudio
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step < 4 && (
          <div className="pt-4 border-t border-[#ffe8f3] flex items-center justify-between shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((step - 1) as 1 | 2 | 3)}
                className="px-5 py-2.5 rounded-full border border-[#ffe0f0] text-xs font-semibold text-[#5b3f44] hover:bg-[#fff0f6] cursor-pointer"
              >
                Volver
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] text-[#5b3f44] block">Estimado:</span>
                <span className="font-['Bricolage_Grotesque'] text-sm font-bold text-[#ab0045]">
                  ${totalPrice} MXN
                </span>
              </div>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep((step + 1) as 2 | 3)}
                  className="px-6 py-2.5 rounded-full bg-[#d6105a] hover:bg-[#ab0045] text-white text-xs font-semibold shadow-md transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Continuar</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              ) : (
                <button
                  type="submit"
                  form="bookingForm"
                  className="px-7 py-2.5 rounded-full bg-[#ab0045] hover:bg-[#8f003a] text-white text-xs font-semibold shadow-md transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Confirmar mi Cita</span>
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
