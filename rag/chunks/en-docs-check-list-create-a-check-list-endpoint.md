---
id: "en-docs-check-list-create-a-check-list-endpoint"
title: "Create a checklist — Endpoint"
sourcePath: "docs/check-list/create-a-check-list.mdx"
locale: "en"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/api/check-lists"
  - "/v2/check-lists"
sourceAnchor: "Endpoint"
slug: "/check-list/create-a-check-list"
url: "https://docs.verifik.co/check-list/create-a-check-list"
---

# Create a checklist
**API path(s):** /api/check-lists, /v2/check-lists

## Endpoint

Create a Check List on the authenticated client. `name` is required. Countries, domains, and feature codes are optional on create — you can add services later with [Update a checklist](/check-list/update-a-check-list).

Saving the list does not run lookups and does not spend credits. In Smart-Agent, create lands you back on the dashboard; this API returns the new document immediately.

### Endpoint

```
POST https://api.verifik.co/v2/check-lists
```

Creates a list owned by the client on the JWT. The response `data` object includes `_id` — store it for later GET, PUT, and DELETE calls. Default `status` is `draft`.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

The token must be a **client JWT**. A token without `clientId` returns `403`.

### Body

| Name           | Type     | Required | Description                                                                 |
| -------------- | -------- | -------- | --------------------------------------------------------------------------- |
| `name`         | string   | Yes      | Display name. Trimmed, 1–150 characters.                                    |
| `countries`    | string[] | No       | Country names you operate in (for example `Colombia`). Duplicates are dropped. Default `[]`. |
| `domains`      | string[] | No       | Optional tabs: `people`, `vehicles`, `businesses`. Default `[]`.            |
| `featureCodes` | string[] | No       | AppFeature `code` values to save on the list. Default `[]`.                 |
| `status`       | string   | No       | `draft` (default) or `active`. Organizer label only — both work the same.   |

Unknown `featureCodes` fail. A service whose country does not match `countries` fails unless that service is worldwide or `countries` is empty.
