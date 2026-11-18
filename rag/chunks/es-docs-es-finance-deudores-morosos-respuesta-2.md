---
id: "es-docs-es-finance-deudores-morosos-respuesta-2"
title: "Colombia — Deudores morosos (BDME) — Respuesta"
sourcePath: "docs-es/finance/deudores-morosos.mdx"
locale: "es"
category: "finance"
tags:
  - "co"
  - "finance"
endpoint: "/v2/co/deudoresmorosos"
sourceAnchor: "Respuesta"
slug: "/finance/deudores-morosos"
url: "https://docs.verifik.co/verifik-es/finance/deudores-morosos"
---

# Colombia — Deudores morosos (BDME)
**API path(s):** /v2/co/deudoresmorosos

Verifik consulta la **BDME** (*Base de Datos de Morosos*), el boletín de **deudores morosos** de la **Contaduría General de la Nación**, usando **`documentType`** y **`documentNumber`**. La integración devuelve **estado** y campos de **reporte** cuando la fuente responde con coincidencia.

## Respuesta

```json
{
	"data": {
		"documentType": "NIT",
		"documentNumber": "800096561",
		"reportingEntity": "…",
		"reportedName": "…",
		"phone": "…",
		"city": "…",
		"status": "…"
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
	"message": "missing documentType\n. missing documentNumber\n"
}
```

## Características

- Personas naturales y **NIT** vía `documentType`
- Solo **GET** con parámetros de consulta
- Flujo con **captcha** en origen; fallos pueden aparecer como **5xx**

## Casos de uso

- **Crédito** y riesgo
- **Proveedores** y **KYB**

### Notas

- **`documentType`** y **`documentNumber`** son **obligatorios** (409 si falta alguno).
- La BDME es un boletín oficial; interpreta resultados según normativa y política interna.
- **PPT** usa el mapeo de la integración; valida en tu entorno si es crítico.
