---
id: "en-docs-identity-honduras-votacion-request-2"
title: "Honduras - Voting Location — Request"
sourcePath: "docs/identity/honduras/votacion.mdx"
locale: "en"
category: "identity"
tags:
  - "hn"
  - "identity"
endpoint: "/v2/hn/votacion"
sourceAnchor: "Request"
slug: "/identity/honduras/votacion"
url: "https://docs.verifik.co/identity/honduras/votacion"
---

# Honduras - Voting Location
**API path(s):** /v2/hn/votacion

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

## Request

```javascript
const { data } = await axios.get("https://api.verifik.co/v2/hn/votacion", {
  params: {
    documentType: "DNIHN",
    documentNumber: "0501199705651",
  },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

```python
url = "https://api.verifik.co/v2/hn/votacion"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "DNIHN", "documentNumber": "0501199705651"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

```json
{
  "data": {
    "documentType": "DNIHN",
    "documentNumber": "0501199705651",
    "fullName": "CHRISTOPHER ALEXANDER RUBIO ROMERO",
    "gender": "MASCULINO",
    "department": "ESPAÑA",
    "municipality": "MADRID",
    "electoralSector": "MADRID",
    "pollingPlace": "CONSULADO DE MADRID EN ESPAÑA",
    "pollingTable": "12",
    "lineNumber": "42",
    "enabled": true,
    "fullAddress": "CONSULADO DE MADRID EN ESPAÑA, MADRID, ESPAÑA, Honduras"
  },
  "signature": {
    "dateTime": "July 9, 2026 5:00 PM",
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
  "message": "missing documentNumber\n"
}
```

### Notes

- **`documentType`** must be **`DNIHN`**; **`documentNumber`** must be exactly **13** numeric digits.
- **Live example IDs** (production registry): `0501199705651`, `0828200300064`, `0801198000420`, `0801198000427`, `0801198000428`, `0801197302222`, `0801198000421`.
- **Sandbox mode:** use padded test IDs **`0000010000001`** through **`0000010000010`** for stable success profiles; **`0000090040401`** returns **404**.
- **Source rate limits:** if the electoral registry throttles requests, Verifik may return **409** with `Endpoint_out_of_service` (temporary; retry later).
- Treat responses as **sensitive personal data**; comply with applicable privacy laws.
- See also: [Honduran Citizen identity lookup](/identity/honduras).
