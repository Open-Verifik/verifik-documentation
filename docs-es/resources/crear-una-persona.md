---
id: crear-una-persona
title: Crear una Persona
description: Crear una nueva persona en el sistema de reconocimiento facial
---

# Crear una Persona

**POST** `https://api.verifik.co/v2/face-recognition/persons`

La API Crear Persona te permite crear una nueva persona dentro del sistema de reconocimiento facial. Puedes asociar una persona con su nombre, imágenes, género, fecha de nacimiento, nacionalidad, colecciones y notas adicionales.

## Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization | `Bearer <token>`   |

## Parámetros del Cuerpo

| Clave             | Tipo                | Requerido | Descripción                                     |
| ----------------- | ------------------- | --------- | ----------------------------------------------- |
| `name`            | `string`            | **Sí**    | Nombre completo de la persona.                  |
| `images`          | `array` de `string` | **Sí**    | Imágenes codificadas en Base64 para reconocimiento. |
| `gender`          | `string`            | No        | Género de la persona (`M` o `F`).               |
| `date_of_birth`   | `string` (ISO8601)  | No        | Fecha de nacimiento de la persona.              |
| `nationality`     | `string`            | No        | Nacionalidad de la persona.                     |
| `collections`     | `array` de `string` | No        | Array de IDs de colección relacionados con esta persona. |
| `notes`           | `string`            | No        | Notas adicionales sobre la persona.            |

## Ejemplo de Request

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/face-recognition/persons",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    name: "Juan Pérez",
    images: [
      "base64_encoded_image_1",
      "base64_encoded_image_2"
    ],
    gender: "M",
    date_of_birth: "1990-01-15",
    nationality: "CO",
    collections: ["collection_123456789"],
    notes: "Cliente VIP"
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
  "error": "Formato de imagen inválido",
  "message": "INVALID_IMAGE_FORMAT"
}
```

```json
{
  "error": "El nombre de la persona es requerido",
  "message": "NAME_REQUIRED"
}
```
