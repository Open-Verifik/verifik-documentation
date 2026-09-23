---
id: "es-docs-es-services-verifik-access-code-solution-via-api-ejemplo-acceso-telefoni-configuracion"
title: "Ejemplo de Acceso Telefónico — Configuración"
sourcePath: "docs-es/services/verifik-access-code-solution-via-api/ejemplo-acceso-telefonico.mdx"
locale: "es"
category: "services"
tags:
  - "phone"
  - "services"
endpoint: "/v2/phone/send-sms"
sourceAnchor: "Configuración"
slug: "/services/verifik-access-code-solution-via-api/ejemplo-acceso-telefonico"
url: "https://docs.verifik.co/verifik-es/services/verifik-access-code-solution-via-api/ejemplo-acceso-telefonico"
---

# Ejemplo de Acceso Telefónico
**API path(s):** /v2/phone/send-sms

## Configuración

Esta guía te muestra cómo implementar acceso telefónico usando la API de Verifik. El flujo incluye la creación de validaciones de teléfono (SMS o WhatsApp) y la validación del código OTP.

## Configuración

Si no has creado un proyecto y un projectFlow con la propiedad `type = login`, entonces aquí están los enlaces para eso:

- [Crear un Proyecto](/verifik-es/resources/proyectos/crear-un-proyecto)
- [Crear un Flujo de Proyecto](/verifik-es/resources/flujos-de-proyecto/actualizar-un-flujo-de-proyecto)

## Empecemos

El flujo principalmente comienza con la creación de la validación de teléfono, luego procedemos con la validación de esa validación de teléfono que tiene una condición de tiempo y también ingresando la contraseña de un solo uso que pertenece a esa validación de teléfono.

### Paso 1: Crear Validación de Teléfono (SMS)

```http
POST /phone/send-sms
Content-Type: application/json
Authorization: Bearer 

{
  "phone": "+1234567890",
  "project_id": "your_project_id"
}
```

### Paso 2: Crear Validación de Teléfono (WhatsApp)

```http
POST /phone/send-whatsapp
Content-Type: application/json
Authorization: Bearer 

{
  "phone": "+1234567890",
  "project_id": "your_project_id"
}
```

### Paso 3: Validar OTP de Teléfono

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

## Ejemplos de Código

```javascript
// Paso 1: Enviar SMS
const sendSMS = async (phone, projectId) => {
  const response = await fetch('https://api.verifik.co/v2/phone/send-sms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${yourJwtToken}`
    },
    body: JSON.stringify({
      phone: phone,
      project_id: projectId
    })
  });
  return await response.json();
};

// Paso 2: Validar OTP
const verifyOTP = async (phone, otp, validationId) => {
  const response = await fetch('https://api.verifik.co/v2/phone/verify-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${yourJwtToken}`
    },
    body: JSON.stringify({
      phone: phone,
      otp: otp,
      validation_id: validationId
    })
  });
  return await response.json();
};
```

```python

# Paso 1: Enviar SMS
def send_sms(phone, project_id):
    url = "https://api.verifik.co/v2/phone/send-sms"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {your_jwt_token}"
    }
    data = {
        "phone": phone,
        "project_id": project_id
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json()

# Paso 2: Validar OTP
def verify_otp(phone, otp, validation_id):
    url = "https://api.verifik.co/v2/phone/verify-otp"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {your_jwt_token}"
    }
    data = {
        "phone": phone,
        "otp": otp,
        "validation_id": validation_id
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json()
```
