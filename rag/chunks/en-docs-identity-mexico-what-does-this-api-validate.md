---
id: "en-docs-identity-mexico-what-does-this-api-validate"
title: "Mexican Citizen — What does this API validate?"
sourcePath: "docs/identity/mexico.mdx"
locale: "en"
category: "identity"
tags:
  - "mx"
  - "identity"
endpoint: "/v2/mx/curp"
sourceAnchor: "What does this API validate?"
slug: "/identity/mexico"
url: "https://docs.verifik.co/identity/mexico"
---

# Mexican Citizen
**API path(s):** /v2/mx/curp

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Mexican citizens using the Unique Population Registry Code (CURP). It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & CURP**: Supports *Clave Única de Registro de Población* (CURP).
-   **Personal Details**: Returns date of birth, gender, and nationality.
-   **Identity Match**: Confirms that the name provided matches the CURP number.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/mx/curp
```

This endpoint verifies a Mexican national’s **CURP** (*Clave Única de Registro de Población*) against official records. Send `documentType` and `documentNumber` on a GET request; a successful response confirms the identity record and returns validated name and biographical fields when the CURP is recognized.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Allowed value: `CURP`. |
| `documentNumber` | string | Yes | The CURP value to validate. |
