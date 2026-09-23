---
id: "en-docs-identity-mexico-ine-api-reference"
title: "Mexico — INE Validation — API reference"
sourcePath: "docs/identity/mexico-ine.mdx"
locale: "en"
category: "identity"
tags:
  - "mx"
  - "identity"
endpoints:
  - "/v2/mx/curp"
  - "/v2/mx/ine"
  - "/v2/mx/ine/ocr"
sourceAnchor: "API reference"
slug: "/identity/mexico-ine"
url: "https://docs.verifik.co/identity/mexico-ine"
---

# Mexico — INE Validation
**API path(s):** /v2/mx/curp, /v2/mx/ine, /v2/mx/ine/ocr

## API reference

Validate a Mexican **INE** (*Credencial para Votar*) against the electoral registry. Send `documentType=INE` and a primary identifier in `documentNumber`. The API auto-detects whether the value is a **CIC** (9 digits), **OCR** (13 digits), or **clave de elector** (18 characters).

Optional fields cover card-model combinations required by the official source:

- **`citizenIdentifier`** — required for models **E, F, G, H** together with CIC
- **`emissionNumber`** — required for model **C** together with OCR and clave de elector
- **`model`** — optional hint (`C`–`H`) to select the correct field combination

For name and biographical lookup by **CURP**, use **[Mexican Citizen (CURP)](/identity/mexico)** (`v2/mx/curp`). To extract fields from INE images, use **[Mexico — INE OCR](/identity/mexico-ine-ocr)** (`v2/mx/ine/ocr`).

## API reference

### Endpoint

```
https://api.verifik.co/v2/mx/ine
```

Submit an INE identifier to obtain electoral **status**, **validity**, emission metadata, and related registry fields when the credential is recognized.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `documentType` | string | Yes | Allowed value: `INE`. | `INE` |
| `documentNumber` | string | Yes | CIC (9 digits), OCR (13 digits), or clave de elector (18 alphanumeric). | `187639699` |
| `citizenIdentifier` | string | No | Citizen identifier from the back of the card. Needed for models E–H with CIC. | `031206745` |
| `emissionNumber` | string | No | Emission number. Needed for model C. | `1` |
| `model` | string | No | Optional card model hint: `C`, `D`, `E`, `F`, `G`, or `H`. | `E` |
