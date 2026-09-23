---
id: "en-docs-vehicle-validation-chile-vehicle-stolen-response-2"
title: "🇨🇱 Chile - Stolen Vehicle — Response"
sourcePath: "docs/vehicle-validation/chile/vehicle-stolen.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoint: "/v2/cl/vehicle-stolen"
sourceAnchor: "Response"
slug: "/vehicle-validation/chile/vehicle-stolen"
url: "https://docs.verifik.co/vehicle-validation/chile/vehicle-stolen"
---

# 🇨🇱 Chile - Stolen Vehicle
**API path(s):** /v2/cl/vehicle-stolen

Check whether a Chilean vehicle has an active **stolen or theft report** (*encargo por robo o hurto*).
Returns a signed payload when the lookup succeeds:
- **`plate`** — Chilean license plate (Patente), **4–7** alphanumeric characters
- **`hasTheftReport`** — `true` when there is an active theft report; `false` otherwise
- **`description`** — status text (e.g. `NO REGISTRA ENCARGO Vigentes`)
- **`theftReport`** — report object: **`typeCode`**, **`plateOriginal`**, **`plateFormatted`**, **`reportDate`**, **`partiallyResolved`**, **`items`**
- **`items[]`** — stolen parts: **`name`**, **`description`**, **`serial`**, **`resolvedDate`**, **`delivered`**, **`deliveryDate`**, **`type`**
- **Signed** Verifik response
Use for **insurance underwriting**, **fleet onboarding**, and **asset due diligence** before registering or financing a Chilean vehicle.

## Response

```json
{
  "data": {
    "description": "NO REGISTRA ENCARGO Vigentes",
    "hasTheftReport": false,
    "plate": "PTKX93",
    "theftReport": {
      "typeCode": 0,
      "plateOriginal": "PTKX93",
      "plateFormatted": null,
      "reportDate": "",
      "partiallyResolved": false,
      "items": []
    }
  },
  "signature": {
    "dateTime": "September 3, 2026 5:00 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "data": {
    "description": "REGISTRA ENCARGO Vigentes",
    "hasTheftReport": true,
    "plate": "NG8245",
    "theftReport": {
      "typeCode": 1,
      "plateOriginal": "NG8245",
      "plateFormatted": "NG☆82·45",
      "reportDate": "22-07-2026 11:40:45",
      "partiallyResolved": false,
      "items": [
        {
          "name": null,
          "description": "Patente Delantera",
          "serial": "NG.8245",
          "resolvedDate": null,
          "delivered": "No",
          "deliveryDate": null,
          "type": 1
        },
        {
          "name": null,
          "description": "VIN",
          "serial": "KMHVF21NPSU188119",
          "resolvedDate": null,
          "delivered": "No",
          "deliveryDate": null,
          "type": 3
        },
        {
          "name": null,
          "description": "MOTOR",
          "serial": "G4EKS443358",
          "resolvedDate": null,
          "delivered": "No",
          "deliveryDate": null,
          "type": 4
        }
      ]
    }
  },
  "signature": {
    "dateTime": "September 3, 2026 5:00 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```
