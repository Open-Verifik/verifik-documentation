---
id: "en-docs-resources-credits-retrieve-a-credit-record-response-2"
title: "Retrieve a Credit Record — Response"
sourcePath: "docs/resources/credits/retrieve-a-credit-record.mdx"
locale: "en"
category: "resources"
tags:
  - "credits"
  - "resources"
endpoints:
  - "/v2/credits/credit_123456789"
  - "/v2/credits/{id}"
sourceAnchor: "Response"
slug: "/resources/credits/retrieve-a-credit-record"
url: "https://docs.verifik.co/resources/credits/retrieve-a-credit-record"
---

# Retrieve a Credit Record
**API path(s):** /v2/credits/credit_123456789, /v2/credits/{id}

## Response

```json
{
  "success": true,
  "data": {
    "_id": "credit_123456789",
    "amount": 1000,
    "status": "approved",
    "category": "purchase",
    "client": {
      "_id": "client_123456789",
      "name": "Example Client",
      "email": "client@example.com"
    },
    "superAdmin": {
      "_id": "admin_123456789",
      "name": "Admin User",
      "email": "admin@verifik.co"
    },
    "description": "Credit purchase for API usage",
    "transactionId": "txn_123456789",
    "paymentMethod": "credit_card",
    "currency": "USD",
    "exchangeRate": 1.0,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

  
  

```json
{
  "error": "Credit record not found",
  "message": "CREDIT_RECORD_NOT_FOUND"
}
```

  
  

```json
{
  "error": "Unauthorized",
  "message": "UNAUTHORIZED"
}
```
