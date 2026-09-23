---
id: "es-docs-es-resources-registros-aplicacion-reenviar-enlace-registro-aplicacion-endpoint"
title: "Reenviar enlace de registro de aplicación — Endpoint"
sourcePath: "docs-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations"
  - "/v2/app-registrations/${appregistrationid}/resend-link"
  - "/v2/app-registrations/%s/resend-link"
  - "/v2/app-registrations/{app_registration_id}/resend-link"
  - "/v2/app-registrations/{id}"
  - "/v2/app-registrations/{id}/resend-link"
sourceAnchor: "Endpoint"
---

# Reenviar enlace de registro de aplicación
**API path(s):** /v2/app-registrations, /v2/app-registrations/${appregistrationid}/resend-link, /v2/app-registrations/%s/resend-link, /v2/app-registrations/{app_registration_id}/resend-link, /v2/app-registrations/{id}, /v2/app-registrations/{id}/resend-link

## Endpoint

```
POST https://api.verifik.co/v2/app-registrations/{id}/resend-link
```

Genera una URL de continuación de SmartEnroll hospedado para un App Registration existente e incompleto. Redirige al usuario final a `data.link` para que retome el paso actual en lugar de iniciar un registro nuevo.

Es la API que usa la acción **Reenviar enlace** del admin de Verifik (copiar enlace o enviar correo). Guía de producto: [Reanudar un enrollment incompleto](/verifik-es/smartenroll/reanudar).

Autentica con el **token de API del cliente dueño del proyecto**. No uses el JWT de sesión del enrollee que devolvió create o un `link` anterior.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Params

| Name             | Type    | Required | Description                                                                                                                                              |
| ---------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | string  | Yes      | `_id` del App Registration a reanudar. Parámetro de ruta.                                                                                                |
| `sendEmail`      | boolean | No       | Si es `true` (o `"true"`), envía el enlace al correo del enrollee. Si se omite o es `false`, solo devuelve `token` y `link`.                             |
| `recipientEmail` | string  | No       | Sobrescribe el destinatario. **Solo super-admin.** Los tokens de cliente deben omitir este campo; se usa el email del registro.                          |

El JWT de continuación caduca en **30 minutos**. `expiresInMinutes` no es un parámetro de cliente en este endpoint.
