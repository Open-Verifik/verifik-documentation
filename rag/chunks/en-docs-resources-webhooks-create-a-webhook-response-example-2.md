---
id: "en-docs-resources-webhooks-create-a-webhook-response-example-2"
title: "Create a Webhook — Response Example"
sourcePath: "docs/resources/webhooks/create-a-webhook.mdx"
locale: "en"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoint: "/v2/webhooks"
sourceAnchor: "Response Example"
slug: "/resources/create-a-webhook"
url: "https://docs.verifik.co/resources/create-a-webhook"
---

# Create a Webhook
**API path(s):** /v2/webhooks

## Response Example

```json
{
  "data": {
    "client": "613375a1eab2fe08527f81e2",
    "projectFlow": [
      "66df24f4c80823e06a348019"
    ],
    "isActive": true,
    "name": "Postman sample",
    "url": "https://sandbox.verifik.co/v2/webhooks/logs",
    "notification": {
      "success": false,
      "fail": true,
      "_id": "66df272bf82f3bfab17dea9a"
    },
    "_id": "66df272bf82f3bfab17dea9b",
    "updatedAt": "2024-09-09T16:49:47.373Z",
    "createdAt": "2024-09-09T16:49:47.373Z",
    "__v": 0
  }
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing url\n"
}
```

- **Project Flow Integration**: Link webhooks to specific project flows
- **Flexible Configuration**: Set custom URLs, names, and descriptions
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Comprehensive error responses for various scenarios
