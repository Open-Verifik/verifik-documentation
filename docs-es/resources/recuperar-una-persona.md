---
id: recuperar-una-persona
title: Recuperar una Persona
description: Recuperar un registro de persona específico usando su identificador único
---

# Recuperar una Persona

**GET** `https://api.verifik.co/v2/face-recognition/persons/{id}`

Este endpoint te permite consultar una persona almacenada por la clave primaria.

## Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization | `Bearer <token>`   |

## Parámetros de Ruta

| Nombre | Tipo   | Descripción                                                      |
| ------ | ------ | ---------------------------------------------------------------- |
| `id`   | string | ID de la persona de la que deseas obtener la información.        |

## Ejemplo de Request

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/face-recognition/persons/person_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

## Ejemplo de Response

```json
{
  "success": true,
  "data": {
    "_id": "person_123456789",
    "name": "Juan Pérez",
    "gender": "M",
    "date_of_birth": {
      "year": 1990,
      "month": 1,
      "day": 15
    },
    "nationality": "CO",
    "images": [
      "base64_encoded_image_1",
      "base64_encoded_image_2"
    ],
    "collections": ["collection_123456789"],
    "notes": "Cliente VIP",
    "client": "client_123456789",
    "status": "active",
    "faceEncodings": [
      "face_encoding_1",
      "face_encoding_2"
    ],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Respuestas de Error

```json
{
  "error": "Persona no encontrada",
  "message": "PERSON_NOT_FOUND"
}
```

```json
{
  "error": "No autorizado",
  "message": "UNAUTHORIZED"
}
```
