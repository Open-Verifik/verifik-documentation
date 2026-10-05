---
id: "en-docs-business-validation-spain-what-does-this-api-validate"
title: "Spanish Business Verification — What does this API validate?"
sourcePath: "docs/business-validation/spain.mdx"
locale: "en"
category: "business-validation"
tags:
  - "es"
  - "business-validation"
endpoint: "/v2/es/company"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/spain"
url: "https://docs.verifik.co/business-validation/spain"
---

# Spanish Business Verification
**API path(s):** /v2/es/company

## What does this API validate?

Verifik's Business Verification API helps you authenticate Spanish companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Company Name & Identifier**: Supports Spanish company identifiers (CIF/NIF).
-   **Business Information**: Returns company name and status.
-   **Company Match**: Confirms that the company information matches the identifier.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/es/company
```

Look up a Spanish legal entity using **`documentNumber`** (company tax identifier, e.g. CIF). Returns core registration-oriented fields to support **KYB**, **vendor screening**, and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type (`CIF` or `NIF`). |
| `documentNumber` | string | Yes      | Company identifier. |
