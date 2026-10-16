---
id: "es-docs-es-recursos-validaciones-de-telefono-crear-validacion-de-telefono-endpoint"
title: "Crear una Validación de Teléfono — Endpoint"
sourcePath: "docs-es/recursos/validaciones-de-telefono/crear-validacion-de-telefono.mdx"
locale: "es"
category: "recursos"
tags:
  - "phone-validations"
  - "recursos"
endpoint: "/v2/phone-validations"
sourceAnchor: "Endpoint"
slug: "/recursos/validaciones-de-telefono/crear-validacion-de-telefono"
url: "https://docs.verifik.co/verifik-es/recursos/validaciones-de-telefono/crear-validacion-de-telefono"
---

# Crear una Validación de Teléfono
**API path(s):** /v2/phone-validations

## Endpoint

```
POST https://api.verifik.co/v2/phone-validations
```

Una Validación de Teléfono es una instancia dentro del sistema de Verifik que permite procesar y validar números telefónicos durante los procesos de autenticación y registro. Este proceso asegura la autenticidad de los números de teléfono de los usuarios y proporciona verificación segura mediante métodos de entrega por SMS o WhatsApp.

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

El identificador único del proyecto donde se utilizará esta validación de teléfono.

#### `validationMethod`

**Tipo:** String  
**Requerido:** Sí

El método de validación, establecido en `verificationCode` o `manual`.

#### `phone`

**Tipo:** String  
**Requerido:** Sí

El número de teléfono que será validado (los espacios se eliminarán automáticamente).

#### `countryCode`

**Tipo:** String  
**Requerido:** Sí

El código de país del número telefónico en formato `+XXX` (por ejemplo, `+507` para Panamá).

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

Indicador opcional que señala si se requiere autenticación de dos factores.

#### `ipAddress`

**Tipo:** String  
**Requerido:** No

Dirección IP opcional del usuario.
