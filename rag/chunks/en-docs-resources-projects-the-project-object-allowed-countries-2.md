---
id: "en-docs-resources-projects-the-project-object-allowed-countries-2"
title: "The Project Object — Allowed Countries"
sourcePath: "docs/resources/projects/the-project-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Allowed Countries"
---

# The Project Object

## Allowed Countries

Use `"All"` to allow enrollment from every country. Named countries commonly used include:

| Country | Country | Country |
|---------|---------|---------|
| "Argentina" | "Germany" | "Portugal" |
| "Australia" | "Guatemala" | "Puerto Rico" |
| "Austria" | "Honduras" | "Russia" |
| "Belgium" | "Ireland" | "Spain" |
| "Brazil" | "Italy" | "Sweden" |
| "Canada" | "Mexico" | "Switzerland" |
| "Chile" | "Netherlands" | "Trinidad and Tobago" |
| "Colombia" | "Nicaragua" | "United Kingdom" |
| "Costa Rica" | "Norway" | "United States" |
| "Ecuador" | "Panama" | "Uruguay" |
| "El Salvador" | "Paraguay" | "Venezuela" |
| "France" | "Peru" | "Vietnam" |
| "Yemen" | "Uzbekistan" | |

### Example Object

```json
{
  "_id": "project_123456789",
  "name": "Example Project",
  "allowedCountries": ["Colombia", "United States"],
  "contactEmail": "test@verifik.co",
  "privacyUrl": "https://example.com/privacy",
  "termsAndConditionsUrl": "https://example.com/terms",
  "client": "client_123456789",
  "status": "active",
  "branding": {
    "logo": "https://example.com/logo.png",
    "primaryColor": "#007bff",
    "secondaryColor": "#6c757d",
    "customDomain": "auth.example.com"
  },
  "settings": {
    "defaultLanguage": "en",
    "timezone": "UTC",
    "webhookUrl": "https://example.com/webhook"
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```
