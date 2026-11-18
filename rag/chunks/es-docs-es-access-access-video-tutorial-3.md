---
id: "es-docs-es-access-access-video-tutorial-3"
title: "Access — Video Tutorial"
sourcePath: "docs-es/access/access.md"
locale: "es"
category: "access"
tags:
  - "access"
endpoint: "/v2/access"
sourceAnchor: "Video Tutorial"
slug: "/acceso"
url: "https://docs.verifik.co/verifik-es/acceso"
---

# Access
**API path(s):** /v2/access

Todo lo que Acceso Inteligente tiene para ofrecer pero a nivel de API, dando la flexibilidad de codificar una solución personalizada basada en las necesidades de tu empresa.

## Video Tutorial

### Endpoints de API

- [Crear una Validación de Correo](#)
- [Validar una Validación de Correo](#)

---

## Ejemplo de Acceso por Teléfono

### Configuración

Si no has creado un proyecto y un projectFlow con la propiedad type = **login**, entonces aquí están los enlaces para eso:

- [Crear un Proyecto](#)
- [Crear un Flujo de Proyecto](#)

### Empecemos

El flujo principalmente comienza con la creación de la validación de teléfono, luego procedemos con la validación de esa validación de teléfono que tiene una condición de tiempo y también ingresando la contraseña de un solo uso que pertenece a esa validación de teléfono.

#### Paso 1: Crear Validación de Teléfono (SMS)

```http
POST /phone/send-sms
Content-Type: application/json
Authorization: Bearer 

{
  "phone": "+1234567890",
  "project_id": "your_project_id"
}
```

#### Paso 2: Crear Validación de Teléfono (WhatsApp)

```http
POST /phone/send-whatsapp
Content-Type: application/json
Authorization: Bearer 

{
  "phone": "+1234567890",
  "project_id": "your_project_id"
}
```

#### Paso 3: Validar OTP de Teléfono

```http
POST /phone/verify-otp
Content-Type: application/json
Authorization: Bearer 

{
  "phone": "+1234567890",
  "otp": "123456",
  "validation_id": "validation_id_from_step_1_or_2"
}
```

### Video Tutorial

### Endpoints de API

- [Crear una Validación de Teléfono de Registro de App](#)
- [Validar una Validación de Teléfono](#)

---

## Ejemplo de Acceso Biométrico

### Configuración

Si no has creado un proyecto y un projectFlow con la propiedad type = **login**, entonces aquí están los enlaces para eso:

- [Crear un Proyecto](#)
- [Crear un Flujo de Proyecto](#)
