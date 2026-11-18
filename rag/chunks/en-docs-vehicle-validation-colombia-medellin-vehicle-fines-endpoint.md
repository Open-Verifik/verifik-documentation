---
id: "en-docs-vehicle-validation-colombia-medellin-vehicle-fines-endpoint"
title: "Medellín - Transit Fines — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/medellin-vehicle-fines.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/medellin/vehicle/fines"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/medellin-vehicle-fines"
url: "https://docs.verifik.co/vehicle-validation/colombia/medellin-vehicle-fines"
---

# Medellín - Transit Fines
**API path(s):** /v2/co/medellin/vehicle/fines

## Endpoint

```
https://api.verifik.co/v2/co/medellin/vehicle/fines
```

The Medellín Transit Fines service returns **local traffic fines and subpoenas** for a vehicle plate in **Medellín, Colombia**, including infraction rows, amounts, and offender details when available. Use it for **municipal compliance**, **fleet management**, and **vehicle due diligence** limited to Medellín mobility records.

Typical fields include **`plate`**, **`informacionComparendo`**, **`valorTotalAdeudado`**, and related tariff / offender arrays.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | License plate (5–8 characters), without spaces or points. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/medellin/vehicle/fines", {
  params: { plate: "ABC10001" },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/medellin/vehicle/fines"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC10001"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "plate": "ABC10001",
    "informacionComparendo": [
      {
        "numeroComparendo": "MDL202400000001",
        "placa": "ABC10001",
        "fecha": "15/01/2024",
        "valor": 180000,
        "estado": "Pendiente",
        "codigoInfraccion": "C29",
        "descripcionInfraccion": "Transitar en sitios prohibidos."
      }
    ],
    "valorTotalAdeudado": 180000,
    "valorTotalPago": 0
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
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
  "message": "\"plate\" is required"
}
```
