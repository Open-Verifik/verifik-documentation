---
id: el-objeto-ticket-de-soporte
title: El Objeto Ticket de Soporte
description: El objeto Ticket de Soporte representa los tickets de soporte al cliente y sus hilos de conversación
---

# El Objeto Ticket de Soporte

El objeto Ticket de Soporte representa los tickets de soporte al cliente y sus hilos de conversación para el soporte al cliente y el seguimiento de problemas. Este objeto contiene toda la información necesaria para gestionar y rastrear las solicitudes de soporte.

## Atributos

**`title`** - String - Requerido

El título o asunto del ticket de soporte.

**`description`** - String - Requerido

Descripción detallada del problema o solicitud.

**`status`** - String - Requerido

Estado actual del ticket de soporte. Puede ser:

* `open` - El ticket está abierto y esperando respuesta
* `pending` - El ticket está pendiente de acción
* `in_progress` - El ticket está siendo trabajado
* `resolved` - El ticket ha sido resuelto
* `closed` - El ticket está cerrado

**`priority`** - String - Requerido

Nivel de prioridad del ticket. Puede ser:

* `low` - Prioridad baja
* `medium` - Prioridad media
* `high` - Prioridad alta
* `urgent` - Prioridad urgente

**`category`** - String - Requerido

Categoría del ticket de soporte. Puede ser:

* `technical` - Problemas técnicos
* `billing` - Problemas de facturación y pagos
* `account` - Problemas relacionados con la cuenta
* `feature_request` - Solicitudes de características
* `general` - Consultas generales

**`client`** - ObjectId - Requerido

Referencia al cliente que creó el ticket.

**`assignedTo`** - ObjectId - Opcional

Referencia al agente de soporte asignado para manejar el ticket.

**`threads`** - Array - Opcional

Array de hilos de mensajes en el ticket:

* `author` - Autor del mensaje
* `message` - Contenido del mensaje
* `timestamp` - Cuándo se envió el mensaje
* `type` - Tipo de mensaje (usuario, agente, sistema)

**`attachments`** - Array - Opcional

Array de archivos adjuntos:

* `filename` - Nombre del archivo
* `url` - URL para acceder al archivo
* `size` - Tamaño del archivo en bytes
* `type` - Tipo de archivo/tipo MIME

**`tags`** - Array - Opcional

Array de etiquetas para categorizar y filtrar tickets.

**`resolution`** - String - Opcional

Detalles de resolución cuando el ticket está resuelto.

**`createdAt`** - Date - Requerido

Marca de tiempo cuando se creó el ticket de soporte.

**`updatedAt`** - Date - Requerido

Marca de tiempo cuando se actualizó por última vez el ticket de soporte.

**`resolvedAt`** - Date - Opcional

Marca de tiempo cuando se resolvió el ticket.

## Ejemplo de Objeto

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
      "message": "Obtengo errores 401 cuando trato de usar el endpoint de validación biométrica.",
      "timestamp": "2024-01-15T10:30:00Z",
      "type": "user"
    },
    {
      "author": "agent_123456789",
      "message": "He revisado su clave API y parece ser válida. Déjeme revisar los logs.",
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
```
