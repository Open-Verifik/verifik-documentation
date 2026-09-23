---
id: "en-docs-vehicle-validation-colombia-simit-agreements-endpoint"
title: "SIMIT - Agreements — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/simit-agreements.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/simit/acuerdos"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/simit-agreements"
url: "https://docs.verifik.co/vehicle-validation/colombia/simit-agreements"
---

# SIMIT - Agreements
**API path(s):** /v2/co/simit/acuerdos

## Endpoint

```
https://api.verifik.co/v2/co/simit/acuerdos
```

The SIMIT Agreements Service provides an efficient method for retrieving payment agreements related to traffic violations in Colombia's SIMIT system. By querying the service with relevant details, users can obtain comprehensive information about payment agreements including infractor details, resolution numbers, and amounts due.

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

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/acuerdos", {
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

url = "https://api.verifik.co/v2/co/simit/acuerdos"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "acuerdosPagos": [
      {
        "estadosResoluciones": "Acuerdo de pago",
        "fechaComparendo": "1900/01/01",
        "fechaResolucion": "2018/07/05",
        "noComparendo": "NO REPORTADO",
        "nombresInfractores": "PEPE SALGADO",
        "permitePago": "N",
        "resoluciones": "0003030",
        "secretarias": "Barrancabermeja",
        "total": "558864.0"
      }
    ]
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "March 3, 2022 12:11 PM"}
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
