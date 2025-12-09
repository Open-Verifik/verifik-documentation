# Social Card Image Approaches - Comparison

## Two Approaches Explained

### Approach 1: Frontmatter (Manual) ✅ Recommended for Specific Pages
```markdown
---
id: argentina
title: Argentina
image: /img/verifik-social-card-en.jpg
---
```

**Pros:**
- ✅ Explicit and clear - you see exactly what image each page uses
- ✅ Per-page control - can use different images for specific pages
- ✅ Docusaurus automatically uses it for Open Graph
- ✅ Easy to understand when reviewing a page

**Cons:**
- ❌ Manual work - must add to every page
- ❌ Easy to forget - new pages won't have it automatically
- ❌ Repetitive - same image path repeated many times
- ❌ Maintenance burden - if path changes, need to update all pages

### Approach 2: Component (Automatic) ✅ Recommended for Default Behavior
```jsx
// SocialCardMeta component automatically detects language from URL
// Works for ALL pages without any frontmatter needed
```

**Pros:**
- ✅ Automatic - works for all pages without modification
- ✅ Zero maintenance - set it once, works forever
- ✅ Consistent - same logic everywhere
- ✅ Easy to update - change once, affects all pages

**Cons:**
- ❌ Less explicit - can't see the image in the page source
- ❌ All pages use same logic (unless you override)

## Best Practice: Hybrid Approach 🎯

**Use the component as the default** (automatic for all pages), and **allow frontmatter to override** when needed.

### How It Works:

1. **Default behavior** (no frontmatter needed):
   - Component automatically detects language from URL path
   - `/docs-es/*` → Spanish card
   - Everything else → English card
   - Works for ALL pages automatically

2. **Override when needed** (add frontmatter):
   ```markdown
   ---
   image: /img/custom-page-image.jpg  # Overrides default
   ---
   ```
   - Use this only for pages that need custom images
   - Docusaurus will use this instead of the component's default

### Current Implementation:

Right now, we have BOTH running:
- ✅ Component sets default images automatically
- ✅ Frontmatter can specify custom images (Docusaurus handles this)

**The issue:** If you add `image:` to frontmatter, it might conflict with the component. We should make the component smarter to check for frontmatter first.

## Recommendation

**For your use case**, I recommend:

1. **Keep the automatic component** - It works for all pages automatically
2. **Remove frontmatter `image:` from pages** - Not needed since component handles it
3. **Only add frontmatter `image:` if**:
   - A specific page needs a unique/custom social card
   - You want to override the default for that page

This way:
- ✅ Zero maintenance for 99% of pages
- ✅ Automatic language detection
- ✅ Option to customize when needed

Would you like me to:
1. Remove the `image:` fields we just added (since component handles it automatically)?
2. Or keep both and make the component smarter to respect frontmatter overrides?

