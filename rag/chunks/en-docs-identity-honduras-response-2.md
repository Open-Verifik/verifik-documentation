---
id: "en-docs-identity-honduras-response-2"
title: "Honduran Citizen — Response"
sourcePath: "docs/identity/honduras.mdx"
locale: "en"
category: "identity"
tags:
  - "hn"
  - "identity"
endpoint: "/v2/hn/cedula"
sourceAnchor: "Response"
slug: "/identity/honduras"
url: "https://docs.verifik.co/identity/honduras"
---

# Honduran Citizen
**API path(s):** /v2/hn/cedula

Verifik's Identity Verification API helps you authenticate Honduran citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Response

```json
{
  "data": {
    "documentType": "DNIHN",
    "documentNumber": "123456789",
    "firstName": "Juan",
    "lastName": "Pérez",
    "fullName": "Juan Pérez"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "HN001"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n. missing documentNumber\n"
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

- `documentType` must be `DNIHN`.

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Honduran government sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYC checks to prevent fraud without adding friction for your users.
-   **Instant Results**: Process verifications in seconds, perfect for real-time digital onboarding.
-   **Trusted Data**: Rely on data sourced directly from official records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.
