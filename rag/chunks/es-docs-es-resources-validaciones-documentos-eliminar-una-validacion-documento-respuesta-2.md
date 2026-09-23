---
id: "es-docs-es-resources-validaciones-documentos-eliminar-una-validacion-documento-respuesta-2"
title: "Eliminar una Validación de Documento — Respuesta"
sourcePath: "docs-es/resources/validaciones-documentos/eliminar-una-validacion-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoints:
  - "/v2/document-validations/document_validation_123456789"
  - "/v2/document-validations/{id}"
sourceAnchor: "Respuesta"
slug: "/resources/eliminar-una-validacion-documento"
url: "https://docs.verifik.co/verifik-es/resources/eliminar-una-validacion-documento"
---

# Eliminar una Validación de Documento
**API path(s):** /v2/document-validations/document_validation_123456789, /v2/document-validations/{id}

## Respuesta

```json
{
    "success": true,
    "message": "Document validation deleted successfully",
    "signature": {
        "dateTime": "April 11, 2023 12:25 PM",
        "message": "Certified by Verifik.co"
    }
}
```

  
  

```json
{
    "error": "Document validation not found",
    "message": "DOCUMENT_VALIDATION_NOT_FOUND"
}
```

  
  

```json
{
    "error": "Unauthorized",
    "message": "UNAUTHORIZED"
}
```

### Notas Importantes

-   **Eliminación permanente**: Esta acción no se puede deshacer. Todos los datos de la validación del documento se eliminarán de forma permanente.
-   **Datos asociados**: Eliminar una validación de documento puede afectar registros de aplicación o flujos de proyecto relacionados.
-   **Respaldo**: Considera respaldar la información importante antes de eliminar.

### Características

-   **Eliminación permanente**: Elimina por completo el registro de validación de documento
-   **Identificación por ID**: Usa un ID único para identificar la validación a eliminar
-   **Confirmación de éxito**: Respuesta de confirmación cuando la eliminación es exitosa
-   **Manejo de errores**: Respuestas de error para casos de no encontrado y no autorizado
-   **Múltiples lenguajes**: Soporte para JavaScript, Python, PHP y Go
-   **Seguridad**: Requiere autenticación con token de acceso
-   **Advertencias**: Notas importantes sobre la naturaleza permanente de la eliminación
