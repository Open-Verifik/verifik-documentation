---
id: "en-docs-business-validation-peru-what-does-this-api-validate"
title: "Peruvian Business Verification — What does this API validate?"
sourcePath: "docs/business-validation/peru.mdx"
locale: "en"
category: "business-validation"
tags:
  - "pe"
  - "business-validation"
endpoint: "/v3/pe/company"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/peru"
url: "https://docs.verifik.co/business-validation/peru"
---

# Peruvian Business Verification
**API path(s):** /v3/pe/company

## What does this API validate?

Verifik's Business Verification API helps you authenticate Peruvian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Company Name & RUC Number**: Supports *Registro Único de Contribuyente* (RUC).
-   **Business Information**: Returns company name, address, taxpayer condition, and status.
-   **Company Match**: Confirms that the company information matches the RUC number.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
https://api.verifik.co/v3/pe/company
```

Look up a Peruvian company by **RUC** (`documentType=RUC` and the business `documentNumber`). Returns legal name, status, address, and taxpayer condition from official registries—useful for **KYB**, onboarding vendors, and due diligence.

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
