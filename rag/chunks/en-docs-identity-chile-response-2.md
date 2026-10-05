---
id: "en-docs-identity-chile-response-2"
title: "Chilean Citizen — Response"
sourcePath: "docs/identity/chile.mdx"
locale: "en"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoint: "/v2/cl/cedula"
sourceAnchor: "Response"
slug: "/identity/chile"
url: "https://docs.verifik.co/identity/chile"
---

# Chilean Citizen
**API path(s):** /v2/cl/cedula

Verifik's Identity Verification API helps you authenticate Chilean citizens using the Unique National Role (RUN). It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Response

```json
{
  "data": {
    "documentType": "RUN",
    "documentNumber": "212957739",
    "firstName": "Carlos",
    "lastName": "Rodríguez",
    "fullName": "Carlos Rodríguez"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "CL001"
}
```

  
  

```json
{
  "message": "Invalid RUN number",
  "code": "INVALID_RUN"
}
```

### Notes

-   Provide RUN without spaces or separators.

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Chilean government sources (Registro Civil) to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYC checks to prevent fraud without adding friction for your users.
-   **Instant Results**: Process verifications in seconds, perfect for real-time digital onboarding.
-   **Trusted Data**: Rely on data sourced directly from official records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.

## Compliance & Security

We prioritize the safety of your data. Verifik uses advanced encryption (HTTPS/TLS 1.3) and strict privacy management standards to ensure confidentiality.
Our service is monitored 24/7 for availability and offers role-based access controls to keep your team's access secure.
