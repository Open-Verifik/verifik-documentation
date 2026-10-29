---
id: "es-docs-es-biometrics-apis-comparar-comparar-1-1"
title: "Comparación Facial 1:1 — Endpoint"
sourcePath: "docs-es/biometrics-apis/comparar/comparar-1-1.mdx"
locale: "es"
category: "biometrics-apis"
tags:
  - "biometrics"
  - "face-recognition"
  - "biometrics-apis"
endpoint: "/v2/face-recognition/compare"
sourceAnchor: "Endpoint"
slug: "/biometrics-apis/comparar/comparar-1-1"
url: "https://docs.verifik.co/verifik-es/biometrics-apis/comparar/comparar-1-1"
---

# Comparación Facial 1:1
**API path(s):** /v2/face-recognition/compare

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/face-recognition/compare
```

Compara dos imágenes faciales y retorna un score de similitud. Este servicio es ideal para verificación de identidad 1:1.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `image1` | string | Sí | Primera imagen facial en base64. |
| `image2` | string | Sí | Segunda imagen facial en base64. |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/compare", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      image1: "",
      image2: ""
    }),
  });
  console.log(await res.json());
}

run();
```

### Respuesta

  

```json
{
  "id": "CMP1",
  "data": {
    "score": 0.95,
    "match": true
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

### Notas

- Proporciona imágenes de alta calidad para mejores resultados.
- Un score mayor a 0.7 generalmente indica una coincidencia.
- Este servicio es ideal para verificación de identidad 1:1.
