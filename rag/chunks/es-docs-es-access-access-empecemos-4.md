---
id: "es-docs-es-access-access-empecemos-4"
title: "Access — Empecemos"
sourcePath: "docs-es/access/access.md"
locale: "es"
category: "access"
tags:
  - "access"
endpoint: "/v2/access"
sourceAnchor: "Empecemos"
slug: "/acceso"
url: "https://docs.verifik.co/verifik-es/acceso"
---

# Access
**API path(s):** /v2/access

Todo lo que Acceso Inteligente tiene para ofrecer pero a nivel de API, dando la flexibilidad de codificar una solución personalizada basada en las necesidades de tu empresa.

## Empecemos

El flujo principalmente comienza con la creación de la validación biométrica, luego procedemos con la validación de esa validación biométrica que tiene una condición de tiempo y también ingresando el token JWT en los headers > Authorization una vez que la Validación Biométrica es creada para autorizar la **validación**.

#### Paso 1: Registrar Rostro

```http
POST /biometric/register-face
Content-Type: application/json
Authorization: Bearer 

{
  "user_id": "user123",
  "project_id": "your_project_id",
  "face_image": "base64_encoded_image"
}
```

#### Paso 2: Verificar Rostro

```http
POST /biometric/verify-face
Content-Type: application/json
Authorization: Bearer 

{
  "user_id": "user123",
  "face_image": "base64_encoded_image",
  "validation_id": "validation_id_from_step_1"
}
```

#### Paso 3: Verificación de Vida

```http
POST /biometric/liveness-check
Content-Type: application/json
Authorization: Bearer 

{
  "face_image": "base64_encoded_image",
  "validation_id": "validation_id_from_step_1"
}
```

### Video Tutorial

### Endpoints de API

- [Crear una Validación Biométrica](#)
- [Validar una Validación Biométrica de Inicio de Sesión de App](#)

---

## Formato de Respuesta

Todas las respuestas de API siguen un formato consistente:

### Respuesta de Éxito

```json
{
  "success": true,
  "data": {
    "validation_id": "val_123456789",
    "expires_at": "2024-01-01T12:00:00Z",
    "status": "pending"
  },
  "message": "Operación completada exitosamente"
}
```

### Respuesta de Error

```json
{
  "success": false,
  "error": "Código OTP inválido",
  "code": "INVALID_OTP",
  "details": {
    "attempts_remaining": 2
  }
}
```
