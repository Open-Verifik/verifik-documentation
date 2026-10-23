---
id: "en-docs-vehicle-validation-argentina-buenos-aires-traffic-infractions-endpoint"
title: "Buenos Aires Traffic Infractions — Endpoint"
sourcePath: "docs/vehicle-validation/argentina/buenos-aires-traffic-infractions.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ar"
  - "vehicle-validation"
endpoint: "/v2/ar/buenos-aires/traffic-infractions"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/argentina/buenos-aires-traffic-infractions"
url: "https://docs.verifik.co/vehicle-validation/argentina/buenos-aires-traffic-infractions"
---

# Buenos Aires Traffic Infractions
**API path(s):** /v2/ar/buenos-aires/traffic-infractions

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/ar/buenos-aires/traffic-infractions
```

Use this endpoint to check whether a vehicle plate has traffic infractions in Buenos Aires. The response includes the plate, total record count, case and act numbers, status, amounts, issuing authority, dates, and infraction details when records are found.

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

const { data } = await axios.get('https://api.verifik.co/v2/ar/buenos-aires/traffic-infractions', {
  params: { plate: 'AA123BB' },
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});

console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ar/buenos-aires/traffic-infractions"
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
    "infractions": [
      {
        "caseNumber": "BA-10000001",
        "actNumber": "ACT-10000001",
        "status": "Pendiente",
        "isExpired": false,
        "totalAmount": "10012501",
        "details": [
          {
            "article": "Ley 24.449",
            "description": "Exceso de velocidad"
          }
        ],
        "issuingAuthority": "Buenos Aires",
        "infractionDate": "2026-01-15T12:00:00.000Z",
        "issueDate": "2026-01-16T12:00:00.000Z",
        "dueDate": "2026-02-15T12:00:00.000Z"
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
