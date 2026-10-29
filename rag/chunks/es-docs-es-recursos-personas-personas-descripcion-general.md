---
id: "es-docs-es-recursos-personas-personas-descripcion-general"
title: "Personas — Descripción General"
sourcePath: "docs-es/recursos/personas/personas.mdx"
locale: "es"
category: "recursos"
tags:
  - "face-recognition"
  - "recursos"
endpoint: "/v2/face-recognition/persons"
sourceAnchor: "Descripción General"
slug: "/recursos/personas"
url: "https://docs.verifik.co/verifik-es/recursos/personas"
---

# Personas
**API path(s):** /v2/face-recognition/persons

## Descripción General

La API de Personas te permite gestionar registros individuales de personas en tu sistema de verificación. Cada registro de persona puede contener información personal, datos biométricos y estado de verificación.

### Endpoints de API

#### Crear una Persona
```http
POST https://api.verifik.co/v2/face-recognition/persons
```

#### Crear una Persona con Detección de Vida
```http
POST https://api.verifik.co/v2/face-recognition/persons/liveness
```

#### Listar Todas las Personas
```http
GET https://api.verifik.co/v2/face-recognition/persons
```

#### Recuperar una Persona
```http
GET https://api.verifik.co/v2/face-recognition/persons/{personId}
```

#### Actualizar una Persona
```http
PUT https://api.verifik.co/v2/face-recognition/persons/{personId}
```

#### Eliminar una Persona
```http
DELETE https://api.verifik.co/v2/face-recognition/persons/{personId}
```

### Estructura del Objeto Persona

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
    "faceImage": "imagen_codificada_base64",
    "fingerprint": "huella_codificada_base64",
    "livenessScore": 0.95
  },
  "verificationStatus": "verified",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### Creando una Persona

#### Creación Básica de Persona

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

const response = await fetch('https://api.verifik.co/v2/face-recognition/persons', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  body: JSON.stringify(personData)
});
```

#### Persona con Detección de Vida

```javascript
const personData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  biometricData: {
    faceImage: "imagen_codificada_base64",
    livenessDetection: true
  }
};

const response = await fetch('https://api.verifik.co/v2/face-recognition/persons/liveness', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  body: JSON.stringify(personData)
});
```
