---
id: "en-docs-identity-venezuela-foreigner-id-notes-3"
title: "\\U0001F1FB\\U0001F1EA Venezuela - Foreigner ID (CEVE) — Notes"
sourcePath: "docs/identity/venezuela-foreigner-id.mdx"
locale: "en"
category: "identity"
tags:
  - "ve"
  - "identity"
endpoints:
  - "/v2/ve/cedula"
  - "/v2/ve/foreigner-id"
  - "/v2/ve/foreigner-id?documentnumber=10000001"
sourceAnchor: "Notes"
slug: "/identity/venezuela-foreigner-id"
url: "https://docs.verifik.co/identity/venezuela-foreigner-id"
---

# \U0001F1FB\U0001F1EA Venezuela - Foreigner ID (CEVE)
**API path(s):** /v2/ve/cedula, /v2/ve/foreigner-id, /v2/ve/foreigner-id?documentnumber=10000001

Verifik's Identity Verification API helps you authenticate foreign individuals in Venezuela using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to verify the identity of foreign clients, employees, or partners in Venezuela.

## Notes

- `documentNumber` is required. Dots and spaces are stripped. Do not send `documentType`.
- Responses include name fields (`arrayName`, `firstName`, `lastName`, `fullName`).
- Sandbox fixtures: `10000001`–`10000010` are stable. `90040401` returns 404. `90050001` returns 500.
- If the service is temporarily unavailable, the API returns `409` with `code: "Endpoint_out_of_service"`.

---

## Common Use Cases

-   **Foreign Resident Verification**: Validate the identity of foreign individuals in Venezuela for employment purposes.
-   **Financial Services**: Verify foreigner identity for banking and financial service applications.
-   **Legal Compliance**: Ensure compliance with Venezuelan regulations for foreign residents.
-   **Document Authentication**: Authenticate foreigner documents for official purposes.
-   **Identity Verification**: Streamline identity verification processes for foreign nationals.

## Reliability

Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYC checks to prevent fraud without adding friction for your users.
-   **Instant Results**: Process verifications in seconds, perfect for real-time identity verification.
-   **Trusted Data**: Rely on data sourced directly from official records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.

## Compliance & Security

We prioritize the safety of your data. Verifik uses advanced encryption (HTTPS/TLS 1.3) and strict privacy management standards to ensure confidentiality.
Our service is monitored 24/7 for availability and offers role-based access controls to keep your team's access secure.
