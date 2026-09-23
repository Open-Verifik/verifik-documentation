---
id: "es-docs-es-certificados-colombia-ministerio-trabajo-certificados-v3-respuesta-2"
title: "Colombia — Certificados Ministerio del Trabajo (v3) — Respuesta"
sourcePath: "docs-es/certificados/colombia-ministerio-trabajo-certificados-v3.mdx"
locale: "es"
category: "certificados"
tags:
  - "certificados"
sourceAnchor: "Respuesta"
slug: "/certificados/colombia-ministerio-trabajo-certificados-v3"
url: "https://docs.verifik.co/verifik-es/certificados/colombia-ministerio-trabajo-certificados-v3"
---

# Colombia — Certificados Ministerio del Trabajo (v3)

Este endpoint devuelve información de **certificados del Ministerio del Trabajo** para una persona en Colombia, incluyendo datos asociados al **curso de alturas**, desde el **microservicio de Bogotá**. La integración **v3** devuelve el objeto completo y expone las filas de certificados en **`records`** (mapeado desde `constances` en origen).

## Respuesta

```json
{
	"data": {
		"records": []
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
	"message": "documentType must be one of [CC, CE, PPT, PA]"
}
```

## Características

- Tipos: **CC**, **CE**, **PPT**, **PA**
- **v3** mapea **`constances` → `records`**
- Solo **GET** por query

## Casos de uso

- Verificación de **curso de alturas**
- Cumplimiento **laboral** y **contratistas**

### Notas

- Si no hay información de curso de alturas puede devolverse **404** (*“No registra información en Curso de Alturas.”*).
- **`/v2/co/ministerio-de-trabajo/certificados`** devuelve un objeto distinto; usa **v3** si necesitas el payload completo con **`records`**.
- Datos **personales / laborales**; cumple la normativa aplicable.
