---
id: "en-docs-resources-webhooks-the-webhook-object-example-object-2"
title: "The Webhook Object — Example Object"
sourcePath: "docs/resources/webhooks/the-webhook-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Example Object"
slug: "/resources/the-webhook-object"
url: "https://docs.verifik.co/resources/the-webhook-object"
---

# The Webhook Object

## Example Object

```json
{
  "client": "613a4b978482f60fd31bd7b7",
  "projectFlow": ["613a4b978482f60fd31bd7b8", "613a4b978482f60fd31bd7b9"],
  "statistics": {},
  "isActive": true,
  "name": "Payment Processor Webhook",
  "url": "https://example.com/webhook-endpoint",
  "description": "This webhook handles payment processing notifications.",
  "notification": {
    "email": "notify@example.com",
    "success": true,
    "fail": false
  }
}
```

### Features

- **Client Association**: Links webhooks to specific clients
- **Project Flow Integration**: Connect webhooks to multiple project flows
- **Notification Settings**: Configure email notifications for success/failure events
- **Statistics Tracking**: Monitor webhook performance and usage
- **Flexible Configuration**: Optional fields for custom descriptions and settings
