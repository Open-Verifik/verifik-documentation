---
id: "es-docs-es-recursos-validaciones-biometricas-validaciones-biometricas-endpoints-de-la-api-2"
title: "Validaciones Biométricas — Endpoints de la API"
sourcePath: "docs-es/recursos/validaciones-biometricas/validaciones-biometricas.mdx"
locale: "es"
category: "recursos"
tags:
  - "biometric-validations"
  - "recursos"
endpoints:
  - "/v2/biometric-validations"
  - "/v2/biometric-validations/{validationid}"
sourceAnchor: "Endpoints de la API"
slug: "/recursos/validaciones-biometricas"
url: "https://docs.verifik.co/verifik-es/recursos/validaciones-biometricas"
---

# Validaciones Biométricas
**API path(s):** /v2/biometric-validations, /v2/biometric-validations/{validationid}

## Endpoints de la API

#### Crear una Validación Biométrica
```http
POST https://api.verifik.co/v2/biometric-validations
```

#### Listar Todas las Validaciones Biométricas
```http
GET https://api.verifik.co/v2/biometric-validations
```

#### Recuperar una Validación Biométrica
```http
GET https://api.verifik.co/v2/biometric-validations/{validationId}
```

### Estructura del Objeto Validación Biométrica

```json
{
  "id": "biometric_validation_123456789",
  "userId": "user_123456789",
  "status": "completed",
  "type": "validation",
  "biometricData": {
    "faceImage": "base64_encoded_image",
    "template": "biometric_template_data",
    "quality": "good"
  },
  "verificationResults": {
    "livenessDetection": "passed",
    "identityMatch": "passed",
    "qualityScore": 0.95,
    "antiSpoofing": "passed"
  },
  "riskScore": 0.05,
  "createdAt": "2024-01-15T10:30:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```

### Casos de Uso

- **Autenticación de Usuario**: Verifica identidad a través de verificación biométrica
- **Registro de Cuenta**: Confirma identidad de usuario durante el registro
- **Prevención de Fraude**: Detecta y previene ataques de suplantación biométrica
- **Seguridad**: Mejora seguridad de cuenta a través de verificación biométrica
