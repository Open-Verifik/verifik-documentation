---
id: "es-docs-es-resources-tickets-soporte-el-objeto-ticket-soporte-descripcion"
title: "El Objeto Ticket de Soporte — Descripción"
sourcePath: "docs-es/resources/tickets-soporte/el-objeto-ticket-soporte.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Descripción"
slug: "/resources/el-objeto-ticket-soporte"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-ticket-soporte"
---

# El Objeto Ticket de Soporte

## Descripción

El objeto Ticket de Soporte representa tickets de atención al cliente y sus hilos de conversación para soporte al cliente y seguimiento de problemas. Este objeto contiene toda la información necesaria para gestionar y rastrear solicitudes de soporte.

### Atributos

#### `title`

**Tipo:** String  
**Requerido:** Sí

Título o asunto del ticket de soporte.

#### `description`

**Tipo:** String  
**Requerido:** Sí

Descripción detallada del problema o solicitud.

#### `status`

**Tipo:** String  
**Requerido:** Sí

Estado actual del ticket de soporte. Puede ser:

* `open` - Ticket abierto esperando respuesta
* `pending` - Ticket pendiente de acción
* `in_progress` - Ticket en proceso
* `resolved` - Ticket resuelto
* `closed` - Ticket cerrado

#### `priority`

**Tipo:** String  
**Requerido:** Sí

Nivel de prioridad del ticket. Puede ser:

* `low` - Prioridad baja
* `medium` - Prioridad media
* `high` - Prioridad alta
* `urgent` - Prioridad urgente

#### `category`

**Tipo:** String  
**Requerido:** Sí

Categoría del ticket de soporte. Puede ser:

* `technical` - Problemas técnicos
* `billing` - Problemas de facturación y pago
* `account` - Problemas relacionados con la cuenta
* `feature_request` - Solicitudes de características
* `general` - Consultas generales

#### `client`

**Tipo:** string (reference id)  
**Requerido:** Sí

Referencia al cliente que creó el ticket.

#### `assignedTo`

**Tipo:** string (reference id)  
**Requerido:** No

Referencia al agente de soporte asignado para manejar el ticket.

#### `threads`

**Tipo:** Array  
**Requerido:** No

Arreglo de hilos de mensajes en el ticket:

* `author` - Autor del mensaje
* `message` - Contenido del mensaje
* `timestamp` - Cuándo se envió el mensaje
* `type` - Tipo de mensaje (usuario, agente, sistema)

#### `attachments`

**Tipo:** Array  
**Requerido:** No

Arreglo de archivos adjuntos:

* `filename` - Nombre del archivo
* `url` - URL para acceder al archivo
* `size` - Tamaño del archivo en bytes
* `type` - Tipo de archivo/tipo MIME

#### `tags`

**Tipo:** Array  
**Requerido:** No

Arreglo de etiquetas para categorizar y filtrar tickets.

#### `resolution`

**Tipo:** String  
**Requerido:** No

Detalles de la resolución cuando el ticket se resuelve.

#### `createdAt`

**Tipo:** Date  
**Requerido:** Sí

Marca de tiempo de cuándo se creó el ticket de soporte.

#### `updatedAt`

**Tipo:** Date  
**Requerido:** Sí

Marca de tiempo de cuándo se actualizó por última vez el ticket de soporte.

#### `resolvedAt`

**Tipo:** Date  
**Requerido:** No

Marca de tiempo de cuándo se resolvió el ticket.
