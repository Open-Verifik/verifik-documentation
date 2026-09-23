---
id: "es-docs-es-resources-validaciones-documentos-validaciones-documentos-endpoints-de-la-api-2"
title: "Validaciones de Documentos — Endpoints de la API"
sourcePath: "docs-es/resources/validaciones-documentos/validaciones-documentos.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations"
sourceAnchor: "Endpoints de la API"
slug: "/resources/validaciones-documentos"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-documentos"
---

# Validaciones de Documentos
**API path(s):** /v2/document-validations

## Endpoints de la API

#### Crear una Validación de Documento

`POST https://api.verifik.co/v2/document-validations`

#### Listar todas las Validaciones de Documentos

`GET https://api.verifik.co/v2/document-validations`

#### Recuperar una Validación de Documento

`GET https://api.verifik.co/v2/document-validations/{validationId}`

#### Actualizar una Validación de Documento

`PUT https://api.verifik.co/v2/document-validations/{validationId}`

#### Eliminar una Validación de Documento

`DELETE https://api.verifik.co/v2/document-validations/{validationId}`

### Estructura del Objeto Validación de Documento

```json
{
    "id": "validation_123456789",
    "documentType": "passport",
    "status": "completed",
    "documentInfo": {
        "documentNumber": "123456789",
        "country": "US",
        "nationality": "American",
        "firstName": "John",
        "lastName": "Doe",
        "dateOfBirth": "1990-01-15",
        "gender": "Male"
    },
    "verificationResults": {
        "authenticity": "passed",
        "quality": "good",
        "ocrAccuracy": 0.98,
        "securityFeatures": "detected"
    },
    "riskScore": 0.15,
    "createdAt": "2024-01-15T10:30:00Z",
    "completedAt": "2024-01-15T10:32:00Z"
}
```

### Casos de uso

-   **Verificación de identidad**: Verifica la identidad del usuario mediante validación de documentos
-   **Cumplimiento**: Cumple requisitos regulatorios para verificación de documentos
-   **Prevención de fraude**: Detecta documentos fraudulentos o manipulados
-   **Extracción de datos**: Extrae datos estructurados de documentos de identidad
