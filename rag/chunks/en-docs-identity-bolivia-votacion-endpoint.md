---
id: "en-docs-identity-bolivia-votacion-endpoint"
title: "Bolivia - Voting Location — Endpoint"
sourcePath: "docs/identity/bolivia/votacion.mdx"
locale: "en"
category: "identity"
tags:
  - "bo"
  - "identity"
endpoint: "/v2/bo/votacion"
sourceAnchor: "Endpoint"
slug: "/identity/bolivia/votacion"
url: "https://docs.verifik.co/identity/bolivia/votacion"
---

# Bolivia - Voting Location
**API path(s):** /v2/bo/votacion

## Endpoint

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

### Endpoint

```
GET v2/bo/votacion
```

### Headers

| Header | Value | Description |
| --- | --- | --- |
| Accept | application/json | Response format |
| Authorization | Bearer \ | Your Verifik JWT |

### Parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| documentType | String | Yes | Document type. Allowed value: `CI`. |
| documentNumber | String | Yes | Bolivian CI number without expedition code (**5–13** characters). |
| dateOfBirth | String | Yes | Date of birth in `DD/MM/YYYY` format. |

### Request

```javascript
const { data } = await axios.get("https://api.verifik.co/v2/bo/votacion", {
  params: {
    documentType: "CI",
    documentNumber: "4511200",
    dateOfBirth: "27/03/1978",
  },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

```python
url = "https://api.verifik.co/v2/bo/votacion"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CI", "documentNumber": "4511200", "dateOfBirth": "27/03/1978"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
