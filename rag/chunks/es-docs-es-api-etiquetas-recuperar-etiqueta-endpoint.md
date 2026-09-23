---
id: "es-docs-es-api-etiquetas-recuperar-etiqueta-endpoint"
title: "Recuperación de una Etiqueta — Endpoint"
sourcePath: "docs-es/api/etiquetas/recuperar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Endpoint"
---

# Recuperación de una Etiqueta

## Endpoint

Recuperar una etiqueta usando un ZelfProof existente de una etiqueta previamente alquilada. Este endpoint te permite crear una nueva etiqueta con los mismos datos de wallet de una etiqueta anterior.

### Endpoint

```
POST /api/tags/lease-recovery
```

## Descripción

Este endpoint te permite recuperar una etiqueta usando un ZelfProof existente de una etiqueta previamente alquilada. Esto es útil cuando quieres crear una nueva etiqueta con los mismos datos de wallet de una etiqueta anterior. El sistema soporta múltiples dominios incluyendo Zelf, Avax, BDAG, y otros dominios licenciados.

**Nota:** Los términos "ZelfProof", "ZK Face Proof", y "ZelfProofQRCode" están registrados como marca y deben usarse apropiadamente.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `zelfProof` | string | Sí | Datos ZelfProof de una etiqueta previamente alquilada |
| `tagName` | string | Sí | Nombre para la nueva etiqueta (soporta múltiples dominios) |
| `domain` | string | Sí | Dominio para la nueva etiqueta (ej., "zelf", "avax", "bdag") |
| `faceBase64` | string | Sí | Imagen facial codificada en base64 para verificación biométrica |
| `password` | string | Sí | Contraseña utilizada para encriptar el ZelfProof original |
| `os` | string | Sí | Sistema operativo ("DESKTOP", "ANDROID", "IOS") |
| `removePGP` | boolean | No | Si omitir el cifrado PGP (por defecto: false) |
| `captchaToken` | string | No | Token CAPTCHA para protección contra bots (opcional) |
