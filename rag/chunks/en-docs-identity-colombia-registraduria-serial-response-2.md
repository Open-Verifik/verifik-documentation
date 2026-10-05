---
id: "en-docs-identity-colombia-registraduria-serial-response-2"
title: "Colombia — Civil registry lookup by serial (SCCRC) — Response"
sourcePath: "docs/identity/colombia-registraduria-serial.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/serial"
sourceAnchor: "Response"
slug: "/identity/colombia-registraduria-serial"
url: "https://docs.verifik.co/identity/colombia-registraduria-serial"
---

# Colombia — Civil registry lookup by serial (SCCRC)
**API path(s):** /v2/co/registraduria/serial

Locate a **birth civil registry** record (*registro civil de nacimiento*) from **Registraduría Nacional del Estado Civil** (**SCCRC**) using the **serial** printed on the registry document.
This complements [citizen by document](/identity-validation/colombia/colombian-citizen) and [lookup by name](/identity-validation/colombia/colombian-citizen-by-name) when you already have the civil-registry serial.

## Response

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "10000001",
		"firstName": "ALIXON DAYANA",
		"lastName": "TORRES MORA",
		"fullName": "ALIXON DAYANA TORRES MORA",
		"arrayName": ["ALIXON", "DAYANA", "TORRES", "MORA"],
		"sexo": "FEMENINO",
		"serial": "0031058170",
		"oficina": "NOTARIA UNICA - BOGOTA D.C.",
		"expeditionPlace": "NOTARIA UNICA - BOGOTA D.C.",
		"fecha": "15/03/1990",
		"dateOfBirth": "15/03/1990",
		"recordType": "REGISTRO CIVIL DE NACIMIENTO"
	},
	"signature": {
		"dateTime": "July 20, 2026 12:00 PM",
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
	"message": "missing serial"
}
```

## Features

- Lookup by **serial** printed on the *registro civil de nacimiento*
- Single-record response (not a `matches` array)
- **GET** and **POST** share the same handler

## Use cases

- Digitize or validate data from a physical **registro civil**
- Resolve NUIP/CC from a known civil-registry serial
- Audit trails that store serials instead of document numbers

### Notes

- **`serial`** is digits only (padding with leading zeros is accepted).
- **Sandbox example serial:** `0031058170` (maps to sandbox document numbers in the **`10000001`–`10000010`** range).
- Temporary source availability issues may surface as **409** (`Endpoint_out_of_service`).
- Related: [Registraduría certificate](/identity/colombia-registraduria-certificate), [Citizen by name](/identity-validation/colombia/colombian-citizen-by-name), [Marriage registry](/identity/colombia-registraduria-matrimonio).
