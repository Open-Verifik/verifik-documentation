---
id: "es-docs-es-resources-tickets-soporte-listar-todos-los-tickets-soporte"
title: "Listar Todos los Tickets de Soporte — Endpoint"
sourcePath: "docs-es/resources/tickets-soporte/listar-todos-los-tickets-soporte.mdx"
locale: "es"
category: "resources"
tags:
  - "support-tickets"
  - "resources"
endpoint: "/v2/support-tickets"
sourceAnchor: "Endpoint"
slug: "/resources/listar-todos-los-tickets-soporte"
url: "https://docs.verifik.co/verifik-es/resources/listar-todos-los-tickets-soporte"
---

# Listar Todos los Tickets de Soporte
**API path(s):** /v2/support-tickets

## Endpoint

**GET** `https://api.verifik.co/v2/support-tickets`

Recupera una lista de tickets de soporte con filtrado opcional y paginación.

#### encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

#### parámetros de consulta

#### `page`

**Tipo:** number  
**Requerido:** No

Número de página para paginación.

#### `limit`

**Tipo:** number  
**Requerido:** No

Número de elementos por página.

#### `status`

**Tipo:** string  
**Requerido:** No

Filtrar por estado del ticket.

#### `category`

**Tipo:** string  
**Requerido:** No

Filtrar por categoría del ticket.

#### `priority`

**Tipo:** string  
**Requerido:** No

Filtrar por prioridad del ticket.

#### `countByStatus`

**Tipo:** boolean  
**Requerido:** No

Incluir conteos por estado en la respuesta.

### Ejemplo de Solicitud

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

### Ejemplo de Respuesta

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
      "tags": ["api", "autenticación", "biométrica"],
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

```json
{
  "success": false,
  "error": "Parámetros de consulta inválidos",
  "code": "INVALID_PARAMETERS"
}
```
