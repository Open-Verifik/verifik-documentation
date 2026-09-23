---
id: "es-docs-es-resources-validaciones-biometricas-recuperar-una-validacion-biometric-respuesta-3"
title: "Recuperar una Validación Biométrica — Respuesta"
sourcePath: "docs-es/resources/validaciones-biometricas/recuperar-una-validacion-biometrica.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/{id}"
sourceAnchor: "Respuesta"
slug: "/resources/validaciones-biometricas/recuperar-una-validacion-biometrica"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-biometricas/recuperar-una-validacion-biometrica"
---

# Recuperar una Validación Biométrica
**API path(s):** /v2/biometric-validations/{id}

## Respuesta

```json
{
  "success": true,
  "data": {
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
    "projectFlow": {
      "_id": "flow_123456789",
      "name": "Flujo de Ejemplo",
      "type": "onboarding"
    },
    "livenessSession": "liveness_123456789",
    "appRegistration": "reg_123456789",
    "status": "completed",
    "identifier": "user@example.com",
    "type": "validation",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "sendViaEmail": true,
    "email": "user@example.com",
    "language": "en",
    "biometricData": {
      "faceImage": "base64_encoded_image",
      "template": "biometric_template_data",
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
}
```

### Respuestas de Error

```json
{
  "success": false,
  "error": "Validación biométrica no encontrada",
  "code": "BIOMETRIC_VALIDATION_NOT_FOUND"
}
```
