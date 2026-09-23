---
id: "en-docs-legal-voting-eci-epic-what-does-this-api-validate"
title: "India EPIC (Voter ID) — Polling & voting location | Verifik — What does this API validate?"
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
sourceAnchor: "What does this API validate?"
slug: "/legal/voting-eci-epic"
url: "https://docs.verifik.co/legal/voting-eci-epic"
---

# India EPIC (Voter ID) — Polling & voting location | Verifik
**API path(s):** /v2/in/epic, /v2/in/epic**](/legal/epic-eci)., /v2/in/epic/votacion

## What does this API validate?

This endpoint returns **where the voter is assigned to vote**: assembly, district, part (polling-section) details, building name, and related location fields—based on a valid **10-character EPIC** (*Elector's Photo Identity Card* number). It complements the [name-lookup API](/legal/epic-eci) when you need **polling-place context** for logistics, support, or compliance checks.

## What does this API validate?

The API returns electoral **location and assignment** data for a given EPIC, for example:

- **Constituency and part**: Assembly (AC) identifiers, part number and name, section serial where applicable.
- **Geography**: District, state, and parliamentary association where exposed by the source.
- **Polling place**: Building name, address, and any room or booth details returned for the EPIC.
- **EPIC match**: The query must use a full, valid **10-character** EPIC in `documentNumber`.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/in/epic/votacion
```

Send a **GET** request with the EPIC in the `documentNumber` query parameter. The response is tailored to **polling and voting-location** data (not the name-only profile returned by `GET /v2/in/epic`).

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description                                                                 | Example     |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------- | ----------- |
| `documentNumber` | string | **Yes**  | EPIC / Voter ID. Must be **exactly 10 characters** (alphanumeric, as issued). | `IHM2796746` |
