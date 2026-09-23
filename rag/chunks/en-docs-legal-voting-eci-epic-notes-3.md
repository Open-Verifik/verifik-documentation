---
id: "en-docs-legal-voting-eci-epic-notes-3"
title: "India EPIC (Voter ID) — Polling & voting location | Verifik — Notes"
sourcePath: "docs/legal/voting-eci-epic.mdx"
locale: "en"
category: "legal"
tags:
  - "in"
  - "legal"
endpoints:
  - "/v2/in/epic"
  - "/v2/in/epic**](/legal/epic-eci)."
  - "/v2/in/epic/votacion"
sourceAnchor: "Notes"
slug: "/legal/voting-eci-epic"
url: "https://docs.verifik.co/legal/voting-eci-epic"
---

# India EPIC (Voter ID) — Polling & voting location | Verifik
**API path(s):** /v2/in/epic, /v2/in/epic**](/legal/epic-eci)., /v2/in/epic/votacion

This endpoint returns **where the voter is assigned to vote**: assembly, district, part (polling-section) details, building name, and related location fields—based on a valid **10-character EPIC** (*Elector's Photo Identity Card* number). It complements the [name-lookup API](/legal/epic-eci) when you need **polling-place context** for logistics, support, or compliance checks.

## Notes

- `documentNumber` must be **exactly 10 characters**; invalid length or format may return `409`.
- Field presence can vary by state and ECI data availability; `null` may appear for optional string fields.
- For **voter name and relative name** only, use [**GET /v2/in/epic**](/legal/epic-eci).

---

## Common use cases

- **Voter help desks**: Direct citizens to the correct polling station, AC, and building for an EPIC.
- **Logistics and field operations**: Pre-validate assignment before dispatch or in-person support.
- **Regulatory and audit workflows** where you must show which electoral geography an EPIC maps to at query time.

## Official sources and reliability

Verifik normalizes ECI-oriented electoral data so you can rely on a single API contract. Results depend on the official registry at lookup time; always handle `404` for EPICs that are invalid or not returned by the current source.

## Key benefits

- **End-to-end TLS** and a consistent JSON shape with a Verifik `signature` on success.
- **Complements name lookup**: Pair with `/v2/in/epic` for full KYC-style EPIC checks when both name and location are required.

## Compliance and security

Protect `Authorization` tokens and **never log** raw EPIC values in public analytics. Keep retention of electoral data within your policy and local law. Verifik enforces transport security and platform-level monitoring on the API edge.

## About Verifik

Verifik unifies access to global identity, vehicle, and registry services behind one security model, so you can add India electoral checks alongside your existing Verifik endpoints.
