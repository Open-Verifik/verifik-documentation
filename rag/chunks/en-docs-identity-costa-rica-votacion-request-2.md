---
id: "en-docs-identity-costa-rica-votacion-request-2"
title: "Costa Rica - Voting Location — Request"
sourcePath: "docs/identity/costa-rica/votacion.mdx"
locale: "en"
category: "identity"
tags:
  - "cr"
  - "identity"
endpoint: "/v2/cr/votacion"
sourceAnchor: "Request"
slug: "/identity/costa-rica/votacion"
url: "https://docs.verifik.co/identity/costa-rica/votacion"
---

# Costa Rica - Voting Location
**API path(s):** /v2/cr/votacion

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

## Request

```javascript
const { data } = await axios.get("https://api.verifik.co/v2/cr/votacion", {
  params: {
    documentType: "CCCR",
    documentNumber: "401310036",
  },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

```python
url = "https://api.verifik.co/v2/cr/votacion"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CCCR", "documentNumber": "401310036"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

```json
{
  "data": {
    "documentType": "CCCR",
    "documentNumber": "401310036",
    "fullName": "MARIA ELENA LOPEZ GARCIA",
    "firstName": "MARIA",
    "firstLastName": "LOPEZ",
    "secondLastName": "GARCIA",
    "gender": "1",
    "province": "San José",
    "canton": "Central",
    "district": "Carmen",
    "pollingPlace": "Escuela República de Chile",
    "pollingTable": "12",
    "electoralCode": "210011",
    "electorNumber": "325",
    "schoolAddress": "COSTADO NORTE DE LA PLAZA DE DEPORTES",
    "latitude": 9.9281,
    "longitude": -84.0907
  },
  "signature": {
    "dateTime": "July 13, 2026 5:00 PM",
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

- **`documentType`** must be **`CCCR`**; **`documentNumber`** must be **9 to 13** numeric digits.
- **Live example IDs** (production registry): `401310036`, `401310030`, `401310039`, `402330708`, `114070037`.
- **Sandbox mode:** use padded test IDs **`010000001`** through **`010000010`** for stable success profiles; **`090040401`** returns **404**.
- Treat responses as **sensitive personal data**; comply with applicable privacy laws.
- See also: [Costa Rican Citizen identity lookup](/identity/costa-rica).
