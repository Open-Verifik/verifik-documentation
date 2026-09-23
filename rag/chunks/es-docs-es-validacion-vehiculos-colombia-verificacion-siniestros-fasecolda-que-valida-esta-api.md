---
id: "es-docs-es-validacion-vehiculos-colombia-verificacion-siniestros-fasecolda-que-valida-esta-api"
title: "Verificación de Siniestros — ¿Qué valida esta API?"
sourcePath: "docs-es/validacion-vehiculos/colombia/verificacion-siniestros-fasecolda.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/fasecolda/sinister"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validacion-vehiculos/colombia/verificacion-siniestros-fasecolda"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/verificacion-siniestros-fasecolda"
---

# Verificación de Siniestros
**API path(s):** /v2/co/fasecolda/sinister

## ¿Qué valida esta API?

La API de Verificación de Siniestros Fasecolda de Verifik te ayuda a verificar el historial de reclamos de seguros de vehículos en Colombia usando datos oficiales de Fasecolda. Está diseñada para agilizar tus procesos de verificación de vehículos, evaluar riesgos y asegurar que tengas información completa sobre el historial de seguros de un vehículo.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de verificar reclamos de seguros e historial de accidentes de vehículos.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales de Fasecolda para validar:

-   **Placa de Matrícula del Vehículo**: Soporta placas de vehículos colombianos.
-   **Historial de Reclamos de Seguros**: Retorna información completa sobre reclamos de seguros registrados asociados con el vehículo.
-   **Detalles de Reclamos**: Proporciona ID de reclamo, fecha de accidente y tipo de protección para cada reclamo.

Al verificar estos detalles, puedes evaluar el historial de seguros de un vehículo y riesgos potenciales, ayudando significativamente con la valoración de vehículos y evaluación de riesgos.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/fasecolda/sinister
```

Consulta el historial de accidentes y **reclamos** (seguros) en Fasecolda usando la **placa** del vehículo como **parámetro de consulta** (`?plate=`).

### Encabezados

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Placa del vehículo a consultar, sin espacios ni puntos. |
