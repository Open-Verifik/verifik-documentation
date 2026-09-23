---
id: "es-docs-es-validacion-vehiculos-colombia-licencia-conducir-runt-referencia-de-api-2"
title: "Consulta de Licencia de Conducción por Cédula en RUNT (Premium) | Verifik API Colombia — Referencia de API"
sourcePath: "docs-es/validacion-vehiculos/colombia/licencia-conducir-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/runt/conductor"
sourceAnchor: "Referencia de API"
slug: "/validacion-vehiculos/colombia/licencia-conducir-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt"
---

# Consulta de Licencia de Conducción por Cédula en RUNT (Premium) | Verifik API Colombia
**API path(s):** /v2/co/cedula, /v2/co/runt/conductor

La API de validación de licencias de Verifik permite consultar información oficial registrada en el Registro Único Nacional de Tránsito (RUNT) de Colombia, utilizando el número de documento de identidad del conductor.
Esta integración es esencial para empresas de transporte, agencias de alquiler de vehículos, aseguradoras y plataformas logísticas que necesitan verificar el estado legal y la idoneidad de los conductores antes de la contratación o autorización de uso de vehículos.
RUNT ahora autentica al conductor con el primer apellido (`primerApellido`) y puede devolver nombres enmascarados. Esta ruta **v2** sigue funcionando sin cambios de integración.
**Tarifa desde el 1 de septiembre de 2026 (America/Bogota):**
- Omita `primerApellido` — Verifik resuelve el apellido internamente — **Premium** (conductor + consulta de nombre). Una fila en el historial.
- Envíe `primerApellido` — se omite la consulta de nombre — tarifa **Básica** (igual que [`/v3/co/runt/conductor`](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico)). Una fila en el historial.
Use la ruta [Básica v3](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico) si siempre envía `primerApellido` y quiere que sea obligatorio.

## Referencia de API

### Service URL

```
GET https://api.verifik.co/v2/co/runt/conductor
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name             | Type   | Required | Description                                                            |
| ---------------- | ------ | -------- | ---------------------------------------------------------------------- |
| `documentType`   | string | Yes      | Uno de **`CC`**, **`CE`**, **`PA`**, **`PPT`**. Vea la tabla — **`PA` es pasaporte, `PPT` no lo es**. |
| `documentNumber` | string | Yes      | Número de documento del conductor, sin espacios ni puntos.             |
| `primerApellido` | string | Condicional | Primer apellido. **Obligatorio para `PA`**. Opcional para `CC`, `CE` y `PPT`. Omítalo para **Premium** (Verifik resuelve el nombre). Envíelo para omitir la consulta de nombre y pagar **Básico**. Procuraduría y `/v2/co/cedula` no consultan pasaportes. |

### Tipos de documento

No envíe `PPT` cuando RUNT muestra **`P.`** — eso es **pasaporte (`PA`)**. `PPT` es un permiso migratorio.

| Código | Nombre completo | Quién lo tiene | Etiqueta RUNT | `primerApellido` |
| --- | --- | --- | --- | --- |
| **`CC`** | *Cédula de Ciudadanía* | Ciudadanos colombianos (cédula nacional) | `C.` | Opcional |
| **`CE`** | *Cédula de Extranjería* | Extranjeros residentes en Colombia | `E.` | Opcional |
| **`PA`** | *Pasaporte* | Titulares de pasaporte | `P.` | **Obligatorio** |
| **`PPT`** | *Permiso por Protección Temporal* | Permiso temporal venezolano — **no es pasaporte** | `Y.` | Opcional |
