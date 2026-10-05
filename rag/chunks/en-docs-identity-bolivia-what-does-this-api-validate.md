---
id: "en-docs-identity-bolivia-what-does-this-api-validate"
title: "Bolivian Citizen — What does this API validate?"
sourcePath: "docs/identity/bolivia.mdx"
locale: "en"
category: "identity"
tags:
  - "bo"
  - "identity"
endpoint: "/v2/bo/cedula"
sourceAnchor: "What does this API validate?"
slug: "/identity/bolivia"
url: "https://docs.verifik.co/identity/bolivia"
---

# Bolivian Citizen
**API path(s):** /v2/bo/cedula

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Bolivian citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & CI Number**: Supports *Cédula de Identidad* (CI).
-   **Identity Match**: Confirms that the name provided matches the CI number.
-   **Date of Birth Verification**: Validates the date of birth matches the official records.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/bo/cedula
```

Verify a Bolivian citizen using **`documentType`** `CI`, **`documentNumber`**, and **`dateOfBirth`** (`DD/MM/YYYY`). Returns identity fields to support **KYC** and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `CI`. |
| `documentNumber` | string | Yes      | CI document number. |
| `dateOfBirth` | string | Yes      | Date of birth in `DD/MM/YYYY` format. |
