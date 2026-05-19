// Centralized config — read all env vars from a single place

const WA_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5216623549458'

export const config = {
  whatsappNumber: WA_NUMBER,
  whatsappUrl: `https://wa.me/${WA_NUMBER}`,
  email: import.meta.env.VITE_EMAIL || 'eva@sanarlo.com',
  evaluationsUrl: import.meta.env.VITE_EVALUATIONS_URL || 'https://evaluaciones.sanarlo.com',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://sanarlo.com',
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || '',
}

export const professional = {
  fullName: 'Eva Czarina Estrada Nogales',
  shortName: 'Eva Czarina',
  cedula: '13331847',
  university: 'Universidad de Sonora',
  approach: 'Psicología humanista',
  city: 'Hermosillo, Sonora',
}
