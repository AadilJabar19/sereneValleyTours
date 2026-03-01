# Serene Valley Tours

Modern static travel website built with React, Material UI, and Tailwind CSS. Phase 1 lean deployment version - frontend-only lead generation website.

## 🚀 Tech Stack

- **React 18** with Vite
- **Material UI v5** for components
- **Tailwind CSS** for utility styling
- **React Router v6** for navigation
- **EmailJS** for contact form submissions
- **React Hook Form** for form handling
- **React Helmet Async** for SEO metadata
#### Performance
- ✅ Lazy loading for all route components
- ✅ Code splitting (React, MUI vendors)
- ✅ Image lazy loading with `loading="lazy"`
- ✅ Optimized bundle size with tree shaking
- ✅ Individual MUI icon imports
- ✅ Tailwind CSS purge configuration

#### SEO
- ✅ React Helmet Async for dynamic metadata
- ✅ Page-specific titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Canonical URLs
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Web manifest for PWA support
- ✅ Favicon and theme color

#### Accessibility
- ✅ Semantic HTML elements (header, nav, main, footer, section, article, aside)
- ✅ ARIA labels on interactive elements
- ✅ Alt text on all images
- ✅ Proper form labels and input attributes
- ✅ Keyboard navigation support
- ✅ Color contrast compliance (WCAG AA)

#### Best Practices
- ✅ External links with `rel="noopener noreferrer"`
- ✅ HTTPS-ready configuration
- ✅ No console errors in production
- ✅ Proper meta viewport tag
- ✅ Theme color meta tag

## 📁 Project Structure

```
serene-valley-tours/
├── frontend/          # React + Vite static application
│   ├── public/
│   │   ├── favicon.svg
│   │   └── site.webmanifest
│   └── src/
│       ├── components/
│       │   ├── SEO.jsx       # SEO metadata component
│       │   ├── Navbar.jsx
│       │   └── Footer.jsx
│       ├── pages/         # Lazy-loaded route pages
│       └── App.jsx        # Route configuration with Suspense
└── README.md
```

## 🛠 Setup Instructions

### Prerequisites
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Environment Setup

1. Copy `.env.example` to `.env`
2. Sign up at [EmailJS](https://www.emailjs.com/)
3. Configure your EmailJS credentials in `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

```bash
npm run dev
```

Frontend runs on: `http://localhost:5173`

The built files in `frontend/dist` can be deployed to:
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

## 🌟 Features

- Static tour browsing and filtering
- Tour detail pages with itinerary
- Contact form with EmailJS integration
- WhatsApp integration for instant contact
- Responsive design
- Fast loading (static site)
- Zero backend dependencies
- Free hosting compatible
- SEO optimized
- Accessibility compliant
- PWA-ready
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Add email service (Gmail, Outlook, etc.)
3. Create email template with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{message}}`
4. Copy Service ID, Template ID, and Public Key to `.env`

## 📞 Contact Information

- **Phone**: +91 7006327776, +91 7006601277
- **Email**: serenevalleytours@gmail.com
- **Location**: Bemina, Srinagar, Jammu & Kashmir

## 📝 License
s
MIT
