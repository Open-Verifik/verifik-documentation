---
id: "en-docs-identity-venezuela-foreigner-id-what-does-this-api-validate"
title: "\\U0001F1FB\\U0001F1EA Venezuela - Foreigner ID (CEVE) — What does this API validate?"
sourcePath: "docs/identity/venezuela-foreigner-id.mdx"
locale: "en"
category: "identity"
tags:
  - "ve"
  - "identity"
endpoints:
  - "/v2/ve/cedula"
  - "/v2/ve/foreigner-id"
  - "/v2/ve/foreigner-id?documentnumber=10000001"
sourceAnchor: "What does this API validate?"
slug: "/identity/venezuela-foreigner-id"
url: "https://docs.verifik.co/identity/venezuela-foreigner-id"
---

# \U0001F1FB\U0001F1EA Venezuela - Foreigner ID (CEVE)
**API path(s):** /v2/ve/cedula, /v2/ve/foreigner-id, /v2/ve/foreigner-id?documentnumber=10000001

## What does this API validate?

Verifik's Identity Verification API helps you authenticate foreign individuals in Venezuela using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to verify the identity of foreign clients, employees, or partners in Venezuela.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & Document Number**: Foreigner identification (**CEVE**—*Cédula de Identidad de Extranjero*).
-   **Identity Match**: Returned names align with the document on record.
-   **Document Type**: Responses include `documentType: "CEVE"` for this route.

By verifying these details, you can be confident that the foreign individual you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/ve/foreigner-id
```

Use this endpoint for **foreign nationals** registered with a **CEVE** cédula. Pass the document number as **`documentNumber`**; the API applies **CEVE** and returns structured identity fields. For **Venezuelan citizens** (national **CCVE**), use [`GET /v2/ve/cedula`](/identity/venezuela) instead.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentNumber` | string | Yes      | CEVE cédula number. Dots and spaces are stripped. Do not send `documentType`—this route always uses **CEVE**. |
