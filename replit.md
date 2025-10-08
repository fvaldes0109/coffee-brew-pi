# Ember Coffee Landing Page

## Overview

Ember Coffee is a production-ready, static landing page for an artisan coffee business. Built with semantic HTML5, hand-written CSS, and vanilla JavaScript, this project emphasizes accessibility, responsive design, and modern web standards. The site features a dark coffee-themed color palette, fluid typography, and subtle micro-interactions—all delivered without any frameworks or build tools.

## Recent Changes

**October 8, 2025** - Initial production-ready implementation completed:
- Created semantic HTML5 structure with header, hero, menu, features, CTA, and footer sections
- Implemented dark color palette with CSS variables and automatic light mode via `prefers-color-scheme`
- Built fluid responsive typography using `clamp()` for seamless scaling across devices
- Added vanilla JavaScript mobile navigation with full keyboard accessibility (ESC key support)
- Implemented `prefers-reduced-motion` fallback for smooth scroll animations
- Applied modern CSS features including `aspect-ratio` for geometric SVG, logical properties, and CSS Grid/Flexbox
- All WCAG AA accessibility requirements met with high-contrast focus states and ARIA attributes

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript with no frameworks, bundlers, or preprocessors. This approach ensures:
- Zero dependencies and minimal deployment complexity
- Fast load times with no framework overhead
- Full control over every byte delivered to users

**File Structure**: Three-file architecture for maximum simplicity:
- `index.html` - Semantic HTML structure with ARIA landmarks
- `styles.css` - CSS custom properties (design tokens) with mobile-first responsive design
- `script.js` - Minimal vanilla JavaScript for navigation interactions

**Design System**: CSS custom properties (`:root` variables) establish a design token system covering:
- Color palette (dark mode primary, light mode via `prefers-color-scheme`)
- Typography scale (Inter font family with multiple weights)
- Spacing rhythm (compact, dense vertical rhythm)
- Border radius and transition timing values

**Responsive Strategy**: Mobile-first approach with:
- Fluid typography using relative units
- Flexible grid/flexbox layouts
- Mobile navigation toggle (hamburger menu pattern)
- Viewport-based breakpoints for tablet/desktop

**Accessibility Patterns**:
- Semantic HTML5 landmarks (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`)
- ARIA attributes for interactive elements (expanded states, labels, controls)
- Skip-to-content link for keyboard navigation
- Focus management in JavaScript (trap focus in mobile menu, return focus on close)
- Keyboard event handling (ESC key closes mobile nav)

**Color Architecture**: Dual-theme system with design tokens:
- Primary dark theme: Deep blacks, warm tans, golden accents (#0b0a0a background, #cfa06b accent)
- Auto-switching light theme via media query detection
- Semantic color naming (--bg, --surface, --text, --accent, --muted)

### Navigation System

**Mobile Navigation Pattern**: 
- Toggle button with hamburger/close icon states
- Slide-in menu with CSS transitions
- ARIA-expanded attribute management
- Focus trap implementation when menu opens
- ESC key dismissal with focus return to toggle button

**Interaction Architecture**:
- Event-driven vanilla JavaScript (no jQuery)
- Declarative event listeners on navigation elements
- Keyboard event handling for accessibility
- CSS class toggling for state management

### Performance & Deployment

**Static Hosting Ready**: No build process required—can be served directly from any static host or simple HTTP server. Recommended deployment: Python SimpleHTTPServer, nginx, Apache, or any static hosting platform (Netlify, Vercel, GitHub Pages).

**Asset Strategy**: Inline SVG icons eliminate HTTP requests. Optional external images stored in `/assets/` folder. No image optimization pipeline required due to minimal asset usage.

## External Dependencies

**None**. This project has zero runtime or build-time dependencies:

- No npm packages
- No CSS frameworks (no Tailwind, Bootstrap, or preprocessors)
- No JavaScript frameworks (no React, Vue, Angular)
- No bundlers or build tools (no Webpack, Vite, Rollup)
- No web fonts loaded externally (system font stack with Inter as progressive enhancement)

**Browser APIs Used**:
- DOM manipulation (querySelector, classList, setAttribute)
- Event handling (click, keyboard events)
- ARIA attribute management (aria-expanded, aria-controls, aria-label)

**Optional Server**: Any static HTTP server for local development (Python's http.server, Node's http-server, or browser direct file access).