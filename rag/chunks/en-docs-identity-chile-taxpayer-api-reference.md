---
id: "en-docs-identity-chile-taxpayer-api-reference"
title: "Chile — Taxpayer (RUT) lookup — API reference"
sourcePath: "docs/identity/chile-taxpayer.mdx"
locale: "en"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/taxpayer"
sourceAnchor: "API reference"
slug: "/identity/chile-taxpayer"
url: "https://docs.verifik.co/identity/chile-taxpayer"
---

# Chile — Taxpayer (RUT) lookup
**API path(s):** /v2/cl/cedula, /v2/cl/taxpayer

## API reference

Use this endpoint when you need **taxpayer-oriented** identity data for a Chilean **RUT** (not the civil-registry cedula flow). It complements **[Identity verification in Chile](/identity/chile)** (`v2/cl/cedula`), which is tuned to **RUN/civil** lookup.

## API reference

### Endpoint

```
https://api.verifik.co/v2/cl/taxpayer
```

Returns name fields and identifiers aligned with **tax registry** usage—ideal for **KYB**, **supplier onboarding**, and **invoice** validation where the **RUT** must match **registered taxpayer** data.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Must be `RUT`. |
| `documentNumber` | string | Yes | Tax identifier (digits; formatting normalized by the service). |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cl/taxpayer", {
  params: { documentType: "RUT", documentNumber: "263007905" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/cl/taxpayer"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "RUT", "documentNumber": "263007905"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "arrayName": ["RICHARD", "DANIEL", "BARBERA", "MARICHAL"],
    "documentNumber": "263007905",
    "documentType": "RUT",
    "firstName": "RICHARD DANIEL",
    "fullName": "RICHARD DANIEL BARBERA MARICHAL",
    "lastName": "BARBERA MARICHAL"
  },
  "signature": {
    "dateTime": "April 9, 2026 3:02 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "S40CG"
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
  "message": "documentNumber maximum length exceeded.\n"
}
```
