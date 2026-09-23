---
id: "es-docs-es-legal-colombia-copnia-license-respuesta-2"
title: "Colombia — COPNIA matrícula profesional por número — Respuesta"
sourcePath: "docs-es/legal/colombia-copnia-license.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/copnia/matricula"
sourceAnchor: "Respuesta"
slug: "/legal/colombia-copnia-license"
url: "https://docs.verifik.co/verifik-es/legal/colombia-copnia-license"
---

# Colombia — COPNIA matrícula profesional por número
**API path(s):** /v2/co/copnia/matricula

Verifik consulta **COPNIA** (*Consejo Profesional Nacional de Ingeniería*) con un solo **`licenseNumber`** (matrícula). Úsalo cuando ya tienes el número de registro y necesitas el titular y el estado.

## Respuesta

```json
{
	"data": {
		"arrayName": ["HENRY", "ANDRES", "CASTANEDA", "ACOSTA"],
		"documentNumber": "80176161",
		"documentType": "CC",
		"firstName": "HENRY ANDRES",
		"fullName": "HENRY ANDRES CASTANEDA ACOSTA",
		"lastName": "CASTANEDA ACOSTA",
		"licenseNumber": "091132-0839078 CNDC",
		"licenseStatus": "VIGENTE",
		"licenseType": "MATRICULA PROFESIONAL",
		"profession": "INGENIERIA DE SOFTWARE",
		"resolutionDate": "2026-07-27",
		"resolutionNumber": "RN2026NALA032094"
	},
	"signature": {
		"dateTime": "September 15, 2026 9:00 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "ABCDE"
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
	"message": "licenseNumber length must be at least 6 characters long"
}
```

## Características

- Consulta por **matrícula** sin enviar número de documento
- Solo **GET** con parámetros de consulta
- **Sandbox** devuelve un payload COPNIA fijo para la matrícula de ejemplo
- Respuestas **firmadas** y facturadas como feature híbrido `apiRequest`

## Casos de uso

- Confirmar una matrícula **impresa o enviada**
- Revisar el **estado** (`VIGENTE` u otros valores de la fuente) en el onboarding
- Contrastar una matrícula hallada antes con [COPNIA por documento](/verifik-es/legal/colombia-copnia)

### Notas

- Ejemplo sandbox: **`091132-0839078 CNDC`**. La persona asociada es **`CC` / `80176161`**.
- Si el valor se normaliza a vacío, la API responde **`409`** (`invalid_license_number`).
- Una falla de sesión o de la fuente puede devolver **`409`** con `timeout_data_source`.
- Trata la respuesta como **dato personal sensible** y cumple habeas data.
