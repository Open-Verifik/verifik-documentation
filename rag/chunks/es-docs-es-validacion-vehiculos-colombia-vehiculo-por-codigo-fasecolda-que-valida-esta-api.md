---
id: "es-docs-es-validacion-vehiculos-colombia-vehiculo-por-codigo-fasecolda-que-valida-esta-api"
title: "Valores de Vehículos por Código — ¿Qué valida esta API?"
sourcePath: "docs-es/validacion-vehiculos/colombia/vehiculo-por-codigo-fasecolda.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/fasecolda/values-by-code"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validacion-vehiculos/colombia/vehiculo-por-codigo-fasecolda"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/vehiculo-por-codigo-fasecolda"
---

# Valores de Vehículos por Código
**API path(s):** /v2/co/fasecolda/values-by-code

## ¿Qué valida esta API?

La API de Valores de Vehículos por Código Fasecolda de Verifik te ayuda a obtener información completa de vehículos usando códigos Fasecolda. Está diseñada para agilizar tus procesos de verificación de vehículos, proporcionar valoraciones precisas y asegurar que tengas datos completos del vehículo.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de acceder a información y valores de vehículos usando códigos Fasecolda.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales de Fasecolda para validar:

-   **Información de Vehículo por Código**: Soporta códigos Fasecolda para identificar vehículos y sus características.
-   **Datos Completos del Vehículo**: Retorna clase de vehículo, marca, modelo, año, valor estimado, capacidad de carga, tipo de combustible y otros atributos clave.
-   **Valores de Vehículos**: Proporciona valores históricos para diferentes años de modelo y condiciones.

Al verificar estos detalles, puedes acceder a información completa del vehículo y valoraciones precisas, ayudando significativamente con transacciones y evaluaciones de vehículos.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/fasecolda/values-by-code
```

Obtén **valores comerciales y atributos técnicos** del vehículo en Fasecolda usando el parámetro de consulta **`codeFasecolda`** (código de catálogo).

### Encabezados

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `codeFasecolda` | string | Yes | Código Fasecolda que identifica la configuración del vehículo. |
