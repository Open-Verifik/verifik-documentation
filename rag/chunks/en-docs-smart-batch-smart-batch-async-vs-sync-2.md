---
id: "en-docs-smart-batch-smart-batch-async-vs-sync-2"
title: "SmartBatch — Async vs Sync"
sourcePath: "docs/smart-batch/smart-batch.md"
locale: "en"
category: "smart-batch"
tags:
  - "smart-batch"
sourceAnchor: "Async vs Sync"
slug: "/smart-batch"
url: "https://docs.verifik.co/smart-batch"
---

# SmartBatch

**SmartBatch** runs one or many catalog lookups as a batch. You pick the endpoints, map the input fields, and choose how the batch should run. Use it from the Smart-Agent UI at [ai.verifik.co](https://ai.verifik.co) or from the API at [async.verifik.co](https://async.verifik.co).
A **batch configuration** is the reusable recipe: name, country, steps (catalog features), merge strategy, run mode, and optional notifications. Each time you upload a file or enqueue a single lookup, SmartBatch creates a batch from that recipe.

## Async vs Sync

The wizard and dashboard use the product labels **Async** and **Sync**.

| Run mode | What happens | When to use it |
| --- | --- | --- |
| **Async** (default) | The batch runs in the background. You can close the Smart-Agent tab. A worker claims each row, calls the feature URL, and records the attempt. | Fire-and-forget lookups, large files, webhook-driven flows. |
| **Sync** | The server runs the steps as a connected chain and waits for each result. Later steps can use earlier outputs. | Multi-step recipes where step 2 depends on step 1. |

Credits are charged when the feature actually runs (the worker call for Async, the step call for Sync), not when you enqueue a row.

:::note API `type` values
On `async.verifik.co`, omit `type` or send `type=sync` to wait for the result. Send `type=queue` to enqueue. Those query values map to the same Async / Sync idea. You do not pass `queue` or `featureRunner` from the UI.
:::

## Create a configuration on ai.verifik.co

Open [https://ai.verifik.co](https://ai.verifik.co), go to **Smart Batch**, and choose **Create**.

### 1. Basic Information

Enter the configuration name, description, and country. Choose **Run mode**:

- **Async** — Runs in the background. You can close this tab; we keep processing the batch.
- **Sync** — Runs on the server as a connected step chain. Best when later steps need earlier results.

Async is the default.

### 2. Select Endpoints

Search the catalog and add the verification steps you need. Each step is a SmartCheck feature with a URL (identity, affiliations, vehicles, and so on). Features without a catalog URL (passwordless, PDF generators) cannot run as a batch step.
