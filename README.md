# S NEW ROOF - Professional Roofing Website

A modern, responsive website for S NEW ROOF, a professional roofing company serving Orange County and LA County.

![S NEW ROOF](https://i.ibb.co/FbssB2VW/Untitled-design.png)

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Multi-language Support**: English and Spanish
- **Modern UI**: Built with Next.js 16, Tailwind CSS 4, and shadcn/ui
- **SEO Optimized**: Complete sitemap, robots.txt, and meta tags
- **AI Chatbot**: Integrated AI assistant for customer support
- **Contact Forms**: Go High Level integration for lead capture
- **Project Gallery**: Showcase of completed roofing projects
- **Service Pages**: Detailed pages for all roofing services
- **Location Pages**: Local SEO optimized pages for service areas

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Database**: Prisma ORM with SQLite
- **Animations**: Framer Motion
- **AI Integration**: z-ai-web-dev-sdk

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/toponmohonto32-eng/SNRnew.git

# Navigate to project directory
cd SNRnew

# Install dependencies
bun install

# Run development server
bun run dev
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

```bash
# Or deploy via CLI
bunx vercel --prod
```

### GoDaddy Static Hosting

For static hosting without server-side features:

1. Build the static export:
```bash
# Update next.config.ts: output: "export"
bun run build
```

2. The `out/` folder contains static files
3. Upload contents to GoDaddy hosting via FTP or File Manager

### GoDaddy with Node.js

For full features including API routes:

1. Ensure your GoDaddy plan supports Node.js
2. Build the project:
```bash
bun run build
```
3. Upload the entire project
4. Configure PM2 or similar process manager

## 📁 Project Structure

```
src/
├── app/
│   ├── api/              # API routes (chat, etc.)
│   ├── gallery/          # Project gallery pages
│   ├── locations/        # Location/area pages
│   ├── manufacturers/    # Manufacturer certifications
│   ├── roofing-types/    # Roofing type pages
│   ├── services/         # Service pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/
│   └── ui/               # shadcn/ui components
├── lib/
│   ├── db.ts             # Database client
│   ├── i18n/             # Internationalization
│   ├── services.ts       # Service data
│   ├── locations.ts      # Location data
│   └── roofing-types.ts  # Roofing type data
└── public/
    ├── sitemap.xml       # SEO sitemap
    ├── robots.txt        # Search engine directives
    └── [images]          # Static images
```

## 🎨 Customization

### Colors
Primary accent color: `#F97316` (Orange)

### Environment Variables
Create a `.env` file with:
```env
# Add any required environment variables
```

## 📱 Contact

- **Phone**: (714) 770-4756
- **Email**: info@snewroof.com
- **Location**: Santa Ana, Orange County, CA
- **Service Area**: Orange County & LA County

## 📄 License

© 2025 S NEW ROOF Inc. All rights reserved.

---

Built with ❤️ for S NEW ROOF
