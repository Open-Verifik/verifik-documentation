---
id: "es-docs-es-resources-registros-aplicacion-validar-una-validacion-email-registro--endpoint"
title: "Validar una Validación de Email de Registro de Aplicación — Endpoint"
sourcePath: "docs-es/resources/registros-aplicacion/validar-una-validacion-email-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/email-validations/${emailvalidationid}"
  - "/v2/email-validations/%s"
  - "/v2/email-validations/{email_validation_id}"
  - "/v2/email-validations/{id}"
sourceAnchor: "Endpoint"
---

# Validar una Validación de Email de Registro de Aplicación
**API path(s):** /v2/email-validations/${emailvalidationid}, /v2/email-validations/%s, /v2/email-validations/{email_validation_id}, /v2/email-validations/{id}

## Endpoint

```
PUT https://api.verifik.co/v2/email-validations/{id}
```

Este endpoint valida una contraseña de un solo uso (OTP) enviada a la dirección de email de un usuario durante el proceso de incorporación (registro de aplicación). Asegura que el OTP proporcionado por el usuario sea correcto y actualiza el estado de verificación en consecuencia. Esta ruta está específicamente diseñada para usuarios que están en medio de un flujo de registro de aplicación.

:::warning
El Token JWT que debes usar al validar `Validaciones de Email de Incorporación` se proporciona desde el `Registro de Aplicación` en creación. Debes usar el token devuelto al crear un [Registro de Aplicación](/verifik-es/resources/registros-aplicacion/crear-un-registro-aplicacion) para autenticar esta solicitud.
:::

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Params

| Name    | Type   | Required | Description                                                                                                                                 |
| ------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`    | string | Yes      | El identificador único de la Validación de Email que deseas validar. Este es el `_id` devuelto al crear la validación de email              |
| `email` | string | Yes      | La dirección de email que se usó para crear la validación de email. Los espacios se eliminarán automáticamente y se convertirá a minúsculas |
| `otp`   | number | Yes      | La contraseña de un solo uso (OTP) que se envió a la dirección de email del usuario                                                         |
