---
id: "es-docs-es-resources-vivacidad-documentos-listar-todas-las-vivacidades-documento-respuesta-2"
title: "Listar Todas las Validaciones de Vivacidad de Documento — Respuesta"
sourcePath: "docs-es/resources/vivacidad-documentos/listar-todas-las-vivacidades-documentos.mdx"
locale: "es"
category: "resources"
tags:
  - "document-liveness"
  - "document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appregistration"
  - "resources"
endpoints:
  - "/v2/document-liveness"
  - "/v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appregistration"
sourceAnchor: "Respuesta"
slug: "/resources/listar-todas-las-vivacidades-documentos"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-vivacidades-documentos"
---

# Listar Todas las Validaciones de Vivacidad de Documento
**API path(s):** /v2/document-liveness, /v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appregistration

## Respuesta

```json
{
  "success": true,
  "data": [
    {
      "_id": "document_liveness_123456789",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "appRegistration": {
        "_id": "app_registration_123456789",
        "fullName": "John Doe",
        "email": "user@example.com",
        "status": "completed"
      },
      "imageSaved": true,
      "imageUrl": "https://cdn.verifik.co/images/document_123456789.jpg",
      "status": "completed",
      "validationResults": {
        "screenReplay": {
          "passed": true,
          "score": 0.95
        },
        "printedCopy": {
          "passed": true,
          "score": 0.90
        },
        "portraitSubstitution": {
          "passed": true,
          "score": 0.88
        },
        "digitalManipulation": {
          "passed": true,
          "score": 0.92
        }
      },
      "riskScore": 0.05,
      "confidence": 0.91,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:32:00Z",
      "completedAt": "2024-01-15T10:32:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

```json
{
  "success": false,
  "error": "Invalid query parameters",
  "code": "INVALID_PARAMETERS"
}
```

### Características

- **Listado completo**: Recupera todas las validaciones de vivacidad de documentos procesadas
- **Paginación**: Controla la página y el límite de registros por página
- **Filtrado por estado**: Filtra por estado (new, processing, completed, failed)
- **Población de datos**: Incluye información de cliente y registro de aplicación
- **Resultados de validación**: Detalles de todas las validaciones anti-fraude
- **Puntajes de confianza**: Puntuaciones detalladas por cada tipo de validación
- **Almacenamiento de imagen**: Información sobre imágenes guardadas en el CDN
- **Múltiples lenguajes**: Soporte para JavaScript, Python, PHP y Go
- **Información detallada**: Incluye marcas de tiempo, puntajes de riesgo y configuración
