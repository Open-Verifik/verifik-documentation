---
id: "es-docs-es-smart-batch-async-queue-cuando-usar-async"
title: "Llamar endpoints como cola (async) — Cuándo usar async"
sourcePath: "docs-es/smart-batch/async-queue.mdx"
locale: "es"
category: "smart-batch"
tags:
  - "smart-batch"
  - "smart-batches"
endpoint: "/v2/smart-batches/{batchid}"
sourceAnchor: "Cuándo usar async"
slug: "/smart-batch/async-queue"
url: "https://docs.verifik.co/verifik-es/smart-batch/async-queue"
---

# Llamar endpoints como cola (async)
**API path(s):** /v2/smart-batches/{batchid}

## Cuándo usar async

Cualquier consulta del catálogo puede esperar el resultado (**sync**) o responder de inmediato (**queue** / **Async**). El modo cola crea un Smart Batch de una fila. Un worker llama después el mismo endpoint y registra el intento. Los créditos se cobran en esa llamada del worker, no al encolar.

Esta página es la guía de la A a la Z para llamar endpoints como cola desde tu backend. Para el producto, el asistente y el dashboard, empieza por [SmartBatch](/verifik-es/smart-batch).

## Cuándo usar async

Usa `type=queue` cuando no quieras que tu cliente HTTP espere una consulta lenta:

- Manejarás el resultado después con un webhook o un correo.
- Abrirás el lote en [ai.verifik.co](https://ai.verifik.co) y vigilarás el dashboard.
- Harás poll a `GET /v2/smart-batches/:id` en [api.verifik.co](https://api.verifik.co).

Usa sync (omite `type`, o envía `type=sync`) cuando necesites el payload de identidad en la misma respuesta.

## Autenticación

Usa el **mismo JWT de cliente** que ya envías a `api.verifik.co`.

```
Authorization: Bearer 
```

`async.verifik.co` reenvía ese header. Node valida el token, guarda el lote y después emite un JWT de corta duración para que el worker llame el feature como tu cliente. No guardas una segunda llave para la cola.

## URL base

```
https://async.verifik.co
```

Agrega el **mismo path de catálogo** documentado para el feature. Ejemplos:

| Feature | Path |
| --- | --- |
| Cédula colombiana | `/v2/co/cedula` |
| Afiliaciones colombianas (SISPRO) | `/v2/co/afiliaciones` |
| DNI peruano | `/v2/pe/cedula` |

Consulta [SmartCheck](/verifik-es/verificacion-inteligente) para el resto del catálogo. Los features passwordless y PDF sin URL de catálogo no se pueden encolar.
