---
id: "en-docs-resources-webhooks-supported-events-reference-tables-by-lifecycle-order-3"
title: "Supported Events — Reference tables (by lifecycle order)"
sourcePath: "docs/resources/webhooks/supported-events.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Reference tables (by lifecycle order)"
slug: "/resources/supported-events"
url: "https://docs.verifik.co/resources/supported-events"
---

# Supported Events

## Reference tables (by lifecycle order)

| Event suffix | When it fires | Main `object` entity | Notes |
| --- | --- | --- | --- |
| `information_validation_background_check` | Background / criminal checks completed | `informationValidation` | |
| `information_validation_updated` | Data synced from document-driven flows | `informationValidation` | Emission depends on webhook context on document/flow |

---
