---
id: "en-docs-vehicle-validation-chile-response-3"
title: "\\U0001F1E8\\U0001F1F1 Chile - Vehicle Information — Response"
sourcePath: "docs/vehicle-validation/chile.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoints:
  - "/v2/cl/vehicle"
  - "/v2/cl/vehicle-soap"
  - "/v2/cl/vehicle/v3"
sourceAnchor: "Response"
slug: "/vehicle-validation/chile"
url: "https://docs.verifik.co/vehicle-validation/chile"
---

# \U0001F1E8\U0001F1F1 Chile - Vehicle Information
**API path(s):** /v2/cl/vehicle, /v2/cl/vehicle-soap, /v2/cl/vehicle/v3

Chilean vehicle validation service provides comprehensive verification capabilities for vehicle information. This service allows you to retrieve detailed information about vehicles registered in Chile.
Related Chile vehicle endpoints:
- **Vehicle Information (`v2/cl/vehicle`)**: commercial vehicle lookup (Reale / getapi). A **404** means the plate is not in that source—not an outage.
- **Vehicle Technical Review (`v3/cl/vehicle`)**: technical review status and inspection history. See [Chile - Vehicle Technical Review](/vehicle-validation/chile/vehicle-technical-review). Use this route for ficha técnica / revisión (`GET /v3/cl/vehicle`, not `/v2/cl/vehicle/v3`).
- **Vehicle SOAP (`v2/cl/vehicle-soap`)**: mandatory personal accident insurance certificate. See [Chile - Vehicle SOAP](/vehicle-validation/chile/vehicle-soap).

## Response

```json
{
  "data": {
    "chasisNumber": "ME1KG0447E2066723",
    "color": "NEGRO",
    "engineNumber": "1ES3032465",
    "fines": "NO POSEE MULTAS",
    "manufacturer": "NO DISPONIBLE",
    "mark": "YAMAHA",
    "model": "FZ 16",
    "orderTheft": "NO DISPONIBLE",
    "origin": "NO DISPONIBLE",
    "owner": "",
    "plate": "BBCC12",
    "publicTrans": "NO DISPONIBLE",
    "revision": "NO DISPONIBLE",
    "rut": "26043542-6",
    "type": "MOTO",
    "typeTransPub": "NO DISPONIBLE",
    "year": "2014"
  },
  "signature": {
    "dateTime": "April 21, 2023 8:32 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

A **404** means this plate is not in the Reale / getapi source. It is not a service outage. For technical review, call **`GET /v3/cl/vehicle`**.

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```

## Features

### Vehicle Information Lookup
- **Vehicle Registration**: Verify vehicle registration in Chile
- **Technical Specifications**: Get chassis number, engine number, manufacturer, model
- **Vehicle Details**: Access year, color, and type information
- **Owner Information**: Retrieve vehicle owner RUT and details
- **Fine Status**: Check for outstanding fines associated with the vehicle
- **Theft Status**: Verify if vehicle has theft orders
- **Public Transport**: Check public transport classification

### General Features
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Real-time Data**: Access current and up-to-date information
- **Comprehensive Error Handling**: Detailed error responses for various scenarios
- **Structured Responses**: Well-formatted JSON responses with signature verification
- **Commercial provider lookup**: Returns data when Reale / getapi has the plate; missing plates are 404, not an outage
