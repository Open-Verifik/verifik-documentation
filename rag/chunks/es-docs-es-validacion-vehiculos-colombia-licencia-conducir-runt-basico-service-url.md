---
id: "es-docs-es-validacion-vehiculos-colombia-licencia-conducir-runt-basico-service-url"
title: "Consulta de Licencia de Conducción en RUNT (Básico) | Verifik API Colombia — Service URL"
sourcePath: "docs-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
sourceAnchor: "Service URL"
slug: "/validacion-vehiculos/colombia/licencia-conducir-runt-basico"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico"
---

# Consulta de Licencia de Conducción en RUNT (Básico) | Verifik API Colombia

## Service URL

La misma consulta RUNT que [Premium v2](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt), cobrada a la **tarifa actual de conductor**. Debe enviar `primerApellido`. Si lo omite, la API responde `409 MissingParameter`.

Use esta ruta cuando ya conoce el primer apellido. Si se queda en v2 y envía `primerApellido`, también paga esta tarifa Básica sin cambiar la URL.

### Service URL

```
GET https://api.verifik.co/v3/co/runt/conductor
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name             | Type   | Required | Description |
| ---------------- | ------ | -------- | ----------- |
| `documentType`   | string | Yes      | Uno de **`CC`**, **`CE`**, **`PA`**, **`PPT`**. **`PA` es pasaporte, `PPT` no lo es**. |
| `documentNumber` | string | Yes      | Número de documento del conductor, sin espacios ni puntos. |
| `primerApellido` | string | **Yes**  | Primer apellido (mínimo 2 caracteres). Obligatorio para todos los tipos de documento. |

### Tipos de documento

| Código | Nombre completo | Quién lo tiene | Etiqueta RUNT | `primerApellido` |
| --- | --- | --- | --- | --- |
| **`CC`** | *Cédula de Ciudadanía* | Ciudadanos colombianos | `C.` | **Obligatorio** |
| **`CE`** | *Cédula de Extranjería* | Extranjeros residentes | `E.` | **Obligatorio** |
| **`PA`** | *Pasaporte* | Titulares de pasaporte | `P.` | **Obligatorio** |
| **`PPT`** | *Permiso por Protección Temporal* | Permiso temporal venezolano — **no es pasaporte** | `Y.` | **Obligatorio** |
