---
id: "es-docs-es-resources-validaciones-telefono-crear-una-validacion-telefono-manual-plantillas-de-whatsapp-2"
title: "Crear una Validación de Teléfono manual — Plantillas de WhatsApp"
sourcePath: "docs-es/resources/validaciones-telefono/crear-una-validacion-telefono-manual.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations/manual"
sourceAnchor: "Plantillas de WhatsApp"
slug: "/resources/crear-una-validacion-telefono-manual"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-telefono-manual"
---

# Crear una Validación de Teléfono manual
**API path(s):** /v2/phone-validations/manual

## Plantillas de WhatsApp

| `whatsappTemplate` | Plantilla Meta | Notas |
| --- | --- | --- |
| `authentication` (por defecto) | `authentication` | OTP en el cuerpo + parámetro de botón URL. |
| `flow2` | `flow2_es` / `flow2_en` | Encabezado/cuerpo con marca (`title` como sección) + código + acción; el idioma elige la variante. |

```json
{
  "phone": "3001234567",
  "countryCode": "+57",
  "phoneGateway": "whatsapp",
  "title": "Company ABC",
  "language": "es",
  "whatsappTemplate": "flow2"
}
```

### Ejemplos de solicitud

```bash
curl -X POST "https://api.verifik.co/v2/phone-validations/manual" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "3001234567",
    "countryCode": "+57",
    "phoneGateway": "whatsapp",
    "title": "Company ABC",
    "language": "es"
  }'
```

```javascript

const { data } = await axios.post(
  "https://api.verifik.co/v2/phone-validations/manual",
  {
    phone: "3001234567",
    countryCode: "+57",
    phoneGateway: "whatsapp",
    title: "Company ABC",
    language: "es",
  },
  {
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json",
    },
  }
);

console.log(data);
```

### Vigencia del OTP y reenvío

| Regla | Valor por defecto | Notas |
| --- | --- | --- |
| TTL del OTP | **10 minutos** | Se devuelve en `data.expiresAt` tras un envío exitoso. Después, la verificación responde `412` `phoneValidation_has_expired`. |
| Ventana de reenvío | **~2 minutos** | Un segundo envío para el mismo cliente + teléfono + `phoneGateway` en ~2 minutos responde `409` `otp_recently_sent` (sin mensaje nuevo). |
| Forzar reenvío | `"force": true` | Omite la ventana de 2 minutos para enviar un código nuevo de inmediato (p. ej. botón “Reenviar”). Cada envío/reenvío exitoso reinicia `expiresAt` a +10 minutos. |

:::tip Guía de UI
Muestra el destino como **`countryCode` + `phone` nacional** (ej. `+57 3001234567`). Usa `expiresAt` para la cuenta regresiva de expiración y habilita “Reenviar” tras la ventana de 2 minutos (o siempre con `force: true`).
:::
