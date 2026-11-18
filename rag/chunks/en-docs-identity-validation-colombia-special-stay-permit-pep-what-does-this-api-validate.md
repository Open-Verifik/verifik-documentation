---
id: "en-docs-identity-validation-colombia-special-stay-permit-pep-what-does-this-api-validate"
title: "\\U0001F1E8\\U0001F1F4 Colombia - Special Stay Permit (PEP) — What does this API validate?"
sourcePath: "docs/identity-validation/colombia/special-stay-permit-pep.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/foreigner-id/pep"
sourceAnchor: "What does this API validate?"
slug: "/identity-validation/colombia/special-stay-permit-pep"
url: "https://docs.verifik.co/identity-validation/colombia/special-stay-permit-pep"
---

# \U0001F1E8\U0001F1F4 Colombia - Special Stay Permit (PEP)
**API path(s):** /v2/co/foreigner-id/pep

## What does this API validate?

Verifik's Identity Verification API helps you validate the Special Stay Permit (PEP - Permiso Especial de Permanencia) for Venezuelan citizens in Colombia. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for organizations needing to verify the legal status of Venezuelan nationals in Colombia, such as for employment, financial services, or humanitarian programs.

## What does this API validate?

Our API connects directly with official Migración Colombia records to validate:

-   **PEP Status**: Verifies the status of the Special Stay Permit (PEP).
-   **Full Name & Document Number**: Supports Permiso Especial de Permanencia (PEP) documents.
-   **Identity Match**: Confirms that the personal information matches the PEP document number.
-   **Document Status**: Checks permit status (VENCIDO - expired, active, etc.).
-   **Expiration Date**: Validates the permit expiration date.
-   **Venezuelan Identification**: Access Venezuelan identification number.

By verifying these details, you can be confident that the Venezuelan national you're dealing with has valid legal status in Colombia, significantly lowering the risk of fraud and ensuring compliance with Colombian regulations.

### Endpoint

```
GET https://api.verifik.co/v2/co/foreigner-id/pep
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Yes** | Document number without spaces or periods. | `123456789` |
| `expeditionDate` | string | **Yes** | Date when the document was generated. | `10/10/2024` |
