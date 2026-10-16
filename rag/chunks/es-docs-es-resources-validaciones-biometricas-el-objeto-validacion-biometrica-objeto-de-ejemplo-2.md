---
id: "es-docs-es-resources-validaciones-biometricas-el-objeto-validacion-biometrica-objeto-de-ejemplo-2"
title: "El Objeto Validación Biométrica — Objeto de Ejemplo"
sourcePath: "docs-es/resources/validaciones-biometricas/el-objeto-validacion-biometrica.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Objeto de Ejemplo"
slug: "/resources/el-objeto-validacion-biometrica"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-validacion-biometrica"
---

# El Objeto Validación Biométrica

## Objeto de Ejemplo

```json
{
  "_id": "biometric_validation_123456789",
  "client": "client_123456789",
  "project": "project_123456789",
  "projectFlow": "flow_123456789",
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
```
