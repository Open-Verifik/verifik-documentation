---
id: "en-docs-business-validation-colombia-legal-invoicer-verification-what-does-this-api-validate"
title: "Colombia Legal Invoicer Verification — What does this API validate?"
sourcePath: "docs/business-validation/colombia-legal-invoicer-verification.mdx"
locale: "en"
category: "business-validation"
tags:
  - "co"
  - "business-validation"
endpoint: "/v2/co/company/dian/invoicer"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/colombia-legal-invoicer-verification"
url: "https://docs.verifik.co/business-validation/colombia-legal-invoicer-verification"
---

# Colombia Legal Invoicer Verification
**API path(s):** /v2/co/company/dian/invoicer

## What does this API validate?

Verifik's Legal Invoicer Verification API helps you validate whether a Colombian company has a legal invoicer registered in DIAN (Dirección de Impuestos y Aduanas Nacionales). It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the invoicer registration status of Colombian companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official DIAN records to validate:

-   **Company NIT & electronic invoicing (facturación electrónica) registration**: Supports *Número de Identificación Tributaria* (NIT).
-   **Invoicer contact**: Returns the registered invoicer **email** and related fields when DIAN exposes them.
-   **Registration check**: Confirms that the entity appears in DIAN’s **legal invoicer** dataset for electronic invoicing (distinct from general taxpayer status — see [Colombia DIAN Verification](./colombia-dian-verification.mdx)).

By verifying these details, you can be confident that the company you're dealing with has proper invoicing capabilities and is compliant with DIAN requirements, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/co/company/dian/invoicer
```

Same path on the app host: `GET https://verifik.app/v2/co/company/dian/invoicer`.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |
