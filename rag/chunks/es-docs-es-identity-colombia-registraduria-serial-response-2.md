---
id: "es-docs-es-identity-colombia-registraduria-serial-response-2"
title: "Colombia — Consulta de registro civil por serial (SCCRC) — Response"
sourcePath: "docs-es/identity/colombia-registraduria-serial.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/serial"
sourceAnchor: "Response"
slug: "/identity/colombia-registraduria-serial"
url: "https://docs.verifik.co/verifik-es/identity/colombia-registraduria-serial"
---

# Colombia — Consulta de registro civil por serial (SCCRC)
**API path(s):** /v2/co/registraduria/serial

Localiza un registro civil de **nacimiento** (*registro civil de nacimiento*) de la **Registraduría Nacional del Estado Civil** (**SCCRC**) usando el **serial** impreso en el documento del registro.
Complementa [ciudadano por documento](/identity-validation/colombia/colombian-citizen) y [búsqueda por nombre](/identity-validation/colombia/colombian-citizen-by-name) cuando ya tienes el serial del registro civil.

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

## Características

- Consulta por **serial** impreso en el *registro civil de nacimiento*
- Respuesta de un solo registro (no un arreglo `matches`)
- **GET** y **POST** comparten el mismo handler

## Casos de uso

- Digitalizar o validar datos de un **registro civil** físico
- Resolver NUIP/CC a partir de un serial de registro civil conocido
- Auditorías que almacenan seriales en lugar de números de documento

### Notes

- **`serial`** es solo dígitos (se acepta relleno con ceros a la izquierda).
- **Serial de ejemplo en sandbox:** `0031058170` (mapea a números de documento sandbox en el rango **`10000001`–`10000010`**).
- Problemas temporales de disponibilidad de la fuente pueden aparecer como **409** (`Endpoint_out_of_service`).
- Relacionado: [Certificado Registraduría](/identity/colombia-registraduria-certificate), [Ciudadano por nombre](/identity-validation/colombia/colombian-citizen-by-name), [Registro de matrimonio](/identity/colombia-registraduria-matrimonio).
