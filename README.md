Languages: [English](README.md) | [Русский](README.ru.md)
---
# NOVA — Architecture & Design

A modern, responsive, and accessible landing page prototype for an architecture or design bureau. Built with a Mobile First approach, this project emphasizes customized design tokens, a magazine-style grid, and premium visual effects.

## Project Features

* **Premium UI/UX:** Sophisticated typography and carefully selected color palettes.
* **Glassmorphism:** Fixed navigation header with a frosted glass effect.
* **Interactive Grid:** A staggered magazine layout for the portfolio with hover effects.
* **Accessibility (A11y) & SEO:** Uses semantic tags, `aria-label` attributes, and supports keyboard navigation.
* **Modular Architecture:** JavaScript is divided into logical modules, and CSS is split into base styles, components, and layouts.

## Technologies

* **HTML5:** Semantic markup and accessibility.
* **CSS3:** Flexbox, CSS Grid, custom animations.
* **JavaScript (ES6+):** Modular architecture handling navigation, animations, and smooth scrolling.

## File Structure

* `index.html` — The main HTML landing page document.
* `src/` — Project source code:
  * `assets/` — Static files: local fonts (`fonts/`) and optimized images/vectors (`images/`).
  * `scripts/` — Logic: the entry script (`main.js`) and isolated features in `modules/` (`animations.js`, `navigation.js`, `smoothScroll.js`).
  * `styles/` — CSS files organized by layers (`base.css`, `components.css`, `layouts.css`).
* `package.json` / `package-lock.json` — Project dependencies and build scripts.
* `.gitignore` — Version control ignore rules.

## How to run

1. Download or clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Start the local development server using `npm run dev` (or the equivalent script in your package.json).
4. Build the optimized project for production using `npm run build`.