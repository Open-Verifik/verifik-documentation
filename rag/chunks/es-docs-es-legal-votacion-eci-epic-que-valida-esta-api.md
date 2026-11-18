---
id: "es-docs-es-legal-votacion-eci-epic-que-valida-esta-api"
title: "India — EPIC: mesa y lugar de votación | Verifik — ¿Qué valida esta API?"
sourcePath: "docs-es/legal/votacion-eci-epic.mdx"
locale: "es"
category: "legal"
tags:
  - "in"
  - "legal"
endpoint: "/v2/in/epic/votacion"
sourceAnchor: "¿Qué valida esta API?"
slug: "/legal/votacion-eci-epic"
url: "https://docs.verifik.co/verifik-es/legal/votacion-eci-epic"
---

# India — EPIC: mesa y lugar de votación | Verifik
**API path(s):** /v2/in/epic/votacion

## ¿Qué valida esta API?

Este endpoint devuelve **dónde vota** el elector: asignación a **asamblea (AC)**, **distrito**, **parte** (sección de votación), **edificio** y datos de ubicación asociados a un **EPIC** válido de **10 caracteres**. Complementa la [API de solo nombres](../epic-eci) cuando necesitas **logística, soporte o comprobación de padrón** por lugar de votación.

## ¿Qué valida esta API?

- **Constituency y sección**: Identificadores de asamblea, número y nombre de parte, número de sección/serie según el origen.
- **Geografía**: Distrito, estado y vinculación parlamentaria si el origen la expone.
- **Lugar de votación**: Nombre y dirección del edificio, detalle de sala o habitación cuando aplique.
- **EPIC**: El cuerpo de la consulta exige un EPIC de **10 caracteres** en `documentNumber`.

## Referencia de la API

### Endpoint

```
https://api.verifik.co/v2/in/epic/votacion
```

**GET** con `documentNumber` (EPIC de 10 caracteres). La respuesta se orienta a **datos de mesa y ubicación** (no al perfil de nombres de `GET /v2/in/epic`).

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre            | Tipo   | Requerido | Descripción                                                                 | Ejemplo     |
| ----------------- | ------ | -------- | --------------------------------------------------------------------------- | ----------- |
| `documentNumber`  | string | **Sí**   | EPIC / Voter ID. **Exactamente 10 caracteres** (alfanumérico).              | `IHM2796746` |
