#!/bin/bash

# GitHub Deployment Script for S NEW ROOF
# Run this script to deploy to GitHub

echo "🚀 Deploying S NEW ROOF to GitHub..."

# Configure git user if needed
git config user.email "deploy@snewroof.com" 2>/dev/null || true
git config user.name "S NEW ROOF Deploy" 2>/dev/null || true

# Add remote if not exists
git remote add origin https://github.com/toponmohonto32-eng/SNRnew.git 2>/dev/null || \
git remote set-url origin https://github.com/toponmohonto32-eng/SNRnew.git

# Create main branch if needed
git branch -M main

# Add all changes
git add -A

# Commit if there are changes
if git diff --staged --quiet; then
    echo "No changes to commit"
else
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
echo "Please authenticate when prompted..."
git push -u origin main --force

echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Go to https://vercel.com and import the repository"
echo "2. Or download the 'out' folder for GoDaddy static hosting"
