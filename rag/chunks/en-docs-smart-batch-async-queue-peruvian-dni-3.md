---
id: "en-docs-smart-batch-async-queue-peruvian-dni-3"
title: "Call endpoints as queue (async) — Peruvian DNI"
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
sourceAnchor: "Peruvian DNI"
slug: "/smart-batch/async-queue"
url: "https://docs.verifik.co/smart-batch/async-queue"
---

# Call endpoints as queue (async)
**API path(s):** /v2/co/afiliaciones, /v2/co/cedula, /v2/pe/cedula, /v2/smart-batches/:id, /v2/smart-batches/from-queue, /v2/smart-batches/{batchid}

Any catalog lookup can wait for the result (**sync**) or return immediately (**queue** / **Async**). Queue mode creates a one-row Smart Batch. A worker later calls the same endpoint and records the attempt. Credits are charged on that worker call, not on the enqueue.
This page is the A–Z for calling endpoints as a queue from your backend. For the product, wizard, and dashboard, start with [SmartBatch](/smart-batch).

## Peruvian DNI

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

  

On POST endpoints, send `type` in the JSON body with the rest of the fields. Do not also send it as a stored input field — the service strips `type` before it saves `inputData`.

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

| Field | Meaning |
| --- | --- |
| `status` | Always `queued` on a successful enqueue |
| `batchId` | Smart Batch id. Open it on [ai.verifik.co](https://ai.verifik.co) or poll Node |
| `rowIndex` | Row in that batch (one-row API calls use `0`) |
| `attemptCount` | Attempts already recorded (`0` at enqueue time) |

## What happens next

1. The request creates or reuses an Async configuration for your client and queue key.
2. You receive `202` immediately. Your JWT is not stored on the row.
3. A worker claims the row, calls the feature URL, and appends an attempt.
4. When the row or batch is terminal, Node POSTs the configuration webhook and sends completion emails if you configured them.

Queue keys:

| Feature | Queue key | Config name |
| --- | --- | --- |
| Colombian cédula | `co.cedula.queue` | Queue Cedula |
| Colombian affiliations | `co.sispro.queue` | Queue SISPRO |
| Every other catalog feature | `{featureCode}.queue` | `Queue {feature name}` |

Edit the auto-created `Queue …` configuration once (webhook, emails). Later `type=queue` calls reuse it.

Credits are charged on the worker call, not on the `202`.
