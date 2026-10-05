---
id: "en-docs-identity-paraguay-response-2"
title: "Paraguayan Citizen — Response"
sourcePath: "docs/identity/paraguay.mdx"
locale: "en"
category: "identity"
tags:
  - "py"
  - "identity"
endpoint: "/v2/py/cic"
sourceAnchor: "Response"
slug: "/identity/paraguay"
url: "https://docs.verifik.co/identity/paraguay"
---

# Paraguayan Citizen
**API path(s):** /v2/py/cic

Verifik's Identity Verification API helps you authenticate Paraguayan citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Response

```json
{
  "data": {
    "documentNumber": "1234567",
    "firstName": "Fernando",
    "lastName": "Silva",
    "fullName": "Fernando Silva"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "PY001"
}
```

  
  

```json
{
  "message": "Invalid document number",
  "code": "INVALID_DOCUMENT"
}
```

### Notes

- Provide CIC without separators.

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Paraguayan government sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYC checks to prevent fraud without adding friction for your users.
-   **Instant Results**: Process verifications in seconds, perfect for real-time digital onboarding.
-   **Trusted Data**: Rely on data sourced directly from official records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.

## Compliance & Security

We prioritize the safety of your data. Verifik uses advanced encryption (HTTPS/TLS 1.3) and strict privacy management standards to ensure confidentiality.
Our service is monitored 24/7 for availability and offers role-based access controls to keep your team's access secure.
