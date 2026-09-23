---
id: "en-docs-resources-persons-lookup-a-person-response-2"
title: "Lookup a Person by Name — Response"
sourcePath: "docs/resources/persons/lookup-a-person.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/api/face-recognition/persons/lookup"
  - "/v2/face-recognition/persons/lookup"
sourceAnchor: "Response"
slug: "/resources/lookup-a-person"
url: "https://docs.verifik.co/resources/lookup-a-person"
---

# Lookup a Person by Name
**API path(s):** /api/face-recognition/persons/lookup, /v2/face-recognition/persons/lookup

## Response

```json
{
  "data": [
    {
      "_id": "693c646dfd68b59e4e8d1d58",
      "name": "Maria Perez",
      "date_of_birth": "1994-02-07",
      "gender": "F",
      "thumbnails": [
        {
          "id": "thumb-1",
          "thumbnail": ""
        }
      ],
      "collections": [
        {
          "_id": "6612a020a55c329bfb3f62e6",
          "code": "ed27d231-b437-42c5-94c5-a2130c447d1e",
          "name": "CholloApp"
        }
      ]
    }
  ],
  "total": 1
}
```

An unknown name returns `200` with `"data": []` and `"total": 0`. That is not a 404.

  
  

```json
{
  "message": "name is required",
  "code": "MissingParameter"
}
```

or `"message": "name_too_short"` when the name has fewer than 3 characters after stripping digits.

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

### Notes

- Prefer this helper (or the `data` object on `412 person_already_set`) over a 1:N search when you know part of the name and optional date of birth. Both include `thumbnails` so you can show the enrolled face next to a new capture.
- A first name alone is enough (`name=Maria`). Add `date_of_birth` when many people share that given name.
- `POST /v2/face-recognition/persons` uniqueness is also **name + date of birth** in a collection, not face similarity.
- `collections[].code` is the value face search expects as `collection_id`.
