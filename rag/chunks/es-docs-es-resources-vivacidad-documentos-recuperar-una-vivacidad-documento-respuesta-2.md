---
id: "es-docs-es-resources-vivacidad-documentos-recuperar-una-vivacidad-documento-respuesta-2"
title: "Recuperar una Validación de Vivacidad de Documento — Respuesta"
sourcePath: "docs-es/resources/vivacidad-documentos/recuperar-una-vivacidad-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "document-liveness"
  - "resources"
endpoints:
  - "/v2/document-liveness/document_liveness_123456789"
  - "/v2/document-liveness/{id}"
sourceAnchor: "Respuesta"
slug: "/resources/recuperar-una-vivacidad-documento"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-una-vivacidad-documento"
---

# Recuperar una Validación de Vivacidad de Documento
**API path(s):** /v2/document-liveness/document_liveness_123456789, /v2/document-liveness/{id}

## Respuesta

```json
{
  "success": true,
  "data": {
    "_id": "document_liveness_123456789",
    "client": "client_123456789",
    "appRegistration": "app_registration_123456789",
    "imageSaved": true,
    "imageUrl": "https://cdn.verifik.co/images/document_123456789.jpg",
    "status": "completed",
    "validationResults": {
      "screenReplay": {
        "passed": true,
        "score": 0.95,
        "details": "No screen replay detected"
      },
      "printedCopy": {
        "passed": true,
        "score": 0.90,
        "details": "No printed copy detected"
      },
      "portraitSubstitution": {
        "passed": true,
        "score": 0.88,
        "details": "No portrait substitution detected"
      },
      "digitalManipulation": {
        "passed": true,
        "score": 0.92,
        "details": "No digital manipulation detected"
      }
    },
    "calibrationSettings": {
      "screenReplayCalibration": "REGULAR",
      "printedCopyCalibration": "REGULAR",
      "portraitSubstitutionCalibration": "REGULAR"
    },
    "validationFlags": {
      "ignoreDocumentCroppedValidation": false,
      "ignoreColourLessValidation": false
    },
    "riskScore": 0.05,
    "confidence": 0.91,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "completedAt": "2024-01-15T10:32:00Z"
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

```json
{
  "error": "Document liveness not found",
  "message": "DOCUMENT_LIVENESS_NOT_FOUND"
}
```

### Características

- **Recuperación por ID**: Obtén una validación específica usando su ID único
- **Resultados detallados**: Información completa de todas las validaciones anti-fraude
- **Configuración de calibración**: Niveles SOFT, REGULAR y HARD utilizados
- **Banderas de validación**: Configuraciones para ignorar recorte y falta de color
- **Puntajes de confianza**: Puntuaciones detalladas por cada tipo de validación
- **Almacenamiento de imagen**: Información sobre imágenes guardadas en el CDN
- **Datos del cliente**: Información de cliente y registro de aplicación
- **Múltiples lenguajes**: Soporte para JavaScript, Python, PHP y Go
- **Manejo de errores**: Respuestas de error detalladas para distintos escenarios
