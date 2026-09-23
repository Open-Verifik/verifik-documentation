---
id: "es-docs-es-clients-account-information-campos-de-respuesta-3"
title: "Información de Cuenta — Campos de Respuesta"
sourcePath: "docs-es/clients/account-information.md"
locale: "es"
category: "clients"
tags:
  - "clients"
endpoints:
  - "/v2/clients/me"
  - "/v2/clients/me?populates[]=clientsubscriptionplan.subscriptionplan"
sourceAnchor: "Campos de Respuesta"
slug: "/informacion-cuenta"
url: "https://docs.verifik.co/verifik-es/informacion-cuenta"
---

# Información de Cuenta
**API path(s):** /v2/clients/me, /v2/clients/me?populates[]=clientsubscriptionplan.subscriptionplan

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `_id` | String | ID del cliente |
| `email` | String | Dirección de correo electrónico del cliente |
| `phone` | String | Número de teléfono del cliente |
| `name` | String | Nombre completo del cliente |
| `credits` | Number | Créditos disponibles |
| `totalRequestsCount` | Number | Total de solicitudes API realizadas |
| `isEmailVerified` | Boolean | Estado de verificación de correo electrónico |
| `isPhoneVerified` | Boolean | Estado de verificación de teléfono |
| `isBiometricVerified` | Boolean | Estado de verificación biométrica |
| `clientSubscriptionPlan` | Object | Detalles del plan de suscripción |
