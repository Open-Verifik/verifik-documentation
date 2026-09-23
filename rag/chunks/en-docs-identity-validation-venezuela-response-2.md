---
id: "en-docs-identity-validation-venezuela-response-2"
title: "Venezuelan Citizen Information — Response"
sourcePath: "docs/identity-validation/venezuela.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "ve"
  - "identity-validation"
endpoints:
  - "/v2/ve/cedula"
  - "/v2/ve/cedula?"
  - "/v2/ve/cedula?documentnumber=10000001"
sourceAnchor: "Response"
slug: "/identity-validation/venezuela"
url: "https://docs.verifik.co/identity-validation/venezuela"
---

# Venezuelan Citizen Information
**API path(s):** /v2/ve/cedula, /v2/ve/cedula?, /v2/ve/cedula?documentnumber=10000001

Verifik's Identity Verification API helps you authenticate Venezuelan citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Response

```json
{
  "data": {
    "arrayName": [
      "CARLA",
      "SARAI",
      "PULIDO",
      "RAMIREZ"
    ],
    "documentNumber": "30246051",
    "documentType": "CCVE",
    "firstName": "CARLA SARAI",
    "fullName": "CARLA SARAI PULIDO RAMIREZ",
    "lastName": "PULIDO RAMIREZ"
  },
  "signature": {
    "dateTime": "November 13, 2025 3:52 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "OHZC9"
}
```

  
  

```json
{
  "data": {
    "arrayName": [
      "NEIVIS",
      "JOSEFINA",
      "PEREZ",
      "VARGAS"
    ],
    "birthDate": "1998-03-01",
    "documentNumber": "28055196",
    "documentType": "CCVE",
    "firstName": "NEIVIS JOSEFINA",
    "fullName": "NEIVIS JOSEFINA PEREZ VARGAS",
    "gender": "FEMENINO",
    "lastName": "PEREZ VARGAS"
  },
  "signature": {
    "dateTime": "November 13, 2025 8:12 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "GGLIK"
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "Access forbidden",
  "code": "FORBIDDEN"
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
  "message": "missing documentNumber"
}
```

  
  

```json
{
  "code": "Endpoint_out_of_service",
  "message": "Endpoint_out_of_service"
}
```

  
  

```json
{
    "code": "InternalServerError",
    "message": "Server error."
}
```

### Notes

- `documentNumber` is required. Dots and spaces are stripped. Do not send `documentType`.
- Responses include name fields (`arrayName`, `firstName`, `lastName`, `fullName`). `birthDate`, `gender`, and `maritalStatus` appear when available.
- Sandbox fixtures: `10000001`–`10000010` are stable. `90040401` returns 404. `90050001` returns 500.
- If the service is temporarily unavailable, the API returns `409` with `code: "Endpoint_out_of_service"`.

---
