---
id: "en-docs-identity-honduras-votacion-endpoint"
title: "Honduras - Voting Location — Endpoint"
sourcePath: "docs/identity/honduras/votacion.mdx"
locale: "en"
category: "identity"
tags:
  - "hn"
  - "identity"
endpoint: "/v2/hn/votacion"
sourceAnchor: "Endpoint"
slug: "/identity/honduras/votacion"
url: "https://docs.verifik.co/identity/honduras/votacion"
---

# Honduras - Voting Location
**API path(s):** /v2/hn/votacion

## Endpoint

Verifik queries the **Donde Me Toca Votar** electoral consultation registry using **DNIHN** (13-digit identity number). Use this endpoint for **electoral verification**, **voter onboarding**, and **compliance** workflows where Honduran electoral data is permitted.

Returns electoral location details when the source provides them:

- **`documentType`** — allowed value: **DNIHN**
- **`documentNumber`** — Honduran identity document number (**13** digits)
- **`fullName`** — citizen full name from the electoral registry
- **`gender`** — gender when provided by the source
- **`department`**, **`municipality`**, **`electoralSector`** — residence and electoral sector
- **`pollingPlace`**, **`pollingTable`** (JRV), **`lineNumber`** — polling location details
- **`enabled`** — whether the citizen is enabled to vote
- **`fullAddress`** — formatted polling address
- **Optional fields** — `latitude`, `longitude` when included by the source
- **Signed** Verifik response

### Endpoint

```
GET v2/hn/votacion
```

Query the national electoral consultation registry with **`documentType`** `DNIHN` and a **13-digit** **`documentNumber`**. Typical successful responses include polling place, JRV (table), department, municipality, and voting eligibility for **KYC**, **electoral verification**, and **compliance** workflows.

### Headers

| Header | Value | Description |
| --- | --- | --- |
| Accept | application/json | Response format |
| Authorization | Bearer \ | Your Verifik JWT |

### Parameters

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| documentType | String | Yes | Document type. Allowed value: `DNIHN`. | `DNIHN` |
| documentNumber | String | Yes | Honduran identity document number (**13** digits). | `0501199705651` |
