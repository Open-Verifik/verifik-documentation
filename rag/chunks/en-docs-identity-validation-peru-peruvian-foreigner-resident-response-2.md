---
id: "en-docs-identity-validation-peru-peruvian-foreigner-resident-response-2"
title: "\\U0001F1F5\\U0001F1EA Peru - Foreigner Resident — Response"
sourcePath: "docs/identity-validation/peru/peruvian-foreigner-resident.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "pe"
  - "identity-validation"
endpoint: "/v2/pe/foreigner-id/ce"
sourceAnchor: "Response"
slug: "/identity-validation/peru/peruvian-foreigner-resident"
url: "https://docs.verifik.co/identity-validation/peru/peruvian-foreigner-resident"
---

# \U0001F1F5\U0001F1EA Peru - Foreigner Resident
**API path(s):** /v2/pe/foreigner-id/ce

The Peruvian ID Verification service allows you to verify the identity of an individual in Peru by their foreigner ID number. The service returns the full name and other related information of the individual, including immigration status, nationality, residence expiration, and foreigner ID details, along with a signature to certify the authenticity of the response.
This service is useful for verifying foreign residents in Peru and accessing their immigration status and document validity.

## Response

```json
{
  "data": {
    "arrayName": [
      "CORDERO",
      "SANCHEZ",
      "ANA",
      "RENE"
    ],
    "dateOfBirth": "16/08/1993",
    "documentNumber": "005015372",
    "firstName": "ANA RENE",
    "foreignerIdExpiration": "12/08/2025",
    "foreignerIdLastIssuance": "12/08/2021",
    "fullName": "ANA RENE CORDERO SANCHEZ",
    "immigrationStatus": "HUMANITARIA",
    "lastName": "CORDERO CAMPERO",
    "nationality": "VENEZOLANA",
    "residenceExpiration": "26/02/2025"
  },
  "signature": {
    "dateTime": "November 6, 2024 3:22 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "K0MMA"
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

  
  

```json
{
  "code": "MissingParameter",
  "message": "dateOfBirth format required: DD/MM/YYYY\n"
}
```

## Features

- **Foreigner ID Verification**: Verify foreigner identity documents in Peru
- **Immigration Status Check**: Access current immigration status (e.g., HUMANITARIA)
- **Nationality Information**: Get nationality details of the foreign resident
- **Document Validity**: Check foreigner ID expiration and last issuance dates
- **Residence Status**: Verify residence expiration dates
- **Personal Information**: Access full name, first name, last name, and date of birth
- **Document Number Validation**: Verify foreigner document numbers
- **Date Format Validation**: Ensure proper date of birth format (DD/MM/YYYY)
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Real-time Data**: Access current and up-to-date foreigner information
- **Comprehensive Error Handling**: Detailed error responses for various scenarios
- **Peruvian Immigration Integration**: Direct access to official Peruvian immigration database
- **Foreigner Document Management**: Complete foreigner ID lifecycle tracking
- **Residence Compliance**: Monitor residence status and expiration dates
