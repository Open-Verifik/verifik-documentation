---
id: "en-docs-resources-support-tickets-the-support-ticket-object-example-object-2"
title: "The Support Ticket Object — Example Object"
sourcePath: "docs/resources/support-tickets/the-support-ticket-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Example Object"
slug: "/resources/the-support-ticket-object"
url: "https://docs.verifik.co/resources/the-support-ticket-object"
---

# The Support Ticket Object

## Example Object

```json
{
  "_id": "support_ticket_123456789",
  "title": "API Integration Issue",
  "description": "Having trouble integrating the biometric validation API. Getting 401 errors.",
  "status": "in_progress",
  "priority": "high",
  "category": "technical",
  "client": "client_123456789",
  "assignedTo": "agent_123456789",
  "threads": [
    {
      "author": "client_123456789",
      "message": "I'm getting 401 errors when trying to use the biometric validation endpoint.",
      "timestamp": "2024-01-15T10:30:00Z",
      "type": "user"
    },
    {
      "author": "agent_123456789",
      "message": "I've reviewed your API key and it appears to be valid. Let me check the logs.",
      "timestamp": "2024-01-15T11:00:00Z",
      "type": "agent"
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
  "updatedAt": "2024-01-15T11:00:00Z",
  "resolvedAt": null
}
```
