---
id: "en-docs-identity-validation-colombia-special-stay-permit-pep-response-3"
title: "\\U0001F1E8\\U0001F1F4 Colombia - Special Stay Permit (PEP) — Response"
sourcePath: "docs/identity-validation/colombia/special-stay-permit-pep.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoints:
  - "/v2/co/foreigner-id/pep"
  - "/v2/co/foreigner-id/pep?documentnumber=123456789&expeditiondate=10%2f10%2f2024"
  - "/v2/co/foreigner-id/pep?documentnumber=123456789&expeditiondate=10/10/2024"
sourceAnchor: "Response"
slug: "/identity-validation/colombia/special-stay-permit-pep"
url: "https://docs.verifik.co/identity-validation/colombia/special-stay-permit-pep"
---

# \U0001F1E8\U0001F1F4 Colombia - Special Stay Permit (PEP)
**API path(s):** /v2/co/foreigner-id/pep, /v2/co/foreigner-id/pep?documentnumber=123456789&expeditiondate=10%2f10%2f2024, /v2/co/foreigner-id/pep?documentnumber=123456789&expeditiondate=10/10/2024

Verifik's Identity Verification API helps you validate the Special Stay Permit (PEP - Permiso Especial de Permanencia) for Venezuelan citizens in Colombia. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for organizations needing to verify the legal status of Venezuelan nationals in Colombia, such as for employment, financial services, or humanitarian programs.

## Response

```json
{
  "data": {
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "documentNumber": "123456789012345",
    "documentType": "PEP",
    "expirationDate": "08/08/2018",
    "firstName": "MATEO",
    "fullName": "MATEO VERIFIK",
    "identification": "17609583",
    "lastName": "VERIFIK",
    "status": "VENCIDO"
  },
  "signature": {
    "dateTime": "August 22, 2023 8:02 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "tnlkb"
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
  "message": "missing date\n. missing documentNumber\n"
}
```

## Important Notes

- The PEP is a special permit issued by Migración Colombia exclusively for Venezuelan citizens. For other nationalities or document types, please refer to our alternative validation services.
- Use of this service is restricted to authorized entities or with the permission of the end-user. The data provided is subject to Colombian privacy laws and should be handled responsibly.
- Always cross-check with the physical PEP document to confirm the information retrieved.

---

## Common Use Cases

-   **Legal Status Verification**: Verify legal status of Venezuelan nationals in Colombia for employment purposes.
-   **Financial Services**: Verify PEP status for banking and financial service applications.
-   **Humanitarian Programs**: Verify eligibility for humanitarian aid programs.
-   **Employment Verification**: Confirm legal status for employment purposes.
-   **Compliance Checks**: Ensure compliance with Colombian regulations for Venezuelan migrants.
