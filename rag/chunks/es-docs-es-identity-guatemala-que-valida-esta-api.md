---
id: "es-docs-es-identity-guatemala-que-valida-esta-api"
title: "Ciudadano Guatemalteco — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/guatemala.mdx"
locale: "es"
category: "identity"
tags:
  - "gt"
  - "identity"
endpoint: "/v2/gt/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/guatemala"
url: "https://docs.verifik.co/verifik-es/identidad/guatemala"
---

# Ciudadano Guatemalteco
**API path(s):** /v2/gt/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos guatemaltecos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número CUI**: Soporta *Cédula de Vecindad* o *Documento Personal de Identificación* (CUI).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CUI.
-   **Verificación de Fecha de Nacimiento**: Valida que la fecha de nacimiento coincida con los registros oficiales del SAT.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

Verifica un ciudadano guatemalteco usando **`documentType`** `CUI`, **`documentNumber`** y **`dateOfBirth`** (`DD/MM/YYYY`). Devuelve campos de identidad para apoyar **KYC** y **cumplimiento**.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/gt/cedula
```

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Sí      | Tipo de documento. Valor permitido: `CUI`. |
| `documentNumber` | string | Sí      | Número de documento. |
| `dateOfBirth`  | string  | Sí      | Fecha de nacimiento (`DD/MM/YYYY`). |
