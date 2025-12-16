export const SITE = {
  name: 'PROINGES S.A.S',
  title: 'PROINGES - Transformación Digital',
  description: 'Monitoreo de procesos, ingeniería electrónica y automatización ',
  url: 'https://proinges.com',
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
    description: 'Creamos aplicaciones web y móviles a medida, robustas y escalables, utilizando las últimas tecnologías del mercado.',
  },
  {
    icon: 'bot',
    title: 'Automatización de Procesos',
    description: 'Implementamos soluciones RPA y workflows inteligentes para reducir tareas manuales y aumentar la eficiencia operativa.',
  },
  {
    icon: 'network-wired',
    title: 'Integración de Sistemas',
    description: 'Unificamos sus plataformas y herramientas existentes en un ecosistema conectado para un flujo de datos sin interrupciones.',
  },
  {
    icon: 'lightbulb',
    title: 'Innovación y Consultoría',
    description: 'Asesoramiento estratégico para la adopción de nuevas tecnologías que mantengan a su empresa competitiva y relevante.',
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
  phone: '+57 (313) 766-0548',
  location: ' Calle 76 Número 38b- 57 Barranquilla, Colombia',
  hours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: 'Cerrado',
    sunday: 'Cerrado',
  },
} as const;