---
id: "en-docs-resources-persons-create-a-person-with-liveness-response-2"
title: "Create a Person with Liveness — Response"
sourcePath: "docs/resources/persons/create-a-person-with-liveness.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/persons/search-live-face"
sourceAnchor: "Response"
slug: "/resources/create-a-person-with-liveness"
url: "https://docs.verifik.co/resources/create-a-person-with-liveness"
---

# Create a Person with Liveness
**API path(s):** /v2/face-recognition/persons/search-live-face

## Response

```json
{
  "id": "…",
  "data": {
    "_id": "65175da13e81e4fabc12345",
    "name": "Jane Doe",
    "gender": "F",
    "date_of_birth": "1990-01-15T00:00:00.000Z",
    "collections": ["65b9592267cc4f096dbe743d"],
    "deleted": false,
    "createdAt": "2024-01-30T20:16:34.841Z",
    "updatedAt": "2024-01-30T20:16:34.841Z"
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "…"
  }
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

or

```json
{
  "message": "token_expired",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "message": "409:duplicated_person",
  "code": "ERROR"
}
```

or validation / liveness:

```json
{
  "message": "liveness_failed (or other validation message)",
  "code": "ERROR"
}
```

  
  

```json
{
  "message": "only_images_in_base64",
  "code": "ERROR"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```

### Notes

- **Not** `POST /v2/face-recognition/persons/liveness` — the correct route is **`search-live-face`** under **`persons`**.
- **`collection_id`**: single collection `_id` (this flow does not accept a `collections` array in the request body).
- **Liveness failure**: sub-scores may surface as **409** with a message containing `liveness_failed`.
- **`liveness_min_score`** and **`min_score`** must stay between **0.5** and **1**; **`search_mode`** must be **`FAST`** or **`ACCURATE`**.
- **`images`** must be raw base64 (no `data:` URL); undersized payloads may return **412** `only_images_in_base64`.
