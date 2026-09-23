---
id: "en-docs-resources-credits-credits-api-endpoints-2"
title: "Credits — API Endpoints"
sourcePath: "docs/resources/credits/credits.mdx"
locale: "en"
category: "resources"
tags:
  - "credits"
  - "resources"
endpoints:
  - "/v2/credits"
  - "/v2/credits/{creditid}"
sourceAnchor: "API Endpoints"
slug: "/resources/credits"
url: "https://docs.verifik.co/resources/credits"
---

# Credits
**API path(s):** /v2/credits, /v2/credits/{creditid}

## API Endpoints

#### List All Credit Records
```http
GET https://api.verifik.co/v2/credits
```

#### Retrieve a Credit Record
```http
GET https://api.verifik.co/v2/credits/{creditId}
```

### Credit Object Structure

```json
{
  "id": "credit_123456789",
  "amount": 1000,
  "used": 250,
  "remaining": 750,
  "expiresAt": "2024-12-31T23:59:59Z",
  "service": "smartcheck",
  "description": "SmartCheck verification credits",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### Credit Types

- **SmartCheck Credits**: For identity and document verification
- **SmartAccess Credits**: For secure access and authentication
- **SmartEnroll Credits**: For user enrollment and onboarding
- **API Credits**: For direct API usage
- **Biometric Credits**: For biometric verification services

### Credit Management

#### Purchasing Credits
Credits can be purchased through the Verifik dashboard or via API integration with your billing system.

#### Usage Tracking
All credit usage is tracked in real-time and can be monitored through:
- Dashboard analytics
- API endpoints
- Webhook notifications

#### Expiration
Credits have expiration dates to ensure active usage and prevent accumulation of unused credits.

### Use Cases

- **Pay-as-you-go**: Scale your usage based on actual needs
- **Team Management**: Share credits across team members
- **Budget Control**: Set limits and monitor spending
- **Service Integration**: Use credits across all Verifik services
- **Transparency**: Clear visibility into service consumption
