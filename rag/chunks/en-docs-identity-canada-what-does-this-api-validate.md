---
id: "en-docs-identity-canada-what-does-this-api-validate"
title: "Canadian Driver License Validation — What does this API validate?"
sourcePath: "docs/identity/canada.mdx"
locale: "en"
category: "identity"
tags:
  - "ca"
  - "identity"
endpoints:
  - "/v2/ca/british-columbia/driver-license"
  - "/v2/ca/ontario/driver-license"
sourceAnchor: "What does this API validate?"
slug: "/identity/canada"
url: "https://docs.verifik.co/identity/canada"
---

# Canadian Driver License Validation
**API path(s):** /v2/ca/british-columbia/driver-license, /v2/ca/ontario/driver-license

## What does this API validate?

Verifik's Driver License Verification API helps you authenticate Canadian driver licenses using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the validity of driver's licenses issued in British Columbia and Ontario provinces.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Driver License Number**: Verifies the authenticity of driver license numbers.
-   **License Status**: Confirms whether the license is currently valid.
-   **Identity Match**: For British Columbia, validates that the last name matches the license record.

By verifying these details, you can be confident that the driver license is authentic and valid, significantly lowering the risk of fraud.

Canadian identity validation services include driver license verification for British Columbia and Ontario provinces. These services allow you to verify the authenticity and validity of driver's licenses issued in these Canadian provinces.

## Supported Provinces

| Province | Endpoint | Description |
|----------|----------|-------------|
| **British Columbia** | `/v2/ca/british-columbia/driver-license` | Verify BC driver licenses with document number and last name |
| **Ontario** | `/v2/ca/ontario/driver-license` | Verify Ontario driver licenses with document number |

## British Columbia Driver License

### Endpoint

```
GET https://api.verifik.co/v2/ca/british-columbia/driver-license
```

The British Columbia Driver License Verification service offers a straightforward method to verify the authenticity and validity of a driver's license in the province of British Columbia, Canada. By utilizing this service, you can quickly validate a driver's license based on the provided document number and last name.
