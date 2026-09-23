---
id: "es-docs-es-validaciones-de-identidad-argentina-que-valida-esta-api"
title: "Ciudadano Argentino — ¿Qué valida esta API?"
sourcePath: "docs-es/validaciones-de-identidad/argentina.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "ar"
  - "validaciones-de-identidad"
endpoint: "/v2/ar/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validaciones-de-identidad/argentina"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/argentina"
---

# Ciudadano Argentino
**API path(s):** /v2/ar/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos argentinos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número de DNI**: Soporta *Documento Nacional de Identidad* (DNI).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número de identificación.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/ar/cedula
```

Consulta la identidad de un ciudadano argentino con **`documentType`** `DNIAR` y **`documentNumber`**. Devuelve campos basados en registros oficiales para **KYC** y **cumplimiento**.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Tipo de documento. Valor permitido: `DNIAR`. |
| `documentNumber` | string | Sí | Número de documento (DNI) sin espacios. |
