---
id: "es-docs-es-smart-batch-async-queue-relacionado-5"
title: "Llamar endpoints como cola (async) — Relacionado"
sourcePath: "docs-es/smart-batch/async-queue.mdx"
locale: "es"
category: "smart-batch"
tags:
  - "smart-batch"
  - "smart-batches"
endpoint: "/v2/smart-batches/{batchid}"
sourceAnchor: "Relacionado"
slug: "/smart-batch/async-queue"
url: "https://docs.verifik.co/verifik-es/smart-batch/async-queue"
---

# Llamar endpoints como cola (async)
**API path(s):** /v2/smart-batches/{batchid}

Cualquier consulta del catálogo puede esperar el resultado (**sync**) o responder de inmediato (**queue** / **Async**). El modo cola crea un Smart Batch de una fila. Un worker llama después el mismo endpoint y registra el intento. Los créditos se cobran en esa llamada del worker, no al encolar.
Esta página es la guía de la A a la Z para llamar endpoints como cola desde tu backend. Para el producto, el asistente y el dashboard, empieza por [SmartBatch](/verifik-es/smart-batch).

## Relacionado

- [SmartBatch](/verifik-es/smart-batch) — asistente de UI, Async vs Sync, notificaciones
- [SmartCheck](/verifik-es/verificacion-inteligente) — endpoints del catálogo
- [Ciudadano colombiano](/verifik-es/identidad/colombia) — `/v2/co/cedula`
- [Ciudadano peruano](/verifik-es/identidad/peru) — DNI de Perú
