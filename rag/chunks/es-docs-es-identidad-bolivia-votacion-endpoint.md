---
id: "es-docs-es-identidad-bolivia-votacion-endpoint"
title: "Bolivia - Lugar de Votación — Endpoint"
sourcePath: "docs-es/identidad/bolivia/votacion.mdx"
locale: "es"
category: "identidad"
tags:
  - "bo"
  - "co"
  - "identidad"
endpoint: "/v2/bo/votacion"
sourceAnchor: "Endpoint"
slug: "/identidad/bolivia/votacion"
url: "https://docs.verifik.co/verifik-es/identidad/bolivia/votacion"
---

# Bolivia - Lugar de Votación
**API path(s):** /v2/bo/votacion

## Endpoint

Verifik consulta **Yo Participo (OEP)** usando **CI** y **fecha de nacimiento**. Usa este endpoint para **verificación electoral**, **incorporación de votantes** y **cumplimiento** cuando los datos OEP estén permitidos.

Devuelve detalles del lugar de votación cuando la fuente los proporciona:

- **`documentType`** — valor permitido: **CI**
- **`documentNumber`** — número de cédula de identidad (**5–13** caracteres)
- **`dateOfBirth`** — fecha de nacimiento en formato **DD/MM/YYYY** (debe coincidir con OEP)
- **`fullName`** — nombre completo del ciudadano en el padrón electoral
- **`votingStatus`** — si el ciudadano está habilitado para votar
- **`department`**, **`locality`**, **`pollingPlace`**, **`pollingTable`** — datos del recinto electoral
- **`election`** — etiqueta de elección o nota de actualización del padrón
- **Campos opcionales** — `isJury`, `jurySortDate`, `politicalMembership`, `latitude`, `longitude` cuando la fuente los incluye
- Respuesta **firmada** por Verifik

### Endpoint

```
GET v2/bo/votacion
```

### Headers

| Header | Valor | Descripción |
| --- | --- | --- |
| Accept | application/json | Formato de respuesta |
| Authorization | Bearer \ | Tu JWT de Verifik |

### Parámetros

| Campo | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| documentType | String | Sí | Tipo de documento. Valor permitido: `CI`. |
| documentNumber | String | Sí | Número de CI sin código de expedición (**5–13** caracteres). |
| dateOfBirth | String | Sí | Fecha de nacimiento en formato `DD/MM/YYYY`. |
| force | String | No | Establecer en `true` para omitir caché y consultar la fuente. |
