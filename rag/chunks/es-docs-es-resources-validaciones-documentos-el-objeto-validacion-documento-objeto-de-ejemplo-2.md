---
id: "es-docs-es-resources-validaciones-documentos-el-objeto-validacion-documento-objeto-de-ejemplo-2"
title: "El Objeto de Validación de Documento — Objeto de Ejemplo"
sourcePath: "docs-es/resources/validaciones-documentos/el-objeto-validacion-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Objeto de Ejemplo"
slug: "/resources/el-objeto-validacion-documento"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-validacion-documento"
---

# El Objeto de Validación de Documento

## Objeto de Ejemplo

```json
{
    "_id": "document_validation_123456789",
    "appRegistration": "reg_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "completed",
    "documentType": "id",
    "country": "US",
    "documentData": {
        "firstName": "John",
        "lastName": "Doe",
        "middleName": "Michael",
        "documentNumber": "123456789",
        "birthDate": "1990-01-15",
        "expirationDate": "2030-01-15",
        "issueDate": "2020-01-15",
        "gender": "M",
        "nationality": "US"
    },
    "ocrResults": {
        "confidence": 0.95,
        "rawText": "US DRIVER LICENSE...",
        "fields": {
            "firstName": "John",
            "lastName": "Doe"
        }
    },
    "validationResults": {
        "documentAuthenticity": "passed",
        "dataConsistency": "passed",
        "livenessDetection": "passed",
        "antiSpoofing": "passed"
    },
    "images": {
        "frontImage": "base64_encoded_front_image",
        "backImage": "base64_encoded_back_image",
        "selfieImage": "base64_encoded_selfie_image"
    },
    "riskScore": 0.05,
    "age": "34",
    "backUrl": "https://example.com/back",
    "frontUrl": "https://example.com/front",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "completedAt": "2024-01-15T10:32:00Z"
}
```

### Características

-   **Identificación única**: Cada validación tiene un ID único de referencia
-   **Múltiples estados**: Soporta diferentes estados del proceso de validación
-   **Tipos de documento**: Soporte para cédulas, pasaportes, licencias de conducir y otros
-   **Datos extraídos**: Información completa extraída del documento
-   **Procesamiento OCR**: Resultados de reconocimiento óptico de caracteres
-   **Resultados de validación**: Verificación de autenticidad y consistencia
-   **Imágenes**: Imágenes de frente, reverso y selfie en base64
-   **Evaluación de riesgo**: Puntaje de riesgo para la validación
-   **Marcas de tiempo completas**: Registro de creación, actualización y finalización
-   **Información de contexto**: Datos de cliente, proyecto y flujo del proyecto
