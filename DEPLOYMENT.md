# S NEW ROOF - Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended - Full Features)

**Why Vercel?**
- Zero configuration required
- Full Next.js support including API routes
- Automatic HTTPS
- Global CDN
- Instant deployments

**Steps:**
1. Push code to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

**That's it!** Vercel will automatically:
- Detect Next.js
- Configure build settings
- Deploy to a global CDN
- Provide HTTPS

### Option 2: GoDaddy Static Hosting

**Important Limitations:**
- API routes will NOT work (chatbot needs external service)
- No server-side features
- Static HTML/CSS/JS only

**Steps:**

#### Method A: Using the Static Export

1. Build the static export:
```bash
# First, update next.config.ts to use output: "export"
bun run build
```

2. The `out/` folder contains all static files

3. Upload to GoDaddy:
   - Log into GoDaddy cPanel
   - Go to File Manager
   - Navigate to `public_html`
   - Upload contents of `out/` folder
   - Extract if needed

#### Method B: FTP Upload

1. Build locally:
```bash
bun run build
```

2. Use FTP client (FileZilla, WinSCP):
   - Host: your-server.com
   - Username: (from GoDaddy)
   - Password: (from GoDaddy)
   - Upload `out/` contents to `public_html/`

### Option 3: GoDaddy with Node.js

**Requirements:**
- GoDaddy Ultimate or higher plan
- Node.js support enabled

**Steps:**
1. Build the project:
```bash
bun run build
```

2. Upload entire project via FTP

3. SSH into server and run:
```bash
npm install -g pm2
pm2 start npm --name "snewroof" -- start
```

4. Configure `.htaccess` for reverse proxy

## Build Commands Reference

```bash
# Development
bun run dev          # Start development server

# Production Build (Vercel)
bun run build        # Build for production
bun run start        # Start production server

# Static Export (GoDaddy)
# First change output: "export" in next.config.ts
bun run build        # Creates 'out' folder

# Lint Check
bun run lint         # Check for errors
```

## Environment Variables

Create `.env` file with:
```env
# Add any API keys if needed
```

## Troubleshooting

### Vercel Deployment Issues
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Check for TypeScript errors: `bun run lint`

### GoDaddy Static Issues
1. Ensure `output: "export"` in next.config.ts
2. Check that all images are in `public/` folder
3. Verify file paths are relative

### Common Errors

**Error: "Image Optimization failed"**
- Add `images: { unoptimized: true }` to next.config.ts

**Error: "API route not found" (Static)**
- API routes don't work in static exports
- Use external API services instead

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test contact forms submit
- [ ] Test phone number links
- [ ] Test multi-language switching
- [ ] Test on mobile devices
- [ ] Check page speed
- [ ] Test all images load
- [ ] Verify HTTPS works
- [ ] Submit sitemap to Google Search Console

## Support

For deployment issues, contact:
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GoDaddy Support: [godaddy.com/help](https://godaddy.com/help)
