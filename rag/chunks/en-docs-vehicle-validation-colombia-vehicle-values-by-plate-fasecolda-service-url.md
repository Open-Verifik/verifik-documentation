---
id: "en-docs-vehicle-validation-colombia-vehicle-values-by-plate-fasecolda-service-url"
title: "Vehicle Values by Plate — Service URL"
sourcePath: "docs/vehicle-validation/colombia/vehicle-values-by-plate-fasecolda.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/fasecolda/values-by-plate"
sourceAnchor: "Service URL"
slug: "/vehicle-validation/colombia/vehicle-values-by-plate-fasecolda"
url: "https://docs.verifik.co/vehicle-validation/colombia/vehicle-values-by-plate-fasecolda"
---

# Vehicle Values by Plate
**API path(s):** /v2/co/fasecolda/values-by-plate

## Service URL

```
https://api.verifik.co/v2/co/fasecolda/values-by-plate
```

The Fasecolda Vehicle Value Inquiry service provides comprehensive information about vehicles registered in Colombia. You can access detailed data including vehicle class, brand, model, year, estimated value, load capacity, fuel type, and other key attributes.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Plate to consult without spaces or periods. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/fasecolda/values-by-plate", {
  params: { plate: "ABC123" },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/fasecolda/values-by-plate"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "absShow": "NO",
    "airbags": "0",
    "airconditioningShow": "SI",
    "axles": "2",
    "bcpp": "64200",
    "brakes": "DISCO/TAMBOR",
    "capacityLoad": "0",
    "capacityPassengers": "5",
    "category": "LIVIANO PASAJEROS",
    "class": "AUTOMOVIL",
    "country": "COL",
    "cylinderCapacity": "1598",
    "doors": "5",
    "electricChairs": "0",
    "electricGlasses": "0",
    "electricMirrors": "0",
    "explorersShow": "NO",
    "foodSystem": "NO APLICA",
    "fuel": "GASOLINA",
    "groupUpdate": "1",
    "homoloCode": "08001151",
    "importedShow": "NO",
    "line1": "SANDERO [FL]",
    "line2": "AUTHENTIQUE",
    "line3": "MT 1600CC 8V AA",
    "long": "4057",
    "marke": "RENAULT",
    "novelty": "A",
    "observation": "",
    "plate": "ABC123",
    "power": "90",
    "rearSuspension": "NO APLICA",
    "reverseCameraShow": "NO",
    "segmentCylinder": "L",
    "segmentSize": "B",
    "sensorsShow": "NO",
    "service": "PARTICULAR",
    "sunroofShow": "NO",
    "tachometer": "NO APLICA",
    "traction": "DELANTERA",
    "transmission": "4X2",
    "typeAddress": "HIDRÁULICA",
    "typeAirConditioning": "MANUAL",
    "typeBox": "MECANICA",
    "typeHeadlights": "HALOGENO",
    "typology": "HATCHBACK",
    "upholsteryLeatherShow": "NO",
    "valueModel": [
      {
        "modelo": "2016",
        "valor": 34500,
        "estado": "USADO",
        "modeloId": 47,
        "idEstado": 1
      },
      {
        "modelo": "2015",
        "valor": 32800,
        "estado": "USADO",
        "modeloId": 46,
        "idEstado": 1
      }
    ],
    "weight": "1108"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "October 12, 2023 7:38 PM"},
  "id": "mhlt7"
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
