---
id: "es-docs-es-resources-registros-aplicacion-crear-una-validacion-telefono-registro-params-2"
title: "Crear una Validación de Teléfono de Registro de Aplicación — Params"
sourcePath: "docs-es/resources/registros-aplicacion/crear-una-validacion-telefono-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations/app-registration"
sourceAnchor: "Params"
---

# Crear una Validación de Teléfono de Registro de Aplicación
**API path(s):** /v2/phone-validations/app-registration

## Params

| Name               | Type    | Required | Description                                                                                                                                                                             |
| ------------------ | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `project`          | string  | Yes      | El identificador único del proyecto donde se utilizará esta validación de teléfono                                                                                                      |
| `validationMethod` | string  | Yes      | El método de validación. Debe ser `verificationCode`                                                                                                                                    |
| `phone`            | string  | Yes      | El número de teléfono que será validado. Los espacios se eliminarán automáticamente durante el procesamiento                                                                            |
| `countryCode`      | string  | Yes      | El código de país del número telefónico en formato `+XXX` (ej: `+507` para Panamá, `+1` para Estados Unidos). Debe coincidir con el formato `+` seguido de 1 a 3 dígitos                |
| `type`             | string  | Yes      | Tipo de validación. Debe ser uno de: `validation`, `login`, `onboarding`, o `oneTimeLink`                                                                                               |
| `expiresAt`        | string  | No       | Fecha de expiración opcional para el código de validación. Si no se proporciona, se establecerá un tiempo de expiración por defecto. Formato: ISO 8601 (ej: `2024-12-31T23:59:59.000Z`) |
| `redirectUrl`      | string  | No       | URL opcional para redirigir después de la validación                                                                                                                                    |
| `webhookUrl`       | string  | No       | URL de webhook opcional para notificaciones de validación                                                                                                                               |
| `identityUrl`      | string  | No       | URL opcional de verificación de identidad                                                                                                                                               |
| `requires2FA`      | boolean | No       | Bandera opcional que indica si se requiere autenticación de dos factores. Por defecto: `false`                                                                                          |
| `ipAddress`        | string  | No       | Dirección IP opcional del usuario                                                                                                                                                       |

#### Validation Method Values

| Value              | Description                                                                       |
| ------------------ | --------------------------------------------------------------------------------- |
| `verificationCode` | Envía una contraseña de un solo uso (OTP) al número de teléfono para verificación |

#### Type Values

| Value         | Description                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------------- |
| `onboarding`  | Verificación de teléfono durante el registro de usuario (recomendado para registros de aplicación) |
| `validation`  | Validación general de número telefónico                                                            |
| `login`       | Verificación de teléfono durante el inicio de sesión del usuario                                   |
| `oneTimeLink` | Validación de enlace de un solo uso                                                                |
