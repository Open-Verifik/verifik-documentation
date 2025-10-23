---
id: listar-todos-los-tickets-de-soporte
title: Listar Todos los Tickets de Soporte
description: Recuperar una lista de todos los tickets de soporte con filtrado opcional y paginación
---

# Listar Todos los Tickets de Soporte

**GET** `https://api.verifik.co/v2/support-tickets`

Recuperar una lista de tickets de soporte con filtrado opcional y paginación.

## Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization  | `Bearer <token>`   |

## Parámetros de Consulta

| Nombre            | Tipo    | Descripción                       | Ejemplo   |
| ----------------- | ------- | --------------------------------- | --------- |
| `page`            | number  | Número de página para paginación  | `1`       |
| `limit`           | number  | Número de elementos por página    | `10`      |
| `status`          | string  | Filtrar por estado del ticket     | `pending` |
| `category`        | string  | Filtrar por categoría del ticket  | `billing` |
| `priority`        | string  | Filtrar por prioridad del ticket  | `high`    |
| `countByStatus`   | boolean | Incluir conteos de estado en respuesta | `true`    |

## Ejemplo de Solicitud

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/support-tickets",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    limit: 10,
    status: "open",
    category: "technical",
    priority: "high",
    countByStatus: true
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

## Ejemplo de Respuesta

```json
{
  "success": true,
  "data": [
    {
      "_id": "support_ticket_123456789",
      "title": "Problema de Integración de API",
      "description": "Tengo problemas para integrar la API de validación biométrica...",
      "status": "open",
      "priority": "high",
      "category": "technical",
      "client": "client_123456789",
      "assignedTo": null,
      "tags": ["api", "authentication", "biometric"],
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  },
  "counts": {
    "open": 5,
    "pending": 3,
    "in_progress": 2,
    "resolved": 10,
    "closed": 8
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
