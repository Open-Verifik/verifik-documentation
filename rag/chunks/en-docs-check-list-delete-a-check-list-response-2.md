---
id: "en-docs-check-list-delete-a-check-list-response-2"
title: "Delete a checklist — Response"
sourcePath: "docs/check-list/delete-a-check-list.mdx"
locale: "en"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists/${id}"
  - "/v2/check-lists/{check_list_id}"
  - "/v2/check-lists/{id}"
sourceAnchor: "Response"
slug: "/check-list/delete-a-check-list"
url: "https://docs.verifik.co/check-list/delete-a-check-list"
---

# Delete a checklist
**API path(s):** /v2/check-lists, /v2/check-lists/${id}, /v2/check-lists/{check_list_id}, /v2/check-lists/{id}

## Response

```json
{
    "data": {
        "_id": "6aa224c87034a338385c28c0",
        "client": "507f1f77bcf86cd799439013",
        "name": "KYC Colombia",
        "countries": ["Colombia", "Chile"],
        "domains": ["people"],
        "featureCodes": ["co-cedula"],
        "status": "draft",
        "createdAt": "2026-09-10T03:32:00.000Z",
        "updatedAt": "2026-09-10T03:33:00.000Z"
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
    "message": "check_list_not_found",
    "code": "check_list_not_found"
}
```

### Notes

- The `200` body is the deleted document, not an empty object.
- Invalid ObjectIds and lists from other clients both return `404` (`check_list_not_found`).
- Delete does not spend credits and does not cancel catalog or SmartBatch work.
- There is no execute-checklist endpoint. See [Check List](/check-list) and [SmartBatch](/smart-batch).
