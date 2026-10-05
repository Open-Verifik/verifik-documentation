---
id: "en-docs-vehicle-validation-bolivia-response-2"
title: "\\U0001F1E7\\U0001F1F4 Bolivia - Vehicle Information — Response"
sourcePath: "docs/vehicle-validation/bolivia.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "bo"
  - "vehicle-validation"
endpoint: "/v2/bo/vehicle"
sourceAnchor: "Response"
slug: "/vehicle-validation/bolivia"
url: "https://docs.verifik.co/vehicle-validation/bolivia"
---

# \U0001F1E7\U0001F1F4 Bolivia - Vehicle Information
**API path(s):** /v2/bo/vehicle

The Vehicle Information Service in Bolivia allows you to retrieve precise details about a vehicle registered in the country. By providing the license plate number, the service returns information such as the vehicle's policy number, brand, class (e.g., work motorcycle), registration location, service type (e.g., private), and model.

## Response

```json
{
  "data": {
    "Policy": "180680443",
    "brand": "BAJAJ",
    "clase": "MOTOCICLETA - TRABAJO",
    "declaratory": "GRAL. SAAVEDRA",
    "plate": "1234ZYL",
    "service": "PARTICULAR",
    "type": "BOXER 150"
  },
  "signature": {
    "dateTime": "July 26, 2024 4:55 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "ZX35K"
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

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```

## Features

- **Vehicle Information Retrieval**: Get comprehensive vehicle details from Bolivian vehicle registry
- **License Plate Validation**: Verify vehicle license plates registered in Bolivia
- **Policy Information**: Retrieve vehicle insurance policy numbers
- **Vehicle Classification**: Get detailed vehicle class information (e.g., work motorcycle)
- **Registration Location**: Access vehicle registration location details
- **Service Type**: Determine if vehicle is private, commercial, or other service type
- **Brand and Model**: Get vehicle manufacturer and model information
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Real-time Data**: Access current and up-to-date vehicle information
- **Comprehensive Error Handling**: Detailed error responses for various scenarios
