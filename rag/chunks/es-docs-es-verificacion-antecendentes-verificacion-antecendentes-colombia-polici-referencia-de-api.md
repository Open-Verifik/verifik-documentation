---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-polici-referencia-de-api"
title: "Colombia - Verificación de Antecedentes Policiales — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoint: "/v2/co/policia/consultar"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-policia"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia"
---

# Colombia - Verificación de Antecedentes Policiales
**API path(s):** /v2/co/policia/consultar

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/co/policia/consultar
```

El servicio de Verificación de Antecedentes Policiales de Colombia permite verificar si una persona tiene asuntos pendientes con las autoridades judiciales colombianas, de conformidad con el Artículo 248 de la Constitución. Envíe **`documentType`** y **`documentNumber`** por **GET** (query) o **POST** (cuerpo JSON). Un `data` exitoso incluye `documentType`, `documentNumber`, `firstName`, `lastName`, `fullName`, `arrayName` y `details`. Es ideal para contratación, onboarding y debida diligencia.

### Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization  | `Bearer `   |

### Parámetros

:::info
Para consultar la lista completa de **Tipos de Documento** soportados y sus parámetros obligatorios específicos, visita la guía de [Tipos de Documento](/verifik-es/verificacion-antecendentes/tipos-documento).
:::

| Nombre             | Tipo   | Requerido | Descripción                                                                 |
| ------------------ | ------ | --------- | --------------------------------------------------------------------------- |
| `documentType`     | string | Sí        | Tipo de documento. Valores válidos: **CC**, **CE**, **PPT**, **PA**, **DP**. **DP** es Documento Diplomático. **PPT** se acepta; el portal de la Policía lo trata como un pasaporte. |
| `documentNumber`   | string | Sí        | Número de documento de la persona a consultar, sin espacios ni puntos.       |

Este endpoint **no** recibe el parámetro `date` (a diferencia de [RNMC](/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial)).
