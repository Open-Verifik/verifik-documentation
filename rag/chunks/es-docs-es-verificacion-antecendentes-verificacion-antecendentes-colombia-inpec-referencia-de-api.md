---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-inpec-referencia-de-api"
title: "Colombia - Consulta INPEC Población Privada de la Libertad — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoint: "/v2/co/inpec"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec"
---

# Colombia - Consulta INPEC Población Privada de la Libertad
**API path(s):** /v2/co/inpec

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/co/inpec
```

El servicio de Consulta de la Población Privada de la Libertad INPEC permite verificar el estado actual de privación de libertad de personas en establecimientos administrados por el Instituto Nacional Penitenciario y Carcelario (INPEC) de Colombia. Este endpoint de API valida si una persona se encuentra actualmente privada de la libertad en cualquier centro de detención administrado por INPEC y proporciona información detallada sobre su estado legal, tipo de admisión, ubicación penitenciaria y número único de identificación dentro del sistema carcelario.

Este servicio está diseñado para autoridades judiciales, organismos de seguridad del estado, organismos de control y organizaciones autorizadas que necesitan verificar el estado actual de individuos dentro del sistema penitenciario colombiano con fines legales, de seguridad o de debida diligencia.

### Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization  | `Bearer `   |

### Parámetros

:::info
Para consultar la lista completa de **Tipos de Documento** soportados y sus parámetros obligatorios específicos, visita la guía de [Tipos de Documento](/verifik-es/verificacion-antecendentes/tipos-documento).
:::

| Nombre           | Tipo   | Requerido | Descripción                                                                 |
| ---------------- | ------ | --------- | --------------------------------------------------------------------------- |
| `documentType`   | string | Sí        | Tipo de documento. Parámetros válidos: CC, CE.                             |
| `documentNumber` | string | Sí        | Número de documento de la persona a consultar, sin espacios ni puntos.      |
| `firstSurname`   | string | Sí        | Primer apellido de la persona a consultar.                                  |
