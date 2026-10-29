---
id: "es-docs-es-validacion-vehiculos-canada-placa-ontario-respuesta-2"
title: "\\U0001F1E8\\U0001F1E6 Canadá - Vencimiento de Placa Ontario — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/canada/placa-ontario.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ca"
  - "validacion-vehiculos"
endpoint: "/v2/ca/ontario/plate"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/canada/placa-ontario"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/canada/placa-ontario"
---

# \U0001F1E8\U0001F1E6 Canadá - Vencimiento de Placa Ontario
**API path(s):** /v2/ca/ontario/plate

Consulta el vencimiento de la calcomanía de placa de Ontario usando el **número de placa** y el **número de permiso del vehículo** (tarjeta verde / documento de registro emitido por Ontario).
Campos típicos de respuesta: `expired`, `plateNumber`, `permitNumber`, `expiryDate` y `success`. `expired` es `true` cuando `expiryDate` es anterior al momento actual.
Utiliza este servicio para confirmar rápidamente la vigencia de la calcomanía ante el registro gubernamental de Ontario. Ideal para onboarding de flotas, cumplimiento normativo y verificación de vehículos.

## Respuesta

```json
{
  "data": {
    "expired": false,
    "expiryDate": "2027-01-24T04:41:22.932Z",
    "permitNumber": "N9166001",
    "plateNumber": "BKTR456",
    "success": true
  },
  "signature": {
    "dateTime": "July 7, 2026 11:31 AM",
    "message": "Certified by Verifik.co"
  },
  "id": "8X9FD"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```
