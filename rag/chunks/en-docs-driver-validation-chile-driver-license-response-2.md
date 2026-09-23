---
id: "en-docs-driver-validation-chile-driver-license-response-2"
title: "\\U0001F1E8\\U0001F1F1 Chile - Driver License — Response"
sourcePath: "docs/driver-validation/chile-driver-license.mdx"
locale: "en"
category: "driver-validation"
tags:
  - "cl"
  - "driver-validation"
endpoints:
  - "/v2/cl/driver-license"
  - "/v2/cl/driver-license?documentnumber=12345678"
sourceAnchor: "Response"
slug: "/driver-validation/chile-driver-license"
url: "https://docs.verifik.co/driver-validation/chile-driver-license"
---

# \U0001F1E8\U0001F1F1 Chile - Driver License
**API path(s):** /v2/cl/driver-license, /v2/cl/driver-license?documentnumber=12345678

This service looks up a Chilean driver license by license number (RUN body). Today it queries **Municipalidad de Santiago only** (`tramites.munistgo.cl`). Licenses issued by other communes (for example Ñuñoa) return **404** even when the number is valid. That is expected coverage, not an outage.

## Response

```json
{
  "data": {
    "RUT": "12.345.678-9",
    "address": "PEDRO LEON UGALDE 1825",
    "class": "B",
    "controlDate": "23/08/2009",
    "documentNumber": "012345678",
    "lastControlDate": "15/07/2003",
    "lastName": "VERIFIK",
    "license": "CA-12345678",
    "municipality": "SANTIAGO",
    "names": "MATEO",
    "procedure": "DUPLICADO",
    "restrictions": ".USAR LENTES O DE CONTACTO. "
  },
  "signature": {
    "dateTime": "November 2, 2023 3:12 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1tm6q"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

A **404** means this license is not in the Santiago municipal portal. It is not a service outage. Licenses from other communes are out of scope until a national or commune-specific source is added.

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```

## Features

- **RUT Validation**: Verify Chilean tax identification numbers
- **License Class Information**: Get detailed license class details (A, B, C, etc.)
- **Control Dates**: Access license control and last control dates
- **Driver Information**: Retrieve driver names, addresses, and municipality
- **License Restrictions**: Get information about driving restrictions
- **Procedure Information**: Access license procedure details (duplicate, renewal, etc.)
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Real-time Data**: Access current and up-to-date driver license information
- **Comprehensive Error Handling**: Detailed error responses for various scenarios
- **Structured Responses**: Well-formatted JSON responses with signature verification
- **Santiago municipal portal**: Resolves licenses issued by Municipalidad de Santiago; other communes return 404
