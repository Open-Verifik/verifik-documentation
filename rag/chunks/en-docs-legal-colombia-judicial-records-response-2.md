---
id: "en-docs-legal-colombia-judicial-records-response-2"
title: "Colombia — Judicial records (court files / expedientes) — Response"
sourcePath: "docs/legal/colombia-judicial-records.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/rama/juzgado/expedientes"
  - "/v2/co/rama/juzgado/expedientes?documenttype=cc&documentnumber=1234567890&city=bogota"
sourceAnchor: "Response"
slug: "/legal/colombia-judicial-records"
url: "https://docs.verifik.co/legal/colombia-judicial-records"
---

# Colombia — Judicial records (court files / expedientes)
**API path(s):** /v2/co/rama/juzgado/expedientes, /v2/co/rama/juzgado/expedientes?documenttype=cc&documentnumber=1234567890&city=bogota

Verifik’s **Judicial records** endpoint returns **court file (expediente)** details from Colombia’s judicial system for a **cédula de ciudadanía (CC)** holder in a given **city** (circuit). Typical fields include court office (**EPMS**), receipt date, municipality, filing number, and party names when returned by the source.

## Response

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
		"name": "EXAMPLE USER",
		"receiptDate": "2024-01-15",
		"representative": "",
		"year": "2024"
	},
	"signature": {
		"dateTime": "April 20, 2026 10:00 AM",
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

## Features

- **Court file metadata** from the Rama Judicial integration (fields vary by source)
- **City-scoped** lookup using supported circuit codes
- **Signed** responses; repeat calls may be **cached**

## Use Cases

- **KYC and risk** workflows that need judicial file context in Colombia
- **Legal and compliance** checks tied to a CC and jurisdiction (city)

### Notes

- **`documentType`** is restricted to **`CC`** at the API layer.
- **`city`** must match a value accepted by the upstream service (see **Parameters**).
- Availability and field completeness depend on the **underlying judicial registry**; empty or error outcomes are possible for valid inputs.
