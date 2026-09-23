---
id: "es-docs-es-resources-validaciones-documentos-recuperar-una-validacion-documento-respuesta-2"
title: "Recuperar una Validación de Documento — Respuesta"
sourcePath: "docs-es/resources/validaciones-documentos/recuperar-una-validacion-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoints:
  - "/v2/document-validations/document_validation_123456789"
  - "/v2/document-validations/{id}"
sourceAnchor: "Respuesta"
slug: "/resources/recuperar-una-validacion-documento"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-una-validacion-documento"
---

# Recuperar una Validación de Documento
**API path(s):** /v2/document-validations/document_validation_123456789, /v2/document-validations/{id}

## Respuesta

````json
{
  "data": {
    "_id": "document_validation_123456789",
    "age": "25",
    "appRegistration": {
      "_id": "reg_123456789",
      "email": "user@example.com",
      "status": "completed"
    },
    "backUrl": "https://example.com/back",
    "client": "client_123456789",
    "country": "US",
    "createdAt": "2024-01-15T10:30:00Z",
    "documentData": {
      "firstName": "John",
      "lastName": "Doe",
      "documentNumber": "123456789",
      "birthDate": "1999-01-15"
    },
    "documentType": "id",
    "frontUrl": "https://example.com/front",
    "images": {
      "frontImage": "base64_encoded_image",
      "backImage": "base64_encoded_image"
    },
```json
      "_id": "flow_123456789",
      "name": "Example Flow",
      "type": "onboarding"
    },
    "status": "completed",
    "updatedAt": "2024-01-15T10:32:00Z",
    "validationResults": {
      "documentAuthenticity": "passed",

### Características
  }
- **Recuperación por ID**: Obtén una validación de documento específica usando su ID único
- **Información completa**: Incluye todos los detalles del proceso de validación
- **Datos del documento**: Información extraída del documento (nombre, número, fecha de nacimiento)
- **Resultados OCR**: Confianza y texto extraído del reconocimiento óptico de caracteres
- **Imágenes**: Imágenes del documento (frente y reverso) en base64
- **Datos relacionados**: Información del registro de aplicación y flujo del proyecto
- **Resultados de validación**: Autenticidad del documento y consistencia de datos
- **Múltiples lenguajes**: Soporte para JavaScript, Python, PHP y Go
- **Manejo de errores**: Respuestas de error detalladas para distintos escenarios

```json
{
  "error": "Document validation not found",
  "message": "DOCUMENT_VALIDATION_NOT_FOUND"
}
````

```
