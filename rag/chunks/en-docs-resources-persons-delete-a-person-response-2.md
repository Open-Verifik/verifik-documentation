---
id: "en-docs-resources-persons-delete-a-person-response-2"
title: "Delete a Person — Response"
sourcePath: "docs/resources/persons/delete-a-person.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons"
  - "/v2/face-recognition/persons/${id}"
  - "/v2/face-recognition/persons/{id}"
  - "/v2/face-recognition/persons/{person_id}"
sourceAnchor: "Response"
slug: "/resources/persons/delete-a-person"
url: "https://docs.verifik.co/resources/persons/delete-a-person"
---

# Delete a Person
**API path(s):** /v2/face-recognition/persons, /v2/face-recognition/persons/${id}, /v2/face-recognition/persons/{id}, /v2/face-recognition/persons/{person_id}

## Response

```json
{
  "id": "…",
  "data": {
    "_id": "person_123456789"
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
  "error": "Person not found",
  "message": "PERSON_NOT_FOUND"
}
```

  
  

```json
{
  "message": "Validation message",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```

### Notes

- **Permanent deletion**: when the full person is removed, face encodings and related enrollment data are deleted; this cannot be undone.
- **`collection` query**: use when you only need to remove membership from one collection; if the person still belongs to others, the record may remain.
- **404** if `{id}` does not exist or is outside your client scope.
