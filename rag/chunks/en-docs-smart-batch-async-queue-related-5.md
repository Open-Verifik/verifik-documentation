---
id: "en-docs-smart-batch-async-queue-related-5"
title: "Call endpoints as queue (async) — Related"
sourcePath: "docs/smart-batch/async-queue.mdx"
locale: "en"
category: "smart-batch"
tags:
  - "smart-batch"
  - "smart-batches"
endpoint: "/v2/smart-batches/{batchid}"
sourceAnchor: "Related"
slug: "/smart-batch/async-queue"
url: "https://docs.verifik.co/smart-batch/async-queue"
---

# Call endpoints as queue (async)
**API path(s):** /v2/smart-batches/{batchid}

Any catalog lookup can wait for the result (**sync**) or return immediately (**queue** / **Async**). Queue mode creates a one-row Smart Batch. A worker later calls the same endpoint and records the attempt. Credits are charged on that worker call, not on the enqueue.
This page is the A–Z for calling endpoints as a queue from your backend. For the product, wizard, and dashboard, start with [SmartBatch](/smart-batch).

## Related

- [SmartBatch](/smart-batch) — UI wizard, Async vs Sync, notifications
- [SmartCheck](/smartcheck) — catalog endpoints
- [Colombian citizen](/identity/colombia) — `/v2/co/cedula`
- [Peruvian citizen](/identity/peru) — Peru DNI
