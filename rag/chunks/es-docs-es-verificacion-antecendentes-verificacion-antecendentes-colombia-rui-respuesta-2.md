---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-rui-respuesta-2"
title: "Colombia — Clasificación RUI — Respuesta"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-rui.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoint: "/v2/co/rui"
sourceAnchor: "Respuesta"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-rui"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-rui"
---

# Colombia — Clasificación RUI
**API path(s):** /v2/co/rui

Verifik consulta el **Registro Universal de Ingresos (RUI)** en **Ventanilla Social DNP** usando **`documentType`** y **`documentNumber`**.
:::info Reemplaza SISBEN
Este producto reemplaza la consulta SISBEN retirada (`GET /v2/co/sisben`). Use **`GET /v2/co/rui`** para la clasificación actual de grupo de ingresos en Ventanilla Social.
:::

## Respuesta

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

## Notas

- **Sandbox**: use los números de documento **`10000001`–`10000010`** (y los fixtures de error estándar del sandbox) para probar clasificaciones sin llamar a la fuente en vivo.
- Trate las respuestas como **datos personales sensibles**; cumpla las normas de privacidad de Colombia.
- La presencia de campos puede variar según la fuente; maneje siempre valores nulos en campos opcionales.
