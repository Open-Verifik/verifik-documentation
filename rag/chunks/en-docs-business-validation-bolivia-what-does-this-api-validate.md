---
id: "en-docs-business-validation-bolivia-what-does-this-api-validate"
title: "Bolivian Business Verification — What does this API validate?"
sourcePath: "docs/business-validation/bolivia.mdx"
locale: "en"
category: "business-validation"
tags:
  - "bo"
  - "business-validation"
endpoint: "/v2/bo/company"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/bolivia"
url: "https://docs.verifik.co/business-validation/bolivia"
---

# Bolivian Business Verification
**API path(s):** /v2/bo/company

## What does this API validate?

Verifik's Business Verification API helps you authenticate Bolivian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Company Name & NIT Number**: Supports *Número de Identificación Tributaria* (NIT).
-   **Business Information**: Returns company name, status, and registration details.
-   **Company Match**: Confirms that the company information matches the NIT number.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/bo/company
```

Look up a Bolivian company using **`documentType`** `NIT` and **`documentNumber`**. Returns registration fields to support **KYB**, **vendor screening**, and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentNumber` | string | Yes      | Company identifier. |
| `documentType` | string | Yes      | Document type. Allowed value: `NIT`. |
