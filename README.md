# Ember Coffee — Artisan Roasted Coffee Landing Page

A production-ready, semantic HTML5 landing page for a coffee business. Features a refined dark color palette, fluid responsive typography, accessible navigation, and vanilla JavaScript interactions.

## 🚀 Quick Start

### Preview the Site

Simply open `index.html` in your web browser:

```bash
# Using a simple HTTP server (recommended for testing)
python3 -m http.server 5000

# Or open directly in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

Then navigate to `http://localhost:5000` in your browser.

## 📁 Project Structure

```
/
├── index.html          # Semantic HTML5 structure
├── styles.css          # Hand-written CSS with design tokens
├── script.js           # Vanilla JavaScript for interactions
├── assets/             # Optional images and icons folder
└── README.md           # This file
```

## 🎨 Color Palette

### Dark Mode (Default)
- **Background**: `#0b0a0a` - Deep black
- **Surface**: `#161415` - Slightly lighter surface
- **Text**: `#f6f3f0` - Off-white
- **Text Secondary**: `#d4cdc4` - Secondary text
- **Muted**: `#bfb6aa` - Muted tan
- **Accent**: `#cfa06b` - Warm golden
- **Accent 2**: `#7a4b2a` - Rich coffee brown

### Light Mode (Auto-detected via `prefers-color-scheme`)
- **Background**: `#f6f3f0` - Warm white
- **Surface**: `#ffffff` - Pure white
- **Text**: `#1a1714` - Near black
- **Text Secondary**: `#4a433d` - Secondary text
- **Muted**: `#6b6158` - Muted brown
- **Accent**: `#8d5a28` - Deep golden brown
- **Accent 2**: `#b8835f` - Light coffee brown

## ✨ Features

### HTML
- ✅ Semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`)
- ✅ Skip-to-content link for keyboard users
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ ARIA attributes for mobile menu (`aria-expanded`, `aria-controls`, `aria-label`)
- ✅ Descriptive alt text for meaningful images
- ✅ Inline SVG icons for logo and decorative elements

### CSS
- ✅ CSS variables (custom properties) in `:root` for design tokens
- ✅ Minimal CSS reset with `box-sizing: border-box`
- ✅ Fluid typography using `clamp()` for responsive text scaling
- ✅ Mobile-first responsive design with logical breakpoints
- ✅ CSS logical properties (`margin-inline`, `padding-block`, etc.)
- ✅ Modern CSS features: Grid, Flexbox, `aspect-ratio`
- ✅ Modern viewport units (`svh` for hero section)
- ✅ Dark/light mode support via `prefers-color-scheme`
- ✅ Smooth transitions with `prefers-reduced-motion` fallback
- ✅ High-contrast focus states for keyboard navigation
- ✅ Compact spacing with tight vertical rhythm

### JavaScript
- ✅ Vanilla JS only (no frameworks or libraries)
- ✅ Mobile navigation toggle with smooth animations
- ✅ Close menu with `Esc` key
- ✅ Focus management for accessibility
- ✅ Smooth scroll for anchor links
- ✅ Staggered entrance animations (respects `prefers-reduced-motion`)
- ✅ Well-commented code with clear function documentation

## ♿ Accessibility Testing

### Keyboard Navigation
- ✅ Tab through all interactive elements (header, nav, buttons, footer links)
- ✅ Mobile menu opens/closes with Enter/Space on toggle button
- ✅ Menu closes with `Esc` key, focus returns to toggle
- ✅ Skip-to-content link appears on first Tab press
- ✅ All focus states are high-contrast and visible

### Screen Reader Support
- ✅ Semantic landmarks for easy navigation
- ✅ ARIA attributes for menu state (`aria-expanded`)
- ✅ Meaningful labels (`aria-label` on toggle, logo)
- ✅ Decorative SVGs marked with `aria-hidden="true"`
- ✅ Logical heading structure (H1 → H2 → H3)

### Color Contrast
- ✅ Text/background contrast meets WCAG AA standards
- ✅ Accent colors tested for sufficient contrast
- ✅ Focus indicators use high-contrast colors
- ✅ Both dark and light modes maintain accessibility

### Responsive Design
- ✅ Tested at 375px (mobile), 768px (tablet), 1024px (desktop)
- ✅ Single-column centered layout maintains readability
- ✅ Touch targets are at least 44px for mobile
- ✅ No horizontal scroll at any viewport width

## 🔧 Customization

### Changing the Color Palette

Edit the CSS variables in `styles.css`:

```css
:root {
  --bg: #your-color;
  --accent: #your-color;
  /* ... update other colors */
}
```

### Swapping Images

1. Add your images to the `/assets/` folder
2. Update the image references in `index.html`
3. Ensure you provide descriptive `alt` text for accessibility

### Extending the Site

To add new sections:

1. Add a new `<section>` in `index.html` with a semantic structure
2. Add corresponding styles in `styles.css`
3. Update navigation links in the header
4. Maintain the existing design token system for consistency

### Typography

Current fonts use system font stack with Inter fallback. To use a custom font:

1. Add font files to `/assets/fonts/` or use a CDN
2. Update the `--ff` variable in `:root`
3. Add `@font-face` rules if using local fonts

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

Modern CSS features used:
- CSS Grid & Flexbox
- CSS Custom Properties (variables)
- `clamp()` for fluid typography
- `aspect-ratio` for media
- CSS logical properties
- `prefers-color-scheme` & `prefers-reduced-motion`

## 📦 Production Deployment

This is a static site with no build process required:

1. **Upload files** to your web server or hosting provider
2. **No bundling needed** — all assets are ready for production
3. **Performance optimized** with minimal CSS/JS
4. **SEO ready** with semantic HTML and proper meta tags

### Recommended Optimizations (Optional)

- Minify CSS and JavaScript for production
- Compress images (if using photos)
- Enable Gzip/Brotli compression on server
- Add appropriate cache headers for static assets

## 📝 File Details

| File | Lines | Purpose |
|------|-------|---------|
| `index.html` | ~150 | Semantic HTML structure, accessibility landmarks |
| `styles.css` | ~500 | Design tokens, responsive layout, dark/light modes |
| `script.js` | ~100 | Mobile nav toggle, smooth scroll, animations |

## 🎯 Design Decisions

### Why These Choices?

1. **No frameworks**: Hand-written code is lighter, faster, and has no dependencies
2. **CSS variables**: Easy theme customization and consistent design tokens
3. **Fluid typography**: Responsive text that scales smoothly across devices
4. **Mobile-first**: Progressively enhanced for larger screens
5. **Semantic HTML**: Better SEO, accessibility, and maintainability
6. **Inline SVGs**: No HTTP requests, easy to style with CSS
7. **Minimal JavaScript**: Only essential interactions, fully accessible
8. **Dark mode default**: Modern aesthetic, reduces eye strain

### Design Personality

- **Modern & Geometric**: Clean lines, subtle geometric accents
- **Centered Single Column**: Focus on content, optimal readability
- **Compact Spacing**: Dense but readable, professional feel
- **Ghost Buttons**: Subtle, elegant interaction style
- **Smooth Micro-interactions**: Polished user experience

---

**Built with care for Ember Coffee** ☕
