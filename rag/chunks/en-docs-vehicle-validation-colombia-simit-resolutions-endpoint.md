---
id: "en-docs-vehicle-validation-colombia-simit-resolutions-endpoint"
title: "SIMIT - Resolutions — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/simit-resolutions.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/simit/resoluciones"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/simit-resolutions"
url: "https://docs.verifik.co/vehicle-validation/colombia/simit-resolutions"
---

# SIMIT - Resolutions
**API path(s):** /v2/co/simit/resoluciones

## Endpoint

```
https://api.verifik.co/v2/co/simit/resoluciones
```

The SIMIT Resolutions Service provides access to detailed information about traffic violation resolutions for a specific person or company in Colombia. This service returns data including the name of the infractor, the resolution status, the date of the resolution, and the amount owed.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Document type. Valid parameters: `CC`, `PA`, `CE`, `TI`, `RC`. |
| `documentNumber` | string | Yes | Document number to consult, without spaces or points. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/resoluciones", {
  params: { 
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

url = "https://api.verifik.co/v2/co/simit/resoluciones"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "resoluciones": [
      {
        "estadosResoluciones": "Pendiente de pago",
        "fechaComparendo": "20190503",
        "fechaResolucion": "20191001",
        "nombresInfractores": "PEPE SALGADO",
        "NúmeroComparendo": "99999999000000000936",
        "resoluciones": "S709332197",
        "secretarias": "Barrancabermeja",
        "total": "146770.0"
      }
    ]
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "March 3, 2022 4:09 PM"}
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
  "message": "missing documentType. missing documentNumber"
}
```
