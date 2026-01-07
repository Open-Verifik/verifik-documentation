---
id: health
title: Colombian RETHUS Verification Data
description: Verify Colombian health professional data and affiliations
---

# Health

## Colombian RETHUS Verification Data

### Endpoint

```
https://api.verifik.co/v2/co/cedula/rethus
```

This service allows you to verify the authenticity of a Colombian ID (Cédula) and access information from the National Unique Registry of Human Talent in Health (RETHUS). By providing the document type and number, you can retrieve details such as the individual's full name, RETHUS status, and their academic and Social Security data. The RETHUS data includes information about the healthcare professional's academic degrees and Social Security affiliation, including benefits and modalities.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Valid parameter: CC.           | `CC`         |
| documentNumber | String | True      | Document number of the person to consult, without spaces or points. | `123456789`  |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/cedula/rethus',
  params: {
    documentType: 'CC',
    documentNumber: '123456789'
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer <your_token>'
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

```json
{
  "success": true,
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "firstName": "Carlos",
    "lastName": "Mendoza",
    "fullName": "Carlos Mendoza",
    "rethusStatus": "active",
    "academicDegrees": [
      {
        "degree": "Médico General",
        "institution": "Universidad Nacional",
        "year": "2015"
      }
    ],
    "socialSecurityAffiliation": {
      "status": "active",
      "benefits": "Completo",
      "modality": "Contributivo"
    },
    "specialization": "Medicina General",
    "licenseNumber": "12345"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Health professional not found",
  "code": "HEALTH_PROFESSIONAL_NOT_FOUND"
}
```

## Verify Colombian Affiliations

### Endpoint

```
https://api.verifik.co/v2/co/cedula/afiliaciones
```

This service allows you to verify Colombian health affiliations and social security status.

### Request

```javascript
const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/cedula/afiliaciones',
  params: {
    documentType: 'CC',
    documentNumber: '123456789'
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer <your_token>'
  }
};
```

### Response

```json
{
  "success": true,
  "data": {
    "documentNumber": "123456789",
    "firstName": "Carlos",
    "lastName": "Mendoza",
    "affiliations": [
      {
        "entity": "EPS Sanitas",
        "status": "active",
        "affiliationDate": "01/01/2020",
        "benefits": "Completo"
      }
    ],
    "socialSecurityStatus": "active"
  }
}
```

## Use Cases

- **Healthcare Verification**: Verify healthcare professional credentials
- **Medical Licensing**: Confirm medical licenses and specializations
- **Insurance Verification**: Verify health insurance affiliations
- **Regulatory Compliance**: Meet healthcare regulatory requirements
- **Patient Safety**: Ensure qualified healthcare providers
