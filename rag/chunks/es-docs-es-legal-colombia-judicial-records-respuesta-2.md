---
id: "es-docs-es-legal-colombia-judicial-records-respuesta-2"
title: "Colombia — Antecedentes judiciales (expedientes) — Respuesta"
sourcePath: "docs-es/legal/colombia-judicial-records.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/juzgado/expedientes"
sourceAnchor: "Respuesta"
slug: "/legal/antecedentes-judiciales-colombia"
url: "https://docs.verifik.co/verifik-es/legal/antecedentes-judiciales-colombia"
---

# Colombia — Antecedentes judiciales (expedientes)
**API path(s):** /v2/co/rama/juzgado/expedientes

Este endpoint devuelve **datos de expediente judicial** desde el sistema judicial colombiano para titulares de **CC** (**cédula de ciudadanía**) en una **ciudad** (circuito) determinada. Suele incluir despacho (**EPMS**), fechas, municipio, radicación y nombres de partes cuando la fuente los provee.

## Respuesta

```json
{
	"data": {
		"appeal": "S",
		"city": "BOGOTA",
		"codeRoom": "001",
		"consOffice": "01",
		"corporation": "EJEMPLO",
		"court": "JUZGADO EJEMPLO",
		"courtOfepms": "EPMS EXAMPLE",
		"documentNumber": "1234567890",
		"documentType": "CC",
		"filingNumber": "2024-000123",
		"municipality": "BOGOTÁ D.C.",
		"name": "USUARIO EJEMPLO",
		"receiptDate": "2024-01-15",
		"representative": "",
		"year": "2024"
	},
	"signature": {
		"dateTime": "20 de abril de 2026 10:00 AM",
		"message": "Certified by Verifik.co"
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
	"message": "Validation error (e.g. missing query parameter or documentType not CC)."
}
```

## Características

- **Metadatos de expediente** según la integración con la Rama Judicial (los campos pueden variar)
- Consulta **por ciudad** con códigos de circuito admitidos
- Respuestas **firmadas**; las repeticiones pueden ir a **caché**

## Casos de uso

- **KYC y riesgo** con contexto de expediente judicial en Colombia
- **Cumplimiento y estudios legales** ligados a CC y jurisdicción (ciudad)

### Notas

- En la API, **`documentType`** solo admite **`CC`**.
- **`city`** debe coincidir con un valor aceptado por el servicio (véase **Parámetros**).
- La disponibilidad de datos depende del **registro judicial**; incluso con datos válidos puede no haber resultado.
