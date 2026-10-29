---
id: "es-docs-es-resources-registros-aplicacion-validar-una-validacion-telefono-regist-endpoint"
title: "Validar una Validación de Teléfono de Registro de Aplicación — Endpoint"
sourcePath: "docs-es/resources/registros-aplicacion/validar-una-validacion-telefono-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations"
sourceAnchor: "Endpoint"
---

# Validar una Validación de Teléfono de Registro de Aplicación
**API path(s):** /v2/phone-validations

## Endpoint

```
PUT https://api.verifik.co/v2/phone-validations
```

Este endpoint valida una contraseña de un solo uso (OTP) enviada al número de teléfono de un usuario durante el proceso de registro de aplicación (incorporación). Asegura que el OTP proporcionado por el usuario sea correcto y actualiza el estado de verificación en consecuencia. Esta ruta está específicamente diseñada para usuarios que están en medio de un flujo de registro de aplicación.

:::warning
El Token JWT que debes usar al validar `Validaciones de Teléfono de Registro de Aplicación` se proporciona desde el `Registro de Aplicación` en creación. Debes usar el token devuelto al crear un [Registro de Aplicación](/verifik-es/resources/registros-aplicacion/crear-un-registro-aplicacion) para autenticar esta solicitud.
:::

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Params

| Name           | Type   | Required | Description                                                                                                                                                              |
| -------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `phone`        | string | Yes      | El número de teléfono que se usó para crear la validación de teléfono. Los espacios se eliminarán automáticamente durante el procesamiento                               |
| `countryCode`  | string | Yes      | El código de país del número telefónico en formato `+XXX` (ej: `+507` para Panamá, `+1` para Estados Unidos). Debe coincidir con el formato `+` seguido de 1 a 3 dígitos |
| `otp`          | number | Yes      | La contraseña de un solo uso (OTP) que se envió al número de teléfono del usuario                                                                                        |
| `project`      | string | No       | El identificador único del proyecto. Opcional, ayuda a reducir la validación                                                                                             |
| `projectFlow`  | string | No       | El identificador único del flujo de proyecto. Opcional, ayuda a reducir la validación                                                                                    |
| `phoneGateway` | string | No       | El método de entrega usado: `sms`, `whatsapp`, o `none`                                                                                                                  |
