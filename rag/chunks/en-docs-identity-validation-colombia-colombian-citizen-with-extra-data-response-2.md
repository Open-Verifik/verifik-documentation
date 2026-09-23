---
id: "en-docs-identity-validation-colombia-colombian-citizen-with-extra-data-response-2"
title: "Colombian Citizen with Extra Data — Response"
sourcePath: "docs/identity-validation/colombia/colombian-citizen-with-extra-data.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoints:
  - "/v2/co/cedula/extra"
  - "/v2/co/cedula/extra?documenttype=cc&documentnumber=123456789&date=10%2f10%2f2020"
  - "/v2/co/cedula/extra?documenttype=cc&documentnumber=123456789&date=10/10/2020"
sourceAnchor: "Response"
slug: "/identity-validation/colombia/colombian-citizen-with-extra-data"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-citizen-with-extra-data"
---

# Colombian Citizen with Extra Data
**API path(s):** /v2/co/cedula/extra, /v2/co/cedula/extra?documenttype=cc&documentnumber=123456789&date=10%2f10%2f2020, /v2/co/cedula/extra?documenttype=cc&documentnumber=123456789&date=10/10/2020

## Response

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "expeditionDate": "2022-05-10T00:00:00.000Z",
    "expeditionPlace": {
      "municipio": "BOGOTA D.C.",
      "departamento": "BOGOTA"
    },
    "dateOfBirth": "1999-05-07T00:00:00.000Z",
    "gender": "HOMBRE",
    "isAlive": true
  },
  "signature": {
    "dateTime": "August 23, 2022 11:42 AM",
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
    "message": "missing documentType\n. missing documentNumber\n"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [CC]"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "date format required: DD/MM/YYYY\n"
}
```

### Notes

- This endpoint requires the document issue date (`date` parameter) in DD/MM/YYYY format
- Only `CC` (Cédula de Ciudadanía) document type is supported
- Returns sensitive personal information including date of birth, gender, and living status
- Use responsibly and ensure compliance with data protection regulations
