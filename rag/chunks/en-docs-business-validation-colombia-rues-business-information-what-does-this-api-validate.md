---
id: "en-docs-business-validation-colombia-rues-business-information-what-does-this-api-validate"
title: "RUES Complete Business Validation (v3) — What does this API validate?"
sourcePath: "docs/business-validation/colombia-rues-business-information.mdx"
locale: "en"
category: "business-validation"
tags:
  - "business-validation"
endpoint: "/v3/co/rues-complete"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/colombia-rues-business-information"
url: "https://docs.verifik.co/business-validation/colombia-rues-business-information"
---

# RUES Complete Business Validation (v3)
**API path(s):** /v3/co/rues-complete

## What does this API validate?

Verifik's RUES Complete Business Validation API helps you retrieve comprehensive business information from Colombia's RUES (Registro Único Empresarial y Social) registry. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to access complete business information for Colombian companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official RUES records to validate:

-   **Company Name & NIT Number**: Supports *Número de Identificación Tributaria* (NIT).
-   **Complete Business Information**: Returns commercial registry data, economic activities, establishment owners, legal representatives, and more.
-   **Multiple Categories**: Supports various business categories including RM (Commercial Registry), PROP (Proponents), RUNEOL, RNT, ESAL, RESAL, JUEGOS, and EXTRANJERAS.
-   **Company Match**: Confirms that the company information matches the NIT number and provides comprehensive business details.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
https://api.verifik.co/v3/co/rues-complete
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |
