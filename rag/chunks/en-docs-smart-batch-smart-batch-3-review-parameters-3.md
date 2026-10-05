---
id: "en-docs-smart-batch-smart-batch-3-review-parameters-3"
title: "SmartBatch — 3. Review Parameters"
sourcePath: "docs/smart-batch/smart-batch.md"
locale: "en"
category: "smart-batch"
tags:
  - "smart-batch"
sourceAnchor: "3. Review Parameters"
slug: "/smart-batch"
url: "https://docs.verifik.co/smart-batch"
---

# SmartBatch

**SmartBatch** runs one or many catalog lookups as a batch. You pick the endpoints, map the input fields, and choose how the batch should run. Use it from the Smart-Agent UI at [ai.verifik.co](https://ai.verifik.co) or from the API at [async.verifik.co](https://async.verifik.co).
A **batch configuration** is the reusable recipe: name, country, steps (catalog features), merge strategy, run mode, and optional notifications. Each time you upload a file or enqueue a single lookup, SmartBatch creates a batch from that recipe.

## 3. Review Parameters

Confirm the required parameters for each step. Those fields are mapped from your uploaded file headers (or from the API `inputData` when you enqueue a single row).

### 4. Review & Create

Check the summary. Optionally open **Notifications**:

- **Webhook URL** — We POST row and batch completion events to this address. Test the URL before you continue.
- **Emails on completion** — Optional addresses that receive a message when the batch finishes.

Save the configuration. Notifications stay on the config. Later `type=queue` calls reuse the matching Async config (`Queue …`) instead of creating a new one every time.

## Run and watch a batch

From the configuration you can upload a file or start a run. The **dashboard** shows:

- Status and progress per row
- Attempt history for each row
- Cost per row
- The linked webhook (click through to Smart Monitor)

Linked batch configurations also appear on the webhook list and detail pages in Smart Monitor.

## File batches and one-row API calls

| How you start | Host | Result |
| --- | --- | --- |
| Upload a file in Smart-Agent | [ai.verifik.co](https://ai.verifik.co) | One batch with N rows |
| `GET`/`POST` the catalog path with `type=queue` | [async.verifik.co](https://async.verifik.co) | `202` and a one-row batch |

When the configuration is **Async**, both paths use the same background worker. See [Call endpoints as queue (async)](/smart-batch/async-queue) for the API A–Z.

## Related

- [Check List](/check-list) — save a mix of catalog services before you batch them
- [SmartCheck](/smartcheck) — catalog of identity and data APIs
- [Call endpoints as queue (async)](/smart-batch/async-queue)
