---
id: "es-docs-es-resources-validaciones-telefono-crear-una-validacion-telefono-valores-de-validationmethod-2"
title: "Crear una Validación de Teléfono — Valores de `validationMethod`"
sourcePath: "docs-es/resources/validaciones-telefono/crear-una-validacion-telefono.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations"
sourceAnchor: "Valores de `validationMethod`"
slug: "/resources/crear-una-validacion-telefono"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-telefono"
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
