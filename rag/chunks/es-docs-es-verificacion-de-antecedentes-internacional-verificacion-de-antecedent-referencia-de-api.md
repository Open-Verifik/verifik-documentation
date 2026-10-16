---
id: "es-docs-es-verificacion-de-antecedentes-internacional-verificacion-de-antecedent-referencia-de-api"
title: "Verificación de Antecedentes ONU — Referencia de API"
sourcePath: "docs-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-onu.mdx"
locale: "es"
category: "verificacion-de-antecedentes"
tags:
  - "onu"
  - "verificacion-de-antecedentes"
endpoint: "/v2/onu"
sourceAnchor: "Referencia de API"
slug: "/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-onu"
url: "https://docs.verifik.co/verifik-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-onu"
---

# Verificación de Antecedentes ONU
**API path(s):** /v2/onu

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/onu
```

Esta API proporciona una forma simple y eficiente de verificar si una persona o entidad aparece en la lista de sanciones de las Naciones Unidas. Al enviar información de identificación como el tipo de documento y el número de documento, los usuarios pueden determinar rápidamente si un individuo u organización está sujeto a sanciones internacionales.

**Nota:** Las fechas (fecha de nacimiento o fecha de expedición) deben ir en formato dd/mm/yyyy.

Esto es especialmente útil para asegurar el cumplimiento con regulaciones globales y realizar una debida diligencia exhaustiva en procesos KYC (Conoce a tu Cliente) y AML (Anti-Lavado de Dinero).

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

:::info
Para consultar la lista completa de **Tipos de Documento** soportados y sus parámetros obligatorios específicos, visita la guía de [Tipos de Documento](/verifik-es/verificacion-antecendentes/tipos-documento).
:::

| Nombre           | Tipo   | Requerido | Descripción                                                                                          |
| ---------------- | ------ | --------- | ---------------------------------------------------------------------------------------------------- |
| `documentType`   | string | No        | Tipo de documento que deseas solicitar                                                               |
| `documentNumber` | string | No        | Número de documento a consultar, sin espacios ni puntos                                              |
| `fullName`       | string | No        | En lugar de documentType y documentNumber, puedes pasar el nombre directamente de la persona/empresa |
