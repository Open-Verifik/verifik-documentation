---
id: "en-docs-business-validation-canada-what-does-this-api-validate"
title: "Canadian Business Verification — What does this API validate?"
sourcePath: "docs/business-validation/canada.mdx"
locale: "en"
category: "business-validation"
tags:
  - "ca"
  - "business-validation"
endpoint: "/v2/ca/company"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/canada"
url: "https://docs.verifik.co/business-validation/canada"
---

# Canadian Business Verification
**API path(s):** /v2/ca/company

## What does this API validate?

Verifik's Business Verification API helps you authenticate Canadian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Company Name & Business Number**: Supports Canadian business registry lookups by company name and province.
-   **Business Information**: Returns company name, business number, business type, status, registration details, and address.
-   **Company Match**: Confirms that the company information matches the business registry.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/ca/company
```

Look up a Canadian legal entity in **provincial business registries** using **`business`** (company name) and **`province`** (two-letter code). Typical fields include business number, status, registry identifiers, and address. Use for **KYB**, **vendor due diligence**, and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `business` | string  | Yes      | Company name. |
| `province` | string | Yes      | Canadian province code. |
