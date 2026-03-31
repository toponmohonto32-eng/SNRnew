# Static Distribution Folder

This folder will contain the static export of the website after running:

```bash
bun run build
```

When using `output: "export"` in next.config.ts, the build process will generate all static HTML, CSS, and JS files here.

## How to Generate

1. For Vercel deployment: Just push to GitHub and Vercel handles everything
2. For GoDaddy static: 
   ```bash
   # Update next.config.ts to use output: "export"
   bun run build
   # Files will be in 'out' folder, rename to 'dist' if needed
   ```

## What's Included

- index.html - Homepage
- services/*.html - Service pages
- locations/*.html - Location pages
- gallery/*.html - Gallery pages
- _next/static/* - CSS, JS, and static assets
- images/* - All images
- sitemap.xml - SEO sitemap
- robots.txt - Search engine directives

## Upload Instructions

Upload the entire contents of this folder to your GoDaddy `public_html` directory.
