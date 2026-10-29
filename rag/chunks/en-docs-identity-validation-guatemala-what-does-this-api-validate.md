---
id: "en-docs-identity-validation-guatemala-what-does-this-api-validate"
title: "Guatemalan Citizen — What does this API validate?"
sourcePath: "docs/identity-validation/guatemala.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "gt"
  - "identity-validation"
endpoint: "/v2/gt/cedula"
sourceAnchor: "What does this API validate?"
slug: "/identity-validation/guatemala"
url: "https://docs.verifik.co/identity-validation/guatemala"
---

# Guatemalan Citizen
**API path(s):** /v2/gt/cedula

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Guatemalan citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & CUI Number**: Supports *Cédula de Vecindad* or *Documento Personal de Identificación* (CUI).
-   **Identity Match**: Confirms that the name provided matches the CUI number.
-   **Date of Birth Verification**: Validates that the date of birth matches official SAT records.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

Verify a Guatemalan citizen using **`documentType`** `CUI`, **`documentNumber`**, and **`dateOfBirth`** (`DD/MM/YYYY`). Returns identity fields to support **KYC** and **compliance**.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/gt/cedula
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `CUI`. |
| `documentNumber` | string | Yes      | Document number. |
| `dateOfBirth`  | string  | Yes      | Date of birth (`DD/MM/YYYY`). |
