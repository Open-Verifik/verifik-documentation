---
id: "es-docs-es-validacion-vehiculos-colombia-registros-vehiculos-por-placa-runt-que-informacion-devuelve-la-api"
title: "Registros de Vehículos por Placa — ¿Qué información devuelve la API?"
sourcePath: "docs-es/validacion-vehiculos/colombia/registros-vehiculos-por-placa-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/vehicle-by-plate"
sourceAnchor: "¿Qué información devuelve la API?"
slug: "/validacion-de-vehiculo/colombia/vehiculo-por-placa-y-cedula-unicamente"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/colombia/vehiculo-por-placa-y-cedula-unicamente"
---

# Registros de Vehículos por Placa
**API path(s):** /v2/co/runt/vehicle-by-plate

## ¿Qué información devuelve la API?

La API de validación vehicular de Verifik permite consultar información oficial registrada en el Registro Único Nacional de Tránsito (RUNT) de Colombia, utilizando el número de placa del vehículo como identificador principal.

Esta integración es ideal para empresas del sector automotriz, financiero, asegurador y de movilidad, que necesitan confirmar la autenticidad de los datos vehiculares antes de aprobar operaciones, emitir pólizas o realizar procesos de control y cumplimiento normativo.

## ¿Qué información devuelve la API?

Al realizar una consulta por placa, la API retorna datos actualizados directamente del RUNT, incluyendo:

-   Número de placa del vehículo
-   Marca, línea y modelo
-   Clase y tipo de servicio
-   Estado actual (activo, cancelado, en trámite)
-   Fecha de matrícula
-   Entidad registral
-   Información de propiedad y registro
-   Aseguradora y tipo de Pólizas (Responsabilidad Civil Contractual o Extracontractual, no todo riesgo).

Estos datos permiten validar la existencia, legalidad y estado operativo del vehículo consultado.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/runt/vehicle-by-plate
```

Obtén un **historial e informe técnico ampliado** del vehículo en el **RUNT** usando la **placa** y los datos del titular: **`documentType`** y **`documentNumber`** en la **consulta** (SOAT, pólizas RC, TecnoMécánica, solicitudes de trámite, etc., según disponibilidad).

### Headers

| Nombre       | Valor              |
| ------------ | ------------------ |
| Accept       | `application/json` |
| Authorization | `Bearer `   |
