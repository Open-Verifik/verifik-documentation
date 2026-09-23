---
id: "es-docs-es-resources-personas-personas-descripcion-general"
title: "Personas — Descripción General"
sourcePath: "docs-es/resources/personas/personas.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "persons"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons/lookup"
  - "/v2/persons"
  - "/v2/persons/liveness"
  - "/v2/persons/{personid}"
sourceAnchor: "Descripción General"
slug: "/resources/persons"
url: "https://docs.verifik.co/verifik-es/resources/persons"
---

# Personas
**API path(s):** /v2/face-recognition/persons/lookup, /v2/persons, /v2/persons/liveness, /v2/persons/{personid}

## Descripción General

La API de Personas te permite gestionar registros individuales de personas en tu sistema de verificación. Cada registro de persona puede contener información personal, datos biométricos y estado de verificación.

### Endpoints de API

#### Crear una Persona
```http
POST https://api.verifik.co/v2/persons
```

#### Buscar una Persona por Nombre
```http
GET https://api.verifik.co/v2/face-recognition/persons/lookup
```

#### Crear una Persona con Detección de Vida
```http
POST https://api.verifik.co/v2/persons/liveness
```

#### Listar Todas las Personas
```http
GET https://api.verifik.co/v2/persons
```

#### Recuperar una Persona
```http
GET https://api.verifik.co/v2/persons/{personId}
```

#### Actualizar una Persona
```http
PUT https://api.verifik.co/v2/persons/{personId}
```

#### Eliminar una Persona
```http
DELETE https://api.verifik.co/v2/persons/{personId}
```

### Estructura del Objeto Persona

```json

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
```

### Creating a Person

#### Basic Person Creation

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

const response = await fetch('https://api.verifik.co/v2/persons/liveness', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  body: JSON.stringify(personData)
});
```
