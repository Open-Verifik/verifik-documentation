---
id: "en-docs-business-validation-panama-what-does-this-api-validate"
title: "Panamanian Business Verification — What does this API validate?"
sourcePath: "docs/business-validation/panama.mdx"
locale: "en"
category: "business-validation"
tags:
  - "pa"
  - "business-validation"
endpoints:
  - "/v2/pa/company"
  - "/v2/pa/company?"
  - "/v2/pa/company?documenttype=ruc&documentnumber=155703400-2-2021&dv=39"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/panama"
url: "https://docs.verifik.co/business-validation/panama"
---

# Panamanian Business Verification
**API path(s):** /v2/pa/company, /v2/pa/company?, /v2/pa/company?documenttype=ruc&documentnumber=155703400-2-2021&dv=39

## What does this API validate?

Verifik's Business Verification API helps you authenticate Panamanian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Company Name & RUC Number**: Supports *Registro Único de Contribuyente* (RUC).
-   **Business Information**: Returns company name, address, capital, organization type, registration date, and representatives.
-   **Company Status**: Provides current status, validity, and registration details.
-   **Company Match**: Confirms that the company information matches the RUC number.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/pa/company
```

Query Panama’s **RUC** (*Registro Único de Contribuyente*) registry. Send **`documentType`** (`RUC`), the company **`documentNumber`**, and the **`dv`** (verification digit). Typical uses include **KYB**, vendor onboarding, and compliance reviews when you need legal name, status, representatives, and key commercial fields in one HTTPS response.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |
