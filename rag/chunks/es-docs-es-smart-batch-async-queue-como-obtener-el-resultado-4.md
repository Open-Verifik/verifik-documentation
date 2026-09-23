---
id: "es-docs-es-smart-batch-async-queue-como-obtener-el-resultado-4"
title: "Llamar endpoints como cola (async) — Cómo obtener el resultado"
sourcePath: "docs-es/smart-batch/async-queue.mdx"
locale: "es"
category: "smart-batch"
tags:
  - "smart-batch"
  - "co"
  - "pe"
  - "smart-batches"
endpoints:
  - "/v2/co/afiliaciones"
  - "/v2/co/cedula"
  - "/v2/pe/cedula"
  - "/v2/smart-batches/:id"
  - "/v2/smart-batches/from-queue"
  - "/v2/smart-batches/{batchid}"
sourceAnchor: "Cómo obtener el resultado"
slug: "/smart-batch/async-queue"
url: "https://docs.verifik.co/verifik-es/smart-batch/async-queue"
---

# Llamar endpoints como cola (async)
**API path(s):** /v2/co/afiliaciones, /v2/co/cedula, /v2/pe/cedula, /v2/smart-batches/:id, /v2/smart-batches/from-queue, /v2/smart-batches/{batchid}

Cualquier consulta del catálogo puede esperar el resultado (**sync**) o responder de inmediato (**queue** / **Async**). El modo cola crea un Smart Batch de una fila. Un worker llama después el mismo endpoint y registra el intento. Los créditos se cobran en esa llamada del worker, no al encolar.
Esta página es la guía de la A a la Z para llamar endpoints como cola desde tu backend. Para el producto, el asistente y el dashboard, empieza por [SmartBatch](/verifik-es/smart-batch).

## Cómo obtener el resultado

### Webhook o correo

Configura **URL del webhook** y **Correos al completar** en la configuración de lote en [ai.verifik.co](https://ai.verifik.co) (asistente Crear → Revisar y crear, o edita la config). No son parámetros de consulta.

La lista y el detalle de webhooks en Smart Monitor muestran qué configuraciones de lote están vinculadas.

### Dashboard de Smart-Agent

Abre [https://ai.verifik.co](https://ai.verifik.co), ve al lote (`batchId` del `202`) y vigila el estado, los intentos, el costo por fila y el webhook vinculado.

También puedes crear primero la configuración (Modo de ejecución **Async**) y luego encolar desde la API para que las filas caigan en esa receta.

### Poll del lote

```http
GET https://api.verifik.co/v2/smart-batches/{batchId}
Authorization: Bearer 
```

El detalle de la fila incluye la línea de tiempo de intentos. Un intento completado contiene el payload del feature.

## Límites

- Los features passwordless y generadores PDF no tienen URL de catálogo, así que no se pueden encolar.
- `404` y errores de validación (`MissingParameter` y similares) **no** se reintentan.
- Los resultados reintentables son `429`, `5xx` y códigos de timeout / upstream no disponible.
- `type` solo puede ser `sync`, `queue` u omitirse.

## Enqueue explícito opcional

Prefiere `type=queue` en el path del catálogo. Si ya conoces el queue key, puedes crear la fila directamente:

```http
POST https://api.verifik.co/v2/smart-batches/from-queue
Authorization: Bearer 
Content-Type: application/json

{
  "queueKey": "peru_identity_lookup.queue",
  "name": "Queue Peru - National ID Verification",
  "featureCode": "peru_identity_lookup",
  "inputData": {
    "documentType": "DNI",
    "documentNumber": "12345678"
  }
}
```

Usa `https://async.verifik.co/{path}?type=queue` salvo que necesites este body explícito.
