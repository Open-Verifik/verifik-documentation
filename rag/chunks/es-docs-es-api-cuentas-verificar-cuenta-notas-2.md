---
id: "es-docs-es-api-cuentas-verificar-cuenta-notas-2"
title: "Verificar Cuenta — Notas"
sourcePath: "docs-es/api/cuentas/verificar-cuenta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Notas"
---

# Verificar Cuenta

Verificar si existe una cuenta de cliente basada en email o número de teléfono.

## Notas

- Este endpoint no requiere autenticación
- Se debe proporcionar email O countryCode + phone
- Retorna información del cliente si la cuenta existe
- Útil para verificar el estado de la cuenta antes del registro o inicio de sesión
