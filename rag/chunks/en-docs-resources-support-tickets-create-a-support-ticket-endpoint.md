---
id: "en-docs-resources-support-tickets-create-a-support-ticket-endpoint"
title: "Create a Support Ticket — Endpoint"
sourcePath: "docs/resources/support-tickets/create-a-support-ticket.mdx"
locale: "en"
category: "resources"
tags:
  - "support-tickets"
  - "resources"
endpoint: "/v2/support-tickets"
sourceAnchor: "Endpoint"
slug: "/resources/create-a-support-ticket"
url: "https://docs.verifik.co/resources/create-a-support-ticket"
---

# Create a Support Ticket
**API path(s):** /v2/support-tickets

## Endpoint

**POST** `https://api.verifik.co/v2/support-tickets`

This endpoint allows you to create a new support ticket for customer support and issue tracking.

#### headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

#### body parameters

#### `title`

**Type:** string  
**Required:** Yes

The title or subject of the support ticket.

#### `description`

**Type:** string  
**Required:** Yes

Detailed description of the issue or request.

#### `priority`

**Type:** string  
**Required:** Yes

Priority level: `low`, `medium`, `high`, `urgent`

#### `category`

**Type:** string  
**Required:** Yes

Category: `technical`, `billing`, `account`, `feature_request`, `general`

#### `tags`

**Type:** array of string  
**Required:** No

Array of tags for categorizing the ticket.

#### `attachments`

**Type:** array of object  
**Required:** No

Array of file attachments.

### Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/support-tickets",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    title: "API Integration Issue",
    description: "Having trouble integrating the biometric validation API. Getting 401 errors when trying to authenticate.",
    priority: "high",
    category: "technical",
    tags: ["api", "authentication", "biometric"],
    attachments: [
      {
        filename: "error_logs.txt",
        url: "https://storage.verifik.co/attachments/error_logs.txt",
        size: 1024,
        type: "text/plain"
      }
    ]
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
