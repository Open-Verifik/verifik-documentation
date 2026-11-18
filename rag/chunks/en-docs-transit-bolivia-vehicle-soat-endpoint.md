---
id: "en-docs-transit-bolivia-vehicle-soat-endpoint"
title: "Bolivia - Vehicle SOAT — Endpoint"
sourcePath: "docs/transit/bolivia/vehicle-soat.mdx"
locale: "en"
category: "transit"
tags:
  - "bo"
  - "transit"
endpoint: "/v2/bo/vehicle-soat"
sourceAnchor: "Endpoint"
slug: "/transit/bolivia/vehicle-soat"
url: "https://docs.verifik.co/transit/bolivia/vehicle-soat"
---

# Bolivia - Vehicle SOAT
**API path(s):** /v2/bo/vehicle-soat

## Endpoint

Verifik queries the official Bolivia **SOAT** (*Seguro Obligatorio de Accidentes de Tránsito*) registry by **license plate**. Use this endpoint for **fleet compliance**, **insurance verification**, and **transit checks**.

Returns SOAT coverage details when the source provides them:

- **`plate`** — vehicle license plate (**5–8** characters), normalized to uppercase
- **`managementYear`** — SOAT management or coverage year
- **`validFrom`** / **`validTo`** — coverage validity dates (DD/MM/YYYY)
- **`vehicleType`** — vehicle category (e.g. AUTOMOVIL, VAGONETA, MOTOCICLETA)
- **`useType`** — use classification (PARTICULAR, COMERCIAL)
- **`department`** — department associated with the policy
- **`status`** — computed status: VIGENTE, VENCIDO, or PENDIENTE
- **Signed** Verifik response

### Endpoint

```
GET v2/bo/vehicle-soat
```

### Headers

| Header | Value | Description |
| --- | --- | --- |
| Accept | application/json | Response format |
| Authorization | Bearer \ | Your Verifik JWT |

### Parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| plate | String | Yes | Vehicle license plate without spaces (**5–8** characters). |

### Request

```javascript
const { data } = await axios.get("https://api.verifik.co/v2/bo/vehicle-soat", {
  params: { plate: "1852PHD" },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

```python
url = "https://api.verifik.co/v2/bo/vehicle-soat"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "1852PHD"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
