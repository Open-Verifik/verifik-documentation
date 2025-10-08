---
id: credits
title: Credits
description: Credits serve as the universal currency for accessing and consuming Verifik's suite of services
---

# Credits

Credits serve as the universal currency for accessing and consuming our suite of services, including SmartCheck, SmartAccess, SmartEnroll, and more. Credits simplify billing and usage tracking by consolidating all interactions—whether via API or no-code solutions—into a single, manageable account. This system is designed to provide flexibility and scalability for clients, allowing both their staff and integrated systems to seamlessly utilize Verifik's offerings.

## Why We Use Credits

Credits are the backbone of Verifik's service consumption model. Here's why:

* **Unified Access:** Credits allow clients to access all Verifik services—such as SmartCheck (verification), SmartAccess (secure entry), and SmartEnroll (enrollment automation)—under one account. This eliminates the need for separate billing or tracking mechanisms per service.
* **Team Collaboration:** Clients can assign staff to their account, and all team members can utilize credits for their respective tasks, whether through API calls or pre-built no-code solutions.
* **API-Driven Flexibility:** Most interactions with Verifik occur via our APIs, and credits are deducted based on usage (e.g., API requests). This ensures a pay-as-you-go model that scales with your needs.
* **No-Code Simplicity:** For clients who prefer plug-and-play solutions, our no-code tools integrate seamlessly with the same credit system, allowing non-technical users to leverage Verifik's features without custom development.
* **Transparency and Control:** Credits provide a clear way to monitor usage, manage budgets, and track service consumption over time.

## API Endpoints

### List All Credit Records
```http
GET https://api.verifik.co/v2/credits
```

### Retrieve a Credit Record
```http
GET https://api.verifik.co/v2/credits/{creditId}
```

## Credit Object Structure

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

## Credit Types

- **SmartCheck Credits**: For identity and document verification
- **SmartAccess Credits**: For secure access and authentication
- **SmartEnroll Credits**: For user enrollment and onboarding
- **API Credits**: For direct API usage
- **Biometric Credits**: For biometric verification services

## Credit Management

### Purchasing Credits
Credits can be purchased through the Verifik dashboard or via API integration with your billing system.

### Usage Tracking
All credit usage is tracked in real-time and can be monitored through:
- Dashboard analytics
- API endpoints
- Webhook notifications

### Expiration
Credits have expiration dates to ensure active usage and prevent accumulation of unused credits.

## Use Cases

- **Pay-as-you-go**: Scale your usage based on actual needs
- **Team Management**: Share credits across team members
- **Budget Control**: Set limits and monitor spending
- **Service Integration**: Use credits across all Verifik services
- **Transparency**: Clear visibility into service consumption
