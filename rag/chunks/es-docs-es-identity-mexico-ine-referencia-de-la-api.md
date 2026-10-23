---
id: "es-docs-es-identity-mexico-ine-referencia-de-la-api"
title: "México — Validación INE — Referencia de la API"
sourcePath: "docs-es/identity/mexico-ine.mdx"
locale: "es"
category: "identity"
tags:
  - "mx"
  - "identity"
endpoint: "/v2/mx/ine"
sourceAnchor: "Referencia de la API"
slug: "/identity/mexico-ine"
url: "https://docs.verifik.co/verifik-es/identity/mexico-ine"
---

# México — Validación INE
**API path(s):** /v2/mx/ine

## Referencia de la API

Valida una **INE** mexicana (*Credencial para Votar*) contra el padrón electoral. Envía `documentType=INE` y un identificador principal en `documentNumber`. La API detecta automáticamente si el valor es un **CIC** (9 dígitos), **OCR** (13 dígitos) o **clave de elector** (18 caracteres).

Los campos opcionales cubren las combinaciones por modelo de credencial que exige la fuente oficial:

- **`citizenIdentifier`** — requerido para modelos **E, F, G, H** junto con CIC
- **`emissionNumber`** — requerido para el modelo **C** junto con OCR y clave de elector
- **`model`** — pista opcional (`C`–`H`) para seleccionar la combinación correcta

Para consultar nombre y datos biográficos por **CURP**, usa **[Ciudadano mexicano (CURP)](/identity/mexico)** (`v2/mx/curp`). Para extraer campos desde imágenes del INE, usa **[México — OCR INE](/identity/mexico-ine-ocr)** (`v2/mx/ine/ocr`).

## Referencia de la API

### Endpoint

```
https://api.verifik.co/v2/mx/ine
```

Envía un identificador INE para obtener el **estatus** electoral, la **vigencia**, metadatos de emisión y campos relacionados del padrón cuando la credencial es reconocida.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `documentType` | string | Yes | Valor permitido: `INE`. | `INE` |
| `documentNumber` | string | Yes | CIC (9 dígitos), OCR (13 dígitos) o clave de elector (18 alfanuméricos). | `187639699` |
| `citizenIdentifier` | string | No | Identificador del ciudadano en el reverso. Necesario para modelos E–H con CIC. | `031206745` |
| `emissionNumber` | string | No | Número de emisión. Necesario para el modelo C. | `1` |
| `model` | string | No | Pista opcional del modelo: `C`, `D`, `E`, `F`, `G` o `H`. | `E` |
