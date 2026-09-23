---
id: "en-docs-identity-panama-what-does-this-api-validate"
title: "Panamanian Citizen — What does this API validate?"
sourcePath: "docs/identity/panama.mdx"
locale: "en"
category: "identity"
tags:
  - "pa"
  - "identity"
endpoint: "/v2/pa/cedula"
sourceAnchor: "What does this API validate?"
slug: "/identity/panama"
url: "https://docs.verifik.co/identity/panama"
---

# Panamanian Citizen
**API path(s):** /v2/pa/cedula

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Panamanian citizens. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API validates:

-   **Full Name & CCPA Number**: Supports *Cédula de Identidad Personal* (CCPA) for citizens and residents.
-   **Identity Match**: Confirms that the name provided matches the CCPA number.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/pa/cedula
```

Verify Panamanian **CCPA** (*Cédula de Identidad Personal*) data. Send **`documentType`** (`CCPA`) and a normalized **`documentNumber`**; the response confirms that the identity record is consistent for **KYC**, customer onboarding, and fraud controls.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `CCPA`. |
| `documentNumber` | string | Yes      | Full Panamanian cédula after normalization (see **[Accepted `documentNumber` formats](#accepted-documentnumber-formats)** below). |
