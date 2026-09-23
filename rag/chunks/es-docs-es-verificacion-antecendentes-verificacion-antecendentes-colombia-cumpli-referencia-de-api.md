---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-cumpli-referencia-de-api"
title: "Colombia - Verificar Cumplimiento Policial con Medidas Correctivas — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/co/policia/rnmc"
  - "/v2/co/policia/rnmc?documenttype=cc&documentnumber=123456789&date=10/10/2020"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial"
---

# Colombia - Verificar Cumplimiento Policial con Medidas Correctivas
**API path(s):** /v2/co/policia/rnmc, /v2/co/policia/rnmc?documenttype=cc&documentnumber=123456789&date=10/10/2020

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/co/policia/rnmc
```

El servicio RNMC de Policía permite verificar si un individuo tiene medidas correctivas pendientes. Al proporcionar el nombre del individuo, tipo de documento, número de documento y la fecha de verificación, puede obtener detalles sobre cualquier medida correctiva pendiente.

Este servicio ayuda a asegurar que los individuos cumplan con las medidas correctivas y apoya la toma de decisiones informadas basadas en su estatus de cumplimiento.

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
| `documentType`     | string | Sí        | Tipo de documento. Parámetros válidos: CC, CE.                             |
| `documentNumber`   | string | Sí        | Número de documento de la persona a consultar, sin espacios ni puntos.       |
| `date`             | string | Sí        | Fecha de expedición del documento. Formato válido: DD/MM/YYYY.              |
