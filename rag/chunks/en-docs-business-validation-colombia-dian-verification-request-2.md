---
id: "en-docs-business-validation-colombia-dian-verification-request-2"
title: "Colombia DIAN Verification — Request"
sourcePath: "docs/business-validation/colombia-dian-verification.mdx"
locale: "en"
category: "business-validation"
tags:
  - "co"
  - "business-validation"
endpoint: "/v2/co/company/dian"
sourceAnchor: "Request"
slug: "/business-validation/colombia-dian-verification"
url: "https://docs.verifik.co/business-validation/colombia-dian-verification"
---

# Colombia DIAN Verification
**API path(s):** /v2/co/company/dian

Verifik's DIAN Verification API helps you authenticate Colombian companies' tax authority status using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the tax status and legitimacy of Colombian companies, partners, or vendors.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/company/dian", {
  params: { documentType: "NIT", documentNumber: "901708460" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/company/dian"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NIT", "documentNumber": "901708460"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

The API can return two types of successful responses (200):

1. **Company Response**: Standard company information
2. **Natural Person Response**: When the NIT belongs to a "persona natural" (natural person) registered in DIAN, the response includes additional name fields that are split by Verifik's internal functions.

  

```json
{
  "data": {
    "date": "2025-10-10T16:49:00Z",
    "descripcion": "Los datos de la persona estan activos, es decir tiene vigentes sus responsabilidades ",
    "estado": "REGISTRO ACTIVO",
    "nombreRazon": "SAY SHANNON COLOMBIA SAS",
    "nit": "901708460"
  },
  "signature": {
    "dateTime": "October 10, 2025 4:49 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "5RCBO"
}
```

  
  

```json
{
  "data": {
    "date": "2026-01-20T22:07:00Z",
    "descripcion": "Los datos de la persona estan activos, es decir tiene vigentes sus responsabilidades ",
    "estado": "REGISTRO ACTIVO",
    "nombreRazon": "RODRIGUEZ MARTINEZ CARLOS ANDRES",
    "nit": "1234567890",
    "fullName": "CARLOS ANDRES RODRIGUEZ MARTINEZ",
    "firstName": "CARLOS ANDRES",
    "lastName": "RODRIGUEZ MARTINEZ",
    "arrayName": [
      "RODRIGUEZ",
      "MARTINEZ",
      "CARLOS",
      "ANDRES"
    ]
  },
  "signature": {
    "dateTime": "January 20, 2026 10:07 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "5SQEM"
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
  "message": "documentType must be one of: [NIT]"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```
