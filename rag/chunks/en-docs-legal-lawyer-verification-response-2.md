---
id: "en-docs-legal-lawyer-verification-response-2"
title: "Colombia — Lawyer lookup — Response"
sourcePath: "docs/legal/lawyer-verification.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/rama/abogados"
  - "/v2/co/rama/abogados?documenttype=cc&documentnumber=123456789"
sourceAnchor: "Response"
slug: "/legal/lawyer-verification"
url: "https://docs.verifik.co/legal/lawyer-verification"
---

# Colombia — Lawyer lookup
**API path(s):** /v2/co/rama/abogados, /v2/co/rama/abogados?documenttype=cc&documentnumber=123456789

Verifik’s **Lawyer lookup** endpoint queries Colombia’s **public lawyer registry** (Rama Judicial integration) using **`documentType`** and **`documentNumber`**. Use it to confirm whether a person appears as a registered lawyer and to read registration-related fields returned by the source.
**Accepted `documentType` values:** **`CC`**, **`CE`**, or **`NIT`** (see parameters below).

## Response

```json
{
	"data": {
		"documentNumber": "123456789",
		"documentType": "CC",
		"firstName": "María",
		"fullName": "María González López",
		"lastName": "González López",
		"results": [
			{
				"contactId": "12345",
				"documentNumber": "123456789",
				"documentTypeId": "1",
				"documentTypeName": "Cédula de ciudadanía",
				"firstName": "María",
				"lastName": "González López",
				"nonValidityReason": "",
				"numberOfRecords": "1",
				"personalEmail": "",
				"statusName": "Vigente",
				"tarcarliceNumber": "987654"
			}
		]
	},
	"signature": {
		"message": "Certified by Verifik.co",
		"dateTime": "April 20, 2026 10:00 AM"
	},
	"id": "ABC12"
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
	"message": "Validation error (e.g. missing parameter or documentType not CC, NIT, or CE)."
}
```

  

Field names and values in `results` follow the upstream registry; additional keys may appear.

## Features

- **Registry lookup**: Search the public lawyer listing by **CC**, **CE**, or **NIT**
- **Structured results**: `results` array with per-entry fields from the source (e.g. status, identifiers)
- **Verifik signature**: `signature` and `id` on successful responses

## Use Cases

- **KYC / onboarding**: Confirm bar registration when onboarding legal professionals
- **Due diligence**: Validate lawyer status before contracting services
- **Compliance**: Evidence of professional registration in Colombia

### Notes

- **`documentType`** must be **`CC`**, **`CE`**, or **`NIT`** (validation rejects other values).
- The upstream service may return **no records**; the API then responds with **404** when nothing is found.
