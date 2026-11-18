---
id: "en-docs-identity-validation-peru-v3-peruvian-citizen-response-3"
title: "\\U0001F1F5\\U0001F1EA Peru - V3 Peruvian Citizen — Response"
sourcePath: "docs/identity-validation/peru/v3-peruvian-citizen.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "pe"
  - "identity-validation"
endpoint: "/api/pe/cedula/extra"
sourceAnchor: "Response"
slug: "/identity-validation/peru/v3-peruvian-citizen"
url: "https://docs.verifik.co/identity-validation/peru/v3-peruvian-citizen"
---

# \U0001F1F5\U0001F1EA Peru - V3 Peruvian Citizen
**API path(s):** /api/pe/cedula/extra

Verifik's Identity Verification API helps you perform extended identity verification for Peruvian citizens using their DNI (Documento Nacional de Identidad) number. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to access comprehensive personal information, including full name, civil status, date of birth, document details, address, and photo data.
**The Authorization header is required for authentication to access this information securely.**

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
    "dateOfBirth": "19-11-1997",
    "documentNumber": "74687367",
    "documentType": "DNI",
    "expeditionDate": "03-03-2025",
    "expirationDate": "03-03-2033",
    "firstName": "FELIPE",
    "fullName": "FELIPE TRUJILLO HERNANDEZ",
    "lastName": "TRUJILLO HERNANDEZ",
    "photo": "/9j/4AAQSkZJRgABAgAAAQABAAD/2wBD...v8ADSGiigD/2Q==",
    "sex": "M",
    "ubigeoReniec": "020208",
    "verificationDigit": "2"
  },
  "signature": {
    "dateTime": "April 16, 2025 2:44 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "G2ZOZ"
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
  "code": "MissingParameter",
  "message": "documentType must be one of: [DNI]"
}
```

  

---

## Common Use Cases

-   **Advanced KYC Processes**: Perform comprehensive identity verification for enhanced compliance and fraud detection.
-   **Financial Services**: Verify detailed identity data for banking and financial service applications.
-   **Employment Verification**: Validate comprehensive personal information for hiring processes.
-   **Compliance & Due Diligence**: Ensure compliance with Peruvian regulations requiring extended identity data.
-   **Fraud Detection**: Access extended data including photo and demographic information for advanced fraud prevention.
