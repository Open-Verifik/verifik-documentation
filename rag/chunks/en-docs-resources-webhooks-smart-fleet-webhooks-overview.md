---
id: "en-docs-resources-webhooks-smart-fleet-webhooks-overview"
title: "SmartFleet webhooks — Overview"
sourcePath: "docs/resources/webhooks/smart-fleet-webhooks.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/smart-fleet-webhooks"
url: "https://docs.verifik.co/resources/smart-fleet-webhooks"
---

# SmartFleet webhooks

## Overview

SmartFleet delivers alert notifications over the same **Webhook** registry used by other Verifik products. When a watch rule includes the **webhook** channel, Verifik sends an HTTP callback with a typed `fleet_alert_*` event.

**Also available:** [Versión en español](/verifik-es/resources/smart-fleet-webhooks).

:::info How the target URL is chosen

1. If the watch rule has a **`webhookUrl`**, Verifik looks up an **active** client Webhook whose URL matches (or falls back to the first active webhook when resolving delivery).
2. Otherwise the client's first active Webhook endpoint is used.
3. If no webhook can be resolved, delivery is recorded as **`skipped`** with `no_webhook_configured`.

Register endpoints under **Webhooks** in the dashboard, then select the webhook channel on a SmartFleet watch rule.

:::

### Event type

```text
fleet_alert_{alertType}
```

Examples:

| Event `type` | When it fires |
| --- | --- |
| `fleet_alert_soat_expiring` | SOAT enters the warning window |
| `fleet_alert_soat_expired` | SOAT is past expiry |
| `fleet_alert_rtm_expiring` | RTM enters the warning window |
| `fleet_alert_rtm_expired` | RTM is past expiry |
| `fleet_alert_new_comparendo` | New traffic ticket detected |
| `fleet_alert_fine_amount_changed` | Ticket amount changed |
| `fleet_alert_ownership_changed` | Ownership data changed |
| `fleet_alert_new_claim` | New insurance claim detected |
| `fleet_alert_check_failed` | A scheduled check failed |
| `fleet_alert_custom` | Custom / unclassified alert |

### Payload shape

Deliveries use the product webhook envelope. The event body includes:

```json
{
  "type": "fleet_alert_soat_expiring",
  "object": {
    "alertId": "66f0…",
    "type": "soat_expiring",
    "severity": "warning",
    "title": "SOAT expires in 12 days",
    "detectedAt": "2026-08-03T18:00:00.000Z",
    "payload": {},
    "asset": {
      "id": "66f1…",
      "plate": "ABC123",
      "vin": null,
      "nickname": "Truck 1",
      "group": "north",
      "country": "co"
    }
  }
}
```

Exact top-level wrapping follows the shared Webhook Events delivery format used by other Verifik products (`type` + entity body). Treat new optional fields as additive.
