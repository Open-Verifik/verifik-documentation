---
id: "es-docs-es-identity-validation-colombia-colombian-politically-exposed-persons-respuesta-2"
title: "Colombia — Consulta PEP (personas políticamente expuestas) — Respuesta"
sourcePath: "docs-es/identity-validation/colombia/colombian-politically-exposed-persons.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/politically-exposed-persons"
sourceAnchor: "Respuesta"
slug: "/identity-validation/colombia/colombian-politically-exposed-persons"
url: "https://docs.verifik.co/verifik-es/identity-validation/colombia/colombian-politically-exposed-persons"
---

# Colombia — Consulta PEP (personas políticamente expuestas)
**API path(s):** /v2/co/politically-exposed-persons

Este endpoint realiza **cribado AML / cumplimiento**: verifica si una **persona natural** o **empresa** colombiana figura como **persona políticamente expuesta (PEP)** en las fuentes integradas por Verifik, incluyendo detalle de declaraciones cuando la integración lo devuelve.
**No** es el **PEP** migratorio (*Permiso Especial de Permanencia*). Para el permiso de estadía ante Migración Colombia, usa [Colombia — PEP (Permiso Especial de Permanencia)](/verifik-es/identidad/colombia-id-pep).

## Respuesta

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

## Características

- Soporte **CC** y **NIT** para personas y empresas
- **Campos estructurados** de PEP / declaraciones cuando la fuente los entrega
- Apto para flujos **KYC/AML** en Colombia

## Casos de uso

- **Banca y fintech** con debida diligencia reforzada
- **Programas de cumplimiento** que requieran identificación PEP

### Notas

- **`documentType`** debe ser **`CC`** o **`NIT`** (validado por la API).
- Un **404** suele indicar que no hubo coincidencia o la fuente no respondió.
- Colisión de nombres: aquí **PEP** = persona políticamente expuesta (AML), no el permiso migratorio en [Colombia — PEP (Permiso Especial de Permanencia)](/verifik-es/identidad/colombia-id-pep).
