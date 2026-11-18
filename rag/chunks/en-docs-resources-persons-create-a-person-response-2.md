---
id: "en-docs-resources-persons-create-a-person-response-2"
title: "Create a Person — Response"
sourcePath: "docs/resources/persons/create-a-person.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/persons"
sourceAnchor: "Response"
slug: "/resources/create-a-person"
url: "https://docs.verifik.co/resources/create-a-person"
---

# Create a Person
**API path(s):** /v2/face-recognition/persons

## Response

```json
{
  "id": "…",
  "data": {
    "_id": "…",
    "name": "John Doe",
    "gender": "M",
    "date_of_birth": "1990-01-15",
    "nationality": "US",
    "thumbnails": [],
    "collections": ["…"],
    "notes": "VIP customer",
    "client": "…",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
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
  "message": "Validation message or missing field",
  "code": "MissingParameter"
}
```

  
  

Name and date of birth are already enrolled in the requested collection. `data` is the existing person so you can update or 1:1-verify instead of guessing via 1:N search.

```json
{
  "message": "person_already_set",
  "code": "PreconditionFailed",
  "data": {
    "_id": "693c646dfd68b59e4e8d1d58",
    "name": "Maria Perez",
    "date_of_birth": "1994-02-07",
    "gender": "F",
    "collections": [
      {
        "_id": "6612a020a55c329bfb3f62e6",
        "code": "ed27d231-b437-42c5-94c5-a2130c447d1e",
        "name": "CholloApp"
      }
    ],
    "thumbnails": [
      {
        "id": "thumb-1",
        "thumbnail": ""
      }
    ]
  }
}
```

`thumbnails` are the enrolled face crops so you can show the existing person next to the photo you just tried to enroll. You can also find the same record with [Lookup a Person by Name](/resources/lookup-a-person). Very short image payloads may still return `412` with `"message": "only_images_in_base64"`.

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```
