---
id: "en-docs-identity-validation-ecuador-what-does-this-api-validate"
title: "Ecuadorian Citizen — What does this API validate?"
sourcePath: "docs/identity-validation/ecuador.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "ec"
  - "identity-validation"
endpoint: "/v2/ec/cedula"
sourceAnchor: "What does this API validate?"
slug: "/identity-validation/ecuador"
url: "https://docs.verifik.co/identity-validation/ecuador"
---

# Ecuadorian Citizen
**API path(s):** /v2/ec/cedula

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Ecuadorian citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & CCEC Number**: Supports *Cédula de Ciudadanía Ecuatoriana* (CCEC).
-   **Identity Match**: Confirms that the name provided matches the CCEC number.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/ec/cedula
```

Verify an Ecuadorian citizen using **`documentType`** `CCEC` and **`documentNumber`**. Returns identity fields from official records to support **KYC** and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `CCEC`. |
| `documentNumber` | string | Yes      | Document number without spaces or periods. |
