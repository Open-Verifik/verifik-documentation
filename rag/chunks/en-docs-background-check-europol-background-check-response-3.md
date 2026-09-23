---
id: "en-docs-background-check-europol-background-check-response-3"
title: "Europol Background Check — Response"
sourcePath: "docs/background-check/europol-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "europol"
  - "background-check"
endpoint: "/v2/europol"
sourceAnchor: "Response"
slug: "/background-check/international/europol-background-check"
url: "https://docs.verifik.co/background-check/international/europol-background-check"
---

# Europol Background Check
**API path(s):** /v2/europol

## Response

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": ["MATEO", "VERIFIK"],
    "foundInEuropol": true,
    "urlEuropol": "https://eumostwanted.eu/es#/es/node/162"
  },
  "signature": {
    "dateTime": "June 28, 2022 12:40 PM",
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

### Notes

- **Europol database check** with document-based or full-name queries.
- **Match detection** may include a direct Europol URL when applicable.
- **Structured responses** for integration; supports JavaScript, Python, PHP, and Swift examples above.
