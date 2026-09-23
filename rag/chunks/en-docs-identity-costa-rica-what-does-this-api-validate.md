---
id: "en-docs-identity-costa-rica-what-does-this-api-validate"
title: "Costa Rican Citizen (CCCR) — What does this API validate?"
sourcePath: "docs/identity/costa-rica.mdx"
locale: "en"
category: "identity"
tags:
  - "cr"
  - "identity"
endpoint: "/v2/cr/cedula"
sourceAnchor: "What does this API validate?"
slug: "/identity/costa-rica"
url: "https://docs.verifik.co/identity/costa-rica"
---

# Costa Rican Citizen (CCCR)
**API path(s):** /v2/cr/cedula

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Costa Rican citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & CCCR Number**: Supports *Cédula de Identidad Costarricense* (CCCR).
-   **Identity Match**: Confirms that the name provided matches the CCCR number.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/cr/cedula
```

This endpoint verifies the **CCCR** (*Cédula de Identidad Costarricense*) against official sources. Send **`documentType`** as `CCCR` and the **`documentNumber`** (cédula number without spaces) on a GET request; the response includes structured name fields for **KYC**, onboarding, and fraud checks.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `CCCR`. |
| `documentNumber` | string | Yes      | Cedula number without spaces. |

Sandbox clients can use document numbers `010000001`–`010000010` (canonical `10000001`–`10000010`) for stable demo profiles; `090040401` returns 404; `090040402` returns the "renewal required" response shown below.
