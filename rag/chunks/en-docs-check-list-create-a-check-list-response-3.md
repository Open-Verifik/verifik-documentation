---
id: "en-docs-check-list-create-a-check-list-response-3"
title: "Create a checklist — Response"
sourcePath: "docs/check-list/create-a-check-list.mdx"
locale: "en"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/api/check-lists"
  - "/v2/check-lists"
sourceAnchor: "Response"
slug: "/check-list/create-a-check-list"
url: "https://docs.verifik.co/check-list/create-a-check-list"
---

# Create a checklist
**API path(s):** /api/check-lists, /v2/check-lists

## Response

```json
{
    "data": {
        "_id": "6aa224c87034a338385c28c0",
        "client": "507f1f77bcf86cd799439013",
        "name": "KYC Colombia",
        "countries": ["Colombia"],
        "domains": [],
        "featureCodes": [],
        "status": "draft",
        "createdAt": "2026-09-10T03:32:00.000Z",
        "updatedAt": "2026-09-10T03:32:00.000Z"
    }
}
```

  
  

```json
{
    "message": "Client context required",
    "code": "Forbidden"
}
```

  
  

```json
{
    "message": "\"name\" is required",
    "code": "ValidationError"
}
```

  
  

```json
{
    "message": "check_list_invalid_feature",
    "code": "check_list_invalid_feature"
}
```

  
  

```json
{
    "message": "check_list_feature_country_mismatch",
    "code": "check_list_feature_country_mismatch"
}
```

### Notes

- `name` is the only required field. You can create an empty list and add `featureCodes` later.
- Countries are stored as you send them (for example `Colombia`). They are not ISO codes.
- `status` does not change server behavior. Draft and active lists both work.
- Unknown `domains` values fail validation. Allowed values: `people`, `vehicles`, `businesses`.
- Creating a list does not spend credits. Running a saved service is a normal catalog call.
- There is no execute-checklist endpoint. See [Check List](/check-list) and [SmartBatch](/smart-batch).
