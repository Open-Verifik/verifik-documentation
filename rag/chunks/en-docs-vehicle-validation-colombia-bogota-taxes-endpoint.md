---
id: "en-docs-vehicle-validation-colombia-bogota-taxes-endpoint"
title: "Taxes in Bogotá — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/bogota-taxes.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/bogota/vehicle/tax"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/bogota-taxes"
url: "https://docs.verifik.co/vehicle-validation/colombia/bogota-taxes"
---

# Taxes in Bogotá
**API path(s):** /v2/co/bogota/vehicle/tax

## Endpoint

```
GET https://api.verifik.co/v2/co/bogota/vehicle/tax
```

This service provides information about the tax obligations for a vehicle registered in Bogotá. You need to provide the owner's document type and number, along with the vehicle's license plate. The response includes vehicle details and tax obligation status for specific fiscal years.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Plate to consult, without spaces or points. |
| `documentNumber` | string | Yes | Document number to consult, without space or points. |
| `documentType` | string | Yes | Document type. Allowed: `CC`, `NIT`. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/bogota/vehicle/tax", {
  params: { 
    plate: "ABC123", 
    documentType: "CC", 
    documentNumber: "123456789" 
  },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/bogota/vehicle/tax"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123", "documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "details": "",
    "documentNumber": "123456789",
    "documentType": "CC",
    "obligation": {
      "vehicle": [
        {
          "brand": "MAZDA",
          "form": "2020003010100010240",
          "linea": "050365",
          "model": "2021",
          "obligation": "1.080.000",
          "obligationStatus": "Moroso",
          "plate": "ABC123",
          "reference": "0000020034588543",
          "taxableYear": "2020",
          "totalToPay": "1.080.000"
        }
      ]
    },
    "plate": "ABC123"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 3, 2024 3:59 PM"},
  "id": "5P20N"
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
