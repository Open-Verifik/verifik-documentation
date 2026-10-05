---
id: "en-docs-business-validation-costa-rica-what-does-this-api-validate"
title: "Costa Rican Business Verification (NITE) — What does this API validate?"
sourcePath: "docs/business-validation/costa-rica.mdx"
locale: "en"
category: "business-validation"
tags:
  - "cr"
  - "business-validation"
endpoint: "/v2/cr/company"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/costa-rica"
url: "https://docs.verifik.co/business-validation/costa-rica"
---

# Costa Rican Business Verification (NITE)
**API path(s):** /v2/cr/company

## What does this API validate?

Verifik's Business Verification API helps you authenticate Costa Rican companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Company Name & NITE Number**: Supports *Número de Identificación Tributaria de Empresas* (NITE).
-   **Business Information**: Returns company name and registration details.
-   **Company Match**: Confirms that the company information matches the NITE number.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/cr/company
```

Use this endpoint to confirm **NITE** (*Número de Identificación Tributaria de Empresas*) records for Costa Rican legal entities. Pass **`documentType`** `NITE` and the company **`documentNumber`**; the response returns registered business identifiers and related fields for **KYB** and onboarding.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `NITE`. |
| `documentNumber` | string | Yes      | Company identifier. |
