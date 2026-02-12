/**
 * Application constants
 * Following KISS principle - centralized configuration
 */

export const CHURCH_INFO = {
  name: 'Iglesia Evangélica Bautista Panambi Retá',
  shortName: 'IBPR',
  address: 'Panambi Retá, Paraguay',
  location: {
    lat: -25.320549767488423,
    lng: -57.60449949103955,
  },
  contact: {
    phone: '+595 xxx xxx xxx',
    email: 'contacto@ibpr.org',
  },
  schedule: {
    sunday: '10:00 AM - 12:00 PM',
    wednesday: '7:00 PM - 9:00 PM',
  },
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
  },
} as const;

export const NAVIGATION_ROUTES = [
  { href: '/', label: 'Inicio' },
  { href: '/actividades', label: 'Actividades' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/motivo-oracion', label: 'Motivos de Oracion' },
  { href: '/blog', label: 'Blog' },
] as const;

export const CAROUSEL_CONFIG = {
  autoPlayInterval: 5000,
  transitionDuration: 500,
} as const;
