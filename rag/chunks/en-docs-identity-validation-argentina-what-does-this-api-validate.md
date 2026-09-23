---
id: "en-docs-identity-validation-argentina-what-does-this-api-validate"
title: "Argentine Citizen — What does this API validate?"
sourcePath: "docs/identity-validation/argentina.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "ar"
  - "identity-validation"
endpoint: "/v2/ar/cedula"
sourceAnchor: "What does this API validate?"
slug: "/identity-validation/argentina"
url: "https://docs.verifik.co/identity-validation/argentina"
---

# Argentine Citizen
**API path(s):** /v2/ar/cedula

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Argentine citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & DNI Number**: Supports *Documento Nacional de Identidad* (DNI).
-   **Identity Match**: Confirms that the name provided matches the DNI number.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/ar/cedula
```

Verify an Argentine identity using **`documentType`** `DNIAR` and **`documentNumber`**. Returns identity fields to support **KYC** and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed parameter: `DNIAR`. |
| `documentNumber` | string | Yes      | Document number of the person to consult without spaces. |
