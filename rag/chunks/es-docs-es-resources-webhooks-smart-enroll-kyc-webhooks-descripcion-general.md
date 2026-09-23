---
id: "es-docs-es-resources-webhooks-smart-enroll-kyc-webhooks-descripcion-general"
title: "Webhooks de Smart Enroll (KYC) — Descripción general"
sourcePath: "docs-es/resources/webhooks/smart-enroll-kyc-webhooks.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Descripción general"
slug: "/resources/smart-enroll-kyc-webhooks"
url: "https://docs.verifik.co/verifik-es/resources/smart-enroll-kyc-webhooks"
---

# Webhooks de Smart Enroll (KYC)

## Descripción general

Smart Enroll (onboarding) usa el **webhook** vinculado al **ProjectFlow**. Si el flujo tiene un webhook activo, Verifik encola el envío de eventos del ciclo de vida del registro, OTP por email y teléfono, documentos, biometría y módulos relacionados.

El catálogo completo está en [Eventos soportados](/verifik-es/resources/eventos-soportados). Esta página resume el **orden típico en Smart Enroll**, la **forma del payload** y el comportamiento **verificación manual vs. completado**.

**Also available:** [English version](/resources/smart-enroll-kyc-webhooks).

:::info Forma del payload

Cada envío es JSON con un **`type`** y un **`object`** de primer nivel:

```json
{
  "type": "onboarding_app_registration_completed",
  "object": { }
}
```

- **`type`** = `${projectFlow.type}_${sufijo}` — en Smart Enroll el prefijo siempre es **`onboarding`**.
- **`object`** = copia de la entidad principal (`appRegistration`, `emailValidation`, `documentValidation`, etc.). Los **OTP se eliminan** del payload.
- Los eventos `app_registration_*` generados por **sync** incluyen la referencia `webhook` cuando el flujo la tiene configurada.

Tu integración debe tolerar campos opcionales nuevos.

:::

:::tip Reglas de nombre de evento

| Patrón | Forma del sufijo | Ejemplo |
| --- | --- | --- |
| **Sync** con estado **`ONGOING`** | `app_registration_sync_` (snake_case) | `app_registration_sync_sign_up_form` |
| **Sync** cuando **cambia** el estado (`end`, `skipKYC`) | `app_registration_` | `app_registration_completed` |
| **Admin override** (auth de staff) | `app_registration_` | `app_registration_completed` |
| **Email / Teléfono** OTP | `email_validation_` o `phone_validation_` | `email_validation_validated` |

Todos los sufijos se convierten en `type` completo con el prefijo `onboarding_`, p. ej. `onboarding_email_validation_created`. Compara siempre el **type completo** en tu código.

:::

---
