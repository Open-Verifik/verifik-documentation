---
id: "es-docs-es-resources-inicios-sesion-aplicacion-validar-una-validacion-biometrica-respuesta-2"
title: "Validar una Validación Biométrica de Inicio de Sesión de Aplicación — Respuesta"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/validar-una-validacion-biometrica-inicio-sesion-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/validate"
sourceAnchor: "Respuesta"
slug: "/resources/validar-una-validacion-biometrica-inicio-sesion-aplicacion"
url: "https://docs.verifik.co/verifik-es/resources/validar-una-validacion-biometrica-inicio-sesion-aplicacion"
---

# Validar una Validación Biométrica de Inicio de Sesión de Aplicación
**API path(s):** /v2/biometric-validations/validate

## Respuesta

```json
{
  "success": true,
  "data": {
    "_id": "biometric_validation_123456789",
    "status": "completed",
    "verificationResults": {
      "livenessDetection": "passed",
      "identityMatch": "passed",
      "qualityScore": 0.95,
      "antiSpoofing": "passed"
    },
    "biometricData": {
      "faceImage": "base64_encoded_image",
      "template": "biometric_template_data",
      "quality": "good",
      "livenessScore": 0.95
    },
    "riskScore": 0.05,
    "completedAt": "2024-01-15T10:32:00Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

  
  

```json
{
  "error": "Datos biométricos inválidos",
  "message": "INVALID_BIOMETRIC_DATA"
}
```

  
  

```json
{
  "error": "Detección de vida fallida",
  "message": "LIVENESS_DETECTION_FAILED"
}
```

  
  

```json
{
  "error": "Verificación de identidad fallida",
  "message": "IDENTITY_VERIFICATION_FAILED"
}
```

### Características

- **Verificación Biométrica**: Procesa reconocimiento facial y detección de vida
- **Evaluación de Calidad**: Analiza la calidad de imagen y la calidad de plantilla biométrica
- **Protección Anti-Suplantación**: Seguridad avanzada contra intentos biométricos falsos
- **Puntuación de Riesgo**: Calcula puntuaciones de riesgo para decisiones de autenticación
- **Token de Autenticación**: Genera tokens seguros para acceso a la aplicación
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Resultados Completos**: Resultados de verificación detallados y datos biométricos
- **Características de Seguridad**: Validación de sesión de vida y generación de tokens seguros
