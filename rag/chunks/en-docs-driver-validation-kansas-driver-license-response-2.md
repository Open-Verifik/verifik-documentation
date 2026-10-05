---
id: "en-docs-driver-validation-kansas-driver-license-response-2"
title: "Kansas Driver License — Response"
sourcePath: "docs/driver-validation/kansas-driver-license.md"
locale: "en"
category: "driver-validation"
tags:
  - "usa"
  - "driver-validation"
endpoint: "/v2/usa/kansas/driver-license"
sourceAnchor: "Response"
slug: "/driver-validation/kansas-driver-license"
url: "https://docs.verifik.co/driver-validation/kansas-driver-license"
---

# Kansas Driver License
**API path(s):** /v2/usa/kansas/driver-license

## Response

```json
{
  "data": {
    "cdlStatus": "",
    "currentCredentialInformation": [
      {
        "credentialType": "Driver's License",
        "issueDate": "03/04/2020",
        "expirationDate": "01/29/2026"
      }
    ],
    "dateOfBirth": "29/1/1974",
    "dlNumber": "K02884565",
    "dlStatus": "Valid",
    "documentNumber": "K12345678",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "systemGeneratedDl": "N"
  },
  "signature": {
    "dateTime": "January 19, 2024 4:36 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1Q8UH"
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
    "message": "missing documentNumber\n. missing dateOfBirth\n. missing firstName\n. missing lastName\n"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "dateOfBirth format required: DD/MM/YYYY\n"
}
```

### Features

-   **Comprehensive License Validation**: Validate status, restrictions, endorsements, and designations
-   **Multiple Required Parameters**: Document number, date of birth, first name, and last name
-   **Detailed License Information**: Get issue date, expiration date, and credential type
-   **Multiple Programming Languages**: Support for JavaScript, Python, Swift, and PHP
-   **State Compliance**: Essential for verifying driver credentials and ensuring compliance
