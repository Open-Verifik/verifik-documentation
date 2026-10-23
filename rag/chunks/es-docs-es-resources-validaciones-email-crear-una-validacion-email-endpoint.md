---
id: "es-docs-es-resources-validaciones-email-crear-una-validacion-email-endpoint"
title: "Crear una Validación de Email — Endpoint"
sourcePath: "docs-es/resources/validaciones-email/crear-una-validacion-email.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "Endpoint"
slug: "/resources/crear-una-validacion-email"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-email"
---

# Crear una Validación de Email
**API path(s):** /v2/email-validations

## Endpoint

```
POST https://api.verifik.co/v2/email-validations
```

Una Validación de Email es una instancia dentro del sistema de Verifik que permite procesar y validar direcciones de correo electrónico durante los procesos de autenticación y registro. Este proceso garantiza la autenticidad de las direcciones de email de los usuarios y brinda verificación segura mediante métodos de entrega por correo.

### Encabezados

#### `Content-Type`

**Tipo:** String  
**Requerido:** Sí  
**Valor:** `application/json`

#### `Authorization`

**Tipo:** String  
**Requerido:** Sí  
**Valor:** `Bearer {YOUR_ACCESS_TOKEN}`

### Parámetros del Cuerpo

#### `project`

**Tipo:** String  
**Requerido:** Sí

El identificador único del proyecto donde se utilizará esta validación de email.

#### `validationMethod`

**Tipo:** String  
**Requerido:** Sí

El método de validación, establecido en `verificationCode` o `oneTimeLink`.

#### `email`

**Tipo:** String  
**Requerido:** Sí

La dirección de email que será validada (los espacios se eliminarán automáticamente y se convertirá a minúsculas).

#### `type`

**Tipo:** String  
**Requerido:** Sí

Tipo de validación: `validation`, `login`, `onboarding` o `oneTimeLink`.

#### `expiresAt`

**Tipo:** String  
**Requerido:** No

Fecha de expiración opcional para el código de validación.

#### `redirectUrl`

**Tipo:** String  
**Requerido:** No

URL opcional para redirigir después de la validación.

#### `webhookUrl`

**Tipo:** String  
**Requerido:** No

URL opcional de webhook para notificaciones de validación.

#### `identityUrl`

**Tipo:** String  
**Requerido:** No

URL opcional de verificación de identidad.

#### `requires2FA`

**Tipo:** Boolean  
**Requerido:** No

Indicador opcional que indica si se requiere autenticación de dos factores.

#### `ipAddress`

**Tipo:** String  
**Requerido:** No

Dirección IP opcional del usuario.
