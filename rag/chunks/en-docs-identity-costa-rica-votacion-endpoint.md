---
id: "en-docs-identity-costa-rica-votacion-endpoint"
title: "Costa Rica - Voting Location — Endpoint"
sourcePath: "docs/identity/costa-rica/votacion.mdx"
locale: "en"
category: "identity"
tags:
  - "cr"
  - "identity"
endpoint: "/v2/cr/votacion"
sourceAnchor: "Endpoint"
slug: "/identity/costa-rica/votacion"
url: "https://docs.verifik.co/identity/costa-rica/votacion"
---

# Costa Rica - Voting Location
**API path(s):** /v2/cr/votacion

## Endpoint

Verifik queries the **TSE Donde Votar** electoral registry using **CCCR** (Costa Rican cédula, **9 to 13 digits**). Use this endpoint for **electoral verification**, **voter onboarding**, and **compliance** workflows where Costa Rican electoral data is permitted.

Returns electoral location details when the source provides them:

- **`documentType`** — allowed value: **CCCR**
- **`documentNumber`** — Costa Rican cédula (**9 to 13** digits)
- **`fullName`**, **`firstName`**, **`firstLastName`**, **`secondLastName`** — citizen name from the electoral registry
- **`gender`** — gender code when provided by the source
- **`province`**, **`canton`**, **`district`** — residence and electoral geography
- **`pollingPlace`**, **`pollingTable`** — polling location details
- **`electoralCode`**, **`electorNumber`**, **`schoolAddress`** — TSE junta metadata
- **Optional fields** — `latitude`, `longitude` when included by the source
- **Signed** Verifik response

### Endpoint

```
GET v2/cr/votacion
```

Query the TSE Donde Votar registry with **`documentType`** `CCCR` and a **`documentNumber`** of **9 to 13 digits**. Typical successful responses include polling place, junta (table), province, canton, and district for **KYC**, **electoral verification**, and **compliance** workflows.

### Headers

| Header | Value | Description |
| --- | --- | --- |
| Accept | application/json | Response format |
| Authorization | Bearer \ | Your Verifik JWT |

### Parameters

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| documentType | String | Yes | Document type. Allowed value: `CCCR`. | `CCCR` |
| documentNumber | String | Yes | Costa Rican cédula (**9 to 13** digits). | `401310036` |
