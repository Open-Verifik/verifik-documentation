---
id: "es-docs-es-smart-batch-async-queue-el-parametro-queue-2"
title: "Llamar endpoints como cola (async) — El parámetro queue"
sourcePath: "docs-es/smart-batch/async-queue.mdx"
locale: "es"
category: "smart-batch"
tags:
  - "smart-batch"
  - "smart-batches"
endpoint: "/v2/smart-batches/{batchid}"
sourceAnchor: "El parámetro queue"
slug: "/smart-batch/async-queue"
url: "https://docs.verifik.co/verifik-es/smart-batch/async-queue"
---

# Llamar endpoints como cola (async)
**API path(s):** /v2/smart-batches/{batchid}

Cualquier consulta del catálogo puede esperar el resultado (**sync**) o responder de inmediato (**queue** / **Async**). El modo cola crea un Smart Batch de una fila. Un worker llama después el mismo endpoint y registra el intento. Los créditos se cobran en esa llamada del worker, no al encolar.
Esta página es la guía de la A a la Z para llamar endpoints como cola desde tu backend. Para el producto, el asistente y el dashboard, empieza por [SmartBatch](/verifik-es/smart-batch).

## El parámetro queue

Agrega `type=queue` a la misma query (GET) o body (POST) que ya envías.

| `type` | Qué ocurre | Respuesta |
| --- | --- | --- |
| omitido o `sync` | Espera el feature y devuelve ese body | `200` / `401` / `404` / `409` / `504` |
| `queue` | Crea un Smart Batch de una fila. No llama el feature en esta petición | `202` |

`type` debe omitirse, ser `sync` o `queue`. Cualquier otro valor es un error de validación.

## Request

### Cédula colombiana

  

```bash
curl -sS -H "Authorization: Bearer $JWT" \
  "https://async.verifik.co/v2/co/cedula?documentType=CC&documentNumber=1032386359&type=queue"
```

  
  

```javascript

const { data, status } = await axios.get(
  'https://async.verifik.co/v2/co/cedula',
  {
    params: {
      documentType: 'CC',
      documentNumber: '1032386359',
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
    "https://async.verifik.co/v2/co/cedula",
    params={
        "documentType": "CC",
        "documentNumber": "1032386359",
        "type": "queue",
    },
    headers={"Authorization": f"Bearer {os.environ['JWT']}"},
)
print(response.status_code, response.json())
```

### Afiliaciones colombianas (SISPRO)

  

```bash
curl -sS -H "Authorization: Bearer $JWT" \
  "https://async.verifik.co/v2/co/afiliaciones?documentType=CC&documentNumber=1007463534&date=09/05/2008&type=queue"
```

  
  

```javascript

const { data, status } = await axios.get(
  'https://async.verifik.co/v2/co/afiliaciones',
  {
    params: {
      documentType: 'CC',
      documentNumber: '1007463534',
      date: '09/05/2008',
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
    "https://async.verifik.co/v2/co/afiliaciones",
    params={
        "documentType": "CC",
        "documentNumber": "1007463534",
        "date": "09/05/2008",
        "type": "queue",
    },
    headers={"Authorization": f"Bearer {os.environ['JWT']}"},
)
print(response.status_code, response.json())
```
