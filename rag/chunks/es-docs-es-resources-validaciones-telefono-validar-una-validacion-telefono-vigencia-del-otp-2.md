---
id: "es-docs-es-resources-validaciones-telefono-validar-una-validacion-telefono-vigencia-del-otp-2"
title: "Validar una Validación de Teléfono — Vigencia del OTP"
sourcePath: "docs-es/resources/validaciones-telefono/validar-una-validacion-telefono.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/v2/phone-validations"
  - "/v2/phone-validations/manual"
sourceAnchor: "Vigencia del OTP"
slug: "/resources/validar-una-validacion-telefono"
url: "https://docs.verifik.co/verifik-es/resources/validar-una-validacion-telefono"
---

# Validar una Validación de Teléfono
**API path(s):** /v2/phone-validations, /v2/phone-validations/manual

## Vigencia del OTP

Los OTP pendientes son válidos durante **10 minutos** desde el último envío/reenvío exitoso (`expiresAt` en la respuesta de creación). Después, este endpoint responde `412` `phoneValidation_has_expired`. Envía un OTP nuevo (respetando la ventana de ~2 minutos, o usa `force: true` en el create manual) antes de pedir al usuario que intente de nuevo.

### Intentos de OTP

Hoy **no hay límite de intentos en el servidor**. Un código incorrecto responde `403` `otp_does_not_match` hasta que expire el registro o se envíe un OTP nuevo. Si necesitan bloqueo o tope de intentos, impleméntenlo en su cliente.

### Errores comunes

| Status | Mensaje | Cuándo |
| --- | --- | --- |
| 403 | `otp_does_not_match` | El código no coincide. |
| 412 | `phoneValidation_has_expired` | Expiró el TTL del OTP pendiente (~10 minutos). |
| 409 | `otp_send_failed` | El último registro falló al enviarse (no es lo mismo que expiración). |
| 409 | `phone_validation_already_validated` | El OTP ya fue validado. |
| 404 | `phone_validation_not_found` | No hay Phone Validation para este teléfono. |
| 409 | `MissingParameter` | Faltan campos requeridos. |
