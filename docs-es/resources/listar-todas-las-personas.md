---
id: listar-todas-las-personas
title: Listar Todas las Personas
description: Recuperar una lista de todas las personas en el sistema de reconocimiento facial
---

# Listar Todas las Personas

**GET** `https://api.verifik.co/v2/face-recognition/persons`

Este endpoint te permite obtener todas las personas almacenadas en Verifik para todas las colecciones.

## Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization | `Bearer <token>`   |

## Parámetros de Consulta

| Nombre          | Tipo   | Descripción                                                                                    |
| --------------- | ------ | ---------------------------------------------------------------------------------------------- |
| `page`          | number | Número de página para paginación (por defecto: 1)                                             |
| `limit`         | number | Número de registros por página (por defecto: 10, máximo: 100)                                 |
| `collection`    | string | Filtrar por ID de colección específica                                                         |
| `status`        | string | Filtrar por estado: `active`, `inactive`, `pending`                                          |
| `populates[]`    | string | Array opcional de datos relacionados para incluir. Opciones disponibles: `collections`, `client`. |

## Ejemplo de Request

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/face-recognition/persons",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    limit: 10,
    status: "active",
    "populates[]": ["collections"]
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
  "data": [
    {
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
      "collections": [
        {
          "_id": "collection_123456789",
          "name": "Clientes VIP",
          "description": "Clientes de alto valor"
        }
      ],
      "notes": "Cliente VIP",
      "client": "client_123456789",
      "status": "active",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  }
}
```

## Respuestas de Error

```json
{
  "success": false,
  "error": "Parámetros de consulta inválidos",
  "code": "INVALID_PARAMETERS"
}
```
