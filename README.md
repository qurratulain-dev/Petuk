# Petuk 🍕

An animated pizza & food delivery front-end built with React. Fully responsive, with a working cart, a complete checkout flow and smooth motion throughout.

## Features

### Shopping & checkout
- **Shop:** live search, category filter and price sorting with animated layout transitions, skeleton loading and quick-add cards
- **Cart:** slide-in drawer from the navbar on any page plus a full `/cart` page — add / remove / change quantity, animated totals, free-delivery progress bar
- **Checkout (`/checkout`):** name, phone (Pakistani format), optional email, city, area, address, delivery slot and payment method with inline validation and error shake
- **Orders:** persisted locally (`localStorage`), order-success page with animated tick, confetti and a live delivery tracking stepper, plus an `/orders` history page
- **404:** custom burnt-pizza page

### Motion & interaction
- **Framer Motion:** masked word-by-word hero headline, scroll reveals, staggered cards, shrinking / hide-on-scroll navbar, page transitions, animated mobile menu, scroll progress bar
- **GSAP + ScrollTrigger:** pinned "Fresh Pizza" section and a scroll-driven delivery-route scooter
- **Lenis** smooth scrolling wired into the GSAP ticker
- **Micro-interactions:** magnetic buttons, button sweep fills, custom desktop cursor with labels, 3D tilt product cards, image clip-path reveals, marquee, count-up stats, testimonial slider
- **Cart feedback:** "fly to cart" animation and toast notifications
- Respects the OS "reduce motion" setting

## Tech
React 19 · Vite (rolldown) · Tailwind CSS v4 · React Router v7 · Framer Motion · GSAP · Lenis · Swiper · canvas-confetti

## Run locally
```bash
npm install
npm run dev
```

```bash
npm run build   # production build
npm run lint    # eslint
```
