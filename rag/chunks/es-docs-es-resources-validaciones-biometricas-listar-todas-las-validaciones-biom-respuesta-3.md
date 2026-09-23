---
id: "es-docs-es-resources-validaciones-biometricas-listar-todas-las-validaciones-biom-respuesta-3"
title: "Listar Todas las Validaciones Biométricas — Respuesta"
sourcePath: "docs-es/resources/validaciones-biometricas/listar-todas-las-validaciones-biometricas.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "biometric-validations?page=1&perpage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdat"
  - "resources"
endpoints:
  - "/v2/biometric-validations"
  - "/v2/biometric-validations?page=1&perpage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdat"
sourceAnchor: "Respuesta"
slug: "/resources/listar-todas-las-validaciones-biometricas"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-validaciones-biometricas"
---

# Listar Todas las Validaciones Biométricas
**API path(s):** /v2/biometric-validations, /v2/biometric-validations?page=1&perpage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdat

## Respuesta

```json
{
  "success": true,
  "data": [
    {
      "_id": "biometric_validation_123456789",
      "client": {
        "_id": "client_123456789",
        "name": "Cliente de Ejemplo",
        "email": "client@example.com"
      },
      "project": {
        "_id": "project_123456789",
        "name": "Proyecto de Ejemplo",
        "description": "Descripción del proyecto de ejemplo"
      },
      "status": "completed",
      "identifier": "user@example.com",
      "type": "login",
      "expiresAt": "2024-01-15T11:30:00Z",
      "requires2FA": false,
      "ipAddress": "192.168.1.1",
      "biometricData": {
        "quality": "good",
        "livenessScore": 0.95
      },
      "verificationResults": {
        "livenessDetection": "passed",
        "identityMatch": "passed",
        "qualityScore": 0.95,
        "antiSpoofing": "passed"
      },
      "riskScore": 0.05,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:32:00Z",
      "completedAt": "2024-01-15T10:32:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "perPage": 10,
    "total": 1,
    "pages": 1
  }
}
```

### Respuestas de Error

```json
{
  "success": false,
  "error": "Parámetros de consulta inválidos",
  "code": "INVALID_PARAMETERS"
}
```
