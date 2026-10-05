---
id: "es-docs-es-api-s-de-biometria-busqueda-busqueda-1-n"
title: "Búsqueda Facial 1:N — Endpoint"
sourcePath: "docs-es/api-s-de-biometria/busqueda/busqueda-1-n.md"
locale: "es"
category: "api-s-de-biometria"
tags:
  - "face-recognition"
  - "api-s-de-biometria"
endpoint: "/v2/face-recognition/search"
sourceAnchor: "Endpoint"
slug: "/api-s-de-biometria/busqueda/busqueda-1-n"
url: "https://docs.verifik.co/verifik-es/api-s-de-biometria/busqueda/busqueda-1-n"
---

# Búsqueda Facial 1:N
**API path(s):** /v2/face-recognition/search

## Endpoint

```
https://api.verifik.co/v2/face-recognition/search
```

Busca una o más imágenes contra una colección facial y retorna coincidencias potenciales clasificadas por similitud.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `images` | string[] | Sí | Array de imágenes base64 (máximo sugerido: 3) de la misma persona. |
| `collection_id` | string | No | Restringir búsqueda a esta colección. |
| `max_results` | number | No | Máximo de resultados a retornar. |
| `min_score` | number | Sí | Umbral de coincidencia (0.2–1.0). |
| `search_mode` | string | Sí | Uno de `FAST` o `ACCURATE`. |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/search", {
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
  "id": "SRCH1",
  "data": [
    {
      "id": "person_id",
      "name": "John Doe",
      "score": 0.93,
      "thumbnails": [{ "id": "thumb_id", "thumbnail": "" }]
    }
  ],
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

### Notas

- Proporciona 1–3 imágenes de la misma persona en `images` para mejor recuperación.
- Usa `ACCURATE` para mayor precisión a costa de latencia; usa `FAST` para velocidad.
