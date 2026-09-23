---
id: "en-docs-identity-validation-united-states-ssn-verification-social-security-numbe-what-does-this-api-validate"
title: "SSN Verification (Social Security Number) — What does this API validate?"
sourcePath: "docs/identity-validation/united-states/ssn-verification-social-security-number.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "us"
  - "usa"
  - "identity-validation"
endpoint: "/v2/usa/ssn"
sourceAnchor: "What does this API validate?"
slug: "/identity-validation/united-states/ssn-verification-social-security-number"
url: "https://docs.verifik.co/identity-validation/united-states/ssn-verification-social-security-number"
---

# SSN Verification (Social Security Number)
**API path(s):** /v2/usa/ssn

## What does this API validate?

Verifik's SSN Verification API helps you authenticate Social Security Numbers (SSN) issued in the United States using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the validity of Social Security Numbers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **SSN Number**: Verifies the authenticity of Social Security Numbers.
-   **Issuing State**: Identifies which state issued the SSN.
-   **First Year Issued**: Returns the year when the SSN was first issued.
-   **Validity Status**: Confirms whether the SSN is valid and active.

By verifying these details, you can be confident that the Social Security Number is authentic and valid, significantly lowering the risk of fraud.

The SSN Verification Service is a robust tool designed to verify Social Security Numbers (SSN) issued in the United States. This service allows users to quickly validate an SSN by providing details such as the issuing state and the first year of issuance. The response includes the SSN itself, the year it was first issued, the issuing state, and the validity status of the SSN. This tool is essential for ensuring the accuracy and authenticity of Social Security Numbers.

### Endpoint

```
GET https://api.verifik.co/v2/usa/ssn
```

Validate a U.S. Social Security Number (SSN). Pass the SSN as the `documentNumber` query parameter (formatted as on the document).
