---
id: "es-docs-es-resources-validaciones-telefono-validar-una-validacion-telefono-endpoint"
title: "Validar una Validación de Teléfono — Endpoint"
sourcePath: "docs-es/resources/validaciones-telefono/validar-una-validacion-telefono.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/v2/phone-validations"
  - "/v2/phone-validations/manual"
sourceAnchor: "Endpoint"
slug: "/resources/validar-una-validacion-telefono"
url: "https://docs.verifik.co/verifik-es/resources/validar-una-validacion-telefono"
---

# Validar una Validación de Teléfono
**API path(s):** /v2/phone-validations, /v2/phone-validations/manual

## Endpoint

```
PUT https://api.verifik.co/v2/phone-validations
```

Confirma el OTP que recibió el usuario. Verifik busca la Phone Validation más reciente en estado **sent** (y no expirada) para ese teléfono — incluyendo registros **manuales / Smart Tools** y registros de flujo de proyecto.

:::tip Combínalo con el envío
Los OTPs independientes se crean con [`POST /v2/phone-validations/manual`](./crear-una-validacion-telefono-manual.mdx).
:::

### Headers

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### Parámetros del body

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `phone` | string | Sí | Mismo número nacional usado al enviar el OTP. |
| `countryCode` | string | Sí | Código con `+`. |
| `otp` | number | Sí | Código numérico recibido. |
| `phoneGateway` | string | No | `sms` o `whatsapp`. |
| `project` | string | No | Filtro opcional para registros de flujo. |
| `projectFlow` | string | No | Filtro opcional de project flow. |

### Ejemplo

  

```bash
curl -X PUT "https://api.verifik.co/v2/phone-validations" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "3001234567",
    "countryCode": "+57",
    "otp": 123456,
    "phoneGateway": "whatsapp"
  }'
```

  
  

```javascript

const { data } = await axios.put(
  "https://api.verifik.co/v2/phone-validations",
  {
    phone: "3001234567",
    countryCode: "+57",
    otp: 123456,
    phoneGateway: "whatsapp",
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
