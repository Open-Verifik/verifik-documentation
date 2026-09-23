---
id: "en-docs-business-validation-brazil-what-does-this-api-validate"
title: "Business Verification (CNPJ) — What does this API validate?"
sourcePath: "docs/business-validation/brazil.mdx"
locale: "en"
category: "business-validation"
tags:
  - "br"
  - "business-validation"
endpoint: "/v2/br/company"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/brazil"
url: "https://docs.verifik.co/business-validation/brazil"
---

# Business Verification (CNPJ)
**API path(s):** /v2/br/company

## What does this API validate?

Verifik's Business Verification API helps you authenticate Brazilian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Company Name & CNPJ Number**: Supports *Cadastro Nacional da Pessoa Jurídica* (CNPJ).
-   **Business Information**: Returns company name, legal nature, opening date, status, and address.
-   **Economic Activities**: Provides main and secondary activity codes and descriptions.
-   **Company Match**: Confirms that the company information matches the CNPJ number.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/br/company
```

Verifies a Brazilian legal entity against official **CNPJ** registers. Send `documentType=CNPJ` and a 14-digit `documentNumber` with no punctuation. Typical fields include registration status, address, legal nature, and primary and secondary economic activities. Use it for **KYB**, **vendor due diligence**, and **compliance** programs.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |
