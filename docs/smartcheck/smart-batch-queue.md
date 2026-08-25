---
id: smart-batch-queue
title: Smart Batch queue
description: Enqueue any catalog lookup with type=queue and receive a 202 while the worker runs the endpoint
slug: /smartcheck/smart-batch-queue
---

# Smart Batch queue

Any catalog lookup can wait for the result (`sync`) or return immediately (`queue`). Queue mode creates a one-row Smart Batch. A worker later calls the same endpoint with a minted client JWT and records the attempt. Credits are charged on that worker call, not on the enqueue.

## Request

Add `type=queue` to the same path and parameters you already use:

```http
GET /v2/pe/cedula?documentType=DNI&documentNumber=12345678&type=queue
Authorization: Bearer <client JWT>
```

```http
GET /v2/co/cedula?documentType=CC&documentNumber=1032386359&type=queue
Authorization: Bearer <client JWT>
```

You can also enqueue explicitly:

```http
POST /v2/smart-batches/from-queue
Authorization: Bearer <client JWT>
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

`type` must be omitted, `sync`, or `queue`.

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

The worker requirement is `VERIFIK_INTERNAL_SECRET` on both Node and the Python service, with the Python tick enabled. Without that secret the row stays queued until a tick can claim it.

## Notifications

Webhook URL and completion emails live on the Smart Batch configuration (Smart-Agent wizard, optional Notifications card). They are not query parameters. Edit the auto-created config (`Queue …`) once; later `type=queue` calls reuse it.

Cédula keeps `co.cedula.queue`. SISPRO keeps `co.sispro.queue`. Every other feature uses `{featureCode}.queue`.

## Notes

- Passwordless and PDF generator have no catalog URL, so they cannot be queued.
- `v2/co/inpec` resolves to the live INPEC feature when two catalog rows share that path.
