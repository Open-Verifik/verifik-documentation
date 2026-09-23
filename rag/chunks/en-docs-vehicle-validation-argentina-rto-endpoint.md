---
id: "en-docs-vehicle-validation-argentina-rto-endpoint"
title: "Argentina RTO — Endpoint"
sourcePath: "docs/vehicle-validation/argentina/rto.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ar"
  - "vehicle-validation"
endpoint: "/v2/ar/rto"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/argentina/rto"
url: "https://docs.verifik.co/vehicle-validation/argentina/rto"
---

# Argentina RTO
**API path(s):** /v2/ar/rto

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/ar/rto
```

Use this endpoint to check Argentine RTO inspection records by vehicle license plate. The response includes inspection result, inspection type, inspection and expiration dates, certificate, scalability category, inspection center, and alert type.

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

const { data } = await axios.get('https://api.verifik.co/v2/ar/rto', {
  params: { plate: 'AA123BB' },
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});

console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ar/rto"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "AA123BB"}
response = requests.get(url, headers=headers, params=params)
print(response.json())
```

### Response

  

```json
{
  "data": {
    "plate": "AA123BB",
    "totalRecords": "1",
    "inspections": [
      {
        "plate": "AA123BB",
        "result": "CONDICIONAL",
        "inspectionType": "RTO",
        "inspectionDate": "2026-01-15",
        "expirationDate": "2027-01-15",
        "certificate": "RTO-10000001",
        "scalabilityCategory": "L",
        "inspectionCenter": "CENT UTN",
        "alertType": "danger"
      }
    ]
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
