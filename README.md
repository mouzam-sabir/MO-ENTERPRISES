# MO ENTERPRISES — Corporate Portfolio Website

> **"Building Businesses. Creating Opportunities."**  
> Official corporate portfolio website for **MO ENTERPRISES**, an agile, consumer-focused parent business based in Lahore, Pakistan.

---

## 1. Project Architecture

This website is custom-architected as a high-end, responsive, single-page corporate identity website using pure standards: **HTML5, CSS3, and Vanilla JavaScript (ES6+)**. No heavy frameworks, no external dependencies, no build steps required.

```
mo-enterprises-website/
│
├── index.html              # Semantic single-page HTML5 document
├── css/
│   └── style.css           # Custom dark corporate design system & responsive styles
├── js/
│   └── script.js           # Vanilla JS: scroll dynamics, centralized WhatsApp router, drawer
├── public/
│   ├── mo-enterprises-logo.png  # Centered corporate identity logo asset (5013x844)
│   └── mo-essentia-logo.png     # Flagship brand logo asset (1080x1080)
│
└── README.md               # Documentation and configuration guide
```

---

## 2. Design Direction & Palette

The design was crafted according to strict creative agency principles: dark, prestigious, understated, and editorial. It rejects AI tropes (no generic gradient heroes, floating blobs, overused glow cards, fake testimonials, or stock photos).

- **Main Background (`#080D18`)**: Deep obsidian midnight navy base.
- **Secondary Background (`#101827`)**: Slate architectural navy for subtle section contrast.
- **Gold Accent (`#B69A62`)**: Refined antique champagne gold for badges, hairline dividers, borders, and CTA emphasis.
- **Navy Accent (`#142F50`)**: Deep heritage navy for card backdrops and pill containers.
- **Main Typography (`#FFFFFF`)**: Pure white headers using **Plus Jakarta Sans** and **Cinzel**.
- **Secondary Typography (`#AAB3C2`)**: Cool muted tone for legible, editorial prose.

---

## 3. Brand Assets & Logo Preservation

Both official brand logos are rendered strictly from `public/`:
1. **MO ENTERPRISES Logo (`public/mo-enterprises-logo.png`)**:
   - Centered in the Hero section on both desktop and mobile.
   - Housed inside a bespoke ivory-finished architectural brand plaque with hairline gold accents (`#B69A62`).
   - Original colors, proportions, and transparency are 100% preserved.
2. **MO ESSENTIA Logo (`public/mo-essentia-logo.png`)**:
   - Highlighted in the **Our Brands** showcase section.
   - Preserved in original square proportions inside an architectural frame.
   - Direct external link to [https://moessentia.com](https://moessentia.com).

---

## 4. WhatsApp Configuration

All WhatsApp triggers and the floating action button are governed by a single centralized configuration in `js/script.js`:

```javascript
/**
 * CENTRAL CONFIGURATION FOR MO ENTERPRISES
 * When your official WhatsApp number is ready, insert it into WHATSAPP_NUMBER below.
 * Format: Country code without '+' or spaces, e.g., "923001234567"
 */
const WHATSAPP_NUMBER = ""; // PLACEHOLDER: Enter full WhatsApp number when available
```

### How it works:
- **When `WHATSAPP_NUMBER` is set**: Clicking any WhatsApp CTA automatically opens `https://wa.me/{WHATSAPP_NUMBER}?text={encodedMessage}` with a tailored, pre-filled business proposal message.
- **When `WHATSAPP_NUMBER` is empty (default placeholder)**: The system displays a discreet notification informing the user that the line will be announced soon, while seamlessly opening the general WhatsApp share link and directing direct email inquiries to `themoenterprises@gmail.com`.

---

## 5. Website Sections

1. **Header & Navigation**: Fixed blurred navigation bar with anchor links (`Home`, `About`, `What We Do`, `Our Brands`, `Opportunities`, `Contact`), mobile sliding drawer, and active scrollspy indicator.
2. **Hero (`#hero`)**: Centered corporate logo plaque, authoritative headline ("Building Businesses. Creating Opportunities."), supporting narrative, dual CTAs ("Explore Our Business", "Let's Talk Business"), and scroll indicator.
3. **About (`#about`)**: Company background in Lahore, Pakistan, consumer-focused approach, and four strategic pillars.
4. **What We Do (`#what-we-do`)**: Five-part editorial index (Consumer Products, B2C E-commerce, Product Selling Opportunities, Supplier Connections, Business Collaborations).
5. **Our Brands (`#brands`)**: Flagship showcase of **MO ESSENTIA** (Household, Cleaning & Kitchen products) linking to `moessentia.com`, with an expandable architecture for future brand ventures.
6. **Business Opportunities (`#opportunities`)**: 5 opportunity pathways for inventors, suppliers, and partners, with a prominent "Discuss Your Opportunity" WhatsApp action banner.
7. **Trust & Credibility (`#credibility`)**: Grounded presentation of *"Trusted by 1,000+ Consumers"* based on operational dependability and consumer-first fulfillment.
8. **Contact (`#contact`)**: Direct headquarters location, official email (`mailto:themoenterprises@gmail.com`), store link, and a genuine, functional **Inquiry Composer** that prepares proposals for WhatsApp or email.
9. **Footer**: Minimalist corporate copyright, navigation directory, and return-to-top button.
10. **Floating WhatsApp Button**: Persistent, accessible quick-contact button in the bottom right corner.

---

## 6. How to Preview Locally

Open `index.html` directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari) by double-clicking the file or serving it via a local static server:

```bash
# Python 3
python -m http.server 8000

# Node / npx
npx serve .
```
Then visit `http://localhost:8000`.

---
© 2026 MO ENTERPRISES. Lahore, Pakistan. All rights reserved.
