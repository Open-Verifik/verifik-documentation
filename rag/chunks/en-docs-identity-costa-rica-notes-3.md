---
id: "en-docs-identity-costa-rica-notes-3"
title: "Costa Rican Citizen (CCCR) — Notes"
sourcePath: "docs/identity/costa-rica.mdx"
locale: "en"
category: "identity"
tags:
  - "cr"
  - "identity"
endpoints:
  - "/v2/cr/cedula"
  - "/v2/cr/cedula?"
  - "/v2/cr/cedula?documenttype=cccr&documentnumber=010000001"
sourceAnchor: "Notes"
slug: "/identity/costa-rica"
url: "https://docs.verifik.co/identity/costa-rica"
---

# Costa Rican Citizen (CCCR)
**API path(s):** /v2/cr/cedula, /v2/cr/cedula?, /v2/cr/cedula?documenttype=cccr&documentnumber=010000001

Verifik's Identity Verification API helps you authenticate Costa Rican citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Notes

- Provide the number without spaces or periods.
- A cédula that is not eligible for the online reprint under TSE's renewal rules still resolves successfully (`200`) with `status: "requires_renewal"` and `expired: true`, instead of an error. The bilingual `message` object (`es`/`en`) explains that the citizen must renew the document in person at a TSE office.

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Costa Rican government sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYC checks to prevent fraud without adding friction for your users.
-   **Instant Results**: Process verifications in seconds, perfect for real-time digital onboarding.
-   **Trusted Data**: Rely on data sourced directly from official records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.

## Compliance & Security

We prioritize the safety of your data. Verifik uses advanced encryption (HTTPS/TLS 1.3) and strict privacy management standards to ensure confidentiality.
Our service is monitored 24/7 for availability and offers role-based access controls to keep your team's access secure.
