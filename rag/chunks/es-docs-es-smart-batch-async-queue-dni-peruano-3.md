---
id: "es-docs-es-smart-batch-async-queue-dni-peruano-3"
title: "Llamar endpoints como cola (async) — DNI peruano"
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
sourceAnchor: "DNI peruano"
slug: "/smart-batch/async-queue"
url: "https://docs.verifik.co/verifik-es/smart-batch/async-queue"
---

# Llamar endpoints como cola (async)
**API path(s):** /v2/co/afiliaciones, /v2/co/cedula, /v2/pe/cedula, /v2/smart-batches/:id, /v2/smart-batches/from-queue, /v2/smart-batches/{batchid}

Cualquier consulta del catálogo puede esperar el resultado (**sync**) o responder de inmediato (**queue** / **Async**). El modo cola crea un Smart Batch de una fila. Un worker llama después el mismo endpoint y registra el intento. Los créditos se cobran en esa llamada del worker, no al encolar.
Esta página es la guía de la A a la Z para llamar endpoints como cola desde tu backend. Para el producto, el asistente y el dashboard, empieza por [SmartBatch](/verifik-es/smart-batch).

## DNI peruano

```bash
curl -sS -H "Authorization: Bearer $JWT" \
  "https://async.verifik.co/v2/pe/cedula?documentType=DNI&documentNumber=12345678&type=queue"
```

  
  

```javascript

const { data, status } = await axios.get(
  'https://async.verifik.co/v2/pe/cedula',
  {
    params: {
      documentType: 'DNI',
      documentNumber: '12345678',
      type: 'queue',
    },
    headers: {
      Authorization: `Bearer ${process.env.JWT}`,
    },
  },
);

console.log(status, data);
```

  
  

```python

response = requests.get(
    "https://async.verifik.co/v2/pe/cedula",
    params={
        "documentType": "DNI",
        "documentNumber": "12345678",
        "type": "queue",
    },
    headers={"Authorization": f"Bearer {os.environ['JWT']}"},
)
print(response.status_code, response.json())
```

  

En endpoints POST, envía `type` en el JSON junto con el resto de los campos. No lo guardes como campo de entrada: el servicio quita `type` antes de guardar `inputData`.

## Response

`202`

```json
{
  "status": "queued",
  "batchId": "665f0c2e2c1a4a0012ab3456",
  "rowIndex": 0,
  "attemptCount": 0
}
```

| Campo | Significado |
| --- | --- |
| `status` | Siempre `queued` en un enqueue exitoso |
| `batchId` | Id del Smart Batch. Ábrelo en [ai.verifik.co](https://ai.verifik.co) o haz poll a Node |
| `rowIndex` | Fila en ese lote (las llamadas API de una fila usan `0`) |
| `attemptCount` | Intentos ya registrados (`0` al encolar) |

## Qué ocurre después

1. La petición crea o reutiliza una configuración Async para tu cliente y queue key.
2. Recibes `202` de inmediato. Tu JWT no se guarda en la fila.
3. Un worker reclama la fila, llama la URL del feature y agrega un intento.
4. Cuando la fila o el lote es terminal, Node hace POST al webhook de la configuración y envía correos si los configuraste.

Queue keys:

| Feature | Queue key | Nombre de la config |
| --- | --- | --- |
| Cédula colombiana | `co.cedula.queue` | Queue Cedula |
| Afiliaciones colombianas | `co.sispro.queue` | Queue SISPRO |
| Cualquier otro feature del catálogo | `{featureCode}.queue` | `Queue {feature name}` |

Edita una vez la configuración automática `Queue …` (webhook, correos). Las llamadas posteriores con `type=queue` la reutilizan.

Los créditos se cobran en la llamada del worker, no en el `202`.
