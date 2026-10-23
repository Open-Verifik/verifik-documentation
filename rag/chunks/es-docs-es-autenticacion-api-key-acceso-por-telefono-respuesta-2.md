---
id: "es-docs-es-autenticacion-api-key-acceso-por-telefono-respuesta-2"
title: "Acceso con API Key vía Teléfono — Respuesta"
sourcePath: "docs-es/autenticacion/api-key-acceso-por-telefono.mdx"
locale: "es"
category: "autenticacion"
tags:
  - "projects"
  - "autenticacion"
endpoint: "/v2/projects/phone-login"
sourceAnchor: "Respuesta"
slug: "/autenticacion/acceso-con-llave-por-telefono"
url: "https://docs.verifik.co/verifik-es/autenticacion/acceso-con-llave-por-telefono"
---

# Acceso con API Key vía Teléfono
**API path(s):** /v2/projects/phone-login

## Respuesta

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
        "phoneData": {
            "title": "Verifik Client"
        },
        "type": "login",
        "redirectUrl": "https://verifik.co",
        "requires2FA": false,
        "language": "es",
        "_id": "6656a3e6eb43abfd7146abb6",
        "updatedAt": "2024-05-29T03:41:27.009Z",
        "createdAt": "2024-05-29T03:41:27.009Z",
        "__v": 0,
        "new": true,
        "providerConfirmation": {}
    },
    "signature": {
        "dateTime": "May 29, 2024 3:41 AM",
        "message": "Certified by Verifik.co"
    },
    "id": "Y0628"
}
```

  
  

```json
{
    "code": "BadRequest",
    "message": "Formato de número de teléfono inválido.",
    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
    }
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "missing countryCode\n. missing phone\n. missing type\n"
}
```

## Confirmación OTP

### Endpoint

```
https://api.verifik.co/v2/projects/phone-login/confirm
```

Los servicios de confirmación de OTP generan un "login" validando que el OTP enviado coincida con el recibido en el teléfono. Como respuesta se obtiene el access token, que el usuario puede usar para consultas.
