---
id: "es-docs-es-access-access-metodos-de-autenticacion-2"
title: "Access — Métodos de Autenticación"
sourcePath: "docs-es/access/access.md"
locale: "es"
category: "access"
tags:
  - "access"
endpoint: "/v2/access"
sourceAnchor: "Métodos de Autenticación"
slug: "/acceso"
url: "https://docs.verifik.co/verifik-es/acceso"
---

# Access
**API path(s):** /v2/access

Todo lo que Acceso Inteligente tiene para ofrecer pero a nivel de API, dando la flexibilidad de codificar una solución personalizada basada en las necesidades de tu empresa.

## Métodos de Autenticación

Elige entre tres métodos de autenticación poderosos, cada uno con soporte API integral:

  
    
      
        📧 Acceso por Correo
      
      
        Envía y verifica códigos OTP vía correo electrónico para autenticación segura.
        Ver Ejemplo
      
    
  
  
    
      
        📱 Acceso por Teléfono
      
      
        Envía y verifica códigos OTP vía SMS y WhatsApp.
        Ver Ejemplo
      
    
  
  
    
      
        👤 Acceso Biométrico
      
      
        Reconocimiento facial y detección de vida para autenticación segura.
        Ver Ejemplo

## Referencia de API

### Autenticación

Todas las solicitudes de API requieren un token JWT válido. Incluye el token en el header de Authorization:

```bash
Authorization: Bearer 
```

### URL Base

```bash
https://api.verifik.co/v2/access
```

---

## Ejemplo de Acceso por Correo

### Configuración

Si no has creado un proyecto y un projectFlow con la propiedad type = **login**, entonces aquí están los enlaces para eso:

- [Crear un Proyecto](#)
- [Crear un Flujo de Proyecto](#)

### Empecemos

El flujo principalmente comienza con la creación de la validación de correo electrónico, luego procedemos con la validación de esa validación de correo electrónico que tiene una condición de tiempo y también ingresando la contraseña de un solo uso que pertenece a esa validación de correo electrónico.

#### Paso 1: Crear Validación de Correo

```http
POST /email/send-otp
Content-Type: application/json
Authorization: Bearer 

{
  "email": "user@example.com",
  "project_id": "your_project_id"
}
```

#### Paso 2: Validar OTP de Correo

```http
POST /email/verify-otp
Content-Type: application/json
Authorization: Bearer 

{
  "email": "user@example.com",
  "otp": "123456",
  "validation_id": "validation_id_from_step_1"
}
```
