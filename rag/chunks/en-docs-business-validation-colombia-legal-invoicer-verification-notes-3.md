---
id: "en-docs-business-validation-colombia-legal-invoicer-verification-notes-3"
title: "Colombia Legal Invoicer Verification — Notes"
sourcePath: "docs/business-validation/colombia-legal-invoicer-verification.mdx"
locale: "en"
category: "business-validation"
tags:
  - "co"
  - "business-validation"
endpoints:
  - "/v2/co/company/dian"
  - "/v2/co/company/dian/invoicer"
sourceAnchor: "Notes"
slug: "/business-validation/colombia-legal-invoicer-verification"
url: "https://docs.verifik.co/business-validation/colombia-legal-invoicer-verification"
---

# Colombia Legal Invoicer Verification
**API path(s):** /v2/co/company/dian, /v2/co/company/dian/invoicer

Verifik's Legal Invoicer Verification API helps you validate whether a Colombian company has a legal invoicer registered in DIAN (Dirección de Impuestos y Aduanas Nacionales). It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the invoicer registration status of Colombian companies, partners, or vendors.

## Notes

- **`GET` query only** — no body. Use **`Accept`** (not `Content-Type`) for JSON responses.
- This route returns **legal invoicer / e-invoicing registration** data (e.g. **email** when available). For **general taxpayer** status and obligations, use **[Colombia DIAN Verification](./colombia-dian-verification.mdx)** (`GET /v2/co/company/dian`).
- **404** may occur when DIAN does not return invoicer **email** for that NIT (see integration logic).

---

## Common Use Cases

-   **B2B Onboarding**: Verify companies instantly during partner or vendor registration.
-   **Financial Services**: Authenticate businesses before opening accounts or processing transactions.
-   **Compliance & Due Diligence**: Validate company invoicer registration as part of your KYC/KYB workflows.
-   **E-commerce & Marketplaces**: Confirm business invoicing capabilities before allowing companies to sell on your platform.

## Official Sources & Reliability

We connect directly with official DIAN (Colombia's tax authority) sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYB checks to prevent fraud without adding friction for your business partners.
-   **Instant Results**: Process verifications in seconds, perfect for real-time business onboarding.
-   **Trusted Data**: Rely on data sourced directly from official tax authority records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.

## Compliance & Security

We prioritize the safety of your data. Verifik uses advanced encryption (HTTPS/TLS 1.3) and strict privacy management standards to ensure confidentiality.
Our service is monitored 24/7 for availability and offers role-based access controls to keep your team's access secure.
