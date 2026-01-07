export const SITE = {
  name: 'PROINGES S.A.S',
  title: 'PROINGES - Transformación Digital y Desarrollo de Software en Colombia',
  description: 'Soluciones de automatización, desarrollo de software, integración de sistemas y consultoría tecnológica para empresas en Colombia. Especialistas en transformación digital, interventoría eléctrica y sistemas solares fotovoltaicos en Barranquilla.',
  url: 'https://proinges.com.co',
  keywords: 'desarrollo software Colombia, automatización procesos, transformación digital Barranquilla, integración sistemas, consultoría tecnológica, interventoría eléctrica, sistemas solares fotovoltaicos, RPA Colombia, desarrollo web empresarial',
} as const;

export const NAVIGATION = [
  { name: 'Inicio', href: '#' },
  { name: 'Qué Hacemos', href: '#que-hacemos' },
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Contacto', href: '#contacto' },
] as const;

export const SERVICES = [
  {
    icon: 'code',
    title: 'Desarrollo de Software',
    description: 'Creamos aplicaciones web y móviles, robustas y escalables, utilizando tecnologías actuales.',
  },
  {
    icon: 'bot',
    title: 'Automatización de Procesos',
    description: 'Implementamos RPA, workflows inteligentes e integración de plataformas para optimizar procesos y mejorar la eficiencia operativa.',
  },
  {
    icon: 'lightbulb',
    title: 'Innovación y Consultoría Tecnológica',
    description: 'Asesoramiento estratégico para la adopción de nuevas tecnologías y procesos de transformación digital.',
  },
  {
    icon: 'sun',
    title: 'Interventoría en Infraestructura Eléctrica',
    description: 'Realizamos interventoría técnica y administrativa a la implementación del servicio de energía mediante redes eléctricas convencionales y sistemas solares fotovoltaicos.',
  },
] as const;

export const BENEFITS = [
  {
    icon: 'piggy-bank',
    title: 'Optimización de Costos',
    description: 'Maximice su retorno de inversión reduciendo gastos operativos innecesarios mediante automatización.',
    color: 'green',
  },
  {
    icon: 'trending-up',
    title: 'Escalabilidad Total',
    description: 'Soluciones que crecen con usted. Infraestructura flexible adaptada a picos de demanda.',
    color: 'blue',
  },
  {
    icon: 'shield-check',
    title: 'Seguridad Garantizada',
    description: 'Protección de datos empresariales con los más altos estándares de ciberseguridad y cumplimiento.',
    color: 'purple',
  },
  {
    icon: 'zap',
    title: 'Implementación Rápida',
    description: 'Metodologías ágiles que aseguran entregas a tiempo y despliegues sin fricción en su organización.',
    color: 'orange',
  },
] as const;

export const FOOTER_LINKS = {
  services: [
    { name: 'Desarrollo Web', href: '#que-hacemos' },
    { name: 'Automatización', href: '#que-hacemos' },
    { name: 'Consultoría IT', href: '#que-hacemos' },
  ],
  company: [
    { name: 'Sobre Nosotros', href: '#que-hacemos' },
    { name: 'Contacto', href: '#contacto' },
  ],
  legal: [
    { name: 'Privacidad', href: '#' },
    { name: 'Términos', href: '#' },
  ],
} as const;

export const CONTACT_INFO = {
  email: 'soporte@proinges.com.co',
  phone: '+57 (350) 265-7553',
  phoneLink: '+573502657553', // Para enlaces tel:
  location: 'Calle 76 Número 38b-57, Barranquilla, Colombia',
  city: 'Barranquilla',
  region: 'Atlántico',
  country: 'Colombia',
  coordinates: {
    lat: '10.9639',
    lng: '-74.7964',
  },
  hours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: 'Cerrado',
    sunday: 'Cerrado',
  },
} as const;

// SEO - Open Graph
export const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'PROINGES - Transformación Digital en Colombia',
} as const;

// SEO - Social Media
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/proinges',
  facebook: 'https://www.facebook.com/proinges',
  // instagram: 'https://www.instagram.com/proinges',
  // youtube: 'https://www.youtube.com/@proinges',
} as const;