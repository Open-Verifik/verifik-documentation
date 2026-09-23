---
id: "en-docs-legal-epic-eci-what-does-this-api-validate"
title: "India EPIC (Voter ID) — Person & Name Lookup | Verifik — What does this API validate?"
sourcePath: "docs/legal/epic-eci.mdx"
locale: "en"
category: "legal"
tags:
  - "in"
  - "legal"
endpoints:
  - "/v2/in/epic"
  - "/v2/in/epic/votacion"
sourceAnchor: "What does this API validate?"
slug: "/legal/epic-eci"
url: "https://docs.verifik.co/legal/epic-eci"
---

# India EPIC (Voter ID) — Person & Name Lookup | Verifik
**API path(s):** /v2/in/epic, /v2/in/epic/votacion

## What does this API validate?

Verifik exposes a single REST endpoint to look up **voter name** information tied to an Indian **EPIC** (*Elector's Photo Identity Card* number) from sources aligned with the **Electoral Commission of India (ECI)**. Use it to support identity checks, onboarding flows, and compliance workflows that require confirming that a Voter ID number returns consistent registered name data.

## What does this API validate?

The API connects to official electoral data to return:

- **Voter name structure**: First and last name (including script-local variants where available).
- **Full name and relative's name**: Fields suitable for display and matching in Roman and local scripts.
- **EPIC match**: Confirms the supplied **10-character** EPIC (letters and numbers) is recognized and returns associated records.

This reduces manual checks and helps you keep voter-related verification consistent with the underlying registry.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/in/epic
```

Send a **GET** request with the EPIC in the `documentNumber` query parameter. The service returns structured name fields, optional local-script values, and a Verifik **signature** block on success.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description                                                                 | Example     |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------- | ----------- |
| `documentNumber` | string | **Yes**  | EPIC / Voter ID. Must be **exactly 10 characters** (alphanumeric, as issued). | `IHM2796746` |
