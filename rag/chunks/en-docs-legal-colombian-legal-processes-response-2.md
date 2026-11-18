---
id: "en-docs-legal-colombian-legal-processes-response-2"
title: "Colombia — Judicial processes — Response"
sourcePath: "docs/legal/colombian-legal-processes.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/procesos"
sourceAnchor: "Response"
slug: "/legal/colombian-legal-processes"
url: "https://docs.verifik.co/legal/colombian-legal-processes"
---

# Colombia — Judicial processes
**API path(s):** /v2/co/rama/procesos

Verifik’s **Judicial processes** endpoint returns a **list of legal processes** from Colombia’s judicial system for a given **CC** (natural person) or **NIT** (company). Typical fields include process dates, last action, court office (**despacho**), department, and **sujetosProcesales**, with **pagination** when there are many matches.

## Response

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
	"message": "Validation error (e.g. missing query parameter or documentType not CC or NIT)."
}
```

## Features

- **Process list** with court, dates, parties, and privacy flag where returned by the source
- **Pagination** metadata when the registry returns multiple pages
- **CC and NIT** supported for natural persons and companies
