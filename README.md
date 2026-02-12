# IBPR - Next.js Migration

Migración del sitio web de la Iglesia Evangélica Bautista Panambi Retá a Next.js con TypeScript y Zustand.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Zustand** para manejo de estado global
- **Principios SOLID** aplicados en la arquitectura
- **KISS** (Keep It Simple, Stupid) en la implementación
- Componentes reutilizables y modulares
- SEO optimizado
- Responsive design

## 📁 Estructura del Proyecto

```
ibpr-nextjs/
├── src/
│   ├── app/              # Páginas de Next.js (App Router)
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página de inicio
│   │   ├── actividades/  # Página de actividades
│   │   ├── nosotros/     # Página acerca de
│   │   ├── motivo-oracion/ # Página de peticiones
│   │   └── blog/         # Página de blog
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.tsx    # Navegación principal
│   │   ├── Footer.tsx    # Pie de página
│   │   ├── HeroLayout.tsx # Layout con hero section
│   │   └── HeroSlider.tsx # Carrusel de versículos
│   ├── stores/           # Zustand stores
│   │   ├── navigationStore.ts # Estado de navegación
│   │   ├── slideStore.ts     # Estado del carrusel
│   │   └── uiStore.ts        # Estado de UI
│   └── types/            # Definiciones de tipos TypeScript
│       └── index.ts
├── public/               # Recursos estáticos
│   └── images/          # Imágenes del sitio
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🏗️ Principios de Diseño Aplicados

### SOLID

1. **Single Responsibility Principle (SRP)**
   - Cada componente tiene una única responsabilidad
   - Cada store maneja un aspecto específico del estado
   - Separación clara entre tipos, lógica y presentación

2. **Open/Closed Principle (OCP)**
   - Componentes extensibles mediante props
   - Stores pueden ser extendidos sin modificación

3. **Interface Segregation Principle (ISP)**
   - Tipos específicos para cada entidad
   - No hay interfaces "gordas" con métodos innecesarios

4. **Dependency Inversion Principle (DIP)**
   - Componentes dependen de abstracciones (tipos)
   - No hay dependencias directas entre módulos

### KISS (Keep It Simple, Stupid)

- Código limpio y fácil de entender
- Evita sobre-ingeniería
- Componentes pequeños y enfocados
- Lógica clara y directa

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Modo de desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📦 Dependencias Principales

- **next**: Framework React para producción
- **react**: Librería de UI
- **zustand**: Manejo de estado ligero
- **typescript**: Superset de JavaScript con tipos

## 🎨 Estilos

Los estilos se mantienen del proyecto original:
- Bootstrap para el grid system
- CSS custom para estilos específicos
- Font Awesome para iconos
- Owl Carousel para sliders

## 🔄 Migración Realizada

### Componentes Creados

1. **Header**: Navegación responsive con estado de Zustand
2. **Footer**: Información de contacto y derechos
3. **HeroSlider**: Carrusel de versículos bíblicos
4. **HeroLayout**: Layout compartido con hero section

### Stores de Zustand

1. **navigationStore**: Manejo del menú móvil y rutas activas
2. **slideStore**: Control del carrusel de inicio
3. **uiStore**: Estado general de UI (loading, year, etc.)

### Páginas Migradas

- ✅ Inicio (index)
- ✅ Actividades
- ✅ Nosotros
- ✅ Motivos de Oración
- ✅ Blog

## 🚧 Próximos Pasos

- [ ] Copiar las imágenes del proyecto original
- [ ] Copiar los archivos CSS completos si es necesario
- [ ] Implementar funcionalidad de Google Maps
- [ ] Añadir funcionalidad de carrusel de testimonios
- [ ] Implementar sistema de blog dinámico
- [ ] Añadir formulario de contacto

## 📝 Notas

- El proyecto usa el App Router de Next.js 14
- Los componentes usan 'use client' cuando necesitan interactividad
- Las imágenes deben estar en la carpeta `public/`
- Los estilos globales se importan en `app/layout.tsx`

## 🤝 Contribuir

Este es un proyecto para la Iglesia Evangélica Bautista Panambi Retá.

## 📄 Licencia

Todos los derechos reservados - IBPR
