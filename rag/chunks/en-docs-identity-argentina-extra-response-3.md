---
id: "en-docs-identity-argentina-extra-response-3"
title: "Argentina - Complete Argentine Citizen — Response"
sourcePath: "docs/identity/argentina-extra.mdx"
locale: "en"
category: "identity"
tags:
  - "ar"
  - "identity"
endpoints:
  - "/v2/ar/cedula/extra"
  - "/v2/ar/cedula/extra?documenttype=dniar&documentnumber=44768756"
sourceAnchor: "Response"
slug: "/identity/argentina-extra"
url: "https://docs.verifik.co/identity/argentina-extra"
---

# Argentina - Complete Argentine Citizen
**API path(s):** /v2/ar/cedula/extra, /v2/ar/cedula/extra?documenttype=dniar&documentnumber=44768756

Verifik's Identity Verification API helps you authenticate Argentine citizens using official government data. This endpoint returns extended identity fields beyond the standard cédula response, including **date of birth**, **gender**, structured name tokens, and **life status** (`isAlive`).

## Response

```json
{
    "data": {
        "documentType": "DNIAR",
        "documentNumber": "44768756",
        "firstName": "MARIA LOURDES",
        "lastName": "ARCE",
        "fullName": "MARIA LOURDES ARCE",
        "arrayName": [
            "MARIA",
            "LOURDES",
            "ARCE"
        ],
        "gender": "F",
        "dateOfBirth": "2003-03-25",
        "isAlive": true
    },
    "signature": {
        "dateTime": "April 15, 2026 5:43 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "B7T6Y"
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

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
    "code": "InternalServerError",
    "message": "Server error."
}
```

### Notes

- `documentType` must be `DNIAR`.
- `gender` is returned as a single-letter code (for example `F` or `M`) when available.
- `isAlive` indicates whether the registry reports the person as alive at the time of the query.

---

## Common Use Cases

-   **Fintech & Banking**: Enrich onboarding with birth date and life status checks.
-   **E-commerce & Delivery**: Validate couriers or high-value account holders with stronger identity signals.
-   **HR & Recruitment**: Confirm candidate identity details against official records.
-   **Insurance & Healthcare**: Support eligibility and age-related rules with verified dates of birth.
