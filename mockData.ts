import { NailService, AccessoryProduct, NailArtist, CartItem } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjk9uSzmFt-wgeIvB4ZIekWvMWZPFCoA7Y6TDqw99K8TOvuHBMkiXVRKTQFCBWHA5GUoIsj_V7WmHEndZkFMRxTKZxpWyZfn6H_OYknB27IJWGfzkEGaP3sWScsDhx31Mw79PERsUFjChUqRyPvwzZfpkjWc5v9giWlfdoo1jHQvydMt_6j9gq7CF8Blszt0Rsw5z27any3qMB4XyHeiJhHB_0U87ZKoe4I82P7aZA2f9UlVptuvxB';
export const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuALp5YkAIFXqwYSMUdRdQL0QqI8WjcD6ejU8fVcFjXpJhXQdxIVPuNRKkJjQp8tw3xJmAQMBo5pPFbvTL_2f4aesjIQcg3BzYactx-vw0oJ1Sceq2_7QcHARZu-aYGYdJoI2yUvrQZONh5fd9JfKpjLNcItX7uQYpsTez-R9dQ3nSjb4q_gVE9Arqb8pzer1VoFWwfi7JqPcfW1ZKGv57fbyPaEW-FpqYDskPaUcQXetUAFj-k9pTwC';
export const SOFT_GEL_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBalPGCqWhMqGdCZVE0UZtJuLIpgKFuAVW4snCXYXqSLMS2oTlM1eIw9vgW3TjrGwXCgWd_kVgG9B7ZfM98OBgxU9WRrn-WYC_e3meFeMdDUmofL1y9Clore6aBRCk2rzqjw5OChzQ_tqSEbeV44GZ0lFmuHE5Tl7m8r5Q4rXPwzfvmI65MgtJbGuGewSqz3Jd8Czjfwbz8WXrTLAshEju0UqCh1bXS6bUR2aoQpLTtksgONw3J-hxr';
export const GELISH_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzd30H0v-A-noFVlCSweqIZ8YtEeJBQ_T4bTIPN-91qUfZsjReO71n8Xk509OtqDYzgAu7PtzfW1BDQFg3S7RPKTaMdDLPsqaA4Ney1JooYCLTUDVuEx97RToBDRUmGZIqGNy2PyzsJpT0Hc0ud0H4yNUIkXoPXTdNBx04XW_dQwBkaNINkyuDkOQqAtsutmuTKB4T6Y7ijMwKOSoDDt9XDuoME4iBhylnyMmrPZsm3DBQx-BSYYGY';
export const ACRILICAS_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhsc_OwFkqbbJSwLvPXrOTcCaOFPU_mrKD0Y-5FDp1OpGGdyTaqH8KWWvpJ7kxqkfATUTPz2BbhQIkHCCyouMmxG68Lk8HlgnmUO0U-xT6_4mSc6kg_7BrG8kw7vI5jfhRFBs-JQvhAfZILe-HlHiUPSxuPmyZwebMqHWvPFVO5B0J1ZBhlzRPyufnuJWL9qsvOQnQggwgA7LSs6n8A51CVBpylLOQIsuI1McTr-l4D-pWzbvF6CU8';
export const ACCESORIOS_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCR8iMvTDcxdu-cE75BJ58mKryGiV59ZpheX1S6YMUtB5KByBfuzKXAgxcB2SCXykOaforzlsom9YsAN9u5TYvGsEsaOQ5zbtJyICEoeb4HR-udfKklnDN1GJ1esWnrghUKzDJuCo61ZwVd3VLcHGO8NXLFPsLljrUVWaTQOwh0Wc4F5utnbaYddk9e2auOJIhxIwy_BEPOlVaFESrNAJk_K7LlMc9k50tvXaweLd6OcRG9ogH9w-D';

export const NAIL_ARTISTS: NailArtist[] = [
  {
    id: 'sofia',
    name: 'Sofía Valdés',
    role: 'Master Soft Gel & Nail Art Editorial',
    specialty: 'Efectos Chrome, 3D Drops y Manicure Rusa profunda',
    rating: 4.98,
    reviews: 430,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'valentina',
    name: 'Valentina Rey',
    role: 'Especialista Esculpidas Acrílicas',
    specialty: 'Formas Coffin, Stiletto y encapsulado en cristales',
    rating: 4.95,
    reviews: 382,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'camila',
    name: 'Camila Montes',
    role: 'Técnica Gelish & Nivelación',
    specialty: 'Alineación de brillo espejo, degradados y nail art minimal',
    rating: 4.97,
    reviews: 512,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  }
];

export const NAIL_SERVICES: NailService[] = [
  {
    id: 'softgel-chrome-wave',
    category: 'soft-gel',
    name: 'Chrome Wave Soft Gel',
    tagline: 'Diseño de la Semana · Acabado Espejo',
    description: 'Puntas Soft Gel con ondas líquidas en cromo plateado sobre base lilac jelly translúcida y francesitas fucsia neón.',
    price: 480,
    currency: 'MXN',
    durationMinutes: 90,
    imageUrl: HERO_IMAGE_URL,
    badge: 'Diseño de la semana',
    technique: 'Técnica Rusa Pro',
    features: ['Preparación rusa con torno', 'Tips de gel flexible', 'Ondas cromadas 3D', 'Sellado ultra-brillo'],
    popular: true
  },
  {
    id: 'softgel-lavender-ombre',
    category: 'soft-gel',
    name: 'Lavender Holographic Ombré',
    tagline: 'Ligereza & Brillo Ethereal',
    description: 'Estructura flexible de gel con sutil degradado lavanda y microdestellos holográficos efecto perla de cristal.',
    price: 450,
    currency: 'MXN',
    durationMinutes: 80,
    imageUrl: SOFT_GEL_IMAGE_URL,
    badge: 'Top Ventas',
    technique: 'Soft Gel Tip & Gel-X',
    features: ['Cero limado agresivo', 'Sensación ultra ligera', 'Duración 4 semanas', 'Retiro seguro al 100%']
  },
  {
    id: 'softgel-aura-blush',
    category: 'soft-gel',
    name: 'Aura Blush & Gota de Agua 3D',
    tagline: 'Tendencia Coreana Editorial',
    description: 'Base nude lechosa con difuminado aura en fucsia intenso rematado con gotas tridimensionales de gel cristalino.',
    price: 490,
    currency: 'MXN',
    durationMinutes: 95,
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
    badge: 'Tendencia',
    technique: 'Aura Airbrush & 3D Gel',
    features: ['Efecto aerógrafo suave', 'Relieves táctiles 3D', 'Manicure combinada', 'Garantía 7 días']
  },
  {
    id: 'gelish-cherry-gloss',
    category: 'gelish',
    name: 'Gelish Cherry Noir & Glaze',
    tagline: '21 Días de Brillo Espejo Intacto',
    description: 'Esmaltado en gel curado en lámpara LED con nivelación milimétrica para un reflejo de luz continuo impecable.',
    price: 280,
    currency: 'MXN',
    durationMinutes: 60,
    imageUrl: GELISH_IMAGE_URL,
    badge: '21 Días Brillo',
    technique: 'Nivelación Rusa',
    features: ['Limpieza profunda de cutícula', 'Capa niveladora protectora', 'Pigmento de alta cobertura', 'Aceite botánico al finalizar'],
    popular: true
  },
  {
    id: 'gelish-glazed-donut',
    category: 'gelish',
    name: 'Glazed Donut Pearl Gelish',
    tagline: 'Efecto Nácar Iridiscente',
    description: 'Tono marfil perlado recubierto con polvo de perla natural cromado para un reflejo satinado de alta costura.',
    price: 320,
    currency: 'MXN',
    durationMinutes: 65,
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80',
    badge: 'Favorito VIP',
    technique: 'Fricción en Polvo Chrome',
    features: ['Reflejo perlado elegante', 'Protección de uña frágil', 'Secado instantáneo en cabina LED', 'Retiro sin raspado']
  },
  {
    id: 'acrilicas-coffin-3d',
    category: 'acrilicas',
    name: 'Acrílicas Coffin 3D Florals',
    tagline: 'Esculpidas & Tendencia 3D',
    description: 'Extensiones esculpidas con estructura de alta resistencia, punta Coffin, degradado baby boomer y flores 3D en relieve.',
    price: 580,
    currency: 'MXN',
    durationMinutes: 120,
    imageUrl: ACRILICAS_IMAGE_URL,
    badge: 'Esculpidas 3D',
    technique: 'Esculpido en Molde Escultural',
    features: ['Puntas personalizadas', 'Cero tips plásticos', 'Resistencia máxima a impactos', 'Nail art tridimensional']
  },
  {
    id: 'acrilicas-stiletto-cristales',
    category: 'acrilicas',
    name: 'Stiletto Luxury Crystals & Glitter',
    tagline: 'Largo Editorial & Brillo Joya',
    description: 'Estructura Stiletto pronunciada con encapsulado de confeti tornasol y constelación de micro cristales Swarovski.',
    price: 650,
    currency: 'MXN',
    durationMinutes: 135,
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    badge: 'Glamour Total',
    technique: 'Encapsulado en Acrílico Cristal',
    features: ['Estructura milimétrica', 'Curvatura C perfecta', 'Cristalería auténtica fija', 'Sellado de larga retención']
  }
];

export const ACCESSORY_PRODUCTS: AccessoryProduct[] = [
  {
    id: 'kit-aceite-cuticula',
    name: 'Kit Aceite de Cutícula Rosa & Vainilla',
    category: 'aceites',
    categoryLabel: 'Aceites & Cuidado',
    description: 'Fórmula hidratante con pétalos de rosa deshidratados, vitamina E y aceite de jojoba orgánico prensado en frío.',
    price: 120,
    originalPrice: 150,
    imageUrl: ACCESORIOS_IMAGE_URL,
    badge: 'Top Ventas',
    rating: 4.9,
    reviewsCount: 148,
    stock: 24
  },
  {
    id: 'lima-cristal-profesional',
    name: 'Lima de Cristal Templado Profesional',
    category: 'limas',
    categoryLabel: 'Limas & Herramientas',
    description: 'Sella la queratina natural al limar sin astillar los bordes libres. Reutilizable, lavable y con estuche rígido de terciopelo.',
    price: 85,
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    badge: 'Esencial',
    rating: 4.95,
    reviewsCount: 92,
    stock: 35
  },
  {
    id: 'set-charms-cromados',
    name: 'Set 12 Charms Cromados 3D Corazón & Lazo',
    category: 'charms',
    categoryLabel: 'Nail Charms',
    description: 'Accesorios metálicos plateados con brillo espejo inoxidable para encapsular o fijar sobre Soft Gel y Acrílicas.',
    price: 150,
    imageUrl: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=600&q=80',
    badge: 'Tendencia 2025',
    rating: 4.88,
    reviewsCount: 64,
    stock: 18
  },
  {
    id: 'suero-fortalecedor-biotina',
    name: 'Suero Fortalecedor con Biotina y Queratina',
    category: 'aceites',
    categoryLabel: 'Aceites & Cuidado',
    description: 'Tratamiento intensivo con aplicador en pincel que repara uñas débiles o quebradizas en tan solo 14 días.',
    price: 180,
    originalPrice: 220,
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    rating: 4.92,
    reviewsCount: 81,
    stock: 15
  },
  {
    id: 'kit-press-on-reutilizables',
    name: 'Kit Press-On Nails Reutilizables "Glazed Muse"',
    category: 'kits',
    categoryLabel: 'Kits de Mantenimiento',
    description: '24 uñas reutilizables hechas a mano con acabado gelish, pegamento adhesivo hipoalergénico, lima y palito de naranjo.',
    price: 290,
    imageUrl: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&w=600&q=80',
    badge: 'Hecho a mano',
    rating: 4.97,
    reviewsCount: 57,
    stock: 12
  },
  {
    id: 'aceite-almendras-vitamina-e',
    name: 'Gotero Reparador de Almendras & Escualano',
    category: 'aceites',
    categoryLabel: 'Aceites & Cuidado',
    description: 'Absorción rápida que no deja sensación grasosa, aroma dulce relajante y máxima nutrición para cutículas exigentes.',
    price: 110,
    imageUrl: ACCESORIOS_IMAGE_URL,
    rating: 4.85,
    reviewsCount: 42,
    stock: 29
  }
];

export const INITIAL_CART: CartItem[] = [
  {
    id: 'kit-aceite-cuticula',
    type: 'product',
    title: 'Kit Aceite de Cutícula Rosa & Vainilla',
    subtitle: 'Edición Botánica 15ml',
    price: 120,
    quantity: 1,
    imageUrl: ACCESORIOS_IMAGE_URL
  },
  {
    id: 'lima-cristal-profesional',
    type: 'product',
    title: 'Lima de Cristal Templado Profesional',
    subtitle: 'Rosa Cuarzo con Funda',
    price: 85,
    quantity: 1,
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80'
  }
];

export const GELISH_PALETTE = [
  { name: 'Cherry Noir', hex: '#581124', desc: 'Borgogna profundo' },
  { name: 'Fuchsia Siren', hex: '#ab0045', desc: 'Fucsia icónico Karuru' },
  { name: 'Lilac Whisper', hex: '#af8dfe', desc: 'Lavanda etéreo' },
  { name: 'Rose Glazed', hex: '#e8a5b8', desc: 'Efecto donut glaseado' },
  { name: 'Espresso Velvet', hex: '#3e2723', desc: 'Café chocolate oscuro' },
  { name: 'Milk Pearl', hex: '#fcf6f5', desc: 'Blanco lechoso traslúcido' },
  { name: 'Matcha Cream', hex: '#94a781', desc: 'Verde salvia pastel' },
  { name: 'Aura Peach', hex: '#f7a38b', desc: 'Durazno luminoso' },
  { name: 'Chrome Silver', hex: '#cfd8dc', desc: 'Plata líquida espejo' },
  { name: 'Midnight Berry', hex: '#301934', desc: 'Mora oscura medianoche' }
];

export const TIME_SLOTS = [
  '10:00 AM',
  '11:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
  '07:00 PM'
];

export const SHAPES = ['Almendra', 'Coffin', 'Cuadrada', 'Stiletto', 'Ovalada'];
export const LENGTHS = [
  { id: 'S', label: 'Corta (S)', desc: 'Natural & diaria' },
  { id: 'M', label: 'Mediana (M)', desc: 'Equilibrio perfecto (+ $40)' },
  { id: 'L', label: 'Larga (L)', desc: 'Estilizada (+ $70)' },
  { id: 'XL', label: 'Extra Larga (XL)', desc: 'Editorial (+ $110)' }
];

export const ADD_ONS = [
  { id: 'retiro', name: 'Retiro de set anterior', price: 80 },
  { id: 'chrome', name: 'Efecto Chrome Espejo Completo', price: 90 },
  { id: 'nailart3d', name: 'Nail Art 3D en 4 uñas', price: 120 },
  { id: 'swarovski', name: 'Constelación Cristales Swarovski', price: 100 },
  { id: 'masaje', name: 'Masaje Hidratante de Velas Templadas', price: 60 }
];
