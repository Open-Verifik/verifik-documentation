---
id: "en-docs-vehicle-validation-paraguay-response-2"
title: "\\U0001F1F5\\U0001F1FE Paraguay - Vehicle Information — Response"
sourcePath: "docs/vehicle-validation/paraguay.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "py"
  - "vehicle-validation"
endpoints:
  - "/v2/py/vehicle"
  - "/v2/py/vehicle?plate=abc123"
sourceAnchor: "Response"
slug: "/vehicle-validation/paraguay"
url: "https://docs.verifik.co/vehicle-validation/paraguay"
---

# \U0001F1F5\U0001F1FE Paraguay - Vehicle Information
**API path(s):** /v2/py/vehicle, /v2/py/vehicle?plate=abc123

This service provides detailed information about a vehicle in Paraguay using its license plate number. The response includes vehicle details such as the brand, chassis, type, year, number of axles, the owner's name, the type of service, the current status of the vehicle, and the license plate number.
This information is useful for various purposes, including vehicle verification, ownership checks, and compliance monitoring.

## Response

```json
{
  "data": {
    "axles": "3",
    "brand": "MERCEDES BENZ",
    "chassis": "9BM958207GB012345",
    "owner": "CI086-COOPERATIVA CHORTITZER LTDA.",
    "plate": "ABC123",
    "service": "CARGA NACIONAL",
    "situation": "VENCIDA",
    "type": "CAMION CISTERNA",
    "year": "2023"
  },
  "signature": {
    "dateTime": "June 24, 2024 7:34 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "Z4ALR"
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

- **Vehicle Information Retrieval**: Get comprehensive vehicle details from Paraguayan vehicle registry
- **License Plate Validation**: Verify vehicle license plates registered in Paraguay
- **Vehicle Specifications**: Access detailed vehicle specifications including:
  - Brand and manufacturer information
  - Chassis number for vehicle identification
  - Vehicle type and classification
  - Manufacturing year and model details
  - Number of axles for vehicle configuration
- **Ownership Information**: Retrieve current vehicle owner details
- **Service Type Classification**: Get information about vehicle service type (e.g., CARGA NACIONAL)
- **Vehicle Status Monitoring**: Access current vehicle situation and status
- **Compliance Verification**: Verify vehicle compliance and registration status
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Real-time Data**: Access current and up-to-date vehicle information
- **Comprehensive Error Handling**: Detailed error responses for various scenarios
- **Paraguayan Registry Integration**: Direct access to official Paraguayan vehicle database
- **Vehicle Type Classification**: Support for various vehicle types including trucks, tankers, and commercial vehicles
- **Ownership Verification**: Verify vehicle ownership for legal and commercial purposes
