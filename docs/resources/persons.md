---
id: persons
title: Persons
description: Manage person records and biometric data in your verification system
---

# Persons

The Persons API allows you to manage individual person records in your verification system. Each person record can contain personal information, biometric data, and verification status.

## API Endpoints

### Create a Person
```http
POST https://api.verifik.co/v2/persons
```

### Create a Person with Liveness Detection
```http
POST https://api.verifik.co/v2/persons/liveness
```

### List All Persons
```http
GET https://api.verifik.co/v2/persons
```

### Retrieve a Person
```http
GET https://api.verifik.co/v2/persons/{personId}
```

### Update a Person
```http
PUT https://api.verifik.co/v2/persons/{personId}
```

### Delete a Person
```http
DELETE https://api.verifik.co/v2/persons/{personId}
```

## Person Object Structure

```json
{
  "id": "person_123456789",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "dateOfBirth": "1990-01-15",
  "documentType": "passport",
  "documentNumber": "123456789",
  "biometricData": {
    "faceImage": "base64_encoded_image",
    "fingerprint": "base64_encoded_fingerprint",
    "livenessScore": 0.95
  },
  "verificationStatus": "verified",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

## Creating a Person

### Basic Person Creation

```javascript
const personData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1234567890",
  dateOfBirth: "1990-01-15",
  documentType: "passport",
  documentNumber: "123456789"
};

const response = await fetch('https://api.verifik.co/v2/persons', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  },
  body: JSON.stringify(personData)
});
```

### Person with Liveness Detection

```javascript
const personData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  biometricData: {
    faceImage: "base64_encoded_image",
    livenessDetection: true
  }
};

const response = await fetch('https://api.verifik.co/v2/persons/liveness', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  },
  body: JSON.stringify(personData)
});
```

## Verification Status

- `pending` - Person created but not yet verified
- `verified` - Person has been successfully verified
- `failed` - Verification failed
- `expired` - Verification has expired

## Use Cases

- **User Onboarding**: Create person records during registration
- **Biometric Storage**: Store biometric data for future verification
- **Identity Management**: Maintain a database of verified individuals
- **Access Control**: Use person records for secure access systems
- **Compliance**: Meet regulatory requirements for identity verification
