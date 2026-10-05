---
id: "es-docs-es-resources-webhooks-smart-enroll-kyc-webhooks-verificacion-manual-vs-completed-3"
title: "Webhooks de Smart Enroll (KYC) — Verificación manual vs. `COMPLETED`"
sourcePath: "docs-es/resources/webhooks/smart-enroll-kyc-webhooks.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Verificación manual vs. `COMPLETED`"
slug: "/resources/smart-enroll-kyc-webhooks"
url: "https://docs.verifik.co/verifik-es/resources/smart-enroll-kyc-webhooks"
---

# Webhooks de Smart Enroll (KYC)

## Verificación manual vs. `COMPLETED`

:::warning Comportamiento clave

- **`NEEDS_MANUAL_VERIFICATION`** significa que el registro está **bloqueado** y no puede completarse hasta que ops resuelva las revisiones pendientes (p. ej. verificación manual de documento).
- No asumas que cada **`sync` `end`** con `status: "COMPLETED"` en la petición producirá `app_registration_completed`. El servidor fija el estado según **completitud y reglas del flujo** y puede emitir `app_registration_needs_manual_verification` en su lugar.
- Tras resolver los bloqueos, un **sync** o **adminOverride** posterior puede llevar el registro a `COMPLETED` y emitir `app_registration_completed`.
- El orden real en red puede variar en milisegundos — diseña para idempotencia.

:::

---

### Recursos relacionados

- [Eventos soportados](/verifik-es/resources/eventos-soportados) — catálogo completo con tablas de referencia
- [Integración de Webhooks](/verifik-es/resources/integracion-webhook) — servidor receptor de ejemplo
- [Webhooks (descripción general)](/verifik-es/resources/webhooks)
- [Supported Events (EN)](/resources/supported-events)
