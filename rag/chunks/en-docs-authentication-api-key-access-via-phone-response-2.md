---
id: "en-docs-authentication-api-key-access-via-phone-response-2"
title: "API Key Access via Phone — Response"
sourcePath: "docs/authentication/api-key-access-via-phone.mdx"
locale: "en"
category: "authentication"
tags:
  - "authentication"
  - "projects"
endpoints:
  - "/api/projects/phone-login"
  - "/v2/projects/phone-login"
sourceAnchor: "Response"
slug: "/authentication/api-key-access-via-phone"
url: "https://docs.verifik.co/authentication/api-key-access-via-phone"
---

# API Key Access via Phone
**API path(s):** /api/projects/phone-login, /v2/projects/phone-login

## Response

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
        "language": "en",
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
    "message": "Invalid phone number format.",
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

## OTP Confirmation

### Endpoint

```
https://api.verifik.co/v2/projects/phone-login/confirm
```

The OTP confirmation services aim to generate a "login" to the Verifik account by validating that the sent OTP matches the one sent to the phone. As a response, the access token is obtained, which the user can use for queries.
