---
id: "en-docs-identity-validation-colombia-colombian-politically-exposed-persons-response-2"
title: "Colombia — Politically exposed persons (PEP) lookup — Response"
sourcePath: "docs/identity-validation/colombia/colombian-politically-exposed-persons.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/politically-exposed-persons"
sourceAnchor: "Response"
slug: "/identity-validation/colombia/colombian-politically-exposed-persons"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-politically-exposed-persons"
---

# Colombia — Politically exposed persons (PEP) lookup
**API path(s):** /v2/co/politically-exposed-persons

This endpoint performs **AML / compliance** screening: it checks whether a **Colombian natural person** or **business** appears in **politically exposed persons (PEP)** sources used by Verifik, including declaration-related detail when returned by the integration.
This is **not** the immigration **PEP** (*Permiso Especial de Permanencia*). For Migración Colombia’s special stay permit, use [Colombia — PEP (Special Stay Permit)](/identity/colombia-pep-id).

## Response

```json
{
	"data": {
		"documentNumber": "123456789",
		"documentType": "CC",
		"detail": [
			{
				"declarant": "Juan Pérez",
				"entity": "Ministerio de Hacienda",
				"positionContractor": "Ministro",
				"publicationType": "Declaración de Bienes",
				"declaration": "12345",
				"publicationDate": "15/03/2023",
				"declarationStatus": "Activa"
			}
		]
	},
	"signature": {
		"dateTime": "August 22, 2023 8:02 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "PEP001"
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
	"message": "documentType must be one of: [CC, NIT]"
}
```

## Features

- **CC and NIT** support for individuals and companies
- **Structured PEP / declaration-style fields** when returned by the source
- Suitable for **KYC/AML** workflows that require PEP identification in Colombia

## Use cases

- **Banks and fintech** applying enhanced due diligence
- **Compliance programs** that must screen Colombian IDs against PEP datasets

### Notes

- **`documentType`** must be exactly **`CC`** or **`NIT`** (validated by the API).
- A **404** often means no PEP record was found for that query (or upstream data is unavailable).
- Naming collision: **PEP** here means **politically exposed person** (AML), not the immigration permit documented under [Colombia — PEP (Special Stay Permit)](/identity/colombia-pep-id).
