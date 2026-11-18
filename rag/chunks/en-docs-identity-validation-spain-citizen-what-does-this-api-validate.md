---
id: "en-docs-identity-validation-spain-citizen-what-does-this-api-validate"
title: "Spanish Citizen — What does this API validate?"
sourcePath: "docs/identity-validation/spain-citizen.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "es"
  - "identity-validation"
endpoint: "/v2/es/cedula"
sourceAnchor: "What does this API validate?"
slug: "/identity-validation/spain-citizen"
url: "https://docs.verifik.co/identity-validation/spain-citizen"
---

# Spanish Citizen
**API path(s):** /v2/es/cedula

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Spanish citizens and residents using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & Document Number**: Supports *Documento Nacional de Identidad* (DNI) and *Número de Identidad de Extranjero* (NIE).
-   **Identity Match**: Confirms that the name provided matches the document number.
-   **Expiration Date Verification**: Validates the document expiration date.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/es/cedula
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed values: `DNIES`, `NIE`. |
| `documentNumber` | string | Yes      | Document number without spaces. |
| `date` | string | Yes      | Expiration date in `DD/MM/YYYY` format. |
