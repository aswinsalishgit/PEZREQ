# PEZREQ Implementation Plan

## 1. Current Architecture
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling System:** Tailwind CSS v4 (configured via PostCSS and `@theme` in `globals.css`)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Component Architecture:** Server Components by default, Client Components for interactive UI (e.g., Navbar).
- **Existing Routes:** `/` (homepage).
- **Data Architecture:** Mock data structured in `src/data/products.ts` and `src/data/collections.ts`.

## 2. Asset Inventory
- `favicon.png` (2000x2000): High-resolution icon for metadata.
- `pezreq logo.png` (2000x2000): Square logo graphic, likely transparent. Role: Brand identity for navigation and footer.
- `pezreq banner.png` (1280x720): 16:9 banner graphic. Role: Fallback poster image for the video and Open Graph image.
- `samplevideo.mp4` (~104MB): High-quality hero video asset. Tracked via Git LFS. Role: Cinematic autoplay loop for the homepage hero section.

## 3. Design System Plan
- **Palette:** Warm white (Ivory), soft champagne, deep charcoal, near-black, muted metallic gold, restrained warm grey.
- **Typography:** Playfair Display (Serif) for large architectural headings. Inter (Sans-serif) for metadata, UI elements, and running copy.
- **Motion:** 300–900ms micro-interactions, smooth easing, and cinematic reveals.
- **Layout:** Generous whitespace, asymmetric layouts, distinct section rhythms.

## 4. Route Architecture
- `/` (Homepage)
- `/shop` (All Products)
- `/shop/rings`, `/shop/necklaces`, `/shop/bracelets`, `/shop/earrings`
- `/collections`, `/collections/[slug]`
- `/product/[slug]` (Product Detail Page)
- `/about`
- `/journal`, `/journal/[slug]`
- `/contact`
- `/search`
- `/cart`
- `/wishlist`

## 5. Component Architecture
- `src/components/layout/Navbar.tsx`: Transparent floating navigation, dynamic background on scroll, responsive drawer.
- `src/components/layout/Footer.tsx`: Large luxury footer with brand statement and newsletter.
- `src/components/ui/*`: Reusable UI elements (buttons, inputs).
- `src/components/product/*`: Product cards, grids, image galleries.
- `src/components/home/*`: Modular sections for the homepage.

## 6. Implementation Stages
1. **Stage 01:** Repository and Asset Audit (Current Phase).
2. **Stage 02:** Design System & Layout Foundation (Typography, Colors, Navbar, Footer).
3. **Stage 03:** Cinematic Homepage (Hero Video, Collections, Product Carousel).
4. **Stage 04:** Product Listing Pages & Collection Architecture.
5. **Stage 05:** Product Detail Page & Shopping Flow (Cart Drawer, Mock Checkout).
6. **Stage 06:** Editorial Pages (About, Journal).
7. **Stage 07:** Polish & Performance (SEO, Accessibility, Animation tuning).

## 7. Known Risks
- **Video Performance:** The `samplevideo.mp4` is quite large (~104MB). It could impact Largest Contentful Paint (LCP) if not handled properly on mobile. A poster image and lazy loading strategy where appropriate will be essential.
- **Mobile Experience:** The cinematic desktop layout must be heavily adapted for mobile to avoid horizontal scrolling and maintain the luxury feel.
- **Hydration Errors:** Heavy use of Framer Motion requires careful boundaries between Server and Client components to prevent hydration mismatches.
