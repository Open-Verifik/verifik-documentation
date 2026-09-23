---
id: "es-docs-es-resources-tickets-soporte-recuperar-un-ticket-soporte-endpoint"
title: "Recuperar un Ticket de Soporte — Endpoint"
sourcePath: "docs-es/resources/tickets-soporte/recuperar-un-ticket-soporte.mdx"
locale: "es"
category: "resources"
tags:
  - "support-tickets"
  - "resources"
endpoints:
  - "/v2/support-tickets/support_ticket_123456789"
  - "/v2/support-tickets/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/recuperar-un-ticket-soporte"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-un-ticket-soporte"
---

# Recuperar un Ticket de Soporte
**API path(s):** /v2/support-tickets/support_ticket_123456789, /v2/support-tickets/{id}

## Endpoint

**GET** `https://api.verifik.co/v2/support-tickets/{id}`

Este endpoint te permite recuperar un ticket de soporte específico por su identificador único, incluyendo todos sus hilos y archivos adjuntos.

#### encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

#### parámetros de ruta

#### `id`

**Tipo:** string  
**Requerido:** Sí

Identificador único del ticket de soporte a recuperar.

### Ejemplo de Solicitud

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

### Ejemplo de Respuesta

```json
{
  "success": true,
  "data": {
    "_id": "support_ticket_123456789",
    "title": "Problema de Integración de API",
    "description": "Tengo problemas para integrar la API de validación biométrica. Obtengo errores 401 al intentar autenticarme.",
    "status": "in_progress",
    "priority": "high",
    "category": "technical",
    "client": "client_123456789",
    "assignedTo": "agent_123456789",
    "threads": [
      {
        "author": "client_123456789",
        "message": "Tengo problemas para integrar la API de validación biométrica. Obtengo errores 401 al intentar autenticarme.",
        "timestamp": "2024-01-15T10:30:00Z",
        "type": "user"
      },
      {
        "author": "agent_123456789",
        "message": "He revisado tu clave API y parece ser válida. Déjame revisar los registros y te responderé.",
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
    "tags": ["api", "autenticación", "biométrica"],
    "resolution": null,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T11:00:00Z",
    "resolvedAt": null
  }
}
```
