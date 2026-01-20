---
id: identity-validation-colombia-colombian-politically-exposed-persons-md
title: Colombian Politically Exposed Persons (PEP)
description: Check if a Colombian citizen or business is listed as a Politically Exposed Person (PEP) with Verifik's KYC API
slug: /identity-validation/colombia/colombian-politically-exposed-persons
---

# Colombian Politically Exposed Persons (PEP)

Verifik's Politically Exposed Persons (PEP) API helps you check if a Colombian citizen or business is listed as a Politically Exposed Person. This service is designed to streamline your KYC/AML (Know Your Customer/Anti-Money Laundering) compliance processes, prevent fraud, and ensure you meet all regulatory requirements.

We built this integration for organizations that need to identify individuals or businesses that hold prominent public positions or have close relationships with such persons, as required by AML regulations.

## What does this API check?

Our API connects directly with official Colombian government records to check:

-   **PEP Status**: Verifies if the person or business is listed as a Politically Exposed Person
-   **Declaration Details**: Returns information about declarations, positions, entities, and publication dates
-   **Document Validation**: Supports Cédula de Ciudadanía (CC) for individuals and NIT for businesses
-   **Compliance Data**: Provides detailed information required for AML compliance checks

By checking these details, you can identify PEPs and apply enhanced due diligence measures as required by financial regulations.

## Endpoint

```
GET https://api.verifik.co/v2/co/politically-exposed-persons
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentType` | string | **Yes** | Document type. Allowed values: `CC` (for citizens), `NIT` (for businesses). | `CC` |
| `documentNumber` | string | **Yes** | Document number without spaces or periods. | `123456789` |

### Request Example

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/politically-exposed-persons',
  params: {
    documentType: 'CC',
    documentNumber: '123456789'
  },
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer <tu_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

### Response

#### Success (200)

```json
{
  "data": {
    "documentNumber": "123456789",
    "documentType": "CC",
    "detail": [
      {
        "declarant": "Juan Pérez",
        "entity": "Ministerio de Hacienda",
        "positionContractor": "Ministro",
        "publicationType": "Declaración de Bienes",
        "declaration": "12345",
        "publicationDate": "15/03/2023",
        "declarationStatus": "Activa"
      }
    ]
  },
  "signature": {
    "dateTime": "August 22, 2023 8:02 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "PEP001"
}
```

#### Not Found (404)

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

#### Validation Error (409)

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n. missing documentNumber\n"
}
```

## Important Notes

- This service checks for Politically Exposed Persons (PEP) status, which is different from the Special Stay Permit (PEP - Permiso Especial de Permanencia) for Venezuelan citizens.
- Use `documentType=CC` for Colombian citizens; `documentType=NIT` for businesses.
- The API returns detailed information about declarations, positions, and entities when a PEP match is found.
- If no PEP records are found, the API returns a 404 error.

## Common Use Cases

-   **AML Compliance**: Identify PEPs as required by anti-money laundering regulations
-   **Financial Services**: Apply enhanced due diligence for PEPs in banking and financial services
-   **Risk Assessment**: Assess risk levels for customers who are PEPs
-   **Regulatory Compliance**: Meet regulatory requirements for PEP identification and monitoring
-   **Due Diligence**: Perform comprehensive background checks for high-risk customers

## Official Sources & Reliability

We connect directly with official Colombian government sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your PEP checks to meet AML regulatory requirements
-   **Instant Results**: Process PEP verifications in seconds, perfect for real-time compliance checks
-   **Trusted Data**: Rely on data sourced directly from official government records
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs

## Compliance & Security

We prioritize the safety of your data. Verifik uses advanced encryption (HTTPS/TLS 1.3) and strict privacy management standards to ensure confidentiality.
Our service is monitored 24/7 for availability and offers role-based access controls to keep your team's access secure.

## About Verifik

Verifik is a leading platform for identity verification, compliance, and fraud prevention across Latin America.
Our APIs automate KYC, KYB, AML, and biometric validation processes, connecting businesses with official data sources in Colombia, Mexico, Peru, Chile, Uruguay, Argentina, Brazil, and beyond.
