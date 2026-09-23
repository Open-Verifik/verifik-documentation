---
id: "es-docs-es-resources-registros-aplicacion-registros-aplicacion-estructura-del-objeto-registro-de-aplicacion-2"
title: "Registros de Aplicación — Estructura del Objeto Registro de Aplicación"
sourcePath: "docs-es/resources/registros-aplicacion/registros-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations"
  - "/v2/app-registrations/{id}"
  - "/v2/app-registrations/{id}/resend-link"
  - "/v2/app-registrations/{id}/sync"
sourceAnchor: "Estructura del Objeto Registro de Aplicación"
slug: "/resources/registros-en-la-app"
url: "https://docs.verifik.co/verifik-es/resources/registros-en-la-app"
---

# Registros de Aplicación
**API path(s):** /v2/app-registrations, /v2/app-registrations/{id}, /v2/app-registrations/{id}/resend-link, /v2/app-registrations/{id}/sync

## Estructura del Objeto Registro de Aplicación

```json
{
  "id": "reg_123456789",
  "userId": "user_123456789",
  "projectId": "proj_123456789",
  "flowId": "flow_123456789",
  "status": "completed",
  "steps": [
    {
      "type": "personal_info",
      "status": "completed",
      "timestamp": "2024-01-15T10:30:00Z"
    },
    {
      "type": "document_verification",
      "status": "completed",
      "timestamp": "2024-01-15T10:32:00Z"
    },
    {
      "type": "biometric_verification",
      "status": "completed",
      "timestamp": "2024-01-15T10:35:00Z"
    }
  ],
  "verificationResults": {
    "documentVerification": "passed",
    "biometricVerification": "passed",
    "livenessDetection": "passed"
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "completedAt": "2024-01-15T10:35:00Z"
}
```

### Casos de Uso

- **Incorporación de Usuarios**: Completa el registro y verificación de nuevos usuarios
- **Verificación de Identidad**: Verifica la identidad del usuario a través de múltiples métodos
- **Cumplimiento**: Cumple con los requisitos regulatorios para verificación de usuarios
- **Prevención de Fraude**: Detecta y previene registros fraudulentos
