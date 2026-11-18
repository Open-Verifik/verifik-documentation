---
id: "en-docs-identity-guatemala-extra-response-2"
title: "Guatemala Extra — Response"
sourcePath: "docs/identity/guatemala-extra.mdx"
locale: "en"
category: "identity"
tags:
  - "gt"
  - "identity"
endpoint: "/v2/gt/cedula/extra"
sourceAnchor: "Response"
slug: "/identity/guatemala-extra"
url: "https://docs.verifik.co/identity/guatemala-extra"
---

# Guatemala Extra
**API path(s):** /v2/gt/cedula/extra

Verifik's Identity Verification API helps you authenticate Guatemalan citizens using official government data. This endpoint provides additional details such as birth date and gender.

## Response

```json
{
    "data": {
        "arrayName": [
            "ERICK",
            "ROBERTO",
            "RAMIREZ",
            "MORALES"
        ],
        "birthDate": "1984-03-12",
        "documentNumber": "2222624190903",
        "documentType": "CUI",
        "firstName": "ERICK ROBERTO",
        "fullName": "ERICK ROBERTO RAMIREZ MORALES",
        "gender": "MASCULINO",
        "lastName": "RAMIREZ MORALES"
    },
    "signature": {
        "dateTime": "January 15, 2026 1:56 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "OQPT8"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n. missing documentNumber\n. missing dateOfBirth\n"
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

- `documentType` must be `CUI`.
- `dateOfBirth` is required and must use **`DD/MM/YYYY`** format (for example, `12/03/1984`), even though birth date in the response is sourced from a separate SAT lookup.

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Guatemalan government sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.
