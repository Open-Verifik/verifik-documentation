---
id: "es-docs-es-validaciones-de-identidad-ciudadano-espanol-que-valida-esta-api"
title: "Ciudadano Español — ¿Qué valida esta API?"
sourcePath: "docs-es/validaciones-de-identidad/ciudadano-espanol.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "es"
  - "validaciones-de-identidad"
endpoint: "/v2/es/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validaciones-de-identidad/ciudadano-espanol"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/ciudadano-espanol"
---

# Ciudadano Español
**API path(s):** /v2/es/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos y residentes españoles usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número de Documento**: Soporta *Documento Nacional de Identidad* (DNI) y *Número de Identidad de Extranjero* (NIE).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número de documento.
-   **Verificación de Fecha de Vencimiento**: Valida la fecha de vencimiento del documento.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/es/cedula
```

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Tipo de documento. Valores permitidos: `DNIES`, `NIE`. |
| `documentNumber` | string | Sí | Número de documento sin espacios. |
| `date` | string | Sí | Fecha de vencimiento en formato `DD/MM/YYYY`. |
