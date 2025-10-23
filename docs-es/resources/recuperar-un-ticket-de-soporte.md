---
id: recuperar-un-ticket-de-soporte
title: Recuperar un Ticket de Soporte
description: Recuperar un ticket de soporte específico usando su identificador único
---

# Recuperar un Ticket de Soporte

**GET** `https://api.verifik.co/v2/support-tickets/{id}`

Este endpoint le permite recuperar un ticket de soporte específico por su identificador único, incluyendo todos sus hilos y archivos adjuntos.

## Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization  | `Bearer <token>`   |

## Parámetros de Ruta

| Nombre | Tipo   | Requerido | Descripción                                                      |
| ------ | ------ | --------- | ---------------------------------------------------------------- |
| `id`   | string | **Sí**    | El identificador único del ticket de soporte a recuperar.        |

## Ejemplo de Solicitud

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/support-tickets/support_ticket_123456789",
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

## Ejemplo de Respuesta

```json
{
  "success": true,
  "data": {
    "_id": "support_ticket_123456789",
    "title": "Problema de Integración de API",
    "description": "Tengo problemas para integrar la API de validación biométrica. Obtengo errores 401 al intentar autenticar.",
    "status": "in_progress",
    "priority": "high",
    "category": "technical",
    "client": "client_123456789",
    "assignedTo": "agent_123456789",
    "threads": [
      {
        "author": "client_123456789",
        "message": "Tengo problemas para integrar la API de validación biométrica. Obtengo errores 401 al intentar autenticar.",
        "timestamp": "2024-01-15T10:30:00Z",
        "type": "user"
      },
      {
        "author": "agent_123456789",
        "message": "He revisado su clave API y parece ser válida. Déjeme revisar los logs y le responderé.",
        "timestamp": "2024-01-15T11:00:00Z",
        "type": "agent"
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
    "updatedAt": "2024-01-15T11:00:00Z",
    "resolvedAt": null
  }
}
```

## Respuestas de Error

```json
{
  "error": "Ticket de soporte no encontrado",
  "message": "SUPPORT_TICKET_NOT_FOUND"
}
```
