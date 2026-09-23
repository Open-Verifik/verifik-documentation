---
id: "en-docs-identity-validation-united-states-ssn-verification-social-security-numbe-response-3"
title: "SSN Verification (Social Security Number) — Response"
sourcePath: "docs/identity-validation/united-states/ssn-verification-social-security-number.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "us"
  - "usa"
  - "identity-validation"
endpoint: "/v2/usa/ssn"
sourceAnchor: "Response"
slug: "/identity-validation/united-states/ssn-verification-social-security-number"
url: "https://docs.verifik.co/identity-validation/united-states/ssn-verification-social-security-number"
---

# SSN Verification (Social Security Number)
**API path(s):** /v2/usa/ssn

Verifik's SSN Verification API helps you authenticate Social Security Numbers (SSN) issued in the United States using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the validity of Social Security Numbers.

## Response

```json
{
  "data": {
    "firstYearIssued": "1936",
    "issuingState": "Oklahoma (OK)",
    "SSN": "123-45-678",
    "valid": true
  },
  "signature": {
    "dateTime": "April 11, 2023 3:42 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "Access forbidden",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```

## Common Use Cases

-   **Fintech & Banking**: Verify SSNs instantly during account opening or loan applications.
-   **Employment & Background Checks**: Authenticate SSNs as part of your hiring and verification workflow.
-   **Insurance & Healthcare**: Confirm SSN validity before issuing policies or providing medical benefits.
-   **Government Services**: Validate SSNs for compliance and regulatory requirements.

## Official Sources & Reliability

We connect directly with official United States Social Security Administration data sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your verification checks to prevent fraud without adding friction for your users.
-   **Instant Results**: Process verifications in seconds, perfect for real-time digital onboarding.
-   **Trusted Data**: Rely on data sourced directly from official Social Security Administration records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.
