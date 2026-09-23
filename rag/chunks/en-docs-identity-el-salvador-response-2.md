---
id: "en-docs-identity-el-salvador-response-2"
title: "Salvadoran Citizen — Response"
sourcePath: "docs/identity/el-salvador.mdx"
locale: "en"
category: "identity"
tags:
  - "sv"
  - "identity"
endpoints:
  - "/v2/sv/dui"
  - "/v2/sv/dui?"
  - "/v2/sv/dui?documentnumber=123456789&dateofbirth=01/12/1995"
sourceAnchor: "Response"
slug: "/identity/el-salvador"
url: "https://docs.verifik.co/identity/el-salvador"
---

# Salvadoran Citizen
**API path(s):** /v2/sv/dui, /v2/sv/dui?, /v2/sv/dui?documentnumber=123456789&dateofbirth=01/12/1995

Verifik's Identity Verification API helps you authenticate Salvadoran citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Response

```json
{
  "data": {
    "documentNumber": "123456789",
    "fullName": "Juan Pérez"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "SV001"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing dateOfBirth"
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
    "code": "InternalServerError",
    "message": "Server error."
}
```

### Notes

- Birth date is required and must be in `DD/MM/YYYY`.

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Salvadoran government sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYC checks to prevent fraud without adding friction for your users.
-   **Instant Results**: Process verifications in seconds, perfect for real-time digital onboarding.
-   **Trusted Data**: Rely on data sourced directly from official records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.
