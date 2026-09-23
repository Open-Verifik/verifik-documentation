---
id: "en-docs-vehicle-validation-argentina-buenos-aires-technical-inspection-endpoint"
title: "Buenos Aires Technical Inspection — Endpoint"
sourcePath: "docs/vehicle-validation/argentina/buenos-aires-technical-inspection.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ar"
  - "vehicle-validation"
endpoint: "/v2/ar/buenos-aires/technical-inspection"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/argentina/buenos-aires-technical-inspection"
url: "https://docs.verifik.co/vehicle-validation/argentina/buenos-aires-technical-inspection"
---

# Buenos Aires Technical Inspection
**API path(s):** /v2/ar/buenos-aires/technical-inspection

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/ar/buenos-aires/technical-inspection
```

Use this endpoint to check Buenos Aires vehicle technical inspection history by license plate. The response returns inspection records with verification identifiers, verification and expiration dates, result type, sticker number, comments, vehicle brand and model, and inspection plant name.

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

const { data } = await axios.get('https://api.verifik.co/v2/ar/buenos-aires/technical-inspection', {
  params: { plate: 'AA123BB' },
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});

console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ar/buenos-aires/technical-inspection"
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
        "verificationId": "10000001",
        "verificationDate": "2026-01-15 10:30:00",
        "resultTypeId": "2",
        "comments": "Observada",
        "stickerNumber": "OB-10000001",
        "expirationDate": "2027-01-15",
        "isReverification": false,
        "brand": "TOYOTA",
        "model": "COROLLA",
        "plantName": "Planta VTV Buenos Aires"
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
