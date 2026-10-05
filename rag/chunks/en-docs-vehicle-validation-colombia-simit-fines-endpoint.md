---
id: "en-docs-vehicle-validation-colombia-simit-fines-endpoint"
title: "SIMIT - Fines — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/simit-fines.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/simit/comparendos"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/simit-fines"
url: "https://docs.verifik.co/vehicle-validation/colombia/simit-fines"
---

# SIMIT - Fines
**API path(s):** /v2/co/simit/comparendos

## Endpoint

```
https://api.verifik.co/v2/co/simit/comparendos
```

The Traffic Citations Service provides detailed information about traffic citations associated with a specific vehicle in Colombia. By inputting the vehicle's license plate number, users can access comprehensive details about each citation, including its status, date, location, and the type of traffic violation.

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

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/comparendos", {
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

url = "https://api.verifik.co/v2/co/simit/comparendos"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "comparendos": [
      {
        "tipovehiculo": "AUTOMOVIL",
        "estadoComparendo": "Pendiente",
        "fechaComparendo": "2016/02/23",
        "fotodeteccion": false,
        "NúmeroComparendo": "2561200100015264662173",
        "placavehiculo": "AAA123",
        "secretariaComparendo": "Ricaurte",
        "total": 344730,
        "idOrganismoTransito": "25612123",
        "codigoInfraccion": "C35",
        "descripcionInfraccion": "No realizar la revisión técnico-mecánica en el plazo legal establecido o cuando el vehiculo no se encuentre en adecuadas condiciones técnico-mecánicas o de emisión de gases, aun cuando porte los certificados correspondientes.",
        "direccionComparendo": "CARRERA 9 CON CALLE 10 AGUA DE DIOS",
        "infractorComparendo": "CAR BER",
        "serviciovehiculo": "Particular"
      }
    ]
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "February 13, 2023 6:17 AM"}
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
