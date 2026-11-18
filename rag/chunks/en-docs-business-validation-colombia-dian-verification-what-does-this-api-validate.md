---
id: "en-docs-business-validation-colombia-dian-verification-what-does-this-api-validate"
title: "Colombia DIAN Verification — What does this API validate?"
sourcePath: "docs/business-validation/colombia-dian-verification.mdx"
locale: "en"
category: "business-validation"
tags:
  - "co"
  - "business-validation"
endpoint: "/v2/co/company/dian"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/colombia-dian-verification"
url: "https://docs.verifik.co/business-validation/colombia-dian-verification"
---

# Colombia DIAN Verification
**API path(s):** /v2/co/company/dian

## What does this API validate?

Verifik's DIAN Verification API helps you authenticate Colombian companies' tax authority status using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the tax status and legitimacy of Colombian companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official DIAN (Dirección de Impuestos y Aduanas Nacionales) records to validate:

-   **Company Name & NIT Number**: Supports *Número de Identificación Tributaria* (NIT).
-   **Tax Status**: Returns the company's registration status with DIAN.
-   **Company Match**: Confirms that the company information matches the NIT number and validates active tax responsibilities.

By verifying these details, you can be confident that the company you're dealing with is legitimate, properly registered with the tax authority, and has active tax responsibilities, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/co/company/dian
```

Same path on the app host: `GET https://verifik.app/v2/co/company/dian`.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Must be **`NIT`**. |
| `documentNumber` | string | Yes | Tax ID (NIT). Spaces are removed server-side; you may include or omit the verification digit. Minimum length **5** characters (API validation). |
