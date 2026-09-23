---
id: "en-docs-identity-colombia-registraduria-certificate-response-2"
title: "Colombia — Registraduría ID validity certificate (CC) — Response"
sourcePath: "docs/identity/colombia-registraduria-certificate.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/certificado"
sourceAnchor: "Response"
slug: "/identity/colombia-registraduria-certificate"
url: "https://docs.verifik.co/identity/colombia-registraduria-certificate"
---

# Colombia — Registraduría ID validity certificate (CC)
**API path(s):** /v2/co/registraduria/certificado

This endpoint returns the **certificate of validity** (*certificado de vigencia*) for a **Colombian Cédula de Ciudadanía (CC)** from **Registraduría Nacional del Estado Civil**, using the **document number** and **issue date**. The response includes structured fields parsed from the official PDF (including a **base64-encoded PDF**) and status information such as **novedad** (validity state from the preliminary check).
The underlying flow targets **CC** holders; the API validates **`documentNumber`** and **`date`** only.

## Response

```json
{
	"data": {
		"codigoVerificacion": "ABC123XYZ",
		"novedad": "VIGENTE",
		"pdfBase64": "JVBERi0xLjQK...",
		"documento": {
			"cedula": "123456789",
			"fechaExpedicion": "10/10/2020",
			"lugarExpedicion": "BOGOTA D.C.",
			"nombre": "JUAN PEREZ"
		}
	},
	"signature": {
		"dateTime": "August 23, 2022 11:42 AM",
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
	"message": "date format required: DD/MM/YYYY\n"
}
```

## Features

- **Issue date** must match **`DD/MM/YYYY`**
- **PDF-backed** certificate data with **base64** payload when generation succeeds
- **GET** and **POST** share the same handler

## Use cases

- **KYC** checks that require an official **validity certificate** for a Colombian CC
- **Fraud reduction** when the issue date is known and must match Registraduría records

### Notes

- **`date`** is the **document issue date**, not the date of birth.
- Wrong **`DD/MM/YYYY`** format typically returns **409** (`MissingParameter`).
- Temporary source availability issues may surface as **409** with codes such as **`Endpoint_out_of_service`**.
- **`GET`** and **`POST`** share the same handler; use **`POST`** if you prefer a JSON body.
- Treat **pdfBase64** and personal fields as **sensitive**; comply with Colombian privacy rules and your contracts.
