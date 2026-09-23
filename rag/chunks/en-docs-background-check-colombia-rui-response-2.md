---
id: "en-docs-background-check-colombia-rui-response-2"
title: "Colombia — RUI Classification — Response"
sourcePath: "docs/background-check/colombia-rui.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoints:
  - "/v2/co/rui"
  - "/v2/co/sisben"
sourceAnchor: "Response"
slug: "/background-check/colombia-rui"
url: "https://docs.verifik.co/background-check/colombia-rui"
---

# Colombia — RUI Classification
**API path(s):** /v2/co/rui, /v2/co/sisben

Verifik queries the **Registro Universal de Ingresos (RUI)** via **DNP Ventanilla Social** using **`documentType`** and **`documentNumber`**.
:::info Replaces SISBEN
This product replaces the retired SISBEN lookup (`GET /v2/co/sisben`). Use **`GET /v2/co/rui`** for current income-group classification from Ventanilla Social.
:::

## Response

```json
{
	"data": {
		"codMpio": "11001",
		"departamento": "BOGOTA D.C.",
		"documentNumber": "10000001",
		"documentType": "CC",
		"edad": "26",
		"grupRui": "A",
		"grupoIngresos": "Solo ingreso estimado",
		"municipio": "BOGOTA",
		"nivelRui": "A01",
		"nombre": "MARIA ELENA LOPEZ GARCIA",
		"sexo": "Femenino"
	},
	"signature": {
		"dateTime": "August 10, 2026 8:00 PM",
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
	"message": "documentType must be one of [CC, CE, TI, PPT, PEP, RC]"
}
```

## Notes

- **Sandbox**: use document numbers **`10000001`–`10000010`** (and standard sandbox error fixtures) to exercise classification responses without calling the live source.
- Treat responses as **sensitive personal data**; comply with Colombian privacy rules.
- Field presence can vary by source availability; always handle nulls for optional person/location fields.
