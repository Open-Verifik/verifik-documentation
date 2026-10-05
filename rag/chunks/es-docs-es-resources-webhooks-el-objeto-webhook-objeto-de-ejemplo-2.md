---
id: "es-docs-es-resources-webhooks-el-objeto-webhook-objeto-de-ejemplo-2"
title: "El Objeto Webhook — Objeto de Ejemplo"
sourcePath: "docs-es/resources/webhooks/el-objeto-webhook.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Objeto de Ejemplo"
slug: "/resources/webhooks/el-objeto-de-webhook"
url: "https://docs.verifik.co/verifik-es/resources/webhooks/el-objeto-de-webhook"
---

# El Objeto Webhook

## Objeto de Ejemplo

```json
{
  "client": "613a4b978482f60fd31bd7b7",
  "projectFlow": ["613a4b978482f60fd31bd7b8", "613a4b978482f60fd31bd7b9"],
  "statistics": {},
  "isActive": true,
  "name": "Payment Processor Webhook",
  "url": "https://example.com/webhook-endpoint",
  "description": "This webhook handles payment processing notifications.",
  "notification": {
    "email": "notify@example.com",
    "success": true,
    "fail": false
  }
}
```

### Características

- **Asociación de cliente**: Vincula webhooks a clientes específicos
- **Integración con flujos de proyecto**: Conecta webhooks a múltiples flujos de proyecto
- **Configuración de notificaciones**: Configura notificaciones por correo para eventos de éxito/fallo
- **Seguimiento estadístico**: Monitorea el rendimiento y uso del webhook
- **Configuración flexible**: Campos opcionales para descripciones y configuraciones personalizadas
