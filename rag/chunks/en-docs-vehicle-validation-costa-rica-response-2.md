---
id: "en-docs-vehicle-validation-costa-rica-response-2"
title: "\\U0001F1E8\\U0001F1F7 Costa Rica - Vehicle Information — Response"
sourcePath: "docs/vehicle-validation/costa-rica.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cr"
  - "vehicle-validation"
endpoints:
  - "/v2/cr/vehicle"
  - "/v2/cr/vehicle?plate=aa123ba"
sourceAnchor: "Response"
slug: "/vehicle-validation/costa-rica"
url: "https://docs.verifik.co/vehicle-validation/costa-rica"
---

# \U0001F1E8\U0001F1F7 Costa Rica - Vehicle Information
**API path(s):** /v2/cr/vehicle, /v2/cr/vehicle?plate=aa123ba

This service returns detailed information about a vehicle registered in Costa Rica using its **license plate**. Typical data includes the current owner, vehicle specifications (displacement, fiscal value, weights, capacity, power, traction), **infraction** history, and **previous owners** when exposed by the source.
Use it for fleet checks, insurance, and compliance workflows.

## Response

```json
{
  "data": {
    "currentOwner": "MARIA ELENA LOPEZ GARCIA",
    "dataVehicle": {
      "engineDisplacement": "1600",
      "estateValue": "$15000000",
      "grossWeight": "1850 kg",
      "netWeight": "1420 kg",
      "noVin": "JTD00000001",
      "occupants": "5",
      "power": "120 HP",
      "traction": "4x2"
    },
    "infractions": [],
    "ownerHistory": [
      {
        "date": "15/01/2020",
        "fullName": "MARIA ELENA LOPEZ GARCIA"
      },
      {
        "date": "10/06/2015",
        "fullName": "JOSE ANTONIO PEREZ RODRIGUEZ"
      }
    ],
    "plate": "AA123BA",
    "vehicle": "TOYOTA COROLLA XLI"
  },
  "signature": {
    "dateTime": "July 27, 2026 3:00 PM",
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

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```

## Features

- **Vehicle Information Retrieval**: Get comprehensive vehicle details from Costa Rican vehicle registry
- **License Plate Validation**: Verify vehicle license plates registered in Costa Rica
- **Current Owner Information**: Retrieve current vehicle owner details
- **Vehicle Specifications**: Get engine displacement, fiscal value, weight, capacity, power, and traction
- **Infraction History**: Access complete history of traffic violations and infractions
- **Owner History**: View chronological list of all previous vehicle owners
- **Judicial Authority**: Get information about judicial authorities handling infractions
- **Ticket Information**: Access ticket numbers and summary numbers for infractions
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Real-time Data**: Access current and up-to-date vehicle information
- **Comprehensive Error Handling**: Detailed error responses for various scenarios
- **Costa Rican Registry Integration**: Direct access to official Costa Rican vehicle database
