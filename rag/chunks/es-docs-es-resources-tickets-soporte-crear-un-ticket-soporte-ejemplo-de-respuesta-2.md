---
id: "es-docs-es-resources-tickets-soporte-crear-un-ticket-soporte-ejemplo-de-respuesta-2"
title: "Crear un Ticket de Soporte — Ejemplo de Respuesta"
sourcePath: "docs-es/resources/tickets-soporte/crear-un-ticket-soporte.mdx"
locale: "es"
category: "resources"
tags:
  - "support-tickets"
  - "resources"
endpoint: "/v2/support-tickets"
sourceAnchor: "Ejemplo de Respuesta"
slug: "/resources/crear-un-ticket-soporte"
url: "https://docs.verifik.co/verifik-es/resources/crear-un-ticket-soporte"
---

# Crear un Ticket de Soporte
**API path(s):** /v2/support-tickets

## Ejemplo de Respuesta

```json
{
  "success": true,
  "data": {
    "_id": "support_ticket_123456789",
    "title": "Problema de Integración de API",
    "description": "Tengo problemas para integrar la API de validación biométrica. Obtengo errores 401 al intentar autenticarme.",
    "status": "open",
    "priority": "high",
    "category": "technical",
    "client": "client_123456789",
    "assignedTo": null,
    "threads": [
      {
        "author": "client_123456789",
        "message": "Tengo problemas para integrar la API de validación biométrica. Obtengo errores 401 al intentar autenticarme.",
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
    "tags": ["api", "autenticación", "biométrica"],
    "resolution": null,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z",
    "resolvedAt": null
  }
}
```

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
