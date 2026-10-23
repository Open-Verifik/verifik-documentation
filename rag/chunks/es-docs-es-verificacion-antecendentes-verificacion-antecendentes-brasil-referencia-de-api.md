---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-brasil-referencia-de-api"
title: "Verificación de antecedentes (CPF) — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-brasil.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "br"
  - "verificacion-antecendentes"
endpoint: "/v2/br/background-check"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-brasil"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-brasil"
---

# Verificación de antecedentes (CPF)
**API path(s):** /v2/br/background-check

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/br/background-check
```

El servicio de Verificación de Antecedentes de Brasil proporciona información detallada sobre individuos brasileños. Al realizar una consulta, la respuesta incluye datos relevantes como nombres asociados, capacidad para emitir reportes, número de certificación, número de documento, tipo de documento, primer nombre, nombre completo, apellido y un archivo PDF codificado en base64.

Esta información puede ser utilizada para una variedad de propósitos, como verificación de empleo, debida diligencia, verificación de cumplimiento y prevención de fraude.

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
| `documentType`     | string | Sí        | Tipo de documento. Parámetro permitido: CPF.                               |
| `documentNumber`   | string | Sí        | Número de documento de la persona a consultar.                              |
| `dateOfBirth`      | string | Sí        | Fecha de nacimiento de la persona a consultar, formato válido: dd/mm/yyyy.  |
