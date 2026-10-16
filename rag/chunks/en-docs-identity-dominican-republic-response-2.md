---
id: "en-docs-identity-dominican-republic-response-2"
title: "Dominican Citizen — Response"
sourcePath: "docs/identity/dominican-republic.mdx"
locale: "en"
category: "identity"
tags:
  - "do"
  - "identity"
endpoint: "/v2/do/cedula"
sourceAnchor: "Response"
slug: "/identity/dominican-republic"
url: "https://docs.verifik.co/identity/dominican-republic"
---

# Dominican Citizen
**API path(s):** /v2/do/cedula

Verifik's Identity Verification API helps you authenticate Dominican citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Response

```json
{
  "data": {
    "arrayName": ["MATEO", "VERIFIK"],
    "documentNumber": "12345678909876",
    "documentType": "CIE",
    "firstName": "MATEO",
    "fullName": "MATEO VERIFIK",
    "lastName": "VERIFIK"
  },
  "signature": {"dateTime": "July 3, 2024 3:24 PM", "message": "Certified by Verifik.co"},
  "id": "YOESE"
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

- `documentType` must be `CIE`.

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Dominican government sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYC checks to prevent fraud without adding friction for your users.
-   **Instant Results**: Process verifications in seconds, perfect for real-time digital onboarding.
-   **Trusted Data**: Rely on data sourced directly from official records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.
