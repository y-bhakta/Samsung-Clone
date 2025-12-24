# Samsung Clone — Frontend Project

A clean, responsive frontend clone of the Samsung product site built with static HTML, CSS and JavaScript. This repository demonstrates layout, responsive design, simple product data fetching from `products.json`, and an asset organization suitable for small static ecommerce landing pages.

---

## Table of Contents

- Project Overview
- Features
- Tech Stack
- Getting Started
- Usage
- Project Structure
- Assets & Images
- Development & Contributing
- Testing
- Accessibility
- Known Issues
- Roadmap
- License & Credits

---

## Project Overview

`Samsung Clone` is a static-site implementation that mimics core sections and UX patterns from a modern electronics storefront. It's intended for learning, portfolio demonstration, and as a starting point for small static projects.

Key goals:

- Showcase responsive layout and component structure.
- Load product data from `products.json` and render card grids.
- Keep the project lightweight and framework-free for easy customization.

## Features

- Responsive homepage and product listing layout
- Product data driven from `products.json`
- Modular assets: CSS, images, and JS separated under `assets/`
- Small, accessible mark-up and keyboard-friendly navigation

## Tech Stack

- HTML5
- CSS3 (including `assets/css/style.css`, `bootstrap.min.css`)
- Plain JavaScript (`assets/app.js`)
- Static JSON data (`products.json`)


## Project Structure

- `index.html` — Main page
- `products.json` — Product dataset used by `assets/app.js`
- `assets/`
	- `app.js` — Frontend JS for rendering and interactivity
	- `css/` — `bootstrap.min.css`, `style.css`, `media.css`, `remixicon.css`
	- `img/` — All image assets (product images, banners, icons)
	- `js/` — third-party JS like `bootstrap.bundle.min.js`

## Assets & Images

All images are stored in `assets/img/`. To add or swap screenshots and product photography:

1. Add your image files to `assets/img/` (prefer web-optimized formats like AVIF/WebP/JPEG).
2. Use relative paths in HTML or CSS, for example:

```html
<img src="assets/img/your-image.avif" alt="Descriptive alt text">
```

### Screenshots / Demo Images

- Hero banner: <img src="./assets/img/Screenshot 2025-12-24 133821.png">
- Product grid example: <img src="./assets/img/Screenshot 2025-12-24 133906.png">
- Additional screenshot: <img src="./assets/img/Screenshot 2025-12-24 133925.png">

## Development & Contributing

To contribute:

1. Fork the repo.
2. Create a feature branch: `git checkout -b feat/your-change`.
3. Make changes and test locally.
4. Open a pull request describing your changes.

Coding guidelines:

- Keep markup semantic and accessible.
- Add CSS in `assets/css/style.css` or `media.css` for layout tweaks.
- Keep JS simple and modular; prefer feature detection over heavy polyfills.

## Testing

Manual testing checklist:

- Check responsiveness across viewport sizes.
- Keyboard navigation and focus states for interactive elements.
- Validate that product data from `products.json` renders correctly.

Automated tests: none included — this is a static frontend scaffold.

## Accessibility

- Use descriptive `alt` attributes for all images.
- Ensure contrast ratio meets WCAG guidelines for text over backgrounds.
- Use semantic HTML landmarks (`header`, `main`, `nav`, `footer`).

## Known Issues

- No server-side rendering — product loading requires a server or permissive local file access.
- No build tooling (minification, bundling) included.

## Roadmap

- Add a lightweight build step (optional): bundling, minification.
- Add interactive cart demo with localStorage persistence.
- Add tests and CI checks for linting.

## License & Credits

This project is provided for learning and portfolio purposes. If you want a license applied, add a `LICENSE` file (MIT recommended for demos).

Credits:

- Design inspiration: Samsung public website
- Project created and organized as a static frontend clone

## Contact

If you'd like help extending this project or want improvements, open an issue or reach out via the repo contact details.

---

If you want, I can also:

- Add a set of screenshot images into `assets/img/` and insert them into this README.
- Add a `package.json` and simple dev script for starting a local server.

Let me know which of the above you'd like me to do next.

## Live Demo

https://samsung-clone-gamma.vercel.app/