---
id: "es-docs-es-resources-tickets-soporte-crear-un-ticket-soporte-endpoint"
title: "Crear un Ticket de Soporte — Endpoint"
sourcePath: "docs-es/resources/tickets-soporte/crear-un-ticket-soporte.mdx"
locale: "es"
category: "resources"
tags:
  - "support-tickets"
  - "resources"
endpoint: "/v2/support-tickets"
sourceAnchor: "Endpoint"
slug: "/resources/crear-un-ticket-soporte"
url: "https://docs.verifik.co/verifik-es/resources/crear-un-ticket-soporte"
---

# Crear un Ticket de Soporte
**API path(s):** /v2/support-tickets

## Endpoint

**POST** `https://api.verifik.co/v2/support-tickets`

Este endpoint te permite crear un nuevo ticket de soporte para atención al cliente y seguimiento de problemas.

#### encabezados

| Nombre        | Valor                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

#### parámetros del cuerpo

#### `title`

**Tipo:** string  
**Requerido:** Sí

Título o asunto del ticket de soporte.

#### `description`

**Tipo:** string  
**Requerido:** Sí

Descripción detallada del problema o solicitud.

#### `priority`

**Tipo:** string  
**Requerido:** Sí

Nivel de prioridad: `low`, `medium`, `high`, `urgent`

#### `category`

**Tipo:** string  
**Requerido:** Sí

Categoría: `technical`, `billing`, `account`, `feature_request`, `general`

#### `tags`

**Tipo:** array of string  
**Requerido:** No

Arreglo de etiquetas para categorizar el ticket.

#### `attachments`

**Tipo:** array of object  
**Requerido:** No

Arreglo de archivos adjuntos.

### Ejemplo de Solicitud

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
    description: "Tengo problemas para integrar la API de validación biométrica. Obtengo errores 401 al intentar autenticarme.",
    priority: "high",
    category: "technical",
    tags: ["api", "autenticación", "biométrica"],
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
