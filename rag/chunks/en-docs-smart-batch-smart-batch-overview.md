---
id: "en-docs-smart-batch-smart-batch-overview"
title: "SmartBatch — Overview"
sourcePath: "docs/smart-batch/smart-batch.md"
locale: "en"
category: "smart-batch"
tags:
  - "smart-batch"
sourceAnchor: "Overview"
slug: "/smart-batch"
url: "https://docs.verifik.co/smart-batch"
---

# SmartBatch

## Overview

**SmartBatch** runs one or many catalog lookups as a batch. You pick the endpoints, map the input fields, and choose how the batch should run. Use it from the Smart-Agent UI at [ai.verifik.co](https://ai.verifik.co) or from the API at [async.verifik.co](https://async.verifik.co).

A **batch configuration** is the reusable recipe: name, country, steps (catalog features), merge strategy, run mode, and optional notifications. Each time you upload a file or enqueue a single lookup, SmartBatch creates a batch from that recipe.

## Overview

SmartBatch sits on top of the same SmartCheck catalog you already use. Sync waits on the current request. Async returns immediately and keeps working after you close the tab. File batches and one-row API calls share the same worker when the configuration is **Async**.

Need to call a catalog path as a queue from your backend? See [Call endpoints as queue (async)](/smart-batch/async-queue).

## Key Features

  
    
      
        Async
      
      
        Runs in the background. You can close the tab; we keep processing the batch.
      
    
  
  
    
      
        Sync
      
      
        Runs on the server as a connected step chain. Best when later steps need earlier results.
      
    
  
  
    
      
        Catalog steps
      
      
        Add any SmartCheck endpoint with a catalog URL as a verification step.
      
    
  

  
    
      
        Notifications
      
      
        Optional webhook URL and completion emails live on the configuration, not as query parameters.
      
    
  
  
    
      
        File or API
      
      
        Upload a spreadsheet or enqueue one row with type=queue. Both reuse the same Async worker.
      
    
  
  
    
      
        Dashboard
      
      
        Watch progress, attempts, cost per row, and the linked webhook from the batch dashboard.
