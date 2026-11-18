---
id: "en-docs-smart-batch-async-queue-when-to-use-async"
title: "Call endpoints as queue (async) — When to use async"
sourcePath: "docs/smart-batch/async-queue.mdx"
locale: "en"
category: "smart-batch"
tags:
  - "smart-batch"
  - "smart-batches"
endpoint: "/v2/smart-batches/{batchid}"
sourceAnchor: "When to use async"
slug: "/smart-batch/async-queue"
url: "https://docs.verifik.co/smart-batch/async-queue"
---

# Call endpoints as queue (async)
**API path(s):** /v2/smart-batches/{batchid}

## When to use async

Any catalog lookup can wait for the result (**sync**) or return immediately (**queue** / **Async**). Queue mode creates a one-row Smart Batch. A worker later calls the same endpoint and records the attempt. Credits are charged on that worker call, not on the enqueue.

This page is the A–Z for calling endpoints as a queue from your backend. For the product, wizard, and dashboard, start with [SmartBatch](/smart-batch).

## When to use async

Use `type=queue` when you do not want your HTTP client to wait on a slow lookup:

- You will handle the result later with a webhook or email.
- You will open the batch on [ai.verifik.co](https://ai.verifik.co) and watch the dashboard.
- You will poll `GET /v2/smart-batches/:id` on [api.verifik.co](https://api.verifik.co).

Use sync (omit `type`, or send `type=sync`) when you need the identity payload on the same response.

## Authentication

Use the **same client JWT** you already send to `api.verifik.co`.

```
Authorization: Bearer 
```

`async.verifik.co` forwards that header. Node validates the token, stores the batch, and later mints a short-lived JWT so the worker can call the feature as your client. You never store a second key for the queue.

## Base URL

```
https://async.verifik.co
```

Append the **same catalog path** documented for the feature. Examples:

| Feature | Path |
| --- | --- |
| Colombian cédula | `/v2/co/cedula` |
| Colombian affiliations (SISPRO) | `/v2/co/afiliaciones` |
| Peruvian DNI | `/v2/pe/cedula` |

See [SmartCheck](/smartcheck) for the rest of the catalog. Passwordless and PDF features with no catalog URL cannot be queued.
