---
id: "en-docs-identity-validation-peru-peru-citizen-response-2"
title: "Peruvian Citizen v3 — Response"
sourcePath: "docs/identity-validation/peru/peru-citizen.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "pe"
  - "identity-validation"
endpoint: "/api/pe/cedula"
sourceAnchor: "Response"
slug: "/identity-validation/peru/peru-citizen"
url: "https://docs.verifik.co/identity-validation/peru/peru-citizen"
---

# Peruvian Citizen v3
**API path(s):** /api/pe/cedula

Verifik's Identity Verification API helps you authenticate Peruvian citizens using the National Identity Document (DNI). It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Response

```json
{
  "data": {
    "address": "CARACALLA",
    "arrayName": [
      "FELIPE",
      "TRUJILLO",
      "HERNANDEZ"
    ],
    "civilStatus": "SOLTERO",
    "dateOfBirth": "19-12-1995",
    "documentNumber": "71647369",
    "documentType": "DNI",
    "firstName": "FELIPE",
    "fullName": "FELIPE TRUJILLO HERNANDEZ",
    "lastName": "TRUJILLO HERNANDEZ",
    "sex": "M",
    "ubigeoReniec": "070101",
    "verificationDigit": "2"
  },
  "signature": {
    "dateTime": "April 16, 2025 2:43 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "FHBCC"
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

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentNumber maximum length: 8\n"
}
```

  

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Peruvian government sources (RENIEC) to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYC checks to prevent fraud without adding friction for your users.
-   **Instant Results**: Process verifications in seconds, perfect for real-time digital onboarding.
-   **Trusted Data**: Rely on data sourced directly from official records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.
