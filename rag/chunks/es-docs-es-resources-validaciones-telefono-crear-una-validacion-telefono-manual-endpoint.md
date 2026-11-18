---
id: "es-docs-es-resources-validaciones-telefono-crear-una-validacion-telefono-manual-endpoint"
title: "Crear una Validación de Teléfono manual — Endpoint"
sourcePath: "docs-es/resources/validaciones-telefono/crear-una-validacion-telefono-manual.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations/manual"
sourceAnchor: "Endpoint"
slug: "/resources/crear-una-validacion-telefono-manual"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-telefono-manual"
---

# Crear una Validación de Teléfono manual
**API path(s):** /v2/phone-validations/manual

## Endpoint

```
POST https://api.verifik.co/v2/phone-validations/manual
```

Crea una Phone Validation **independiente** y envía un OTP por SMS o WhatsApp. No se requiere `project` ni `projectFlow`. Es el mismo endpoint que usa **Smart Tools → Mensajes de WhatsApp / SMS**.

Tras un envío exitoso, continúa con [Validar una Validación de Teléfono](./validar-una-validacion-telefono.mdx).

:::info Facturación
Los créditos se verifican **antes** de enviar el mensaje, según el precio del país. Solo se cobran cuando el OTP se entrega (`sent: true`).
:::

### Headers

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### Parámetros del body

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `phone` | string | Sí | Solo número nacional (se eliminan espacios). No incluyas el código de país aquí. |
| `countryCode` | string | Sí | Código con `+` (ej. `+57`). Envíalo siempre y muéstralo al usuario junto al teléfono (ej. `+57 3001234567`). |
| `phoneGateway` | string | Sí | `sms` o `whatsapp`. |
| `title` | string | No | Nombre de empresa en la plantilla (1–15 caracteres). Se usa en WhatsApp `flow2` y en el texto SMS. |
| `language` | string | No | Idioma de la plantilla (`en`, `es`, …). Elige `flow2_en` / `flow2_es` cuando `whatsappTemplate` es `flow2`. |
| `whatsappTemplate` | string | No | Solo WhatsApp. `authentication` (**por defecto**) o `flow2`. Se ignora en SMS. |
| `force` | boolean | No | Si es `true`, omite la ventana de ~2 minutos de reenvío para el mismo teléfono + gateway. Úsalo en un botón “Reenviar”. |
| `ipAddress` | string | No | IP opcional para auditoría. |
