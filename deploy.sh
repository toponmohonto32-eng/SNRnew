#!/bin/bash

# Complete Deployment Script for S NEW ROOF
# This script prepares everything for deployment

echo "🏠 S NEW ROOF - Deployment Preparation"
echo "======================================="
echo ""

# Check if running with GitHub token
if [ -n "$GITHUB_TOKEN" ]; then
    echo "🔑 GitHub token detected, configuring remote..."
    git remote set-url origin https://$GITHUB_TOKEN@github.com/toponmohonto32-eng/SNRnew.git
fi

# Run lint check
echo "🔍 Running lint check..."
bun run lint
if [ $? -ne 0 ]; then
    echo "❌ Lint errors found. Please fix them first."
    exit 1
fi
echo "✅ Lint check passed"
echo ""

# Run build check
echo "🏗️ Running build check..."
bun run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors first."
    exit 1
fi
echo "✅ Build successful"
echo ""

# Create GitHub Deployment Instructions
echo "📝 GitHub Deployment Instructions:"
echo "=================================="
echo ""
echo "Option 1: Use Personal Access Token"
echo "1. Create a Personal Access Token on GitHub:"
echo "   - Go to: https://github.com/settings/tokens"
echo "   - Click 'Generate new token (classic)'"
echo "   - Select 'repo' permissions"
echo "   - Generate and copy the token"
echo ""
echo "2. Push to GitHub:"
echo "   git remote set-url origin https://YOUR_TOKEN@github.com/toponmohonto32-eng/SNRnew.git"
echo "   git push -u origin main --force"
echo ""
echo "Option 2: Use GitHub CLI"
echo "   gh auth login"
echo "   git push -u origin main"
echo ""

# Vercel Deployment
echo "🚀 Vercel Deployment:"
echo "===================="
echo ""
echo "Option 1: Connect GitHub Repository"
echo "1. Go to https://vercel.com/dashboard"
echo "2. Open your existing project or create new"
echo "3. Go to Settings > Git"
echo "4. Connect repository: toponmohonto32-eng/SNRnew"
echo ""
echo "Option 2: Use Vercel CLI"
echo "   bunx vercel --prod"
echo ""

# GoDaddy Static Export
echo "📁 GoDaddy Static Export:"
echo "========================"
echo ""
echo "For static hosting without server features:"
echo ""
echo "1. Update next.config.ts:"
echo "   Change 'output: \"standalone\"' to 'output: \"export\"'"
echo ""
echo "2. Build static files:"
echo "   bun run build"
echo ""
echo "3. Upload 'out' folder contents to GoDaddy public_html"
echo ""

echo "✅ Preparation complete!"
echo ""
echo "For detailed instructions, see DEPLOYMENT.md"
