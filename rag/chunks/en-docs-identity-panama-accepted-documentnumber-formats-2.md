---
id: "en-docs-identity-panama-accepted-documentnumber-formats-2"
title: "Panamanian Citizen — Accepted `documentNumber` formats"
sourcePath: "docs/identity/panama.mdx"
locale: "en"
category: "identity"
tags:
  - "pa"
  - "identity"
endpoint: "/v2/pa/cedula"
sourceAnchor: "Accepted `documentNumber` formats"
slug: "/identity/panama"
url: "https://docs.verifik.co/identity/panama"
---

# Panamanian Citizen
**API path(s):** /v2/pa/cedula

Verifik's Identity Verification API helps you authenticate Panamanian citizens. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Accepted `documentNumber` formats

The API accepts a **complete** cédula string. Values are **normalized** server-side: trimmed, uppercased, repeated separators collapsed to a single hyphen. Spaces, `/`, `_`, `.`, and Unicode dash-like characters are treated as separators. If a province code and the suffix `AV` or `PI` were entered with an extra hyphen between them (e.g. `10-AV-1234-12345`), they are merged to `10AV-1234-12345` before validation.

**Structure:** `firstSegment-libro-tomo`

- **Libro (middle segment):** 1–4 digits  
- **Tomo (last segment):** 1–6 digits  

**First segment (one of):**

1. **Born in Panama** — Province code `1`, `2`–`9`, or `10`–`13`, then libro, then tomo. Examples: `8-1234-12345`, `4-56-789`, `12-12-12345`
2. **Panamanian born abroad** — Prefix `PE`. Example: `PE-1234-12345`
3. **Foreign national with cédula** — Prefix `E`. Examples: `E-1234-12345`, `E-8-102017`
4. **Naturalized** — Prefix `N`. Example: `N-1234-12345`
5. **Pre–2006 AV series** — Province immediately followed by `AV`. Example: `10AV-1234-12345`
6. **Indigenous (PI)** — Province immediately followed by `PI`. Example: `1PI-1234-12345`

Province codes are **1–13**. Invalid codes (e.g. `14`) are rejected.

**Query strings:** Send `documentNumber` so **hyphens are preserved**. Some clients or parsers mis-handle values like `E-8-197698` (e.g. scientific notation); use a raw query string, proper encoding, or a library that keeps the value as a string.

**Validation error:** If `documentNumber` is not a complete valid cédula after normalization, the API responds with **409** and a message indicating incorrect format (e.g. `Format incorrect: documentNumber`).

Format rules align with the [cedula-panama](https://github.com/merlos/cedula-panama) validator (MIT).
