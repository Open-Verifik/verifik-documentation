---
id: "es-docs-es-identidad-honduras-votacion-endpoint"
title: "Honduras - Lugar de Votación — Endpoint"
sourcePath: "docs-es/identidad/honduras/votacion.mdx"
locale: "es"
category: "identidad"
tags:
  - "hn"
  - "co"
  - "identidad"
endpoint: "/v2/hn/votacion"
sourceAnchor: "Endpoint"
slug: "/identidad/honduras/votacion"
url: "https://docs.verifik.co/verifik-es/identidad/honduras/votacion"
---

# Honduras - Lugar de Votación
**API path(s):** /v2/hn/votacion

## Endpoint

Verifik consulta el registro nacional de consulta electoral **Donde Me Toca Votar** usando **DNIHN** (número de identidad de **13 dígitos**). Usa este endpoint para **verificación electoral**, **incorporación de votantes** y **cumplimiento** cuando los datos electorales hondureños estén permitidos.

Devuelve detalles del lugar de votación cuando la fuente los proporciona:

- **`documentType`** — valor permitido: **DNIHN**
- **`documentNumber`** — número de identidad hondureño (**13** dígitos)
- **`fullName`** — nombre completo del ciudadano en el padrón electoral
- **`gender`** — sexo cuando la fuente lo proporciona
- **`department`**, **`municipality`**, **`electoralSector`** — residencia y sector electoral
- **`pollingPlace`**, **`pollingTable`** (JRV), **`lineNumber`** — datos del recinto de votación
- **`enabled`** — si el ciudadano está habilitado para votar
- **`fullAddress`** — dirección formateada del recinto
- **Campos opcionales** — `latitude`, `longitude` cuando la fuente los incluye
- Respuesta **firmada** por Verifik

### Endpoint

```
GET v2/hn/votacion
```

Consulta el registro nacional con **`documentType`** `DNIHN` y un **`documentNumber`** de **13 dígitos**. Las respuestas exitosas incluyen centro de votación, JRV (mesa), departamento, municipio y habilitación para votar en flujos de **KYC**, **verificación electoral** y **cumplimiento**.

### Headers

| Header | Valor | Descripción |
| --- | --- | --- |
| Accept | application/json | Formato de respuesta |
| Authorization | Bearer \ | Tu JWT de Verifik |

### Parámetros

| Campo | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| documentType | String | Sí | Tipo de documento. Valor permitido: `DNIHN`. | `DNIHN` |
| documentNumber | String | Sí | Número de identidad hondureño (**13** dígitos). | `0501199705651` |
