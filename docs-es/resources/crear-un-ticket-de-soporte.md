---
id: crear-un-ticket-de-soporte
title: Crear un Ticket de Soporte
description: Crear un nuevo ticket de soporte para atención al cliente
---

# Crear un Ticket de Soporte

**POST** `https://api.verifik.co/v2/support-tickets`

Este endpoint le permite crear un nuevo ticket de soporte para atención al cliente y seguimiento de problemas.

## Headers

| Nombre         | Valor                          |
| -------------- | ------------------------------ |
| Content-Type   | `application/json`             |
| Authorization  | `Bearer {YOUR_ACCESS_TOKEN}`   |

## Body

| Nombre         | Tipo                | Requerido | Descripción                                                                                    |
| -------------- | ------------------- | --------- | ---------------------------------------------------------------------------------------------- |
| `title`        | string              | **Sí**    | El título o asunto del ticket de soporte.                                                     |
| `description`  | string              | **Sí**    | Descripción detallada del problema o solicitud.                                               |
| `priority`     | string              | **Sí**    | Nivel de prioridad: `low`, `medium`, `high`, `urgent`                                         |
| `category`     | string              | **Sí**    | Categoría: `technical`, `billing`, `account`, `feature_request`, `general`                    |
| `tags`         | array of string     | No        | Array de etiquetas para categorizar el ticket.                                                |
| `attachments`  | array of object     | No        | Array de archivos adjuntos.                                                                   |

## Ejemplo de Solicitud

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/support-tickets",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    title: "Problema de Integración de API",
    description: "Tengo problemas para integrar la API de validación biométrica. Obtengo errores 401 al intentar autenticar.",
    priority: "high",
    category: "technical",
    tags: ["api", "authentication", "biometric"],
    attachments: [
      {
        filename: "error_logs.txt",
        url: "https://storage.verifik.co/attachments/error_logs.txt",
        size: 1024,
        type: "text/plain"
      }
    ]
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
  "data": {
    "_id": "support_ticket_123456789",
    "title": "Problema de Integración de API",
    "description": "Tengo problemas para integrar la API de validación biométrica. Obtengo errores 401 al intentar autenticar.",
    "status": "open",
    "priority": "high",
    "category": "technical",
    "client": "client_123456789",
    "assignedTo": null,
    "threads": [
      {
        "author": "client_123456789",
        "message": "Tengo problemas para integrar la API de validación biométrica. Obtengo errores 401 al intentar autenticar.",
        "timestamp": "2024-01-15T10:30:00Z",
        "type": "user"
      }
    ],
    "attachments": [
      {
        "filename": "error_logs.txt",
        "url": "https://storage.verifik.co/attachments/error_logs.txt",
        "size": 1024,
        "type": "text/plain"
      }
    ],
    "tags": ["api", "authentication", "biometric"],
    "resolution": null,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z",
    "resolvedAt": null
  }
}
```

## Respuestas de Error

```json
{
  "error": "El título es requerido",
  "message": "TITLE_REQUIRED"
}
```

```json
{
  "error": "Nivel de prioridad inválido",
  "message": "INVALID_PRIORITY"
}
```
