---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-interpol-referencia-de-api"
title: "Verificación de Antecedentes Interpol — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-interpol.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "interpol"
  - "interpol?fullname=ivan"
  - "interpol?fullname=ivan%20luciano%20marquez%20marin%20arango"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/interpol"
  - "/v2/interpol?fullname=ivan"
  - "/v2/interpol?fullname=ivan%20luciano%20marquez%20marin%20arango"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-interpol"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-interpol"
---

# Verificación de Antecedentes Interpol
**API path(s):** /v2/interpol, /v2/interpol?fullname=ivan, /v2/interpol?fullname=ivan%20luciano%20marquez%20marin%20arango

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/interpol
```

Este endpoint de API te permite buscar los antecedentes penales de un individuo o una empresa. Para recibir una respuesta exitosa, es necesario proporcionar el tipo de documento y el número de documento. La respuesta devuelve detalles como tipo de documento, número de documento, nombre, apellido, nombre completo y componentes del nombre para personas naturales y jurídicas. Está diseñado para uso seguro y autorizado por agencias de aplicación de la ley y seguridad.

**Nota:** Las fechas (fecha de nacimiento o fecha de expedición) deben ir en formato dd/mm/yyyy.

Esencial para organizaciones que requieren verificación de antecedentes penales, como para contratación, autorizaciones de seguridad o cumplimiento legal, particularmente cuando se trata de registros internacionales.

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
