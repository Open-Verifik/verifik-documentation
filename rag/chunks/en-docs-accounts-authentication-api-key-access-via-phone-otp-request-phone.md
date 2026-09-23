---
id: "en-docs-accounts-authentication-api-key-access-via-phone-otp-request-phone"
title: "API Key Access via Phone — **OTP Request - Phone**"
sourcePath: "docs/accounts/authentication/api-key-access-via-phone.md"
locale: "en"
category: "accounts"
tags:
  - "authentication"
  - "projects"
  - "accounts"
endpoints:
  - "/v2/projects/phone-login"
  - "/v2/projects/phone-login/confirm"
sourceAnchor: "**OTP Request - Phone**"
slug: "/accounts/authentication/api-key-access-via-phone"
url: "https://docs.verifik.co/accounts/authentication/api-key-access-via-phone"
---

# API Key Access via Phone
**API path(s):** /v2/projects/phone-login, /v2/projects/phone-login/confirm

## **OTP Request - Phone**

## **OTP Request - Phone**

Methods used for logging in with an already generated account in Verifik. This procedure is important because all queries require an Access Token, which is only generated upon login to the Verifik page.

These services create an OTP (One Time Password) request necessary to validate that the phone or email belongs to a Verifik client.

### Implementation

`POST - https://api.verifik.co/v2/projects/phone-login`

#### Parameters to send in the body

```json
{
  "countryCode": "string",
  "phone": 0,
  "type": "login"
}
```

#### Successful response (PhoneValidation creation)

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
