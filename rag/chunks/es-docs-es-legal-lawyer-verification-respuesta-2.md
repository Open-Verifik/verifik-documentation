---
id: "es-docs-es-legal-lawyer-verification-respuesta-2"
title: "Colombia — Consulta de abogados — Respuesta"
sourcePath: "docs-es/legal/lawyer-verification.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/abogados"
sourceAnchor: "Respuesta"
slug: "/legal/verificacion-abogados"
url: "https://docs.verifik.co/verifik-es/legal/verificacion-abogados"
---

# Colombia — Consulta de abogados
**API path(s):** /v2/co/rama/abogados

El endpoint **Consulta de abogados** interroga el **registro público de abogados** (integración Rama Judicial) con **`documentType`** y **`documentNumber`**.
**Valores admitidos de `documentType`:** **`CC`**, **`CE`** o **`NIT`**.

## Respuesta

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
	"message": "Error de validación (parámetro faltante o documentType distinto de CC, NIT o CE)."
}
```

## Características

- **Consulta al registro** por **CC**, **CE** o **NIT**
- **Resultados estructurados** en el array `results`
- **Firma Verifik** en respuestas correctas

## Casos de uso

- **KYC**: Confirmar inscripción como abogado
- **Debida diligencia**: Validar estado antes de contratar

### Notas

- Solo se aceptan **`CC`**, **`CE`** y **`NIT`** como **`documentType`**.
- Si no hay coincidencias en la fuente, la API puede responder **404**.
