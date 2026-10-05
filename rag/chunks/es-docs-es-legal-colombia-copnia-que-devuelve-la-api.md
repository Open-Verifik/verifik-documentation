---
id: "es-docs-es-legal-colombia-copnia-que-devuelve-la-api"
title: "Colombia — COPNIA matrículas profesionales por documento — Qué devuelve la API"
sourcePath: "docs-es/legal/colombia-copnia.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/copnia"
sourceAnchor: "Qué devuelve la API"
slug: "/legal/colombia-copnia"
url: "https://docs.verifik.co/verifik-es/legal/colombia-copnia"
---

# Colombia — COPNIA matrículas profesionales por documento
**API path(s):** /v2/co/copnia

## Qué devuelve la API

Verifik consulta **COPNIA** (*Consejo Profesional Nacional de Ingeniería*) con **`documentType`** y **`documentNumber`**. La fuente en vivo es el portal de Certificado de Vigencia de COPNIA. Úsalo para **contratación**, **habilitación** y **cumplimiento** de profesionales de ingeniería en Colombia.

## Qué devuelve la API

- Campos de **identidad**: `documentType`, `documentNumber`, `firstName`, `lastName`, `fullName`, `arrayName`
- **`licenses[]`** — matrículas profesionales asociadas a esa persona
- Cada matrícula puede incluir **`licenseNumber`**, **`licenseStatus`**, **`licenseType`**, **`profession`**, **`resolutionDate`**, **`resolutionNumber`**
- Respuesta **firmada** por Verifik

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/copnia
```

Envía **`documentType`** y **`documentNumber`** como **parámetros de consulta**. El manejador devuelve la persona y un arreglo `licenses`. Los campos de detalle (`licenseStatus`, `licenseType`, `resolutionDate`, `resolutionNumber`) se hidratan para un máximo de **10** matrículas; las filas adicionales conservan solo datos de lista (`licenseNumber` y `profession`).

### Encabezados

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `documentType` | string | Sí | Uno de **`CC`**, **`CE`**, **`PA`**, **`PEP`**, **`PE`**, **`PPT`**, **`TI`**, **`NIT`**. | `CC` |
| `documentNumber` | string | Sí | Número de documento sin espacios ni signos (mínimo **5** caracteres). | `80176161` |
