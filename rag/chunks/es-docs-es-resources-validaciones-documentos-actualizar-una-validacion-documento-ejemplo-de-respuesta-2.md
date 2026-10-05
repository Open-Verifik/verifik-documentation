---
id: "es-docs-es-resources-validaciones-documentos-actualizar-una-validacion-documento-ejemplo-de-respuesta-2"
title: "Actualizar una Validación de Documento — Ejemplo de Respuesta"
sourcePath: "docs-es/resources/validaciones-documentos/actualizar-una-validacion-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations/{id}"
sourceAnchor: "Ejemplo de Respuesta"
slug: "/resources/actualizar-una-validacion-documento"
url: "https://docs.verifik.co/verifik-es/resources/actualizar-una-validacion-documento"
---

# Actualizar una Validación de Documento
**API path(s):** /v2/document-validations/{id}

## Ejemplo de Respuesta

```json
{
    "error": "Method not allowed",
    "message": "method_not_set"
}
```

### Notas Importantes

-   **Actualización no disponible**: La funcionalidad de actualización de Validaciones de Documento actualmente no está implementada en el sistema.
-   **Métodos alternativos**: Para modificar los datos de una validación de documento, puede que necesites:
    -   Crear un nuevo registro de Validación de Documento
    -   Usar el endpoint de validación de nombres (`PUT /document-validations/{id}/validate`) para actualizaciones específicas
    -   Contactar a soporte para actualizaciones manuales si es necesario
