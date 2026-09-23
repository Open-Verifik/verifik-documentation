---
id: "en-docs-identity-canada-response-examples-4"
title: "Canadian Driver License Validation — Response Examples"
sourcePath: "docs/identity/canada.mdx"
locale: "en"
category: "identity"
tags:
  - "ca"
  - "identity"
endpoints:
  - "/v2/ca/british-columbia/driver-license"
  - "/v2/ca/ontario/driver-license"
sourceAnchor: "Response Examples"
slug: "/identity/canada"
url: "https://docs.verifik.co/identity/canada"
---

# Canadian Driver License Validation
**API path(s):** /v2/ca/british-columbia/driver-license, /v2/ca/ontario/driver-license

Verifik's Driver License Verification API helps you authenticate Canadian driver licenses using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the validity of driver's licenses issued in British Columbia and Ontario provinces.

## Response Examples

```json
{
  "data": {
    "documentNumber": "1123456",
    "lastName": "HELLO",
    "valid": true
  },
  "signature": {
    "dateTime": "August 8, 2023 10:56 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1234567"
}
```

  
  

```json
{
  "data": {
    "documentNumber": "S123456789123456",
    "licenceStatus": "Valid",
    "verificationNumber": "123V5"
  },
  "signature": {
    "dateTime": "March 12, 2024 3:47 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "8X9FD"
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
  "message": "missing lastName\n missing documentNumber\n"
}
```

## Common Use Cases

-   **Fintech & Banking**: Verify driver licenses instantly during account opening or loan applications.
-   **Rideshare & Delivery**: Authenticate drivers before they become active on your platform.
-   **HR & Recruitment**: Validate driver credentials as part of your hiring workflow.
-   **Insurance & Automotive**: Confirm driver license validity before issuing policies or processing claims.

## Official Sources & Reliability

We connect directly with official Canadian provincial licensing systems (British Columbia and Ontario) to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your verification checks to prevent fraud without adding friction for your users.
-   **Instant Results**: Process verifications in seconds, perfect for real-time digital onboarding.
-   **Trusted Data**: Rely on data sourced directly from official provincial records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.
