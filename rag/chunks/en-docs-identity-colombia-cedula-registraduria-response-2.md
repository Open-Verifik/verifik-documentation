---
id: "en-docs-identity-colombia-cedula-registraduria-response-2"
title: "Colombia — Citizen lookup via Registraduría (SCCRC) — Response"
sourcePath: "docs/identity/colombia-cedula-registraduria.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/cedula/registraduria"
sourceAnchor: "Response"
slug: "/identity/colombia-cedula-registraduria"
url: "https://docs.verifik.co/identity/colombia-cedula-registraduria"
---

# Colombia — Citizen lookup via Registraduría (SCCRC)
**API path(s):** /v2/co/cedula/registraduria

Look up a **birth civil registry** record (*registro civil de nacimiento*) from **Registraduría Nacional del Estado Civil** (**SCCRC**) using a Colombian **cédula (CC)** document number.
Unlike [citizen by document](/identity-validation/colombia/colombian-citizen) (`/v2/co/cedula`), this endpoint hits **Registraduría only** — it does **not** try Procuraduría or DIAN. Use it to isolate SCCRC document-mode behavior.

## Response

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "1032386359",
		"firstName": "LILIA MANUELA",
		"lastName": "LESPORT FERNANDEZ",
		"fullName": "LILIA MANUELA LESPORT FERNANDEZ",
		"arrayName": ["LILIA", "MANUELA", "LESPORT", "FERNANDEZ"],
		"sexo": "FEMENINO",
		"serial": "0043721066",
		"oficina": "NOTARIA 1 VILLANUEVA - LA GUAJIRA",
		"expeditionPlace": "NOTARIA 1 VILLANUEVA - LA GUAJIRA",
		"fecha": "29 DE DICIEMBRE DE 2009",
		"dateOfBirth": "29 DE DICIEMBRE DE 2009",
		"recordType": "REGISTRO CIVIL DE NACIMIENTO"
	},
	"signature": {
		"dateTime": "July 22, 2026 12:00 PM",
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
	"message": "missing documentNumber"
}
```

## Features

- Direct **SCCRC document-mode** lookup (CC only)
- Skips Procuraduría and DIAN
- Single-record response (not a `matches` array)
- **GET** and **POST** share the same handler

## Use cases

- Test or debug Registraduría document search in isolation
- Prefer SCCRC document mode when other `/cedula` sources are not needed
- Compare document-mode vs [lookup by name](/identity-validation/colombia/colombian-citizen-by-name)

### Notes

- **`documentType`** must be **`CC`**.
- SCCRC document search may return **404** even when [by-name](/identity-validation/colombia/colombian-citizen-by-name) finds the same person — upstream recall differs by search mode.
- Temporary source availability issues may surface as **409** (`Endpoint_out_of_service`).
- Related: [Citizen by document](/identity-validation/colombia/colombian-citizen), [Citizen by name](/identity-validation/colombia/colombian-citizen-by-name), [Civil registry by serial](/identity/colombia-registraduria-serial).
