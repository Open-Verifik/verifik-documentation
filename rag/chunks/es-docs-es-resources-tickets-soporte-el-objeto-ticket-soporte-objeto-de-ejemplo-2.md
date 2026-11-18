---
id: "es-docs-es-resources-tickets-soporte-el-objeto-ticket-soporte-objeto-de-ejemplo-2"
title: "El Objeto Ticket de Soporte — Objeto de Ejemplo"
sourcePath: "docs-es/resources/tickets-soporte/el-objeto-ticket-soporte.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Objeto de Ejemplo"
slug: "/resources/el-objeto-ticket-soporte"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-ticket-soporte"
---

# El Objeto Ticket de Soporte

## Objeto de Ejemplo

```json
{
  "_id": "support_ticket_123456789",
  "title": "Problema de Integración de API",
  "description": "Tengo problemas para integrar la API de validación biométrica. Obtengo errores 401.",
  "status": "in_progress",
  "priority": "high",
  "category": "technical",
  "client": "client_123456789",
  "assignedTo": "agent_123456789",
  "threads": [
    {
      "author": "client_123456789",
      "message": "Estoy obteniendo errores 401 al intentar usar el endpoint de validación biométrica.",
      "timestamp": "2024-01-15T10:30:00Z",
      "type": "user"
    },
    {
      "author": "agent_123456789",
      "message": "He revisado tu clave API y parece ser válida. Déjame revisar los registros.",
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
```
