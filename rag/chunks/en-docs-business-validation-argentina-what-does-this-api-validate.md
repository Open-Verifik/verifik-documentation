---
id: "en-docs-business-validation-argentina-what-does-this-api-validate"
title: "Argentine Business Verification — What does this API validate?"
sourcePath: "docs/business-validation/argentina.mdx"
locale: "en"
category: "business-validation"
tags:
  - "ar"
  - "business-validation"
endpoint: "/v2/ar/company"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/argentina"
url: "https://docs.verifik.co/business-validation/argentina"
---

# Argentine Business Verification
**API path(s):** /v2/ar/company

## What does this API validate?

Verifik's Business Verification API helps you authenticate Argentine companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Company Name & CUIT Number**: Supports *Código Único de Identificación Tributaria* (CUIT).
-   **Business Information**: Returns company name, legal form, contract date, and economic activities.
-   **Economic Activities**: Provides main and secondary activity codes and descriptions.
-   **Company Match**: Confirms that the company information matches the CUIT number.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/ar/company
```

Look up an Argentine company using **`documentType`** `CUIT` and **`documentNumber`**. Returns registration fields to support **KYB**, **vendor screening**, and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `CUIT`. |
| `documentNumber` | string | Yes      | 11-digit CUIT without separators. |
