---
id: "en-docs-identity-validation-colombia-colombian-cedula-premium-api-reference"
title: "Colombia — National ID premium lookup (CC) — API reference"
sourcePath: "docs/identity-validation/colombia/colombian-cedula-premium.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/premium"
sourceAnchor: "API reference"
slug: "/identity-validation/colombia/colombian-cedula-premium"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-cedula-premium"
---

# Colombia — National ID premium lookup (CC)
**API path(s):** /v2/co/cedula/premium

## API reference

**Purpose:** confirm a **Colombian *Cédula de Ciudadanía* (CC)** against official sources and return a **structured identity record** suitable for KYC and compliance workflows—not a binary pass/fail on the number alone. The response reflects **how the name is recorded**, **date of birth**, **place and date of issue**, and—where provided by sources—**gender** and **alive status**, with a **signed certification** block in the response. **Submit only the document number**; the **issue date is resolved server-side** (no `documentType` or issue date in the request). Record depth matches [**cédula extra**](/identity/colombia-full-id). Credit consumption is **higher** than the [**basic cédula endpoint**](/identity-validation/colombia/colombian-citizen) because of additional resolution steps.

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/cedula/premium
```

**Response:** Returns **`data`** (identity attributes returned for the submitted number), **`signature`** (certification metadata for the payload), and **`id`** (request identifier). **HTTP 404** indicates that a complete identity record could not be assembled for the supplied number under this workflow. **HTTP 409** indicates that the request failed validation (for example, `documentNumber` length) before upstream resolution. Per-request **credit cost** exceeds the basic `/v2/co/cedula` route because of the chained resolution.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentNumber` | string | Yes | CC number, **digits only** after normalization (non-digits stripped). **5–10** characters (API validation). |
