# Social Cards Generation Guide

This guide explains how to create and optimize social sharing card images for Verifik Documentation.

## Overview

Social cards are the images that appear when your documentation is shared on social media platforms (Twitter, LinkedIn, Facebook, etc.). We need two versions:

1. **English**: `verifik-social-card-en.jpg` (1200x630px)
2. **Spanish**: `verifik-social-card-es.jpg` (1200x630px)

## Image Specifications

### Dimensions
- **Width**: 1200px
- **Height**: 630px
- **Aspect Ratio**: 1.91:1 (standard for Open Graph and Twitter Cards)
- **Format**: JPG (recommended) or PNG
- **File Size**: Keep under 1MB for faster loading

### Content Requirements

#### English Version (`verifik-social-card-en.jpg`)
- **Logo**: Verifik logo (from `https://cdn.verifik.co/LogoNegroSolo.svg`)
- **Title**: "Verifik Documentation"
- **Tagline**: "Identity Verification & KYC Solutions"
- **Subtitle** (optional): "Everything you need to verify & authenticate users faster and easier"
- **Brand Colors**: Use Verifik brand colors
- **Background**: Clean, professional background that matches brand identity

#### Spanish Version (`verifik-social-card-es.jpg`)
- **Logo**: Verifik logo (from `https://cdn.verifik.co/LogoNegroSolo.svg`)
- **Title**: "Documentación Verifik"
- **Tagline**: "Soluciones de Verificación de Identidad y KYC"
- **Subtitle** (optional): "Todo lo que necesitas para verificar y autenticar usuarios más rápido y fácil"
- **Brand Colors**: Use Verifik brand colors
- **Background**: Clean, professional background that matches brand identity

## Generation Methods

### Method 1: Using Design Tools (Recommended for Non-Developers)

#### Option A: Figma/Adobe Illustrator/Sketch
1. Create a new canvas: 1200x630px
2. Add Verifik logo
3. Add title and tagline text
4. Apply brand colors
5. Export as JPG at high quality (90-95%)
6. Optimize using tools like [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)

#### Option B: Canva
1. Go to [Canva](https://www.canva.com)
2. Search for "Facebook Post" or "Twitter Post" template
3. Customize with Verifik branding
4. Download as JPG (high quality)

### Method 2: Using the Automated Script

We've provided a Node.js script that can generate the social cards programmatically.

#### Prerequisites
```bash
npm install sharp
```

#### Usage
```bash
node scripts/generate-social-cards.js
```

This will:
- Download the Verifik logo
- Generate both English and Spanish versions
- Save them to `static/img/` directory
- Optimize the images automatically

### Method 3: Using HTML Template + Puppeteer

1. Use the provided HTML template in `scripts/social-card-template.html`
2. Run the Puppeteer script to generate images:
   ```bash
   npm install puppeteer
   node scripts/generate-social-cards-puppeteer.js
   ```

## File Placement

Once generated, place the images in:
```
static/img/
  ├── verifik-social-card-en.jpg
  └── verifik-social-card-es.jpg
```

## Testing Your Social Cards

### 1. Facebook Sharing Debugger
- Visit: https://developers.facebook.com/tools/debug/
- Enter your URL: `https://docs.verifik.co`
- Click "Scrape Again" to see how your card appears
- Check for any warnings or errors

### 2. Twitter Card Validator
- Visit: https://cards-dev.twitter.com/validator
- Enter your URL to preview how it will appear on Twitter
- Test both English and Spanish versions

### 3. LinkedIn Post Inspector
- Visit: https://www.linkedin.com/post-inspector/
- Enter your URL to see how it appears on LinkedIn

### 4. Open Graph Checker
- Visit: https://www.opengraph.xyz/
- Enter your URL to see all Open Graph tags

## Best Practices

1. **Text Readability**: Ensure text is large enough and readable (minimum 24px font size)
2. **Safe Zone**: Keep important content (logo, text) within 100px from edges (safe zone)
3. **Contrast**: Use high contrast between text and background
4. **Brand Consistency**: Use official Verifik colors and fonts
5. **Mobile Preview**: Test how it looks when cropped (some platforms crop differently)
6. **File Naming**: Use lowercase, hyphens, and descriptive names
7. **Compression**: Optimize images without losing quality (aim for 90-95% quality)

## Troubleshooting

### Image Not Showing on Social Media
- Clear the platform's cache using their debugger tools
- Verify the image URL is accessible (should be: `https://docs.verifik.co/img/verifik-social-card-en.jpg`)
- Check that the image dimensions are exactly 1200x630px
- Ensure the file size is under 1MB

### Image Looks Blurry
- Ensure you're using high-resolution source images
- Use vector graphics (SVG) for logos when possible
- Export at 90-95% quality, not 100% (over-compression can cause artifacts)

### Wrong Language Showing
- Verify the `SocialCardMeta` component is correctly detecting the locale
- Check that both image files exist in `static/img/`
- Clear browser cache and test again

## Maintenance

- Update social cards when:
  - Branding changes
  - Tagline or messaging changes
  - New major features are launched
- Review social cards quarterly to ensure they're still relevant
- Monitor social media analytics to see which cards perform best

## Resources

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/webmasters)
- [Image Optimization Guide](https://web.dev/fast/#optimize-your-images)

