---
id: "es-docs-es-resources-inicios-sesion-aplicacion-crear-una-validacion-biometrica-i-endpoint"
title: "Crear una Validación Biométrica de Inicio de Sesión de Aplicación — Endpoint"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/crear-una-validacion-biometrica-inicio-sesion-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/app-login"
sourceAnchor: "Endpoint"
slug: "/resources/crear-una-validacion-biometrica-inicio-sesion-aplicacion"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-biometrica-inicio-sesion-aplicacion"
---

# Crear una Validación Biométrica de Inicio de Sesión de Aplicación
**API path(s):** /v2/biometric-validations/app-login

## Endpoint

```
POST https://api.verifik.co/v2/biometric-validations/app-login
```

### Descripción General

Una Validación Biométrica es una instancia dentro del sistema de Verifik que te permite procesar y validar identidades de usuarios mediante reconocimiento facial y detección de vida durante el proceso de inicio de sesión. Este endpoint está diseñado específicamente para usuarios que están en medio de un flujo de inicio de sesión de aplicación.

### Encabezados

| Nombre        | Valor                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

:::warning
El Token JWT que debes usar al crear `Validaciones Biométricas de Inicio de Sesión de Aplicación` es proporcionado por el [`Inicio de Sesión de Aplicación`](/verifik-es/resources/app-logins/create-an-app-login-crear-inicio-de-sesion-en-la-app) en la creación.
:::

### Parámetros

| Nombre         | Tipo    | Requerido | Descripción                                                                                                |
| -------------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| `project`      | string  | Sí        | El identificador único del proyecto donde se utilizará esta validación biométrica.                        |
| `projectFlow`  | string  | Sí        | El identificador único para la configuración del flujo del proyecto.                                      |
| `identifier`   | string  | Sí        | Un identificador único para el usuario o sesión (por ejemplo, correo electrónico, teléfono o ID personalizado). |
| `type`         | string  | Sí        | Debe establecerse en `login` para este endpoint.                                                          |
| `expiresAt`    | string  | No        | Fecha de expiración opcional para la sesión de validación.                                                |
| `redirectUrl`  | string  | No        | URL opcional para redirección después de la validación.                                                   |
| `webhookUrl`   | string  | No        | URL de webhook opcional para notificaciones de validación.                                                |
| `requires2FA`  | boolean | No        | Bandera opcional que indica si se requiere autenticación de dos factores.                                 |
| `ipAddress`    | string  | No        | Dirección IP opcional del usuario.                                                                        |
| `sendViaEmail` | boolean | No        | Bandera opcional para enviar enlace de validación por correo electrónico.                                 |
| `email`        | string  | No        | Dirección de correo electrónico para enviar el enlace de validación (requerido si sendViaEmail es true).  |
| `language`     | string  | No        | Idioma para plantillas de correo electrónico (en/es). Por defecto es "en".                               |
