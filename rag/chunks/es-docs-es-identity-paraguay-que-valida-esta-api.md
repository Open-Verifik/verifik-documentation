---
id: "es-docs-es-identity-paraguay-que-valida-esta-api"
title: "Ciudadano Paraguayo — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/paraguay.mdx"
locale: "es"
category: "identity"
tags:
  - "py"
  - "identity"
endpoint: "/v2/py/cic"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/paraguay"
url: "https://docs.verifik.co/verifik-es/identidad/paraguay"
---

# Ciudadano Paraguayo
**API path(s):** /v2/py/cic

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos paraguayos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número CIC**: Soporta *Cédula de Identidad Civil* (CIC).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CIC.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/py/cic
```

Consulta la identidad de un ciudadano paraguayo con **`documentNumber`** (CIC). Devuelve campos basados en registros oficiales para procesos de **KYC** y **cumplimiento**.

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentNumber` | string | Sí      | Número de documento CIC. |
