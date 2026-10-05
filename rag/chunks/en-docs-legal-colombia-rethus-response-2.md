---
id: "en-docs-legal-colombia-rethus-response-2"
title: "Colombia — RETHUS (health professionals registry) — Response"
sourcePath: "docs/legal/colombia-rethus.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/cedula/rethus"
sourceAnchor: "Response"
slug: "/legal/colombia-rethus"
url: "https://docs.verifik.co/legal/colombia-rethus"
---

# Colombia — RETHUS (health professionals registry)
**API path(s):** /v2/co/cedula/rethus

Verifik confirms identity against **RETHUS** (*Registro Único Nacional de Talento Humano en Salud*) using **`documentType`** and **`documentNumber`**. The flow first resolves the person via the Colombian citizen lookup, then queries RETHUS for **registry status**, **academic** qualifications, and **social security / benefit (SSO)** rows when the source returns them.
Use this endpoint for **credentialing**, **compliance**, and **workforce** checks where RETHUS data is permitted.

## Response

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "123456789",
		"firstName": "MARIA",
		"lastName": "GOMEZ LOPEZ",
		"fullName": "MARIA GOMEZ LOPEZ",
		"rethus": {
			"status": "ACTIVO EN RETHUS",
			"academic": [
				{
					"type": "Pregrado",
					"originDegree": "Nacional",
					"profession": "MÉDICO GENERAL",
					"startDate": "01/01/2010",
					"administrativeAct": "…",
					"entity": "…"
				}
			],
			"dataSSO": [
				{
					"typeBenefit": "…",
					"typePlaceBenefit": "…",
					"placeBenefit": "…",
					"startDate": "…",
					"endDate": "…",
					"modalityBenefit": "…",
					"programBenefit": "…",
					"entity": "…"
				}
			]
		}
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
	"message": "documentType must be one of [CC, CE, PPT]"
}
```

## Features

- **Document types** accepted by validation: **CC**, **CE**, **PPT**
- **No issue date** required (unlike some other Colombian endpoints)
- **GET** and **POST** share the same handler

## Use cases

- **Hospital** and **clinic** credentialing
- **Regulatory** and **insurance** checks on health professionals

### Notes

- RETHUS is queried **after** a successful citizen match; if the person cannot be resolved upstream, you may see **404** or other errors.
- **`rethus.academic`** and **`rethus.dataSSO`** may be **empty arrays** when the portal returns no rows.
- Captcha or source outages can surface as **5xx** or **`Endpoint_out_of_service`**-style errors depending on handling.
- Treat responses as **sensitive personal data**; comply with Colombian health-privacy rules.
