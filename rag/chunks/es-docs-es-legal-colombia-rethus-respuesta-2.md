---
id: "es-docs-es-legal-colombia-rethus-respuesta-2"
title: "Colombia — RETHUS (registro de talento humano en salud) — Respuesta"
sourcePath: "docs-es/legal/colombia-rethus.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/cedula/rethus"
sourceAnchor: "Respuesta"
slug: "/legal/colombia-rethus"
url: "https://docs.verifik.co/verifik-es/legal/colombia-rethus"
---

# Colombia — RETHUS (registro de talento humano en salud)
**API path(s):** /v2/co/cedula/rethus

Verifik valida la identidad y consulta **RETHUS** (*Registro Único Nacional de Talento Humano en Salud*) con **`documentType`** y **`documentNumber`**. El flujo resuelve primero el ciudadano y luego RETHUS para **estado del registro**, **formación académica** y filas de **prestaciones / seguridad social (SSO)** cuando la fuente las devuelve.

## Respuesta

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
			"dataSSO": []
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

## Características

- Tipos aceptados en validación: **CC**, **CE**, **PPT**
- **Sin fecha de expedición** obligatoria
- **GET** y **POST** comparten el mismo manejador

## Casos de uso

- **Habilitación** de personal de salud
- **Cumplimiento** normativo y auditoría

### Notas

- La consulta RETHUS ocurre **después** de emparejar al ciudadano; si no hay coincidencia, puede devolverse **404** u otros errores.
- **`academic`** y **`dataSSO`** pueden ser **arrays vacíos**.
- Los datos son **personales y sensibles**; úsalos según la ley colombiana de habeas data en salud.
