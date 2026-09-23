---
id: "es-docs-es-api-etiquetas-alquiler-etiqueta-offline-endpoint"
title: "Alquilar Etiqueta Offline — Endpoint"
sourcePath: "docs-es/api/etiquetas/alquiler-etiqueta-offline.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Endpoint"
---

# Alquilar Etiqueta Offline

## Endpoint

Alquilar una etiqueta para uso offline con datos ZelfProof.

### Endpoint

```
POST /api/tags/lease-offline
```

## Descripción

Este endpoint te permite alquilar una etiqueta para uso offline, habilitando la funcionalidad de Zelf sin conectividad a internet. Procesa datos ZelfProof y códigos QR para crear etiquetas capaces de funcionar offline.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `tagName` | string | Sí | El nombre de la etiqueta a alquilar (ej., "mytag.zelf"). Debe tener 30 caracteres o menos. |
| `domain` | string | Sí | El dominio para la etiqueta ("zelf", "avax", "bdag", u otros dominios licenciados) |
| `zelfProof` | string | No | Los datos ZelfProof (término registrado) - se puede omitir si se proporciona zelfProofQRCode |
| `zelfProofQRCode` | string | Sí | Imagen de código QR codificada en base64 que contiene datos ZelfProof (término registrado) |
| `referralTagName` | string | No | Nombre de etiqueta de referencia para recompensas |
| `sync` | boolean | No | Si sincronizar con datos de etiqueta existentes |
| `syncPassword` | string | No | Contraseña para sincronizar datos encriptados |
| `syncPublicData` | object | No | Datos públicos para sincronizar (ethAddress, btcAddress, solanaAddress, suiAddress) |
| `duration` | string | No | Duración del alquiler para cálculo de precios |
| `removePGP` | boolean | No | Si eliminar el cifrado PGP |

## Autenticación

Este endpoint requiere un token JWT válido en el header de Autorización:

```
Authorization: Bearer 
```
