---
id: "en-docs-vehicle-validation-colombia-bogota-vehicle-accidentality-endpoint"
title: "Vehicle Accidentality — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/bogota-vehicle-accidentality.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/bogota/vehicle/accidentality"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/bogota-vehicle-accidentality"
url: "https://docs.verifik.co/vehicle-validation/colombia/bogota-vehicle-accidentality"
---

# Vehicle Accidentality
**API path(s):** /v2/co/bogota/vehicle/accidentality

## Endpoint

```
GET https://api.verifik.co/v2/co/bogota/vehicle/accidentality
```

This service provides detailed information about the accident history of a vehicle registered in Bogotá, Colombia. The response includes an array of accidents with dates, form numbers, and severity levels.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Plate to consult, without spaces or points. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/bogota/vehicle/accidentality", {
  params: { plate: "ABC123" },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/bogota/vehicle/accidentality"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "accident": [
      {
        "date": "VIERNES, 20 FEBRERO 2015 00:00",
        "form": "A1689",
        "seriousness": "SOLO DAÑOS"
      },
      {
        "date": "LUNES, 10 FEBRERO 2014 00:00",
        "form": "A1428611",
        "seriousness": "SOLO DAÑOS"
      },
      {
        "date": "SÁBADO, 9 MARZO 2013 00:00",
        "form": "A1247163",
        "seriousness": "SOLO DAÑOS"
      }
    ],
    "plate": "TSP331"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 3, 2024 3:58 PM"},
  "id": "3C9YY"
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
  "message": "missing plate"
}
```
