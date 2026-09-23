---
id: "en-docs-smart-batch-async-queue-the-queue-param-2"
title: "Call endpoints as queue (async) — The queue param"
sourcePath: "docs/smart-batch/async-queue.mdx"
locale: "en"
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
sourceAnchor: "The queue param"
slug: "/smart-batch/async-queue"
url: "https://docs.verifik.co/smart-batch/async-queue"
---

# Call endpoints as queue (async)
**API path(s):** /v2/co/afiliaciones, /v2/co/cedula, /v2/pe/cedula, /v2/smart-batches/:id, /v2/smart-batches/from-queue, /v2/smart-batches/{batchid}

Any catalog lookup can wait for the result (**sync**) or return immediately (**queue** / **Async**). Queue mode creates a one-row Smart Batch. A worker later calls the same endpoint and records the attempt. Credits are charged on that worker call, not on the enqueue.
This page is the A–Z for calling endpoints as a queue from your backend. For the product, wizard, and dashboard, start with [SmartBatch](/smart-batch).

## The queue param

Add `type=queue` to the same query (GET) or body (POST) you already send.

| `type` | What happens | Response |
| --- | --- | --- |
| omitted or `sync` | Wait on the feature, return that body | `200` / `401` / `404` / `409` / `504` |
| `queue` | Create a one-row Smart Batch. Do not call the feature on this request | `202` |

`type` must be omitted, `sync`, or `queue`. Any other value is a validation error.

## Request

### Colombian cédula

  

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

### Colombian affiliations (SISPRO)

  

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
