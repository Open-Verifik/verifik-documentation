---
id: "en-docs-api-tags-search-tag-domain-specific-pricing-6"
title: "Search Tag — Domain-Specific Pricing"
sourcePath: "docs/api/tags/search-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/search"
sourceAnchor: "Domain-Specific Pricing"
---

# Search Tag
**API path(s):** /api/sessions, /api/tags/search

Search for a tag across any supported domain name (Zelf, Avax, BDAG, or other licensed domains).

## Domain-Specific Pricing

Different domains have different pricing structures:

- **Zelf**: $24 USD (1 year), $210 USD (lifetime)
- **Avax**: $18 USD (1 year)
- **BDAG**: Variable pricing based on domain configuration

## Duration Options

| Duration | Description | Typical Price Multiplier |
|----------|-------------|-------------------------|
| `1` | 1 year | 1x base price |
| `2` | 2 years | ~1.8x base price |
| `3` | 3 years | ~2.5x base price |
| `4` | 4 years | ~3.2x base price |
| `5` | 5 years | ~3.8x base price |
| `lifetime` | Lifetime | ~8.75x base price |

## Error Responses

*Error responses are documented in the response tabs above, including validation errors, authentication errors, and server errors.*
