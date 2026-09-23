---
id: "es-docs-es-validaciones-de-identidad-bolivia-que-valida-esta-api"
title: "Ciudadano Boliviano — ¿Qué valida esta API?"
sourcePath: "docs-es/validaciones-de-identidad/bolivia.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "bo"
  - "validaciones-de-identidad"
endpoint: "/v2/bo/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validaciones-de-identidad/bolivia"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/bolivia"
---

# Ciudadano Boliviano
**API path(s):** /v2/bo/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos bolivianos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número CI**: Soporta *Cédula de Identidad* (CI).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CI.
-   **Verificación de Fecha de Nacimiento**: Valida que la fecha de nacimiento coincida con los registros oficiales.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/bo/cedula
```

Consulta la identidad de un ciudadano boliviano con **`documentType`** `CI`, **`documentNumber`** y **`dateOfBirth`** (`DD/MM/AAAA`). Devuelve campos basados en registros oficiales para **KYC** y **cumplimiento**.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Tipo de documento. Valor permitido: `CI`. |
| `documentNumber` | string | Sí | Número de documento CI. |
| `dateOfBirth` | string | Sí | Fecha de nacimiento en formato `DD/MM/YYYY`. |
