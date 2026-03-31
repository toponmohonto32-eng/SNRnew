# Deployment Guide for S NEW ROOF Website

## Quick Deployment Steps

### Option 1: Vercel Deployment (Recommended)

1. **Push code to GitHub**:
   ```bash
   cd /home/z/my-project
   git add .
   git commit -m "Update S NEW ROOF website"
   git push origin main
   ```
   
   If you get an authentication error, you need to create a GitHub Personal Access Token:
   - Go to https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select `repo` permissions
   - Copy the token and use it as your password

2. **Connect to Vercel**:
   - Go to https://vercel.com/dashboard
   - Click "Add New Project"
   - Import your GitHub repository: `toponmohonto32-eng/SNRnew`
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Or update existing Vercel project**:
   - Go to https://vercel.com/dashboard
   - Open your existing project (snewroof)
   - Go to Settings > Git
   - Update the repository connection to: `toponmohonto32-eng/SNRnew`

### Option 2: Manual Vercel Deployment

If you can't connect via GitHub:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
cd /home/z/my-project
vercel --prod
```

### Option 3: GoDaddy Static Hosting

For traditional hosting without server features:

1. **Build static files**:
   ```bash
   cd /home/z/my-project
   
   # Update next.config.ts to use static export
   # Change: output: "standalone" to output: "export"
   
   # Build the project
   bun run build
   ```

2. **Upload to GoDaddy**:
   - The `out/` folder contains all static files
   - Upload contents via FTP or GoDaddy File Manager
   - Point your domain to the `out/` folder

## Current Project Status

- ✅ Build successful (Next.js 16.1.3)
- ✅ Lint passed (no errors)
- ✅ All pages prerendered correctly
- ✅ Vercel configuration ready (vercel.json)
- ✅ Security headers configured
- ✅ SEO optimized (sitemap.xml, robots.txt)

## Pages Generated

- `/` - Homepage
- `/gallery/*` - Project gallery pages
- `/locations/*` - Location pages (Santa Ana, Orange County, etc.)
- `/roofing-types/*` - Roofing type pages
- `/services/*` - Service pages
- `/manufacturers` - Manufacturer certifications
- `/certifications/*` - Certification pages

## Environment Variables

Set these in Vercel dashboard (Settings > Environment Variables):
- Any API keys or secrets your application needs

## Troubleshooting

### GitHub Authentication Failed
1. Create a Personal Access Token at https://github.com/settings/tokens
2. Use token as password when pushing

### Build Fails on Vercel
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Check for environment variable issues

### Domain Configuration
1. Go to Vercel project settings
2. Add your custom domain
3. Update DNS records as instructed

## Contact

If you need assistance, check the Vercel documentation at https://vercel.com/docs
