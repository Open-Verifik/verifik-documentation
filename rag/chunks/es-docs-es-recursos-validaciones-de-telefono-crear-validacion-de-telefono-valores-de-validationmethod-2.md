---
id: "es-docs-es-recursos-validaciones-de-telefono-crear-validacion-de-telefono-valores-de-validationmethod-2"
title: "Crear una Validación de Teléfono — Valores de `validationMethod`"
sourcePath: "docs-es/recursos/validaciones-de-telefono/crear-validacion-de-telefono.mdx"
locale: "es"
category: "recursos"
tags:
  - "phone-validations"
  - "recursos"
endpoint: "/v2/phone-validations"
sourceAnchor: "Valores de `validationMethod`"
slug: "/recursos/validaciones-de-telefono/crear-validacion-de-telefono"
url: "https://docs.verifik.co/verifik-es/recursos/validaciones-de-telefono/crear-validacion-de-telefono"
---

# Crear una Validación de Teléfono
**API path(s):** /v2/phone-validations

## Valores de `validationMethod`

| Valor              | Descripción                                                                        |
| ------------------ | ---------------------------------------------------------------------------------- |
| `verificationCode` | Envía una contraseña de un solo uso (OTP) al número de teléfono para verificación. |
| `manual`           | Proceso de verificación manual sin OTP.                                            |

### Valores de `type`

| Valor        | Descripción                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `validation` | Validación general de número telefónico.                                                                                         |
| `login`      | Verificación de teléfono durante el inicio de sesión.                                                                            |
| `onboarding` | Verificación de teléfono durante el registro de usuario. Para onboarding, debes usar create-an-app-registration-phone-validation |

### Ejemplo de Solicitud

```javascript
const axios = require("axios");

const config = {
    method: "post",
    url: "https://api.verifik.co/v2/phone-validations",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
    },
    data: {
        project: "project_123456789",
        validationMethod: "verificationCode",
        phone: "1234567890",
        countryCode: "+1",
        type: "validation",
        expiresAt: "2024-01-15T11:30:00Z",
        redirectUrl: "https://example.com/success",
        webhookUrl: "https://example.com/webhook",
        requires2FA: false,
        ipAddress: "192.168.1.1",
    },
};

axios
    .request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });
```
