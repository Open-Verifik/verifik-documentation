---
id: "en-docs-vehicle-validation-ecuador-response-2"
title: "\\U0001F1EA\\U0001F1E8 Ecuador - Vehicle Fines — Response"
sourcePath: "docs/vehicle-validation/ecuador.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ec"
  - "vehicle-validation"
endpoint: "/v2/ec/vehiculo/placa/multas"
sourceAnchor: "Response"
slug: "/vehicle-validation/ecuador"
url: "https://docs.verifik.co/vehicle-validation/ecuador"
---

# \U0001F1EA\U0001F1E8 Ecuador - Vehicle Fines
**API path(s):** /v2/ec/vehiculo/placa/multas

The Ecuador Vehicle License Plate Fines service allows you to retrieve information about fines associated with a vehicle's license plate in Ecuador. You can access details such as the vehicle's registration information, including the plate number, class, and model. The service also provides the current status, service type, and registration expiration date, along with any outstanding fines linked to the license plate.
This service is useful for individuals and businesses aiming to stay informed about fines associated with their vehicles and ensure compliance with Ecuadorian traffic laws.

## Response

```json
{
  "data": {
    "camvCpn": "T00950479",
    "class": "AUTOMOVIL",
    "cylinderCapacity": "1600",
    "information": null,
    "lastCheckUpDate": "2023/08/31",
    "lastPaymentYear": "2023",
    "lastRegistrationDate": "2019/03/21",
    "manufactureCountry": "MEXICO",
    "model": "SENTRA 1.6 M/T",
    "plate": "ABC1234",
    "purchaseDate": "2010/06/09",
    "reasonMessage": null,
    "registrationCanton": "IBARRA",
    "registrationExpirationDate": "2024/03/19",
    "remission": null,
    "service": "PARTICULAR",
    "status": "ASIGNADO",
    "total": "76.72",
    "usageType": "NO APLICA",
    "year": "2010",
    "multas": [
      {
        "id": "1",
        "infraccion": "92507343",
        "entidad": "MNO-MANCOMUNIDAD DEL NORTE",
        "citacion": "N-ACT0349-00184",
        "placa": "ABC1234",
        "documento": "VEH - 1801442417",
        "fechaDeEmision": "2024-03-11 09:43:26.0",
        "fechaNotificacion": "2024-03-11 09:43:26.0",
        "fechaLimiteDePago": "21-03-2024 09:43:26",
        "puntos": "0",
        "pag": "N",
        "anu": "N",
        "imp": "N",
        "sancion": "46",
        "multa": "0",
        "remision": "0",
        "totalAPagar": "23",
        "articuloliteral": "Art. 391 - Lit. 05.  COND. ESTACIONE EN SITIOS PROHIBIDOS POR LA LEY Y REGLAM",
        "tamanoImagen": "0",
        "bloqueo": "N"
      }
    ]
  },
  "signature": {
    "dateTime": "March 12, 2024 7:50 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "OB2YV"
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
  "message": "missing plate\n"
}
```
