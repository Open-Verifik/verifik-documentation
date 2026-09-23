---
id: "en-docs-identity-validation-peru-v3-peruvian-citizen-what-does-this-api-validate"
title: "\\U0001F1F5\\U0001F1EA Peru - V3 Peruvian Citizen — What does this API validate?"
sourcePath: "docs/identity-validation/peru/v3-peruvian-citizen.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "pe"
  - "identity-validation"
endpoint: "/v3/pe/cedula/extra"
sourceAnchor: "What does this API validate?"
slug: "/identity-validation/peru/v3-peruvian-citizen"
url: "https://docs.verifik.co/identity-validation/peru/v3-peruvian-citizen"
---

# \U0001F1F5\U0001F1EA Peru - V3 Peruvian Citizen
**API path(s):** /v3/pe/cedula/extra

## What does this API validate?

Verifik's Identity Verification API helps you perform extended identity verification for Peruvian citizens using their DNI (Documento Nacional de Identidad) number. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to access comprehensive personal information, including full name, civil status, date of birth, document details, address, and photo data.

**The Authorization header is required for authentication to access this information securely.**

## What does this API validate?

Our API connects directly with official Peruvian records to validate:

-   **Full Name & DNI Number**: Supports *Documento Nacional de Identidad* (DNI) documents.
-   **Identity Match**: Confirms that the name provided matches the DNI number.
-   **Extended Personal Data**: Returns civil status, date of birth, sex, and address information.
-   **Document Information**: Validates document type, number, expedition date, expiration date, and verification digit.
-   **Geographic Information**: Provides ubigeoReniec code for location identification.
-   **Photo Data**: Access citizen photo in base64 format.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

### Endpoint

```
GET https://api.verifik.co/v3/pe/cedula/extra
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |
