---
id: "es-docs-es-legal-colombian-legal-processes-respuesta-2"
title: "Colombia — Procesos judiciales — Respuesta"
sourcePath: "docs-es/legal/colombian-legal-processes.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/procesos"
sourceAnchor: "Respuesta"
slug: "/legal/procesos-judiciales-colombianos"
url: "https://docs.verifik.co/verifik-es/legal/procesos-judiciales-colombianos"
---

# Colombia — Procesos judiciales
**API path(s):** /v2/co/rama/procesos

Este endpoint devuelve un **listado de procesos judiciales** asociados a una persona (**CC**) o empresa (**NIT**). Incluye fechas, despacho, departamento, sujetos procesales y **paginación** cuando aplica.

## Respuesta

```json
{
	"data": {
		"consultedSubject": "MATEO VERIFIK",
		"documentNumber": "123456789",
		"documentType": "CC",
		"list": [
			{
				"idProceso": "123456789",
				"idConexion": "262",
				"llaveProceso": "110014003XXXXXXXXX",
				"fechaProceso": "2007-09-21T00:00:00",
				"fechaUltimaActuacion": "2010-11-27T00:00:00",
				"despacho": "JUZGADO XXX CIVIL MUNICIPAL DE BOGOTÁ ",
				"departamento": "BOGOTÁ",
				"sujetosProcesales": [
					"Demandante: XXXXXX  XXXXX XXXX ",
					"Demandado: XXXX XXXX XXXX XXXX "
				],
				"esPrivado": false
			}
		],
		"pagination": {
			"records": "21",
			"recordsPerPage": "20",
			"pages": "2",
			"page": "1"
		}
	},
	"signature": {
		"dateTime": "March 3, 2022 3:55 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "ABC12"
}
```

  
  

```json
{
	"data": {
		"consultedSubject": "MATEO VERIFIK",
		"documentNumber": "123456789",
		"documentType": "CC",
		"list": [],
		"pagination": {
			"records": "0",
			"recordsPerPage": "20",
			"pages": "0",
			"page": "1"
		}
	},
	"signature": {
		"dateTime": "August 31, 2022 3:31 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "XYZ99"
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
	"message": "Error de validación (parámetro faltante o documentType distinto de CC o NIT)."
}
```

## Características

- Listado de procesos con despacho, fechas y partes
- Metadatos de paginación
- Soporte **CC** y **NIT**

## Casos de uso

- Investigación legal y antecedentes judiciales
- Debida diligencia en Colombia
