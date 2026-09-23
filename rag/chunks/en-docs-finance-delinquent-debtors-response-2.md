---
id: "en-docs-finance-delinquent-debtors-response-2"
title: "Colombia — Delinquent debtors (BDME) — Response"
sourcePath: "docs/finance/delinquent-debtors.mdx"
locale: "en"
category: "finance"
tags:
  - "co"
  - "finance"
endpoint: "/v2/co/deudoresmorosos"
sourceAnchor: "Response"
slug: "/finance/delinquent-debtors"
url: "https://docs.verifik.co/finance/delinquent-debtors"
---

# Colombia — Delinquent debtors (BDME)
**API path(s):** /v2/co/deudoresmorosos

Verifik queries **BDME** (*Base de Datos de Morosos*), the Colombian **delinquent debtors bulletin** published by **Contaduría General de la Nación** (via the official **BDME** web portal), using **`documentType`** and **`documentNumber`**. The integration returns a **status** line and **reporting** fields when the source responds with a match.
Use this for **credit risk**, **onboarding**, and **compliance** checks where BDME consultation is allowed.

## Response

```json
{
	"data": {
		"documentType": "NIT",
		"documentNumber": "800096561",
		"reportingEntity": "…",
		"reportedName": "…",
		"phone": "…",
		"city": "…",
		"status": "…"
	},
	"signature": {
		"dateTime": "January 16, 2024 3:44 PM",
		"message": "Certified by Verifik.co"
	}
}
```

  
  

```json
{
	"code": "NotFound",
	"message": "Record not found."
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "missing documentType\n. missing documentNumber\n"
}
```

## Features

- **Natural persons and companies** (e.g. **NIT**) supported via `documentType`
- **GET** query parameters only
- Captcha-backed upstream flow (failures may surface as **5xx** or service errors)

## Use cases

- **Lending** and **credit** decisioning
- **Vendor** and **KYB** risk checks

### Notes

- Both **`documentType`** and **`documentNumber`** are **required**; the API returns **409** if either is missing.
- BDME is an official **debtor bulletin**; interpret **`status`** and entity fields under your legal and policy rules.
- Upstream **captcha** or portal outages may cause failures (e.g. captcha resolution errors).
- **PPT** uses the integration’s **PPT** mapping; confirm behaviour in your environment if you rely on it.
