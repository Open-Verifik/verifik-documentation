---
id: "en-docs-legal-colombia-copnia-license-response-2"
title: "Colombia — COPNIA professional license by matrícula — Response"
sourcePath: "docs/legal/colombia-copnia-license.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/copnia/matricula"
sourceAnchor: "Response"
slug: "/legal/colombia-copnia-license"
url: "https://docs.verifik.co/legal/colombia-copnia-license"
---

# Colombia — COPNIA professional license by matrícula
**API path(s):** /v2/co/copnia/matricula

Verifik queries **COPNIA** (*Consejo Profesional Nacional de Ingeniería*) using a single **`licenseNumber`** (matrícula). Use this when you already have the registration number and need the holder and license status.

## Response

```json
{
	"data": {
		"arrayName": ["HENRY", "ANDRES", "CASTANEDA", "ACOSTA"],
		"documentNumber": "80176161",
		"documentType": "CC",
		"firstName": "HENRY ANDRES",
		"fullName": "HENRY ANDRES CASTANEDA ACOSTA",
		"lastName": "CASTANEDA ACOSTA",
		"licenseNumber": "091132-0839078 CNDC",
		"licenseStatus": "VIGENTE",
		"licenseType": "MATRICULA PROFESIONAL",
		"profession": "INGENIERIA DE SOFTWARE",
		"resolutionDate": "2026-07-27",
		"resolutionNumber": "RN2026NALA032094"
	},
	"signature": {
		"dateTime": "September 15, 2026 9:00 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "ABCDE"
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
	"message": "licenseNumber length must be at least 6 characters long"
}
```

## Features

- Lookup by **matrícula** without sending a document number
- **GET** query parameters only
- **Sandbox** echoes a fixed COPNIA-shaped payload for the sample license
- Responses are **signed** and billed as an `apiRequest` hybrid feature

## Use cases

- Confirm a **printed or submitted** COPNIA registration number
- Recheck **status** (`VIGENTE` vs other source values) during onboarding
- Cross-check a license found earlier via [COPNIA by document](/legal/colombia-copnia)

### Notes

- Sandbox license example: **`091132-0839078 CNDC`**. The matching sandbox person is **`CC` / `80176161`**.
- Values that normalize to an empty string after cleanup return **`409`** (`invalid_license_number`).
- A source or session failure can return **`409`** with `timeout_data_source`.
- Treat responses as **sensitive personal data** and follow Colombian habeas data rules.
