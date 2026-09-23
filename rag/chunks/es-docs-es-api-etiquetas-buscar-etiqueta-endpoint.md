---
id: "es-docs-es-api-etiquetas-buscar-etiqueta-endpoint"
title: "Buscar Etiqueta — Endpoint"
sourcePath: "docs-es/api/etiquetas/buscar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/search"
sourceAnchor: "Endpoint"
---

# Buscar Etiqueta
**API path(s):** /api/sessions, /api/tags/search

## Endpoint

Buscar una etiqueta en cualquier nombre de dominio soportado (Zelf, Avax, BDAG, u otros dominios licenciados).

### Endpoint

```
GET /api/tags/search
```

## Descripción

Este endpoint te permite buscar una etiqueta a través de múltiples dominios y sistemas de almacenamiento (IPFS y Arweave). El sistema soporta múltiples dominios incluyendo Zelf, Avax, BDAG, y otros dominios licenciados para empresas y startups.

**Tipos de Respuesta:**
1. **Etiqueta Encontrada**: Retorna el objeto de etiqueta con todos los datos asociados
2. **Etiqueta No Encontrada**: Retorna información de precios para alquilar la etiqueta

**Nota:** Los términos "ZelfProof", "ZK Face Proof", y "ZelfProofQRCode" están registrados como marca y deben usarse apropiadamente.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `tagName` | string | Sí | El nombre de la etiqueta a buscar (ej., "username.zelf") |
| `domain` | string | No | El tipo de dominio (ej., "zelf", "avax", "bdag", u otros dominios licenciados) |
| `key` | string | No | Clave de búsqueda para búsqueda avanzada |
| `value` | string | No | Valor de búsqueda para búsqueda avanzada |
| `os` | string | No | Sistema operativo ("DESKTOP", "ANDROID", "IOS") |
| `captchaToken` | string | No | Token CAPTCHA para protección contra bots (opcional) |
| `duration` | string | No | Duración para precios ("1", "2", "3", "4", "5", "lifetime") |
