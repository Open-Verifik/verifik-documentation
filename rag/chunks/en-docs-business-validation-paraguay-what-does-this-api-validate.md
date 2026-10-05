---
id: "en-docs-business-validation-paraguay-what-does-this-api-validate"
title: "Paraguayan Business Verification — What does this API validate?"
sourcePath: "docs/business-validation/paraguay.mdx"
locale: "en"
category: "business-validation"
tags:
  - "py"
  - "business-validation"
endpoint: "/v2/py/company"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/paraguay"
url: "https://docs.verifik.co/business-validation/paraguay"
---

# Paraguayan Business Verification
**API path(s):** /v2/py/company

## What does this API validate?

Verifik's Business Verification API helps you authenticate Paraguayan companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Company Name & RUC Number**: Supports *Registro Único de Contribuyente* (RUC).
-   **Business Information**: Returns company name and registration details.
-   **Company Match**: Confirms that the company information matches the RUC number.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/py/company
```

Look up a Paraguayan company using **`documentType`** `RUC` and **`documentNumber`**. Returns registration fields to support **KYB**, **vendor screening**, and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `RUC`. |
| `documentNumber` | string | Yes      | Company identifier. |
