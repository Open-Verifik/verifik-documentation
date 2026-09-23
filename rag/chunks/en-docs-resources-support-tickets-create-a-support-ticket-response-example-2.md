---
id: "en-docs-resources-support-tickets-create-a-support-ticket-response-example-2"
title: "Create a Support Ticket — Response Example"
sourcePath: "docs/resources/support-tickets/create-a-support-ticket.mdx"
locale: "en"
category: "resources"
tags:
  - "support-tickets"
  - "resources"
endpoint: "/v2/support-tickets"
sourceAnchor: "Response Example"
slug: "/resources/create-a-support-ticket"
url: "https://docs.verifik.co/resources/create-a-support-ticket"
---

# Create a Support Ticket
**API path(s):** /v2/support-tickets

## Response Example

```json
{
  "success": true,
  "data": {
    "_id": "support_ticket_123456789",
    "title": "API Integration Issue",
    "description": "Having trouble integrating the biometric validation API. Getting 401 errors when trying to authenticate.",
    "status": "open",
    "priority": "high",
    "category": "technical",
    "client": "client_123456789",
    "assignedTo": null,
    "threads": [
      {
        "author": "client_123456789",
        "message": "Having trouble integrating the biometric validation API. Getting 401 errors when trying to authenticate.",
        "timestamp": "2024-01-15T10:30:00Z",
        "type": "user"
      }
    ],
    "attachments": [
      {
        "filename": "error_logs.txt",
        "url": "https://storage.verifik.co/attachments/error_logs.txt",
        "size": 1024,
        "type": "text/plain"
      }
    ],
    "tags": ["api", "authentication", "biometric"],
    "resolution": null,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z",
    "resolvedAt": null
  }
}
```

```json
{
  "error": "Title is required",
  "message": "TITLE_REQUIRED"
}
```

```json
{
  "error": "Invalid priority level",
  "message": "INVALID_PRIORITY"
}
```
