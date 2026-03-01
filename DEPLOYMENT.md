# Deployment Guide - Phase 1

## Overview
This is a static frontend-only application with no backend dependencies. It can be deployed to any static hosting service for free.

## Pre-Deployment Checklist

- [ ] Install dependencies: `npm install`
- [ ] Configure EmailJS environment variables
- [ ] Test build locally: `npm run build`
- [ ] Test preview: `npm run preview`

## Vercel Deployment (Recommended)

### Option 1: Vercel CLI

```bash
cd frontend
npm i -g vercel
vercel
```

### Option 2: Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Set root directory to `frontend`
5. Add environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Deploy

## Netlify Deployment

```bash
cd frontend
npm run build
```

Drag and drop the `dist` folder to Netlify dashboard, or:

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

Add environment variables in Netlify dashboard.

## GitHub Pages

```bash
cd frontend
npm run build
```

Push `dist` folder contents to `gh-pages` branch.

## Environment Variables

All hosting platforms need these variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Post-Deployment

1. Test contact form
2. Verify all tour pages load
3. Check WhatsApp links work
4. Test on mobile devices

## Custom Domain

Configure custom domain in your hosting provider's dashboard.

## Cost

**$0/month** - All services offer free tier for static sites.
