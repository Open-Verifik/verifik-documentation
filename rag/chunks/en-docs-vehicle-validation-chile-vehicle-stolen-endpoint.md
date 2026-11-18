---
id: "en-docs-vehicle-validation-chile-vehicle-stolen-endpoint"
title: "🇨🇱 Chile - Stolen Vehicle — Endpoint"
sourcePath: "docs/vehicle-validation/chile/vehicle-stolen.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoint: "/v2/cl/vehicle-stolen"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/chile/vehicle-stolen"
url: "https://docs.verifik.co/vehicle-validation/chile/vehicle-stolen"
---

# 🇨🇱 Chile - Stolen Vehicle
**API path(s):** /v2/cl/vehicle-stolen

## Endpoint

Check whether a Chilean vehicle has an active **stolen or theft report** (*encargo por robo o hurto*).

Returns a signed payload when the lookup succeeds:

- **`plate`** — Chilean license plate (Patente), **4–7** alphanumeric characters
- **`hasTheftReport`** — `true` when there is an active theft report; `false` otherwise
- **`description`** — status text (e.g. `NO REGISTRA ENCARGO Vigentes`)
- **`theftReport`** — report object: **`typeCode`**, **`plateOriginal`**, **`plateFormatted`**, **`reportDate`**, **`partiallyResolved`**, **`items`**
- **`items[]`** — stolen parts: **`name`**, **`description`**, **`serial`**, **`resolvedDate`**, **`delivered`**, **`deliveryDate`**, **`type`**
- **Signed** Verifik response

Use for **insurance underwriting**, **fleet onboarding**, and **asset due diligence** before registering or financing a Chilean vehicle.

### Endpoint

```
GET v2/cl/vehicle-stolen
```

Typical fields: **`plate`**, **`hasTheftReport`**, **`description`**, and nested **`theftReport`**. A vehicle with no active encargo still returns **HTTP 200**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `plate` | string | **Yes** | Chilean license plate (Patente), 4–7 alphanumeric characters. | `PTKX93` |

### Request

  

```javascript
const { data } = await axios.get("https://api.verifik.co/v2/cl/vehicle-stolen", {
  params: { plate: "PTKX93" },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

  
  

```python
url = "https://api.verifik.co/v2/cl/vehicle-stolen"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "PTKX93"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
