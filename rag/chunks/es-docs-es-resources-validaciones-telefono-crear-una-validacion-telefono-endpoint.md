---
id: "es-docs-es-resources-validaciones-telefono-crear-una-validacion-telefono-endpoint"
title: "Crear una Validación de Teléfono — Endpoint"
sourcePath: "docs-es/resources/validaciones-telefono/crear-una-validacion-telefono.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/v2/phone-validations"
  - "/v2/phone-validations/app-registration"
  - "/v2/phone-validations/manual"
sourceAnchor: "Endpoint"
slug: "/resources/crear-una-validacion-telefono"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-telefono"
---

# Crear una Validación de Teléfono
**API path(s):** /v2/phone-validations, /v2/phone-validations/app-registration, /v2/phone-validations/manual

## Endpoint

:::caution Usa los endpoints de creación dedicados
Para **Smart Tools / OTPs independientes** (sin proyecto), usa  
[`POST /v2/phone-validations/manual`](./crear-una-validacion-telefono-manual.mdx).

Para flujos de **Smart Enroll / App Registration**, usa  
[`POST /v2/phone-validations/app-registration`](/resources/phone-validations/create-an-app-registration-phone-validation).

Si no estás seguro, empieza por la [visión general de Validaciones de Teléfono](./validaciones-telefono.mdx).
:::

### Endpoint

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
