---
id: "en-docs-vehicle-validation-colombia-bogota-taxi-drivers-by-plate"
title: "Bogotá Taxi Driver Information by Plate — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/bogota-taxi-drivers-by-plate.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/bogota/taxi-drivers/plate"
  - "/v2/co/bogota/taxi-drivers/plate/wmn482"
sourceAnchor: "Endpoint"
---

# Bogotá Taxi Driver Information by Plate
**API path(s):** /v2/co/bogota/taxi-drivers/plate, /v2/co/bogota/taxi-drivers/plate/wmn482

## Endpoint

```
GET https://api.verifik.co/v2/co/bogota/taxi-drivers/plate
```

This service returns taxi driver and operation card details for a Bogotá taxi. Send the vehicle **plate** as the last **path** segment (for example `…/plate/WMN482`), not as a query string. The plate must be 5–6 characters, without spaces or periods.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Path segment after `/plate/`. 5–6 characters; no spaces or periods. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/bogota/taxi-drivers/plate/WMN482", {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/bogota/taxi-drivers/plate/WMN482"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
r = requests.get(url, headers=headers)
print(r.json())
```

### Response

  

```json
{
  "data": [
    {
      "arl": "ARP SURA (ANTES SURATEP)",
      "bloodType": "O+",
      "companyName": "TAX EXPRESS S.A.                                            ",
      "companyNit": "8001749098",
      "controlCardNumber": "3018528",
      "controlCardStatus": "0",
      "driverDTO": {
        "bloodGroup": null,
        "foto": null,
        "person": {
          "address": null,
          "birthDate": null,
          "cellPhone": null,
          "documentIssueDate": null,
          "firstName": "REINEL",
          "identificationNumber": "80873223",
          "identificationType": null,
          "identificationTypeDesc": null,
          "lastName": "AMADO CRUZ"
        },
        "photoUri": null,
        "rhFactor": null
      },
      "effectiveDate": "16-04-2026",
      "eps": "SANITAS",
      "fixedPhoneType": false,
      "foto": "",
      "issueDate": "24-03-2026",
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
    {
      "arl": "POSITIVA COMPAÑÍA DE SEGUROS",
      "bloodType": "O+",
      "companyName": "TAX EXPRESS S.A.                                            ",
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
    }
  ],
  "signature": {
    "dateTime": "March 25, 2026 12:09 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "WA9IB"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "No_result_found_for_the_indicated_plate"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```
