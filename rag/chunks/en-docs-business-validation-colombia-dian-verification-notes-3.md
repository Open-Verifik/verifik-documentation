---
id: "en-docs-business-validation-colombia-dian-verification-notes-3"
title: "Colombia DIAN Verification — Notes"
sourcePath: "docs/business-validation/colombia-dian-verification.mdx"
locale: "en"
category: "business-validation"
tags:
  - "co"
  - "business-validation"
endpoint: "/v2/co/company/dian"
sourceAnchor: "Notes"
slug: "/business-validation/colombia-dian-verification"
url: "https://docs.verifik.co/business-validation/colombia-dian-verification"
---

# Colombia DIAN Verification
**API path(s):** /v2/co/company/dian

Verifik's DIAN Verification API helps you authenticate Colombian companies' tax authority status using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the tax status and legitimacy of Colombian companies, partners, or vendors.

## Notes

- **`GET` query only** — no body. Use **`Accept`** (not `Content-Type`) for JSON responses.
- Use a valid NIT string; the integration handles formatting and verification digit as returned by DIAN.
- **Name Splitting for Natural Persons**: When the response is for a "persona natural" (natural person), Verifik automatically splits the name from the `nombreRazon` field into `firstName`, `lastName`, `fullName`, and `arrayName` using internal functions. However, since the source data returns the name as a single field (`nombreRazon`), the splitting may not always be 100% accurate. The `nombreRazon` field always contains the original, unmodified name as returned by DIAN.

---

## Common Use Cases

-   **B2B Onboarding**: Verify companies instantly during partner or vendor registration.
-   **Financial Services**: Authenticate businesses before opening accounts or processing transactions.
-   **Compliance & Due Diligence**: Validate company tax status as part of your KYC/KYB workflows.
-   **E-commerce & Marketplaces**: Confirm business legitimacy and tax compliance before allowing companies to sell on your platform.

## Official Sources & Reliability

We connect directly with official DIAN (Colombia's tax authority) sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYB checks to prevent fraud without adding friction for your business partners.
-   **Instant Results**: Process verifications in seconds, perfect for real-time business onboarding.
-   **Trusted Data**: Rely on data sourced directly from official tax authority records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.
