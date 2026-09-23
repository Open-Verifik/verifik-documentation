---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-fbi-referencia-de-api"
title: "Verificación de Antecedentes FBI — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-fbi.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "fbi"
  - "fbi?fullname=mateo"
  - "fbi?fullname=mateo%20verifik"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/fbi"
  - "/v2/fbi?fullname=mateo"
  - "/v2/fbi?fullname=mateo%20verifik"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-fbi"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-fbi"
---

# Verificación de Antecedentes FBI
**API path(s):** /v2/fbi, /v2/fbi?fullname=mateo, /v2/fbi?fullname=mateo%20verifik

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/fbi
```

El servicio de verificación de antecedentes del FBI permite a los desarrolladores verificar si una persona o documento aparece en la base de datos del FBI. Al proporcionar el tipo de documento y número de documento, o el nombre completo, los usuarios pueden recuperar información sobre el individuo, incluyendo su nombre completo, primer nombre y apellido, si se encuentra una coincidencia.

**Nota:** Las fechas (fecha de nacimiento o fecha de expedición) deben ir en formato dd/mm/yyyy.

Este servicio es ideal para verificar la autenticidad de documentos y realizar verificaciones detalladas de identidad como parte de procesos de cumplimiento, seguridad o regulatorios.

### Casos de Uso

- **Verificación de Identidad:** Asegurar que los documentos presentados por individuos sean válidos y consistentes con los registros del FBI.
- **Cumplimiento:** Cumplir con los requisitos regulatorios mediante la realización de verificaciones exhaustivas de antecedentes en individuos involucrados en transacciones sensibles.
- **Prevención de Fraude:** Proteger su negocio verificando las identidades de los individuos antes de establecer relaciones o procesar operaciones críticas.

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
