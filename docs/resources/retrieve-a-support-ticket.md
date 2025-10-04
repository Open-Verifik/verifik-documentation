---
id: retrieve-a-support-ticket
title: Retrieve a Support Ticket
description: Retrieve a specific support ticket using its unique identifier
---

# Retrieve a Support Ticket

**GET** `https://api.verifik.co/v2/support-tickets/{id}`

This endpoint allows you to retrieve a specific support ticket by its unique identifier, including all its threads and attachments.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Path Parameters

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the support ticket to retrieve.        |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/support-tickets/support_ticket_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
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

## Response Example

```json
{
  "success": true,
  "data": {
    "_id": "support_ticket_123456789",
    "title": "API Integration Issue",
    "description": "Having trouble integrating the biometric validation API. Getting 401 errors when trying to authenticate.",
    "status": "in_progress",
    "priority": "high",
    "category": "technical",
    "client": "client_123456789",
    "assignedTo": "agent_123456789",
    "threads": [
      {
        "author": "client_123456789",
        "message": "Having trouble integrating the biometric validation API. Getting 401 errors when trying to authenticate.",
        "timestamp": "2024-01-15T10:30:00Z",
        "type": "user"
      },
      {
        "author": "agent_123456789",
        "message": "I've reviewed your API key and it appears to be valid. Let me check the logs and get back to you.",
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
}
```

## Error Responses

```json
{
  "error": "Support ticket not found",
  "message": "SUPPORT_TICKET_NOT_FOUND"
}
```
