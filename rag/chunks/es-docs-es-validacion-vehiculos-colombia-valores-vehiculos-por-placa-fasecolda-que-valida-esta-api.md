---
id: "es-docs-es-validacion-vehiculos-colombia-valores-vehiculos-por-placa-fasecolda-que-valida-esta-api"
title: "Valores de Vehículos por Placa — ¿Qué valida esta API?"
sourcePath: "docs-es/validacion-vehiculos/colombia/valores-vehiculos-por-placa-fasecolda.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/fasecolda/values-by-plate"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validacion-de-vehiculo/colombia/valores-de-vehiculos-por-placa-fasecolda"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/colombia/valores-de-vehiculos-por-placa-fasecolda"
---

# Valores de Vehículos por Placa
**API path(s):** /v2/co/fasecolda/values-by-plate

## ¿Qué valida esta API?

La API de Valores de Vehículos por Placa Fasecolda de Verifik te ayuda a obtener información completa de vehículos usando placas de matrícula. Está diseñada para agilizar tus procesos de verificación de vehículos, proporcionar valoraciones precisas y asegurar que tengas datos completos del vehículo.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de acceder a información y valores de vehículos usando placas de matrícula.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales de Fasecolda para validar:

-   **Información de Vehículo por Placa**: Soporta placas de vehículos colombianos.
-   **Datos Completos del Vehículo**: Retorna clase de vehículo, marca, modelo, año, valor estimado, capacidad de carga, tipo de combustible y otros atributos clave.
-   **Valores de Vehículos**: Proporciona valores históricos para diferentes años de modelo y condiciones.

Al verificar estos detalles, puedes acceder a información completa del vehículo y valoraciones precisas, ayudando significativamente con transacciones y evaluaciones de vehículos.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/fasecolda/values-by-plate
```

El servicio de consulta de valor de vehículo Fasecolda ofrece información integral sobre vehículos registrados en Colombia: clase, marca, modelo, año, valor estimado, capacidad de carga, tipo de combustible y otros atributos. Envía la **placa** como parámetro de **consulta** (sin espacios ni puntos).

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |
