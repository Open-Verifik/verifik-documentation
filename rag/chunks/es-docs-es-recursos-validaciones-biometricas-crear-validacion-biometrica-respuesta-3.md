---
id: "es-docs-es-recursos-validaciones-biometricas-crear-validacion-biometrica-respuesta-3"
title: "Crear una Validación Biométrica — Respuesta"
sourcePath: "docs-es/recursos/validaciones-biometricas/crear-validacion-biometrica.mdx"
locale: "es"
category: "recursos"
tags:
  - "biometric-validations"
  - "recursos"
endpoint: "/v2/biometric-validations"
sourceAnchor: "Respuesta"
slug: "/recursos/validaciones-biometricas/crear-validacion-biometrica"
url: "https://docs.verifik.co/verifik-es/recursos/validaciones-biometricas/crear-validacion-biometrica"
---

# Crear una Validación Biométrica
**API path(s):** /v2/biometric-validations

## Respuesta

```json
{
  "success": true,
  "data": {
    "_id": "biometric_validation_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "new",
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
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

### Respuestas de Error

```json
{
  "success": false,
  "error": "Flujo de proyecto inválido",
  "code": "INVALID_PROJECT_FLOW"
}
```
