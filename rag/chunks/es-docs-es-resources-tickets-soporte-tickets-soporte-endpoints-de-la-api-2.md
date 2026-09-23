---
id: "es-docs-es-resources-tickets-soporte-tickets-soporte-endpoints-de-la-api-2"
title: "Tickets de Soporte — Endpoints de la API"
sourcePath: "docs-es/resources/tickets-soporte/tickets-soporte.mdx"
locale: "es"
category: "resources"
tags:
  - "support-tickets"
  - "resources"
endpoints:
  - "/v2/support-tickets"
  - "/v2/support-tickets/:id"
sourceAnchor: "Endpoints de la API"
slug: "/resources/tickets-soporte"
url: "https://docs.verifik.co/verifik-es/resources/tickets-soporte"
---

# Tickets de Soporte
**API path(s):** /v2/support-tickets, /v2/support-tickets/:id

## Endpoints de la API

#### Crear un Ticket de Soporte

**POST** `/v2/support-tickets`

Crea un nuevo ticket de soporte con los detalles especificados.

#### Recuperar un Ticket de Soporte

**GET** `/v2/support-tickets/:id`

Recupera detalles de un ticket de soporte específico.

#### Listar Todos los Tickets de Soporte

**GET** `/v2/support-tickets`

Lista todos los tickets de soporte con filtrado opcional.

### Estructura del Objeto Ticket de Soporte

Para información detallada sobre el objeto Ticket de Soporte y sus propiedades, consulta [El Objeto Ticket de Soporte](/verifik-es/resources/el-objeto-ticket-soporte).

### Casos de Uso

-   **Soporte al Cliente** - Gestiona y rastrea solicitudes de servicio al cliente
-   **Resolución de Problemas** - Agiliza procesos de resolución de problemas
-   **Gestión de SLA** - Rastrea tiempos de respuesta y métricas de resolución
-   **Comunicación** - Mantiene comunicación clara con los usuarios
