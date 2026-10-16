---
id: "es-docs-es-api-s-de-biometria-busqueda-buscar-1-n-or-crop-recortar"
title: "Búsqueda Facial 1:N o Crop (Recortar) — Endpoint"
sourcePath: "docs-es/api-s-de-biometria/busqueda/buscar-1-n-or-crop-recortar.mdx"
locale: "es"
category: "api-s-de-biometria"
tags:
  - "face-recognition"
  - "api-s-de-biometria"
endpoint: "/v2/face-recognition/search/crops"
sourceAnchor: "Endpoint"
slug: "/api-s-de-biometria/busqueda/buscar-1-n-or-crop-recortar"
url: "https://docs.verifik.co/verifik-es/api-s-de-biometria/busqueda/buscar-1-n-or-crop-recortar"
---

# Búsqueda Facial 1:N o Crop (Recortar)
**API path(s):** /v2/face-recognition/search/crops

## Endpoint

### Endpoint

```
POST https://api.verifik.co/v2/face-recognition/search/crops
```

Realiza búsqueda 1:N optimizada para pequeños recortes faciales, ideal cuando no puedes escalar imágenes.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `images` | string[] | Sí | Array de pequeños recortes faciales base64 (ej., ≤120x120). |
| `collection_id` | string | No | Restringir búsqueda a esta colección. |
| `max_results` | number | No | Máximo de resultados a retornar. |
| `min_score` | number | Sí | Umbral de coincidencia (0.5–1.0). |
| `search_mode` | string | Sí | Uno de `FAST` o `ACCURATE`. |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/search/crops", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      images: [""],
      collection_id: "",
      min_score: 0.7,
      search_mode: "FAST",
      max_results: 10
    }),
  });
  console.log(await res.json());
}

run();
```

### Respuesta

  

```json
{
  "id": "SC01",
  "data": [
    { "id": "person_id", "score": 0.91 }
  ],
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

### Notas

- Proporciona caras fuertemente recortadas; las imágenes sobredimensionadas son menos efectivas aquí.
