---
id: "es-docs-es-resources-vivacidad-documentos-el-objeto-vivacidad-documento-objeto-de-ejemplo-2"
title: "El Objeto de Vivacidad de Documento — Objeto de Ejemplo"
sourcePath: "docs-es/resources/vivacidad-documentos/el-objeto-vivacidad-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Objeto de Ejemplo"
slug: "/resources/el-objeto-vivacidad-documento"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-vivacidad-documento"
---

# El Objeto de Vivacidad de Documento

## Objeto de Ejemplo

```json
{
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
}
```

### Características

- **Identificación única**: Cada validación tiene un ID único de referencia
- **Múltiples estados**: Soporte para diferentes estados del proceso de validación
- **Validaciones anti-fraude**: Cuatro tipos de detección de ataques
- **Configuración de calibración**: Niveles SOFT, REGULAR y HARD
- **Banderas de validación**: Configuraciones para ignorar recorte y falta de color
- **Puntajes detallados**: Puntuaciones de confianza por cada tipo de validación
- **Almacenamiento de imagen**: Opción para guardar imágenes en el CDN
- **Evaluación de riesgo**: Puntaje general de riesgo del documento
- **Marcas de tiempo completas**: Registro de creación, actualización y finalización
- **Información de contexto**: Datos de cliente y registro de aplicación
