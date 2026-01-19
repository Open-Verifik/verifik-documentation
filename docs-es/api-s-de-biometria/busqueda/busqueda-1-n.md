---
id: busqueda-1-n
title: Búsqueda Facial 1:N
description: Buscar una cara en una colección (identificación 1:N)
slug: /api-s-de-biometria/busqueda/busqueda-1-n
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Endpoint

```
https://api.verifik.co/v2/face-recognition/search
```

Busca una o más imágenes contra una colección facial y retorna coincidencias potenciales clasificadas por similitud.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer <token>` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `images` | string[] | Sí | Array de imágenes base64 (máximo sugerido: 3) de la misma persona. |
| `collection_id` | string | No | Restringir búsqueda a esta colección. |
| `max_results` | number | No | Máximo de resultados a retornar. |
| `min_score` | number | Sí | Umbral de coincidencia (0.2–1.0). |
| `search_mode` | string | Sí | Uno de `FAST` o `ACCURATE`. |

### Solicitud

<Tabs>
  <TabItem value="node" label="Node.js">

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
      images: ["<base64>"],
      collection_id: "<collection_id>",
      min_score: 0.7,
      search_mode: "FAST",
      max_results: 10
    }),
  });
  console.log(await res.json());
}

run();
```

  </TabItem>
</Tabs>

### Respuesta

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "id": "SRCH1",
  "data": [
    {
      "id": "person_id",
      "name": "John Doe",
      "score": 0.93,
      "thumbnails": [{ "id": "thumb_id", "thumbnail": "<base64>" }]
    }
  ],
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

  </TabItem>
</Tabs>

### Notas

- Proporciona 1–3 imágenes de la misma persona en `images` para mejor recuperación.
- Usa `ACCURATE` para mayor precisión a costa de latencia; usa `FAST` para velocidad.
