---
id: "es-docs-es-resources-webhooks-smart-fleet-webhooks-resumen"
title: "Webhooks de SmartFleet — Resumen"
sourcePath: "docs-es/resources/webhooks/smart-fleet-webhooks.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Resumen"
slug: "/resources/smart-fleet-webhooks"
url: "https://docs.verifik.co/verifik-es/resources/smart-fleet-webhooks"
---

# Webhooks de SmartFleet

## Resumen

SmartFleet entrega notificaciones de alerta usando el mismo registro de **Webhook** que otros productos Verifik. Cuando una regla de monitoreo incluye el canal **webhook**, Verifik envía un callback HTTP con un evento tipado `fleet_alert_*`.

**Also available:** [English version](/resources/smart-fleet-webhooks).

:::info Cómo se elige la URL destino

1. Si la regla tiene **`webhookUrl`**, Verifik busca un Webhook **activo** del cliente cuya URL coincida (o usa el primer webhook activo al resolver la entrega).
2. Si no, se usa el primer Webhook activo del cliente.
3. Si no hay webhook, la entrega queda como **`skipped`** con `no_webhook_configured`.

Registra endpoints en **Webhooks** del panel y selecciona el canal webhook en la regla de SmartFleet.

:::

### Tipo de evento

```text
fleet_alert_{alertType}
```

Ejemplos:

| `type` del evento | Cuándo se dispara |
| --- | --- |
| `fleet_alert_soat_expiring` | SOAT entra en la ventana de aviso |
| `fleet_alert_soat_expired` | SOAT vencido |
| `fleet_alert_rtm_expiring` | RTM entra en la ventana de aviso |
| `fleet_alert_rtm_expired` | RTM vencido |
| `fleet_alert_new_comparendo` | Nuevo comparendo detectado |
| `fleet_alert_fine_amount_changed` | Cambió el monto de una multa |
| `fleet_alert_ownership_changed` | Cambió la propiedad |
| `fleet_alert_new_claim` | Nuevo siniestro detectado |
| `fleet_alert_check_failed` | Falló una consulta programada |
| `fleet_alert_custom` | Alerta personalizada / sin clasificar |

### Forma del payload

```json
{
  "type": "fleet_alert_soat_expiring",
  "object": {
    "alertId": "66f0…",
    "type": "soat_expiring",
    "severity": "warning",
    "title": "SOAT vence en 12 días",
    "detectedAt": "2026-08-03T18:00:00.000Z",
    "payload": {},
    "asset": {
      "id": "66f1…",
      "plate": "ABC123",
      "vin": null,
      "nickname": "Camión 1",
      "group": "norte",
      "country": "co"
    }
  }
}
```

Trata los campos opcionales nuevos como aditivos.
