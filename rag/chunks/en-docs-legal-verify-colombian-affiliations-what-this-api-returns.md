---
id: "en-docs-legal-verify-colombian-affiliations-what-this-api-returns"
title: "Colombia — Health & social security affiliations — What this API returns"
sourcePath: "docs/legal/verify-colombian-affiliations.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/afiliaciones"
sourceAnchor: "What this API returns"
slug: "/legal/verify-colombian-affiliations"
url: "https://docs.verifik.co/legal/verify-colombian-affiliations"
---

# Colombia — Health & social security affiliations
**API path(s):** /v2/co/afiliaciones

## What this API returns

Verifik returns **affiliation and personal data** for a Colombian individual from official **health and social security** sources (including **RUAF / SISPRO** flows), using **document type**, **document number**, and **document issue date**. Typical blocks include **EPS** (health), **ARL** (occupational risk), **pension (AP)**, **caja de compensación**, and **cesantías**, plus **personal** fields when returned by the source.

This endpoint is **GET-only** (query parameters). Use it for **employment**, **benefits**, and **compliance** checks where this data is allowed.

## What this API returns

- **Personal** summary (names, ID line, sex, cut-off date) when available
- **EPS**: regime, affiliation date, status, municipality, etc.
- **ARL**: risk entries with administrator, activity, municipality
- **Pension (AP)**: pension regimes and administrators
- **Caja de compensación** and **cesantías** blocks (may be empty arrays)
- A **signed** Verifik response

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/afiliaciones
```

Query-only **GET**; pass **`documentType`**, **`documentNumber`**, and **`date`** (`DD/MM/YYYY`).

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | yes | One of **`CC`**, **`CE`**, **`PA`**, **`PE`**. |
| `documentNumber` | string | yes | Document number without spaces or punctuation (min. length enforced by API). |
| `date` | string | yes | **Issue date** of the document in **`DD/MM/YYYY`**. |
