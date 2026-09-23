---
id: "es-docs-es-legal-epic-eci-que-valida-esta-api"
title: "India — EPIC (Votante) consulta de nombres | Verifik — ¿Qué valida esta API?"
sourcePath: "docs-es/legal/epic-eci.mdx"
locale: "es"
category: "legal"
tags:
  - "in"
  - "legal"
endpoints:
  - "/v2/in/epic"
  - "/v2/in/epic/votacion"
sourceAnchor: "¿Qué valida esta API?"
slug: "/legal/epic-eci"
url: "https://docs.verifik.co/verifik-es/legal/epic-eci"
---

# India — EPIC (Votante) consulta de nombres | Verifik
**API path(s):** /v2/in/epic, /v2/in/epic/votacion

## ¿Qué valida esta API?

Verifik ofrece un único **endpoint REST** para consultar la **información de nombre** vinculada a un **EPIC** (número de *Elector's Photo Identity Card* en India) a partir de datos alineados con la **Comisión Electoral de India (ECI)**. Úsalo en flujos de KYC, onboarding o cumplimiento que requieran comprobar que un número de Voter ID devuelve datos de nombre coherentes con el padrón.

## ¿Qué valida esta API?

La API se conecta a fuentes electorales oficiales para devolver:

- **Estructura del nombre del votante**: Nombre y apellidos (incl. variantes en escritura local cuando el origen las expone).
- **Nombre completo y familiar**: Campos adecuados para mostrar o comparar en alfabeto latino y en escritura local.
- **Coincidencia con EPIC**: El **EPIC de 10 caracteres** (letras y números) debe ser reconocido para devolver registro asociado.

## Referencia de la API

### Endpoint

```
https://api.verifik.co/v2/in/epic
```

Envía un **GET** con el EPIC en el parámetro de consulta `documentNumber`. La respuesta incluye campos de nombre estructurados, valores opcionales en script local, y en caso de éxito un bloque de **signature** de Verifik.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre            | Tipo   | Requerido | Descripción                                                                 | Ejemplo     |
| ----------------- | ------ | -------- | --------------------------------------------------------------------------- | ----------- |
| `documentNumber`  | string | **Sí**   | EPIC / Voter ID. Debe tener **exactamente 10 caracteres** (alfanumérico). | `IHM2796746` |
