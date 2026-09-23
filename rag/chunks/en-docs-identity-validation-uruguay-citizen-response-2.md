---
id: "en-docs-identity-validation-uruguay-citizen-response-2"
title: "Uruguayan Citizen — Response"
sourcePath: "docs/identity-validation/uruguay-citizen.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "uy"
  - "identity-validation"
endpoints:
  - "/v2/uy/cedula"
  - "/v2/uy/cedula?"
  - "/v2/uy/cedula?documenttype=ccuy&documentnumber=123456789&dateofbirth=20/02/1978"
sourceAnchor: "Response"
slug: "/identity-validation/uruguay-citizen"
url: "https://docs.verifik.co/identity-validation/uruguay-citizen"
---

# Uruguayan Citizen
**API path(s):** /v2/uy/cedula, /v2/uy/cedula?, /v2/uy/cedula?documenttype=ccuy&documentnumber=123456789&dateofbirth=20/02/1978

Verifik's Identity Verification API helps you authenticate Uruguayan citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Response

```json
{
  "data": {
    "documentType": "CCUY",
    "documentNumber": "123456789",
    "firstName": "Ana",
    "lastName": "García",
    "fullName": "Ana García"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "UY001"
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
  "message": "missing dateOfBirth"
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [CCUY]"
}
```

  
  

```json
{
    "code": "InternalServerError",
    "message": "Server error."
}
```

### Notes

- Birth date is required and must match.

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Uruguayan government sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.
