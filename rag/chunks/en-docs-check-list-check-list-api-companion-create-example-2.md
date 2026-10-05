---
id: "en-docs-check-list-check-list-api-companion-create-example-2"
title: "Check List API companion — Create example"
sourcePath: "docs/check-list/check-list-api-companion.mdx"
locale: "en"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoint: "/v2/check-lists"
sourceAnchor: "Create example"
slug: "/check-list/api-companion"
url: "https://docs.verifik.co/check-list/api-companion"
---

# Check List API companion
**API path(s):** /v2/check-lists

Use this page when your **backend** should save the same playbook the Smart-Agent UI stores. For the product walkthrough, see [Check List](/check-list).
Check List CRUD does **not** run lookups and does **not** spend credits. Running a service is a normal catalog call (the same URL you already use in SmartCheck or Postman).

## Create example

```
POST https://api.verifik.co/v2/check-lists
Authorization: Bearer 
Content-Type: application/json
```

```json
{
  "name": "KYC Colombia",
  "countries": ["Colombia"],
  "domains": [],
  "featureCodes": [],
  "status": "draft"
}
```

Response is `{ "data": { …checklist } }`. Store `data._id`. When the user adds services in your app, `PUT` the same id with the new `featureCodes`.

## Run a saved service

There is **no** “execute checklist” endpoint. For each code on the list, call that feature’s catalog URL the same way you would from SmartCheck. Credits apply on those calls.

To send the mix as a file or queue, use [SmartBatch](/smart-batch) (country + feature codes + name). Check List does not start the batch for you.

## Related

- [Check List](/check-list) — Smart-Agent walkthrough
- [SmartCheck](/smartcheck) — catalog APIs
- [SmartBatch](/smart-batch) — batch the saved services
