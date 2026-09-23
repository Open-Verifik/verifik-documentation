---
id: "en-docs-vehicle-validation-argentina-vehicle-v3-endpoint"
title: "Argentina - Vehicle v3 — Endpoint"
sourcePath: "docs/vehicle-validation/argentina/vehicle-v3.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ar"
  - "vehicle-validation"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/argentina/vehicle-v3"
url: "https://docs.verifik.co/vehicle-validation/argentina/vehicle-v3"
---

# Argentina - Vehicle v3

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v3/ar/vehicle
```

Use this endpoint to retrieve Argentine vehicle details from a license plate. The response includes normalized vehicle identifiers such as engine number, chassis, brand, model, year, color, unit type, active policy status, and technical-sheet fields when available.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `plate` | string | **Yes** | Mercosur format `AA-123-BB` (send as `AA123BB`, without spaces or punctuation). |

### Request

  

```javascript

const { data } = await axios.get('https://api.verifik.co/v3/ar/vehicle', {
  params: { plate: 'AA123BB' },
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});

console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/ar/vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "AA123BB"}
response = requests.get(url, headers=headers, params=params)
print(response.json())
```

### Response

  

```json
{
  "data": {
    "brand": "TOYOTA",
    "chassis": "AR10000001CH",
    "color": "BLANCO",
    "engineNumber": "AR10000001M",
    "isActivePolicyFound": false,
    "model": "COROLLA 2020",
    "modelGroup": "COROLLA",
    "plate": "AA123BB",
    "technicalSheet": {
      "engine": {
        "engineDescription": "1.6L",
        "fuel": "NAFTA",
        "powerHp": "110"
      },
      "performance": {
        "cityConsumption": "10 km/L",
        "highwayConsumption": "14 km/L"
      },
      "dimensions": {
        "doors": "4",
        "occupants": "5"
      }
    },
    "type": "AUTOMOVIL",
    "year": "2020"
  },
  "signature": {
    "dateTime": "July 1, 2026 10:00 AM",
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
  "message": "missing plate\n"
}
```

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```
