---
id: "es-docs-es-resources-validaciones-documentos-crear-una-validacion-nombre-endpoint"
title: "Crear una Validación de Nombre — Endpoint"
sourcePath: "docs-es/resources/validaciones-documentos/crear-una-validacion-nombre.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoints:
  - "/v2/document-validations/document_validation_123456789/validate"
  - "/v2/document-validations/{id}/validate"
sourceAnchor: "Endpoint"
slug: "/resources/crear-una-validacion-nombre"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-nombre"
---

# Crear una Validación de Nombre
**API path(s):** /v2/document-validations/document_validation_123456789/validate, /v2/document-validations/{id}/validate

## Endpoint

**PUT** `https://api.verifik.co/v2/document-validations/{id}/validate`

Este endpoint realiza la validación de nombre comparando los nombres extraídos del documento de un usuario con los registros oficiales del gobierno. Valida que los nombres proporcionados por el usuario coincidan con sus registros oficiales de identidad mediante integraciones con APIs gubernamentales.

### Encabezados

#### Content-Type

Tipo: String  
Requerido: Sí

`application/json`

#### Authorization

Tipo: String  
Requerido: Sí

`Bearer {YOUR_ACCESS_TOKEN}`

:::warning
**Requisitos previos**: Los usuarios deben completar tanto el paso `signUpForm` como el paso `document` antes de poder realizar la validación de nombre.
:::

:::warning
**Funcionalidad adicional**: Las Validaciones de Nombre son una característica adicional y están sujetas a cargos. Cada solicitud de validación generará un costo según tu plan.
:::

### Parámetros de Ruta

#### `id`

Tipo: string  
Requerido: Sí

El identificador único del registro de validación de documento a validar.

### Parámetros de Consulta

#### `force`

Tipo: boolean  
Requerido: No

Forzar la revalidación incluso si ya fue validada. Ejemplo: `force=true`

### Parámetros del Cuerpo

Este endpoint no requiere cuerpo en la solicitud. Toda la información necesaria se recupera automáticamente del registro de validación de documento.

### Regiones y tipos de documento compatibles

Actualmente, la validación de nombre es compatible con las siguientes regiones y tipos de documento:

| Región       | Tipo de documento | Descripción                     |
| ------------ | ----------------- | ------------------------------- |
| **Panamá**   | `CCPA`            | Cédula de identidad de Panamá   |
| **Colombia** | `CC`              | Cédula de ciudadanía colombiana |
| **Colombia** | `DRCC`            | Cédula diplomática colombiana   |
| **Chile**    | `CL`              | Cédula de identidad chilena     |

:::info
**Nota**: Puede haber soporte para regiones y tipos de documento adicionales. Contacta a tu ejecutivo de cuenta para obtener la lista más actualizada de países y tipos de documentos compatibles.
:::
