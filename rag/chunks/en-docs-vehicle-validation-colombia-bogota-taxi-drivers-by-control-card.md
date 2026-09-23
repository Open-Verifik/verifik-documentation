---
id: "en-docs-vehicle-validation-colombia-bogota-taxi-drivers-by-control-card"
title: "Bogotá Taxi Driver Information by Control Card — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/bogota-taxi-drivers-by-control-card.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/bogota/taxi-drivers/card"
sourceAnchor: "Endpoint"
---

# Bogotá Taxi Driver Information by Control Card
**API path(s):** /v2/co/bogota/taxi-drivers/card

## Endpoint

```
https://api.verifik.co/v2/co/bogota/taxi-drivers/card/{controlCardNumber}
```

This service returns taxi driver and operation card details for a Bogotá taxi by providing the control card number.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `controlCardNumber` | string | Yes | Control card number to consult. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/bogota/taxi-drivers/card/3002873", {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/bogota/taxi-drivers/card/3002873"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
r = requests.get(url, headers=headers)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "arl": "POSITIVA COMPAÑÍA DE SEGUROS",
    "bloodType": "O+",
    "companyName": "TAX EXPRESS S.A.",
    "companyNit": "8001749098",
    "controlCardNumber": "3002873",
    "controlCardStatus": "0",
    "driverDTO": {
      "bloodGroup": null,
      "foto": null,
      "person": {
        "address": null,
        "birthDate": null,
        "cellPhone": null,
        "documentIssueDate": null,
        "firstName": "ADINAEL",
        "identificationNumber": "1232891942",
        "identificationType": null,
        "identificationTypeDesc": null,
        "lastName": "SANCHEZ  MELO"
      },
      "photoUri": null,
      "rhFactor": null
    },
    "effectiveDate": "05-04-2026",
    "eps": "SANITAS",
    "fixedPhoneType": false,
    "foto": "",
    "issueDate": "06-03-2026",
    "operationCardExpirationDate": "19-02-2027",
    "operationCardNumber": "2148724",
    "paymentMethodName": "PLATAFORMA TECNÓLOGICA",
    "plate": "LSZ913",
    "qualityFactor": false,
    "rtmExpirationDate": "18-04-2026",
    "rtmNumber": "1",
    "soatExpirationDate": "16-04-2026",
    "soatNumber": "408004743304000",
    "validityDate": "16-04-2026"
  },
  "signature": {
    "dateTime": "March 25, 2026 12:11 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "FYG0N"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "No_result_found_for_the_indicated_control_card"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing controlCardNumber\n"
}
```
