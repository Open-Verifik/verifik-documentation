---
id: "es-docs-es-validacion-vehiculos-chile-vehicle-stolen-response-2"
title: "🇨🇱 Chile - Vehículo Robado — Response"
sourcePath: "docs-es/validacion-vehiculos/chile/vehicle-stolen.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoint: "/v2/cl/vehicle-stolen"
sourceAnchor: "Response"
slug: "/validacion-vehiculos/chile/vehicle-stolen"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/vehicle-stolen"
---

# 🇨🇱 Chile - Vehículo Robado
**API path(s):** /v2/cl/vehicle-stolen

Consulta si un vehículo chileno tiene un **encargo vigente por robo o hurto**.
Devuelve un payload firmado cuando la consulta responde:
- **`plate`** — patente chilena, **4–7** caracteres alfanuméricos
- **`hasTheftReport`** — `true` cuando hay un encargo vigente; `false` en caso contrario
- **`description`** — texto de estado (p. ej. `NO REGISTRA ENCARGO Vigentes`)
- **`theftReport`** — objeto del reporte: **`typeCode`**, **`plateOriginal`**, **`plateFormatted`**, **`reportDate`**, **`partiallyResolved`**, **`items`**
- **`items[]`** — especies robadas: **`name`**, **`description`**, **`serial`**, **`resolvedDate`**, **`delivered`**, **`deliveryDate`**, **`type`**
- Respuesta **firmada** por Verifik
Útil para **suscripción de seguros**, **onboarding de flotas** y **due diligence** antes de registrar o financiar un vehículo chileno.

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
