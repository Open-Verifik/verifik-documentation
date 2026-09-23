---
id: "en-docs-resources-support-tickets-list-all-support-tickets"
title: "List All Support Tickets — Endpoint"
sourcePath: "docs/resources/support-tickets/list-all-support-tickets.mdx"
locale: "en"
category: "resources"
tags:
  - "support-tickets"
  - "resources"
endpoint: "/v2/support-tickets"
sourceAnchor: "Endpoint"
slug: "/resources/list-all-support-tickets"
url: "https://docs.verifik.co/resources/list-all-support-tickets"
---

# List All Support Tickets
**API path(s):** /v2/support-tickets

## Endpoint

**GET** `https://api.verifik.co/v2/support-tickets`

Retrieve a list of support tickets with optional filtering and pagination.

#### headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

#### query parameters

#### `page`

**Type:** number  
**Required:** No

Page number for pagination.

#### `limit`

**Type:** number  
**Required:** No

Number of items per page.

#### `status`

**Type:** string  
**Required:** No

Filter by ticket status.

#### `category`

**Type:** string  
**Required:** No

Filter by ticket category.

#### `priority`

**Type:** string  
**Required:** No

Filter by ticket priority.

#### `countByStatus`

**Type:** boolean  
**Required:** No

Include status counts in response.

### Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/support-tickets",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    limit: 10,
    status: "open",
    category: "technical",
    priority: "high",
    countByStatus: true
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

### Response Example

```json
{
  "success": true,
  "data": [
    {
      "_id": "support_ticket_123456789",
      "title": "API Integration Issue",
      "description": "Having trouble integrating the biometric validation API...",
      "status": "open",
      "priority": "high",
      "category": "technical",
      "client": "client_123456789",
      "assignedTo": null,
      "tags": ["api", "authentication", "biometric"],
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  },
  "counts": {
    "open": 5,
    "pending": 3,
    "in_progress": 2,
    "resolved": 10,
    "closed": 8
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
