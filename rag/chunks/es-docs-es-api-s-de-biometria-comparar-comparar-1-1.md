---
id: "es-docs-es-api-s-de-biometria-comparar-comparar-1-1"
title: "Comparación Facial 1:1 — Endpoint"
sourcePath: "docs-es/api-s-de-biometria/comparar/comparar-1-1.mdx"
locale: "es"
category: "api-s-de-biometria"
tags:
  - "face-recognition"
  - "api-s-de-biometria"
endpoint: "/v2/face-recognition/compare"
sourceAnchor: "Endpoint"
slug: "/api-s-de-biometria/comparar/comparar-1-1"
url: "https://docs.verifik.co/verifik-es/api-s-de-biometria/comparar/comparar-1-1"
---

# Comparación Facial 1:1
**API path(s):** /v2/face-recognition/compare

## Endpoint

### Endpoint

```
POST https://api.verifik.co/v2/face-recognition/compare
```

Compara una imagen de prueba contra una o más imágenes de galería y retorna un puntaje de similitud. Usa `search_mode` para balancear velocidad y precisión.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `probe` | string[] | Sí | Array con al menos una cadena de imagen base64. |
| `gallery` | string[] | Sí | Array de cadenas de imagen base64 para comparar. |
| `search_mode` | string | Sí | Uno de `FAST` o `ACCURATE`. |
| `cropFace` | boolean | No | Si es compatible, intenta recortar caras antes de la comparación. |

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
      probe: [""],
      gallery: ["", ""],
      search_mode: "ACCURATE"
    }),
  });
  console.log(await res.json());
}

run();
```

### Respuesta

  

```json
{
  "id": "AB12C",
  "data": {
    "score": 0.91
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

### Notas

- `probe` y `gallery` deben ser cadenas base64; las imágenes más cortas que ~100 caracteres son rechazadas con `412:only_images_in_base64`.
- `search_mode` debe ser `FAST` o `ACCURATE` (requerido por validación).
