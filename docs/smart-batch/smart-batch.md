---
id: smart-batch
title: SmartBatch
description: Run catalog lookups as a batch — Async in the background or Sync as a connected step chain — from ai.verifik.co or async.verifik.co
slug: /smart-batch
---

import { Layers, Zap, RefreshCw, Bell, FileSpreadsheet, Globe } from 'lucide-react';

# SmartBatch

**SmartBatch** runs one or many catalog lookups as a batch. You pick the endpoints, map the input fields, and choose how the batch should run. Use it from the Smart-Agent UI at [ai.verifik.co](https://ai.verifik.co) or from the API at [async.verifik.co](https://async.verifik.co).

A **batch configuration** is the reusable recipe: name, country, steps (catalog features), merge strategy, run mode, and optional notifications. Each time you upload a file or enqueue a single lookup, SmartBatch creates a batch from that recipe.

## Overview

SmartBatch sits on top of the same SmartCheck catalog you already use. Sync waits on the current request. Async returns immediately and keeps working after you close the tab. File batches and one-row API calls share the same worker when the configuration is **Async**.

Need to call a catalog path as a queue from your backend? See [Call endpoints as queue (async)](/smart-batch/async-queue).

## Key Features

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Zap size={20} style={{display: 'inline', marginRight: '8px'}} />Async</h3>
      </div>
      <div className="card__body">
        <p>Runs in the background. You can close the tab; we keep processing the batch.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><RefreshCw size={20} style={{display: 'inline', marginRight: '8px'}} />Sync</h3>
      </div>
      <div className="card__body">
        <p>Runs on the server as a connected step chain. Best when later steps need earlier results.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Layers size={20} style={{display: 'inline', marginRight: '8px'}} />Catalog steps</h3>
      </div>
      <div className="card__body">
        <p>Add any SmartCheck endpoint with a catalog URL as a verification step.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Bell size={20} style={{display: 'inline', marginRight: '8px'}} />Notifications</h3>
      </div>
      <div className="card__body">
        <p>Optional webhook URL and completion emails live on the configuration, not as query parameters.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><FileSpreadsheet size={20} style={{display: 'inline', marginRight: '8px'}} />File or API</h3>
      </div>
      <div className="card__body">
        <p>Upload a spreadsheet or enqueue one row with <code>type=queue</code>. Both reuse the same Async worker.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Globe size={20} style={{display: 'inline', marginRight: '8px'}} />Dashboard</h3>
      </div>
      <div className="card__body">
        <p>Watch progress, attempts, cost per row, and the linked webhook from the batch dashboard.</p>
      </div>
    </div>
  </div>
</div>

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

### 3. Review Parameters

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

- [SmartCheck](/smartcheck) — catalog of identity and data APIs
- [Call endpoints as queue (async)](/smart-batch/async-queue)
