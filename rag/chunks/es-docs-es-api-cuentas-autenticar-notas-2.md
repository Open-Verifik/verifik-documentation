---
id: "es-docs-es-api-cuentas-autenticar-notas-2"
title: "Autenticar — Notas"
sourcePath: "docs-es/api/cuentas/autenticar.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoint: "/api/clients/auth"
sourceAnchor: "Notas"
---

# Autenticar
**API path(s):** /api/clients/auth

Autenticar un cliente usando verificación biométrica facial.

## Notas

- Requiere autenticación con clave API
- Se debe proporcionar email O countryCode + phone
- La verificación biométrica es opcional pero recomendada
- Retorna token JWT para solicitudes autenticadas posteriores
- Se retornan ZelfProof y datos de cuenta para usuarios autenticados
