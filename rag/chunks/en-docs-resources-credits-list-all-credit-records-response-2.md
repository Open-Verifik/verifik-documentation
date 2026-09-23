---
id: "en-docs-resources-credits-list-all-credit-records-response-2"
title: "List All Credit Records — Response"
sourcePath: "docs/resources/credits/list-all-credit-records.mdx"
locale: "en"
category: "resources"
tags:
  - "credits"
  - "resources"
endpoint: "/v2/credits"
sourceAnchor: "Response"
slug: "/resources/list-all-credit-records"
url: "https://docs.verifik.co/resources/list-all-credit-records"
---

# List All Credit Records
**API path(s):** /v2/credits

## Response

```json
{
  "success": true,
  "data": [
    {
      "_id": "credit_123456789",
      "amount": 1000,
      "status": "approved",
      "category": "purchase",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "description": "Credit purchase for API usage",
      "transactionId": "txn_123456789",
      "paymentMethod": "credit_card",
      "currency": "USD",
      "exchangeRate": 1.0,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "perPage": 20,
    "total": 1,
    "pages": 1
  }
}
```

  
  

```json
{
  "success": false,
  "error": "Invalid query parameters",
  "code": "INVALID_PARAMETERS"
}
```
