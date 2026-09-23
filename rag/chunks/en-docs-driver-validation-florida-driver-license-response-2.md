---
id: "en-docs-driver-validation-florida-driver-license-response-2"
title: "Florida Driver License — Response"
sourcePath: "docs/driver-validation/florida-driver-license.md"
locale: "en"
category: "driver-validation"
tags:
  - "usa"
  - "driver-validation"
endpoints:
  - "/v2/usa/florida/driver-license"
  - "/v2/usa/florida/driver-license?documentnumber=b123-456-78-910-0"
sourceAnchor: "Response"
slug: "/driver-validation/florida-driver-license"
url: "https://docs.verifik.co/driver-validation/florida-driver-license"
---

# Florida Driver License
**API path(s):** /v2/usa/florida/driver-license, /v2/usa/florida/driver-license?documentnumber=b123-456-78-910-0

## Response

```json
{
    "data": {
        "designations": "None on Record",
        "documentNumber": "B123-456-78-910-0",
        "endorsements": "None on Record",
        "restrictions": "None on Record",
        "status": "As of February 26, 2024, at 12:11 AM, Florida driver license number B123-456-78-910-0 is Valid. This license is a Class E with an expiration date of 12/28/2026."
    },
    "signature": {
        "dateTime": "March 12, 2024 8:15 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "XUXSL"
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
    "message": "missing documentType\n. missing documentNumber\n"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [DNIAR]"
}
```

### Features

-   **License Status Validation**: Validate the current status of Florida driver licenses
-   **Comprehensive Information**: Get restrictions, endorsements, and designations
-   **Expiration Date**: Retrieve license expiration information
-   **Multiple Programming Languages**: Support for JavaScript, Python, Swift, and PHP
-   **Real-time Data**: Access to current license information from official records
