---
id: "en-docs-check-list-check-list-api-companion-auth"
title: "Check List API companion — Auth"
sourcePath: "docs/check-list/check-list-api-companion.mdx"
locale: "en"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists/{id}"
sourceAnchor: "Auth"
slug: "/check-list/api-companion"
url: "https://docs.verifik.co/check-list/api-companion"
---

# Check List API companion
**API path(s):** /v2/check-lists, /v2/check-lists/{id}

## Auth

Use this page when your **backend** should save the same playbook the Smart-Agent UI stores. For the product walkthrough, see [Check List](/check-list).

Check List CRUD does **not** run lookups and does **not** spend credits. Running a service is a normal catalog call (the same URL you already use in SmartCheck or Postman).

## Auth

Every route needs a **client JWT** (`Authorization: Bearer …`). A token without `clientId` returns `403` (`Client context required`). Lists are scoped to that client.

## Endpoints

| Method | Path | Reference |
| --- | --- | --- |
| `GET` | `/v2/check-lists` | [List checklists](/check-list/list-all-check-lists) |
| `POST` | `/v2/check-lists` | [Create a checklist](/check-list/create-a-check-list) |
| `GET` | `/v2/check-lists/{id}` | [Get a checklist](/check-list/retrieve-a-check-list) |
| `PUT` | `/v2/check-lists/{id}` | [Update a checklist](/check-list/update-a-check-list) |
| `DELETE` | `/v2/check-lists/{id}` | [Delete a checklist](/check-list/delete-a-check-list) |

List query params: `page`, `perPage` (or `limit`), and `search` (or `text`) to filter by name. See [List checklists](/check-list/list-all-check-lists) for the two `200` shapes (with and without `page`).

## Body fields

| Field | Meaning |
| --- | --- |
| `name` | Required on create. Max 150 characters. |
| `countries` | Country names you operate in (for example `Colombia`). |
| `domains` | Optional tabs: `people`, `vehicles`, `businesses`. |
| `featureCodes` | AppFeature `code` values for the services on the list. |
| `status` | `draft` (default) or `active`. Organizer label only — both work the same. |

Unknown `featureCodes` fail. A service whose country does not match the list fails unless the service is worldwide (or the list has no countries yet).
