---
id: "en-docs-resources-collections-delete-a-collection-response-2"
title: "Delete a Collection — Response"
sourcePath: "docs/resources/collections/delete-a-collection.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/collections"
sourceAnchor: "Response"
slug: "/resources/delete-a-collection"
url: "https://docs.verifik.co/resources/delete-a-collection"
---

# Delete a Collection
**API path(s):** /v2/face-recognition/collections

## Response

On success the API returns HTTP 200. The JSON body is `{ "data":  }`, where `data` is the collection document that was just deleted (snapshot of the record, typically including `_id`, `code`, `name`, `client`, `description`, timestamps, and related fields—same shape as [retrieve a collection](/resources/retrieve-a-collection)). The document is no longer stored in the database after this response.

```json
{
  "data": {
    "_id": "65b9592267cc4f096dbe743d",
    "deleted": false,
    "name": "Ejemplo Ene 30",
    "project": "65b955fe0577440932c77481",
    "description": "default collection for project 65b955fe0577440932c77481",
    "client": "6158e492dd0767a2b8b3f829",
    "code": "d96db430-27d2-4f43-bcff-c4b239ac6d2e",
    "updatedAt": "2024-01-30T20:16:34.841Z",
    "createdAt": "2024-01-30T20:16:34.841Z",
    "__v": 0
  }
}
```

  
  

```json
{
    "message": "Access forbidden",
    "code": "Forbidden"
}
```

  
  

Returned when the collection does not exist or is not accessible for your client.

```json
{
  "message": "invalid_collection",
  "code": "ERROR"
}
```

  
  

```json
{
  "error": "Invalid request"
}
```

### Notes

- **Irreversible**: Deletion removes the collection record and unlinks it from projects and persons.
- **No body**: Only the path `id` is required; do not send a JSON body.
- **Response**: `data` contains the deleted collection object (for audit or UI confirmation). It is not persisted after deletion.
