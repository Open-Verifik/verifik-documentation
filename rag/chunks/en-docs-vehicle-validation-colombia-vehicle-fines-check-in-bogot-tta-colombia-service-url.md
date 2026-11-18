---
id: "en-docs-vehicle-validation-colombia-vehicle-fines-check-in-bogot-tta-colombia-service-url"
title: "Vehicle Fines Check — Service URL"
sourcePath: "docs/vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/bogota/vehicle/fines"
sourceAnchor: "Service URL"
slug: "/vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia"
url: "https://docs.verifik.co/vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia"
---

# Vehicle Fines Check
**API path(s):** /v2/co/bogota/vehicle/fines

## Service URL

```
https://api.verifik.co/v2/co/bogota/vehicle/fines
```

This service allows you to check fines associated with a vehicle in Bogotá, Colombia, using its license plate number. The response provides detailed information including fine type, status, number, dates, and payment details.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Plate to consult, without spaces or points. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/bogota/vehicle/fines", {
  params: { plate: "ABC123" },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/bogota/vehicle/fines"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "fines": [
      {
        "type": "Comparendo - comparendera",
        "status": "vigente",
        "number": "11001000000035429360",
        "plate": "ABC123",
        "impositionDate": "14/11/2022",
        "notificationDate": "14/11/2022",
        "balance": "468500",
        "discountValue": "0",
        "pendingBalance": "549500",
        "interest": "81000",
        "total": "549500",
        "totalCollections": "0",
        "impositionMedium": "Control en vía apoyado en dispositivos móviles",
        "courseAttendanceMessage": null,
        "installmentNumber": "0",
        "installmentStatus": null,
        "installmentCount": "0",
        "documentType": "C",
        "documentNumber": "123456789",
        "name": "MATEO VERIFIK",
        "moratoryInterest": "0"
      }
    ],
    "plate": "ABC123"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 3, 2024 4:03 PM"},
  "id": "Y5GS6"
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
