---
id: "es-docs-es-identity-costa-rica-votacion-endpoint"
title: "Costa Rica - Lugar de Votación — Endpoint"
sourcePath: "docs-es/identity/costa-rica/votacion.mdx"
locale: "es"
category: "identity"
tags:
  - "cr"
  - "identity"
endpoint: "/v2/cr/votacion"
sourceAnchor: "Endpoint"
slug: "/identity/costa-rica/votacion"
url: "https://docs.verifik.co/verifik-es/identity/costa-rica/votacion"
---

# Costa Rica - Lugar de Votación
**API path(s):** /v2/cr/votacion

## Endpoint

Verifik consulta el padrón electoral **Donde Votar del TSE** con **CCCR** (cédula costarricense, **9 a 13 dígitos**). Usa este endpoint para **verificación electoral**, **incorporación de votantes** y flujos de **cumplimiento** cuando los datos electorales costarricenses estén permitidos.

Devuelve detalles del lugar de votación cuando la fuente los proporciona:

- **`documentType`** — valor permitido: **CCCR**
- **`documentNumber`** — cédula costarricense (**9 a 13** dígitos)
- **`fullName`**, **`firstName`**, **`firstLastName`**, **`secondLastName`** — nombre del ciudadano en el padrón electoral
- **`gender`** — código de sexo cuando la fuente lo proporciona
- **`province`**, **`canton`**, **`district`** — residencia y geografía electoral
- **`pollingPlace`**, **`pollingTable`** — datos del recinto de votación
- **`electoralCode`**, **`electorNumber`**, **`schoolAddress`** — metadatos de junta del TSE
- **Campos opcionales** — `latitude`, `longitude` cuando la fuente los incluye
- Respuesta **firmada** por Verifik

### Endpoint

```
GET v2/cr/votacion
```

Consulta Donde Votar del TSE con **`documentType`** `CCCR` y un **`documentNumber`** de **9 a 13 dígitos**. Las respuestas exitosas incluyen centro de votación, junta (mesa), provincia, cantón y distrito para flujos de **KYC**, **verificación electoral** y **cumplimiento**.

### Headers

| Header | Valor | Descripción |
| --- | --- | --- |
| Accept | application/json | Formato de respuesta |
| Authorization | Bearer \ | Tu JWT de Verifik |

### Parámetros

| Campo | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| documentType | String | Sí | Tipo de documento. Valor permitido: `CCCR`. | `CCCR` |
| documentNumber | String | Sí | Cédula costarricense (**9 a 13** dígitos). | `401310036` |
