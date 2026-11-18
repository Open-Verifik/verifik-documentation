---
id: "en-docs-certificates-sena-certificates-response-2"
title: "Colombia — SENA Certificates — Response"
sourcePath: "docs/certificates/sena-certificates.mdx"
locale: "en"
category: "certificates"
tags:
  - "co"
  - "certificates"
endpoint: "/v2/co/sena/certificados"
sourceAnchor: "Response"
slug: "/certificates/sena-certificates"
url: "https://docs.verifik.co/certificates/sena-certificates"
---

# Colombia — SENA Certificates
**API path(s):** /v2/co/sena/certificados

This endpoint returns **SENA** (Servicio Nacional de Aprendizaje) **training and certification records** for a Colombian individual, sourced from the official SENA digital certificate portal. Each row describes a program title, certification type, completion date, and a link to download the digital certificate when available.
Use it for **employment screening**, **skills verification**, and **education compliance** checks where this registry is allowed.

## Response

```json
{
	"data": [
		{
			"record": "1",
			"title": "TÉCNICO EN SISTEMAS",
			"type": "TITULO",
			"program": "ANALISIS Y DESARROLLO DE SOFTWARE",
			"certificationDate": "15/06/2019",
			"certificationSignature": "SIG-EXAMPLE",
			"certificateDownload": "https://certificados.sena.edu.co/CertificadoDigital/cert-example.pdf"
		}
	],
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
	"message": "documentType must be one of [CC, NIT]"
}
```

## Features

- **Document types**: **CC**, **TI**, **CE**, **PA**, **RC**, **PEP**
- **GET** query parameters
- Returns **multiple certificate rows** when the person has more than one SENA record

## Use cases

- **Technical skills** and **vocational training** verification
- **Employer** due diligence and **contractor** onboarding
- **Education compliance** for roles requiring SENA credentials

### Notes

- When SENA reports **no certificates** for the document, the integration may return **404** (upstream message: *“No se ha encontrado certificados”*).
- **Sandbox mode**: use `documentNumber` **`10000001`**–**`10000010`** for fixed sample rows; **`90040401`** returns **404**.
- The route validator currently accepts **`CC`** and **`NIT`** at the middleware layer; other document types listed in the catalog may depend on upstream SENA portal support.
- SENA portal **availability** and **captcha** handling are environment-dependent; outages may return **5xx** errors.
- Treat results as **personal / education** data under Colombian law and your policies.
