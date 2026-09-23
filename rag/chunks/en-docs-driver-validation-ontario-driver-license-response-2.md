---
id: "en-docs-driver-validation-ontario-driver-license-response-2"
title: "Ontario Driver License — Response"
sourcePath: "docs/driver-validation/ontario-driver-license.md"
locale: "en"
category: "driver-validation"
tags:
  - "ca"
  - "driver-validation"
endpoints:
  - "/v2/ca/ontario/driver-license"
  - "/v2/ca/ontario/driver-license?documentnumber=m4596-07657-60824"
sourceAnchor: "Response"
slug: "/driver-validation/ontario-driver-license"
url: "https://docs.verifik.co/driver-validation/ontario-driver-license"
---

# Ontario Driver License
**API path(s):** /v2/ca/ontario/driver-license, /v2/ca/ontario/driver-license?documentnumber=m4596-07657-60824

## Response

```json
{
  "data": {
    "documentNumber": "M4596-07657-60824",
    "licenceStatus": "Valid",
    "verificationNumber": "123V5"
  },
    "signature": {
        "dateTime": "March 12, 2024 3:47 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "8X9FD"
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
    "message": "missing documentNumber\n"
}
```

### Features

-   **License Status Verification**: Quickly obtain essential information about Ontario driver licenses
-   **Simple Parameter**: Only requires document number for verification
-   **Verification Number**: Get the associated verification number for additional validation
-   **Multiple Programming Languages**: Support for JavaScript, Python, Swift, and PHP
-   **Regulatory Compliance**: Perfect for identification and regulatory purposes
