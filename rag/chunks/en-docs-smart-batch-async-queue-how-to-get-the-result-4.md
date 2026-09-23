---
id: "en-docs-smart-batch-async-queue-how-to-get-the-result-4"
title: "Call endpoints as queue (async) — How to get the result"
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
sourceAnchor: "How to get the result"
slug: "/smart-batch/async-queue"
url: "https://docs.verifik.co/smart-batch/async-queue"
---

# Call endpoints as queue (async)
**API path(s):** /v2/co/afiliaciones, /v2/co/cedula, /v2/pe/cedula, /v2/smart-batches/:id, /v2/smart-batches/from-queue, /v2/smart-batches/{batchid}

Any catalog lookup can wait for the result (**sync**) or return immediately (**queue** / **Async**). Queue mode creates a one-row Smart Batch. A worker later calls the same endpoint and records the attempt. Credits are charged on that worker call, not on the enqueue.
This page is the A–Z for calling endpoints as a queue from your backend. For the product, wizard, and dashboard, start with [SmartBatch](/smart-batch).

## How to get the result

### Webhook or email

Set **Webhook URL** and **Emails on completion** on the batch configuration in [ai.verifik.co](https://ai.verifik.co) (Create wizard → Review & Create, or edit the config). They are not query parameters.

The webhook list and detail pages in Smart Monitor show which batch configurations are linked.

### Smart-Agent dashboard

Open [https://ai.verifik.co](https://ai.verifik.co), go to the batch (`batchId` from the `202`), and watch status, attempts, cost per row, and the linked webhook.

You can also create the configuration first (Run mode **Async**), then enqueue from the API so rows land on that recipe.

### Poll the batch

```http
GET https://api.verifik.co/v2/smart-batches/{batchId}
Authorization: Bearer 
```

Row detail includes the attempt timeline. A completed attempt holds the feature payload.

## Limits

- Passwordless and PDF generator features have no catalog URL, so they cannot be queued.
- `404` and validation errors (`MissingParameter`, and similar) are **not** retried.
- Retryable outcomes are `429`, `5xx`, and timeout / upstream-unavailable codes.
- `type` is only `sync`, `queue`, or omitted.

## Optional explicit enqueue

Prefer `type=queue` on the catalog path. If you already know the queue key, you can create the row directly:

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

Lead with `https://async.verifik.co/{path}?type=queue` unless you need this explicit body.
