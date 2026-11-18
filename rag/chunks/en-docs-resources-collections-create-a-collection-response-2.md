---
id: "en-docs-resources-collections-create-a-collection-response-2"
title: "Create a Collection — Response"
sourcePath: "docs/resources/collections/create-a-collection.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/collections"
sourceAnchor: "Response"
slug: "/resources/create-a-collection"
url: "https://docs.verifik.co/resources/create-a-collection"
---

# Create a Collection
**API path(s):** /v2/face-recognition/collections

## Response

```json
{
  "data": {
    "__v": 0,
    "_id": "65175da13e81e4fabc12345",
    "code": "dac2c81b-96a6-4f19-ab54-d1a72d55b64b",
    "name": "Test Example",
    "client": "65175da13e81e4fabc12345",
    "deleted": false,
    "createdAt": "2023-09-29T23:28:33.894Z",
    "updatedAt": "2023-09-29T23:28:33.894Z",
    "description": "Example on how to create a collection"
  }
}
```

  
  

```json
{
  "message": "Access forbidden",
  "code": "Forbidden"
}
```

  
  

```json
{
  "message": "Validation message from server",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "error": "Invalid request"
}
```

### Notes

- **Authentication**: Send a valid bearer token; the new collection is associated with your client.
- **Name**: `name` is required; `description` is optional but recommended for organization.
- **Errors**: `409` / `MissingParameter` typically indicates missing or invalid body fields per API validation.
