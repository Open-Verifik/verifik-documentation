---
id: "en-docs-legal-epic-eci-common-use-cases-3"
title: "India EPIC (Voter ID) — Person & Name Lookup | Verifik — Common use cases"
sourcePath: "docs/legal/epic-eci.mdx"
locale: "en"
category: "legal"
tags:
  - "in"
  - "legal"
endpoint: "/v2/in/epic"
sourceAnchor: "Common use cases"
slug: "/legal/epic-eci"
url: "https://docs.verifik.co/legal/epic-eci"
---

# India EPIC (Voter ID) — Person & Name Lookup | Verifik
**API path(s):** /v2/in/epic

Verifik exposes a single REST endpoint to look up **voter name** information tied to an Indian **EPIC** (*Elector's Photo Identity Card* number) from sources aligned with the **Electoral Commission of India (ECI)**. Use it to support identity checks, onboarding flows, and compliance workflows that require confirming that a Voter ID number returns consistent registered name data.

## Common use cases

- **KYC and identity programs** that need to corroborate a Voter ID with returned name and relative name fields.
- **Government and citizen services** that must verify an EPIC before issuing credentials or access.
- **Fintech and compliance** where electoral identity checks form part of a broader risk and fraud strategy.

## Official sources and reliability

Verifik routes requests to trusted electoral sources so you receive data consistent with ECI's published search behaviour. All calls use TLS in transit; treat EPICs as **sensitive personal data** in your own logging and storage policies.

## Key benefits

- **Simple integration**: One GET with `documentNumber` and a standard `Authorization` header.
- **Structured response**: Name arrays and local-script fields where the source provides them.
- **Verifik certification**: Each successful response can include a Verifik `signature` block for audit trails.

## Compliance and security

Use HTTPS only (the URL above is TLS-protected). Store tokens securely, rotate API keys, and follow your jurisdiction's data-protection rules for electoral and identity data. Verifik's platform is designed for high-availability, monitored access.

## About Verifik

Verifik provides identity, compliance, and fraud-prevention APIs across many countries, connecting your applications to official and authoritative data sources with a single integration model.
