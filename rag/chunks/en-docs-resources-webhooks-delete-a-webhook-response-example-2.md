---
id: "en-docs-resources-webhooks-delete-a-webhook-response-example-2"
title: "Delete a Webhook — Response Example"
sourcePath: "docs/resources/webhooks/delete-a-webhook.mdx"
locale: "en"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoint: "/v2/webhooks/{id}"
sourceAnchor: "Response Example"
slug: "/resources/delete-a-webhook"
url: "https://docs.verifik.co/resources/delete-a-webhook"
---

# Delete a Webhook
**API path(s):** /v2/webhooks/{id}

## Response Example

```json
{
  "data": {
    "_id": "66df1c0ad08b9d244bd1c806",
    "client": "613375a1eab2fe08527f81e2",
    "projectFlow": [],
    "isActive": true,
    "name": "Postman sample",
    "url": "https://sandbox.verifik.co/v2/webhooks/logs",
    "notification": {
      "success": false,
      "fail": true,
      "_id": "66df1c0ad08b9d244bd1c805"
    },
    "updatedAt": "2024-09-09T16:02:18.713Z",
    "createdAt": "2024-09-09T16:02:18.713Z",
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
