---
id: "es-docs-es-resources-validaciones-documentos-actualizar-una-validacion-documento-endpoint"
title: "Actualizar una Validación de Documento — Endpoint"
sourcePath: "docs-es/resources/validaciones-documentos/actualizar-una-validacion-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/actualizar-una-validacion-documento"
url: "https://docs.verifik.co/verifik-es/resources/actualizar-una-validacion-documento"
---

# Actualizar una Validación de Documento
**API path(s):** /v2/document-validations/{id}

## Endpoint

**PUT** `https://api.verifik.co/v2/document-validations/{id}`

Método para actualizar una Validación de Documento existente. Para que el servicio funcione, se requiere el parámetro `id`, que se genera cuando se crea correctamente una Validación de Documento.

:::warning
La funcionalidad de actualización de Validaciones de Documento actualmente no está implementada en el sistema. Este endpoint devolverá un error "method_not_set" si se invoca.
:::

### Encabezados

#### Content-Type

Tipo: String  
Requerido: Sí

`application/json`

#### Authorization

Tipo: String  
Requerido: Sí

`Bearer {YOUR_ACCESS_TOKEN}`

### Parámetros de Ruta

#### `id`

Tipo: string  
Requerido: Sí

El identificador único de la validación de documento a actualizar.

### Parámetros del Cuerpo

#### `status`

Tipo: string  
Requerido: No

Actualiza el estado de la validación

#### `documentData`

Tipo: object  
Requerido: No

Actualiza los campos de datos del documento

#### `riskScore`

**Tipo:** number  
**Requerido:** No

Actualiza el puntaje de evaluación de riesgo

### Notas Importantes

-   **Actualización no disponible**: La funcionalidad de actualización de Validaciones de Documento actualmente no está implementada en el sistema.
-   **Métodos alternativos**: Para modificar los datos de una validación de documento, puede que necesites:
    -   Crear un nuevo registro de Validación de Documento
    -   Usar el endpoint de validación de nombres (`PUT /document-validations/{id}/validate`) para actualizaciones específicas
    -   Contactar a soporte para actualizaciones manuales si es necesario
