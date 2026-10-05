---
id: "en-docs-vehicle-validation-peru-peruvian-vehicle-response-2"
title: "Peru - Vehicle Information — Response"
sourcePath: "docs/vehicle-validation/peru/peruvian-vehicle.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "pe"
  - "vehicle-validation"
endpoint: "/v2/pe/vehiculo/placa"
sourceAnchor: "Response"
slug: "/vehicle-validation/peru/peruvian-vehicle"
url: "https://docs.verifik.co/vehicle-validation/peru/peruvian-vehicle"
---

# Peru - Vehicle Information
**API path(s):** /v2/pe/vehiculo/placa

## Response

```json
{
"data": {
"plate": "ABC123",
"use": "PARTICULAR",
"type": "AUTOMOVIL",
"brand": "NISSAN",
"model": "VERSA",
"year": "2014",
"engineSerial": "HR123456789J",
"chasisSerial": "1234567890",
"seats": "5",
"validFormat": true,
"serial": "1234567890"
},
"signature": {
"dateTime": "August 1, 2022 5:23 PM",
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

## Use Cases

- **Vehicle Verification**: Validate basic information of vehicles registered in Peru
- **Insurance Services**: Verify vehicle data for insurance processes
- **Traffic Agencies**: Consult official vehicle information
- **Transportation Companies**: Validate commercial vehicle data
- **Property Verification**: Confirm technical details of the vehicle

## Features

- ✅ Query by license plate number
- ✅ Complete technical information (brand, model, year)
- ✅ Engine and chassis serial numbers
- ✅ Seating capacity
- ✅ Vehicle usage type
- ✅ License plate format validation
- ✅ Certified response by Verifik.co
