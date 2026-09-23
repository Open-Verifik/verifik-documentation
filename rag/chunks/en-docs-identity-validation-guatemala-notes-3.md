---
id: "en-docs-identity-validation-guatemala-notes-3"
title: "Guatemalan Citizen — Notes"
sourcePath: "docs/identity-validation/guatemala.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "gt"
  - "identity-validation"
endpoints:
  - "/v2/gt/cedula"
  - "/v2/gt/cedula?"
  - "/v2/gt/cedula?documenttype=cui&documentnumber=2222624190903&dateofbirth=12/03/1984"
sourceAnchor: "Notes"
slug: "/identity-validation/guatemala"
url: "https://docs.verifik.co/identity-validation/guatemala"
---

# Guatemalan Citizen
**API path(s):** /v2/gt/cedula, /v2/gt/cedula?, /v2/gt/cedula?documenttype=cui&documentnumber=2222624190903&dateofbirth=12/03/1984

Verifik's Identity Verification API helps you authenticate Guatemalan citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Notes

- `documentType` must be `CUI`.
- `dateOfBirth` is required and must use **`DD/MM/YYYY`** format (for example, `12/03/1984`).

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Guatemalan government sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYC checks to prevent fraud without adding friction for your users.
-   **Instant Results**: Process verifications in seconds, perfect for real-time digital onboarding.
-   **Trusted Data**: Rely on data sourced directly from official records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.

## Compliance & Security

We prioritize the safety of your data. Verifik uses advanced encryption (HTTPS/TLS 1.3) and strict privacy management standards to ensure confidentiality.
Our service is monitored 24/7 for availability and offers role-based access controls to keep your team's access secure.

## About Verifik

Verifik is a leading platform for identity verification, compliance, and fraud prevention across Latin America.
Our APIs automate KYC, KYB, AML, and biometric validation processes, connecting businesses with official data sources in Colombia, Mexico, Peru, Chile, Uruguay, Argentina, Brazil, Guatemala, and beyond.
