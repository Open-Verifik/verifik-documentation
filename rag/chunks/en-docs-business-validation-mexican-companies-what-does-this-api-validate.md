---
id: "en-docs-business-validation-mexican-companies-what-does-this-api-validate"
title: "Mexican Business Verification — What does this API validate?"
sourcePath: "docs/business-validation/mexican-companies.mdx"
locale: "en"
category: "business-validation"
tags:
  - "mx"
  - "business-validation"
endpoint: "/v2/mx/company"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/mexican-companies"
url: "https://docs.verifik.co/business-validation/mexican-companies"
---

# Mexican Business Verification
**API path(s):** /v2/mx/company

## What does this API validate?

Verifik's Business Verification API helps you authenticate Mexican companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Company Name & FME Number**: Supports *Folio Mercantil Electrónico* (FME).
-   **Business Information**: Returns company name, city, and registration details.
-   **Company Match**: Confirms that the company information matches the FME number.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/mx/company
```

This endpoint looks up a Mexican legal entity by its **FME** (*Folio Mercantil Electrónico*) identifier. Use GET with `documentType=FME` and `documentNumber` to retrieve official registration details such as legal business name and city from government commercial registry sources.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `FME`. |
| `documentNumber` | string | Yes      | FME identifier (e.g., `N-2021007002`). |
