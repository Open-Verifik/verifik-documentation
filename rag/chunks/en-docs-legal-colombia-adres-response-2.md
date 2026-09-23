---
id: "en-docs-legal-colombia-adres-response-2"
title: "Colombia — ADRES (BDUA affiliation) — Response"
sourcePath: "docs/legal/colombia-adres.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/adres"
sourceAnchor: "Response"
slug: "/legal/colombia-adres"
url: "https://docs.verifik.co/legal/colombia-adres"
---

# Colombia — ADRES (BDUA affiliation)
**API path(s):** /v2/co/adres

Verifik queries **ADRES** (*Administradora de los Recursos del Sistema General de Seguridad Social en Salud*) / **BDUA** affiliation status using **`documentType`** and **`documentNumber`**.
Use this endpoint when you need **EPS affiliation**, **regime**, and **status** from ADRES/BDUA. It is **not** the same as [`GET /v2/co/afiliaciones`](/legal/verify-colombian-affiliations), which returns a broader RUAF/SISPRO social-security bundle (EPS, ARL, pension, cajas, cesantías) and requires a document issue **`date`**.

## Response

```json
{
	"data": {
		"affiliations": [
			{
				"affiliationType": "COTIZANTE",
				"effectiveDate": "01/02/2025",
				"endDate": "31/12/2999",
				"entity": "EPS EJEMPLO S.A.",
				"regime": "CONTRIBUTIVO",
				"status": "ACTIVO"
			}
		],
		"arrayName": ["NOMBRE", "EJEMPLO"],
		"department": "CUNDINAMARCA",
		"documentNumber": "123456789",
		"documentType": "CC",
		"firstName": "NOMBRE",
		"fullName": "NOMBRE EJEMPLO",
		"lastName": "EJEMPLO",
		"municipality": "BOGOTA D.C."
	},
	"signature": {
		"dateTime": "August 10, 2026 3:00 PM",
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
	"message": "documentType must be one of [CC, CE, PA, PE, PEP, PPT]"
}
```

## Notes

- **`affiliations`** may be empty or contain inactive historical rows depending on the source.
- Treat responses as **sensitive personal / health data**; comply with Colombian privacy rules.
- For the multi-block RUAF/SISPRO product (EPS + ARL + pension + …), use [`GET /v2/co/afiliaciones`](/legal/verify-colombian-affiliations) instead.
