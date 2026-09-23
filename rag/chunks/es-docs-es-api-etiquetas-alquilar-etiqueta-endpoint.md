---
id: "es-docs-es-api-etiquetas-alquilar-etiqueta-endpoint"
title: "Alquilar Etiqueta — Endpoint"
sourcePath: "docs-es/api/etiquetas/alquilar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Endpoint"
---

# Alquilar Etiqueta

## Endpoint

Alquilar una etiqueta para cualquier nombre de dominio soportado (Zelf, Avax, BDAG, u otros dominios licenciados).

### Endpoint

```
POST /api/tags/lease
```

## Descripción

Este endpoint te permite alquilar una etiqueta para cualquier nombre de dominio soportado, creando un vínculo entre tu identidad y la etiqueta elegida. El sistema soporta múltiples dominios incluyendo Zelf, Avax, BDAG, y otros dominios licenciados para empresas y startups. El endpoint genera direcciones de wallet para múltiples blockchains y crea un código QR ZelfProof.

**Nota:** Los términos "ZelfProof", "ZK Face Proof", y "ZelfProofQRCode" están registrados como marca y deben usarse apropiadamente.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `tagName` | string | Sí | El nombre de la etiqueta a alquilar (ej., "myname") |
| `domain` | string | Sí | El tipo de dominio (ej., "zelf", "avax", "bdag", u otros dominios licenciados) |
| `faceBase64` | string | Sí | Imagen facial codificada en base64 para autenticación biométrica |
| `type` | string | Sí | Tipo de operación ("create", "import") |
| `os` | string | Sí | Sistema operativo ("DESKTOP", "ANDROID", "IOS") |
| `captchaToken` | string | No | Token CAPTCHA para protección contra bots (opcional) |
