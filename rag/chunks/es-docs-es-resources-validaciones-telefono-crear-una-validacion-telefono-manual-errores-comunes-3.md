---
id: "es-docs-es-resources-validaciones-telefono-crear-una-validacion-telefono-manual-errores-comunes-3"
title: "Crear una Validación de Teléfono manual — Errores comunes"
sourcePath: "docs-es/resources/validaciones-telefono/crear-una-validacion-telefono-manual.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations/manual"
sourceAnchor: "Errores comunes"
slug: "/resources/crear-una-validacion-telefono-manual"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-telefono-manual"
---

# Crear una Validación de Teléfono manual
**API path(s):** /v2/phone-validations/manual

## Errores comunes

| Status | Mensaje | Cuándo |
| --- | --- | --- |
| 403 | `insufficient_credits` | Saldo insuficiente. No se envía el mensaje. |
| 409 | `otp_recently_sent` | Cooldown: ya se envió un OTP a este teléfono + gateway en ~2 minutos (y `force` no es `true`). |
| 409 | `otp_not_sent` | Falló el envío del proveedor. Distinto del cooldown. |
| 409 | `MissingParameter` | Faltan campos o `countryCode` no tiene formato `+dígitos`. |
| 403 | Forbidden | La función de mensajería SMS/WhatsApp no está disponible en la cuenta. |

### Siguiente paso

Verifica el código con [`PUT /v2/phone-validations`](./validar-una-validacion-telefono.mdx).
