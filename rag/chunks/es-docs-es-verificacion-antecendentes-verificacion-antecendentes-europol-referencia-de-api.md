---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-europol-referencia-de-api"
title: "Verificación de Antecedentes Europol — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-europol.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "europol"
  - "europol?fullname=mateo"
  - "europol?fullname=mateo%20verifik"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/europol"
  - "/v2/europol?fullname=mateo"
  - "/v2/europol?fullname=mateo%20verifik"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-europol"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-europol"
---

# Verificación de Antecedentes Europol
**API path(s):** /v2/europol, /v2/europol?fullname=mateo, /v2/europol?fullname=mateo%20verifik

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/europol
```

El servicio de verificación de antecedentes de Europol permite a los desarrolladores realizar verificaciones en tiempo real contra la base de datos de registros criminales de Europol. Al proporcionar el tipo de documento y número de documento de una persona, o el nombre completo, los usuarios pueden verificar si la información coincide con alguna entrada en el sistema de Europol.

**Nota:** Las fechas (fecha de nacimiento o fecha de expedición) deben ir en formato dd/mm/yyyy.

Este servicio es ideal para empresas que buscan mejorar sus procesos de verificación de identidad, prevenir fraudes y asegurar el cumplimiento de regulaciones de seguridad.

### Casos de Uso

- **Prevención de Fraude:** Identificar individuos marcados en la base de datos criminal de Europol antes de proceder con transacciones sensibles.
- **Verificación de Identidad:** Asegurar que la información personal proporcionada por los usuarios sea precisa y legítima.
- **Cumplimiento:** Cumplir con los requisitos regulatorios para verificaciones KYC (Conoce a tu Cliente) y AML (Anti-Lavado de Dinero) en industrias como banca, finanzas y bienes raíces.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

:::info
Para consultar la lista completa de **Tipos de Documento** soportados y sus parámetros obligatorios específicos, visita la guía de [Tipos de Documento](/verifik-es/verificacion-antecendentes/tipos-documento).
:::

#### Consulta por Documento

| Nombre           | Tipo   | Requerido | Descripción                                              |
| ---------------- | ------ | --------- | -------------------------------------------------------- |
| `documentType`   | string | No        | El tipo de documento que desea solicitar.                |
| `documentNumber` | string | No        | Número de documento a consultar, sin espacios ni puntos. |

#### Consulta por Nombre Completo

| Nombre     | Tipo   | Requerido | Descripción                                                                                          |
| ---------- | ------ | --------- | ---------------------------------------------------------------------------------------------------- |
| `fullName` | string | No        | En lugar de documentType y documentNumber, puede pasar el nombre directamente de la persona/empresa. |
