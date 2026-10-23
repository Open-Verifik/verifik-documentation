---
id: "es-docs-es-cuentas-autenticacion-telefono-de-autenticacion"
title: "Teléfono de Autenticación — Endpoint"
sourcePath: "docs-es/cuentas/autenticacion/telefono-de-autenticacion.mdx"
locale: "es"
category: "cuentas"
tags:
  - "projects"
  - "cuentas"
endpoint: "/v2/projects/phone-login"
sourceAnchor: "Endpoint"
slug: "/cuentas/autenticacion/telefono-de-autenticacion"
url: "https://docs.verifik.co/verifik-es/cuentas/autenticacion/telefono-de-autenticacion"
---

# Teléfono de Autenticación
**API path(s):** /v2/projects/phone-login

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/projects/phone-login
```

Métodos usados para iniciar sesión con una cuenta ya generada en Verifik. Este procedimiento es importante porque todas las consultas requieren un Access Token, que solo se genera al iniciar sesión.

Estos servicios crean una solicitud de OTP (One Time Password) necesaria para validar que el teléfono pertenece a un cliente de Verifik.

### Encabezados

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                    |
| ---------------- | ------ | --------- | ---------------------------------------------- |
| `countryCode`    | string | Sí        | Código de país para el número de teléfono      |
| `phone`          | number | Sí        | Número de teléfono                              |
| `type`           | string | Sí        | Tipo de solicitud. Usar "login" para autenticación |

### Solicitud

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/projects/phone-login',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    countryCode: '+1',
    phone: 1234566663,
    type: 'login'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

### Respuesta

  

```json
{
    "data": {
        "client": "613375a1eab2fe08527f81e2",
        "project": "6266193db77ccc8111730c90",
        "projectFlow": "658ed28b0990f300134d7b78",
        "status": "sent",
        "countryCode": "+1",
        "phone": "1234566663",
        "phoneGateway": "whatsapp",
        "otp": "$2a$10$fdoxDgtv6J7E4nnZoCORSOiUbpCGOOE5JWghrvAUNZIoX5h81zJLq",
        "expiresAt": "2024-05-29T03:51:26.000Z",
        "type": "login"
    },
    "signature": {
        "dateTime": "May 29, 2024 3:41 AM",
        "message": "Certified by Verifik.co"
    }
}
```
