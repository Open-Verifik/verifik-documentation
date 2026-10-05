---
id: "es-docs-es-identity-colombia-que-valida-esta-api"
title: "Ciudadano Colombiano — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/colombia.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/colombia"
url: "https://docs.verifik.co/verifik-es/identidad/colombia"
---

# Ciudadano Colombiano
**API path(s):** /v2/co/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos colombianos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número de ID**: Soporta *Cédula de Ciudadanía* y *Cédula de Extranjería*.
-   **Estado del Documento**: Verifica el estado actual en la base de datos de la *Registraduría Nacional del Estado Civil*.
-   **Expedición y Vigencia**: Confirma la fecha de expedición y si el documento está actualmente vigente.
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número de identificación.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/co/cedula
```

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Uno de `CC`, `PPT`. |
| `documentNumber` | string | Sí | Número de documento (sin espacios o puntos). |
