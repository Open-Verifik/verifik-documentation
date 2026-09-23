---
id: "en-docs-resources-webhooks-update-a-webhook-response-example-2"
title: "Update a Webhook — Response Example"
sourcePath: "docs/resources/webhooks/update-a-webhook.mdx"
locale: "en"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoints:
  - "/v2/webhooks/66de320d6a5c6ef0e02d4223"
  - "/v2/webhooks/{id}"
sourceAnchor: "Response Example"
slug: "/resources/update-a-webhook"
url: "https://docs.verifik.co/resources/update-a-webhook"
---

# Update a Webhook
**API path(s):** /v2/webhooks/66de320d6a5c6ef0e02d4223, /v2/webhooks/{id}

## Response Example

```json
{
  "data": {
    "_id": "66de320d6a5c6ef0e02d4223",
    "client": "613375a1eab2fe08527f81e2",
    "projectFlow": [],
    "isActive": true,
    "name": "Updated webhook name",
    "url": "https://sandbox.verifik.co/v2/webhooks/logs",
    "notification": {
      "success": false,
      "fail": true,
      "_id": "66de320d6a5c6ef0e02d4222"
    },
    "updatedAt": "2024-09-08T23:23:57.678Z",
    "createdAt": "2024-09-08T23:23:57.678Z",
    "__v": 0
  }
}
```

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

- **Flexible Updates**: Update any webhook field independently
- **Project Flow Management**: Link or unlink project flows from webhooks
- **Partial Updates**: Only send the fields you want to change
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Proper 404 responses for non-existent webhooks
