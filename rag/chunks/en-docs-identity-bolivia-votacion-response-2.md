---
id: "en-docs-identity-bolivia-votacion-response-2"
title: "Bolivia - Voting Location — Response"
sourcePath: "docs/identity/bolivia/votacion.mdx"
locale: "en"
category: "identity"
tags:
  - "bo"
  - "identity"
endpoint: "/v2/bo/votacion"
sourceAnchor: "Response"
slug: "/identity/bolivia/votacion"
url: "https://docs.verifik.co/identity/bolivia/votacion"
---

# Bolivia - Voting Location
**API path(s):** /v2/bo/votacion

Verifik queries **Yo Participo (OEP)** using **CI** and **date of birth**. Use this endpoint for **electoral verification**, **voter onboarding**, and **compliance** workflows where OEP data is permitted.
Returns electoral location details when the source provides them:
- **`documentType`** — allowed value: **CI**
- **`documentNumber`** — Bolivian identity document number (**5–13** characters)
- **`dateOfBirth`** — date of birth in **DD/MM/YYYY** format (must match OEP records)
- **`fullName`** — citizen full name from the electoral registry
- **`votingStatus`** — whether the citizen is enabled to vote
- **`department`**, **`locality`**, **`pollingPlace`**, **`pollingTable`** — electoral location fields
- **`election`** — election label or registry update note when provided
- **Optional fields** — `isJury`, `jurySortDate`, `politicalMembership`, `latitude`, `longitude` when included by the source
- **Signed** Verifik response

## Response

```json
{
  "data": {
    "documentType": "CI",
    "documentNumber": "4511200",
    "fullName": "LIDIA IRIARTE TORREZ",
    "votingStatus": "USTED ESTA HABILITADO/A PARA VOTAR",
    "country": "BOLIVIA",
    "department": "Cochabamba",
    "locality": "Cercado, Cochabamba",
    "election": "Elecciones Generales 2026",
    "pollingPlace": "Unidad Educativa Santa Maria Micaela",
    "pollingTable": "18"
  },
  "signature": {
    "dateTime": "July 2, 2026 3:00 PM",
    "message": "Certified by Verifik.co"
  }
}
```

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing dateOfBirth\n"
}
```

### Notes

- **`documentType`** must be **`CI`**; **`dateOfBirth`** is required and must match OEP records.
- Optional jury, militancy, and coordinate fields appear only when the source HTML/JSON includes them.
- Treat responses as **sensitive personal data**; comply with applicable privacy laws.
