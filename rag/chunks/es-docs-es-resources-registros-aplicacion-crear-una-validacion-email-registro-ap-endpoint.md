---
id: "es-docs-es-resources-registros-aplicacion-crear-una-validacion-email-registro-ap-endpoint"
title: "Crear una Validación de Email de Registro de Aplicación — Endpoint"
sourcePath: "docs-es/resources/registros-aplicacion/crear-una-validacion-email-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations/app-registration"
sourceAnchor: "Endpoint"
---

# Crear una Validación de Email de Registro de Aplicación
**API path(s):** /v2/email-validations/app-registration

## Endpoint

```
POST https://api.verifik.co/v2/email-validations/app-registration
```

Este endpoint crea un proceso de validación de email específicamente para usuarios que están en medio de un flujo de registro de aplicación. Vincula automáticamente la validación de email al registro de aplicación del usuario y maneja la carga de créditos para tu plan SmartEnroll. Una respuesta exitosa (200) indica que Verifik ha enviado un email con un OTP que se usará para completar el proceso de verificación de email.

:::warning
El Token JWT que debes usar al crear `Validaciones de Email de Registro de Aplicación` se proporciona desde el `Registro de Aplicación` en creación. Debes usar el token devuelto al crear un [Registro de Aplicación](/verifik-es/resources/registros-aplicacion/crear-un-registro-aplicacion) para autenticar esta solicitud.
:::

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Params

| Name               | Type    | Required | Description                                                                                                                                                                        |
| ------------------ | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project`          | string  | Yes      | El ID del proyecto donde se realizará esta validación de email. Este es el `_id` generado al crear un proyecto                                                                     |
| `validationMethod` | string  | Yes      | Define cómo se validará el email. Debe ser `manual` o `verificationCode`                                                                                                           |
| `email`            | string  | Yes      | La dirección de email que será validada. Este campo es requerido y se convertirá automáticamente a minúsculas y se eliminarán los espacios en blanco                               |
| `type`             | string  | Yes      | El tipo de proceso para el cual es esta validación de email. Debe ser uno de: `validation`, `login`, `onboarding`, o `oneTimeLink`                                                 |
| `expiresAt`        | string  | No       | Marca de tiempo opcional cuando expira el código OTP. Si no se proporciona, se establecerá un tiempo de expiración por defecto. Formato: ISO 8601 (ej: `2024-12-31T23:59:59.000Z`) |
| `redirectUrl`      | string  | No       | URL opcional donde los usuarios serán redirigidos después de completar el proceso de validación de email                                                                           |
| `webhookUrl`       | string  | No       | URL de webhook externa opcional para recibir notificaciones en tiempo real sobre cambios de estado de validación                                                                   |
| `requires2FA`      | boolean | No       | Booleano opcional que indica si se requiere autenticación de dos factores. Por defecto: `false`                                                                                    |
| `ipAddress`        | string  | No       | Dirección IP opcional del usuario que solicita la validación de email                                                                                                              |

#### Validation Method Values

| Value              | Description                                              |
| ------------------ | -------------------------------------------------------- |
| `verificationCode` | Envía código OTP por email para verificación del usuario |
| `manual`           | Proceso de verificación manual sin OTP                   |

#### Type Values

| Value         | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `onboarding`  | Proceso de registro de usuario (recomendado para registros de aplicación) |
| `validation`  | Proceso general de validación de email                                    |
| `login`       | Proceso de autenticación de usuario                                       |
| `oneTimeLink` | Validación de enlace de un solo uso                                       |
