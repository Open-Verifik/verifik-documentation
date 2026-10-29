---
id: "en-docs-resources-persons-the-person-object-example-object-2"
title: "The Person Object — Example Object"
sourcePath: "docs/resources/persons/the-person-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Example Object"
slug: "/resources/the-person-object"
url: "https://docs.verifik.co/resources/the-person-object"
---

# The Person Object

## Example Object

```json
{
  "_id": "person_123456789",
  "name": "John Doe",
  "gender": "M",
  "date_of_birth": {
    "year": 1990,
    "month": 1,
    "day": 15
  },
  "nationality": "US",
  "images": [
    "base64_encoded_image_1",
    "base64_encoded_image_2"
  ],
  "collections": ["collection_123456789"],
  "notes": "VIP customer",
  "client": "client_123456789",
  "status": "active",
  "faceEncodings": [
    "face_encoding_1",
    "face_encoding_2"
  ],
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### Related endpoints

- [Create a Person](/resources/create-a-person)
- [Create a Person with Liveness](/resources/create-a-person-with-liveness)
- [List All Persons](/resources/list-all-persons)
- [Retrieve a Person](/resources/retrieve-a-person)
- [Update a Person](/resources/persons/update-a-person)
- [Delete a Person](/resources/persons/delete-a-person)
