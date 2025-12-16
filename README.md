# PROINGES Landing Page

**Transformación Digital y Desarrollo de Software**

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

---

## Tabla de Contenidos

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Comenzando](#comenzando)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Personalización](#personalización)
- [Despliegue](#despliegue)
- [Roadmap](#roadmap)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Sobre el Proyecto

Landing page corporativa profesional para **PROINGES**, empresa líder en transformación digital y desarrollo de software en Colombia. Sitio web moderno, responsivo y optimizado que presenta nuestros servicios de consultoría tecnológica, automatización de procesos y soluciones empresariales.

### ¿Por qué este proyecto?

- **Primera impresión profesional** - Diseño moderno que refleja nuestra experiencia técnica
- **Rendimiento excepcional** - Optimizado para cargar en menos de 2 segundos
- **100% Responsivo** - Experiencia perfecta en cualquier dispositivo
- **SEO Optimizado** - Mejor visibilidad en motores de búsqueda

---

## Características

- Diseño moderno y minimalista
- Totalmente responsivo (Mobile-first)
- Animaciones suaves y transiciones de página
- Formulario de contacto funcional
- Sección de servicios detallada
- Galería de portafolio/proyectos
- Documentación legal (Privacidad y Términos)
- Optimización SEO avanzada
- Rendimiento Lighthouse 95+
- Accesibilidad WCAG 2.1 AA

---

## Tecnologías

Este proyecto está construido con las siguientes tecnologías:

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| [Astro](https://astro.build) | 4.x | Framework web principal |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Estilos y diseño |
| [View Transitions](https://docs.astro.build/en/guides/view-transitions/) | - | Transiciones suaves |

### Herramientas de Desarrollo

- ESLint - Linting de código
- Prettier - Formateo de código
- PostCSS - Procesamiento CSS

---

## Comenzando

Sigue estos pasos para obtener una copia local funcionando.

### Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js 18.x o superior
- npm / yarn / pnpm
```bash
node --version  # v18.0.0 o superior
npm --version   # 9.0.0 o superior
```

### Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/PROINGES-landingPage.git
```

2. **Navega al directorio**
```bash
cd PROINGES-landingPage
```

3. **Instala las dependencias**
```bash
npm install
```

4. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

5. **Abre tu navegador**
```
http://localhost:4321
```

---

## Uso

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Vista previa local del build de producción |
| `npm run astro` | Ejecuta comandos CLI de Astro |
| `npm run lint` | Ejecuta ESLint para encontrar problemas |
| `npm run format` | Formatea el código con Prettier |

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:
```env
# Configuración de Formulario de Contacto
RESEND_API_KEY=tu_endpoint_aqui

```

---

## Estructura del Proyecto
```
PROINGES-landing/
│
├── public/                    # Archivos estáticos
│   ├── logo.svg
│   ├── favicon.ico
│   └── images/
│
├── src/
│   ├── components/            # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Portfolio.astro
│   │   └── ContactForm.astro
│   │
│   ├── layouts/               # Layouts de página
│   │   └── Layout.astro
│   │
│   ├── pages/                 # Páginas del sitio
│   │   ├── index.astro        # Página principal
│   │   ├── privacy.astro      # Política de privacidad
│   │   └── terms.astro        # Términos y condiciones
│   │
│   ├── styles/                # Estilos globales
│   │   └── global.css
│   │
│   └── utils/                 # Utilidades y helpers
│       └── helpers.ts
│
├── astro.config.mjs           # Configuración de Astro
├── tailwind.config.cjs        # Configuración de Tailwind
├── tsconfig.json              # Configuración de TypeScript
├── package.json
└── README.md
```

---

## Personalización

### Cambiar Colores

Edita `tailwind.config.cjs`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        secondary: '#your-color',
      }
    }
  }
}
```

### Modificar Contenido

1. **Textos principales**: Edita los componentes en `src/components/`
2. **Imágenes**: Reemplaza archivos en `public/images/`
3. **Servicios**: Modifica `src/components/Services.astro`
4. **Información de contacto**: Actualiza `src/components/Footer.astro`

---

## Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

O usa el botón:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/gesproes-landing)

### Netlify
```bash
npm run build
# Arrastra la carpeta dist/ a Netlify
```

O usa el botón:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tu-usuario/gesproes-landing)

### GitHub Pages
```bash
npm run build
# Sube el contenido de dist/ a tu repositorio gh-pages
```

Más opciones en la [documentación oficial de Astro](https://docs.astro.build/en/guides/deploy/).

---

## Roadmap

- [x] Diseño responsivo
- [x] Formulario de contacto
- [x] Documentación legal
- [ ] Blog integrado
- [ ] Modo oscuro
- [ ] Internacionalización (i18n)
- [ ] Dashboard de administración
- [ ] Integración con CMS
- [ ] Chatbot de atención

Ver [issues abiertos](https://github.com/tu-usuario/PROINGES-landingPage/issues) para la lista completa de features propuestos y problemas conocidos.

---

## Contribución

Las contribuciones son lo que hace que la comunidad open source sea un lugar increíble para aprender, inspirar y crear. **Cualquier contribución que hagas será muy apreciada**.

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad increíble'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de Estilo de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: nueva característica
fix: corrección de bug
docs: cambios en documentación
style: formato, punto y coma faltantes, etc
refactor: refactorización de código
test: añadir tests
chore: actualizar tareas de build, configuración, etc
```

---

## Licencia

Este proyecto es propiedad privada de **PROINGES**. Todos los derechos reservados © 2024.

Para uso comercial o consultas de licencia, contacta a: soporte@proinges.com.co

---

## Contacto

**PROINGES** - Transformación Digital

- Website: [www.proinges.com.co](https://www.gesproes.com)
- Email: soporte@proinges.com.co
- LinkedIn: [PROINGES]([https://www.linkedin.com/company/proinges-sas])
- WhatsApp: +57 XXX XXX XXXX

**Desarrollado por:** Laura Rodriguez - FullStack Developer

---

## Agradecimientos

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Hero Icons](https://heroicons.com)
- [Font Awesome](https://fontawesome.com)

---

**Si te gustó este proyecto, dale una estrella ⭐**

Hecho con ❤️ por el equipo de PROINGES
