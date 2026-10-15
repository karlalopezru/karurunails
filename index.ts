export interface NailService {
  id: string;
  category: 'soft-gel' | 'gelish' | 'acrilicas';
  name: string;
  tagline: string;
  description: string;
  price: number;
  currency: string;
  durationMinutes: number;
  imageUrl: string;
  badge?: string;
  technique: string;
  features: string[];
  popular?: boolean;
}

export interface AccessoryProduct {
  id: string;
  name: string;
  category: 'aceites' | 'limas' | 'charms' | 'kits';
  categoryLabel: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  stock: number;
}

export interface CartItem {
  id: string;
  type: 'product' | 'service';
  title: string;
  subtitle?: string;
  price: number;
  quantity: number;
  imageUrl: string;
  options?: {
    shape?: string;
    length?: string;
    color?: string;
    addOns?: string[];
  };
}

export interface NailArtist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  rating: number;
  reviews: number;
  avatar: string;
}

export interface BookingAppointment {
  id: string;
  serviceId: string;
  serviceName: string;
  technique: string;
  shape?: string;
  length?: string;
  color?: string;
  addOns: string[];
  artist: NailArtist;
  date: string;
  timeSlot: string;
  totalPrice: number;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes?: string;
  status: 'confirmada' | 'pendiente';
}
