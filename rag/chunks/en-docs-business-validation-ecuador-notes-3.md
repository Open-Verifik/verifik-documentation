---
id: "en-docs-business-validation-ecuador-notes-3"
title: "Ecuadorian Business Verification — Notes"
sourcePath: "docs/business-validation/ecuador.mdx"
locale: "en"
category: "business-validation"
tags:
  - "ec"
  - "business-validation"
endpoints:
  - "/v2/ec/company"
  - "/v3/ec/company"
sourceAnchor: "Notes"
slug: "/business-validation/ecuador"
url: "https://docs.verifik.co/business-validation/ecuador"
---

# Ecuadorian Business Verification
**API path(s):** /v2/ec/company, /v3/ec/company

Verifik's Business Verification API helps you authenticate Ecuadorian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet regulatory requirements.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Notes

- `documentNumber` must be exactly 13 digits without separators.
- Sandbox demo RUC: `1790008959001` (ACERO COMERCIAL ECUATORIANO S.A.).
- Live examples: `1793197955001`, `1191795453001`.
- Legacy `GET /v2/ec/company` remains available with a thinner response shape.

---

## Common Use Cases

-   **B2B Onboarding**: Verify companies instantly during partner or vendor registration.
-   **Financial Services**: Authenticate businesses before opening accounts or processing transactions.
-   **Compliance & Due Diligence**: Validate company information as part of your KYC/KYB workflows.
-   **E-commerce & Marketplaces**: Confirm business legitimacy before allowing companies to sell on your platform.

## Official Sources & Reliability

We connect directly with official Ecuadorian government sources to ensure you receive verified, up-to-date information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYB checks to prevent fraud without adding friction for your business partners.
-   **Instant Results**: Process verifications in seconds, perfect for real-time business onboarding.
-   **Trusted Data**: Rely on data sourced directly from official records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.

## Compliance & Security

We prioritize the safety of your data. Verifik uses advanced encryption (HTTPS/TLS 1.3) and strict privacy management standards to ensure confidentiality.
Our service is monitored 24/7 for availability and offers role-based access controls to keep your team's access secure.
