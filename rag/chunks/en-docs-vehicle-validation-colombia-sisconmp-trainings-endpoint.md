---
id: "en-docs-vehicle-validation-colombia-sisconmp-trainings-endpoint"
title: "SISCONMP Training Records — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/sisconmp-trainings.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/sisconmp/trainings"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/sisconmp-trainings"
url: "https://docs.verifik.co/vehicle-validation/colombia/sisconmp-trainings"
---

# SISCONMP Training Records
**API path(s):** /v2/co/sisconmp/trainings

## Endpoint

```
GET https://api.verifik.co/v2/co/sisconmp/trainings
```

Verify **transport and cargo operator** training and registration in Colombia’s **SISCONMP** (Sistema de Control y Monitoreo de Personal). You can retrieve training records for the participant by passing **`documentType`** and **`documentNumber`** as **query** parameters (institution, course name, issue/expiry dates, license status, etc.).

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Document type. Allowed values: `CC`, `CE`, `PA`. |
| `documentNumber` | string | Yes | Driver's document number, without spaces or periods. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/sisconmp/trainings", {
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

url = "https://api.verifik.co/v2/co/sisconmp/trainings"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "DIVcodigHeadquarters": "11001000",
    "DIVnameHeadquarters": "BOGOTA",
    "NIDHeadquarters": "9131",
    "NIT_educationalInstitution": "901139908",
    "class": "",
    "dateExpedition": "2021/09/11",
    "dateExpeditionLicense": "2016/12/10",
    "descriptionClass": "",
    "documentNumber": "1030644022",
    "documentType": "CC",
    "expirationDate": "2023/09/11",
    "expirationDateLicense": "2026/12/10",
    "inactive": "No",
    "lastName": "URIBE SANCHEZ",
    "licenseNumber": "1030644022",
    "nameFile": "ejemplo",
    "nameHeadquarters": "INSTITUCION DE EDUCACION PARA EL TRABAJO Y EL DESARROLLO HUMANO CORPOIBEROAMERICANA S.A.S",
    "nameTraining": "CURSO BASICO",
    "names": "CHRISTIAN XAVIER",
    "numericalValueClass": "0",
    "typeTraining": "CURSO BASICO",
    "typeVehicle": ""
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 13, 2023 4:05 PM"}
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
