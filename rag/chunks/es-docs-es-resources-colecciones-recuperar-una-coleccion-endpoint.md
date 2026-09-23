---
id: "es-docs-es-resources-colecciones-recuperar-una-coleccion-endpoint"
title: "Recuperar una Colección — Endpoint"
sourcePath: "docs-es/resources/colecciones/recuperar-una-coleccion.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/v2/face-recognition/collections/${collectionid}"
  - "/v2/face-recognition/collections/%s"
  - "/v2/face-recognition/collections/{collection_id}"
  - "/v2/face-recognition/collections/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/recuperar-una-coleccion"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-una-coleccion"
---

# Recuperar una Colección
**API path(s):** /v2/face-recognition/collections/${collectionid}, /v2/face-recognition/collections/%s, /v2/face-recognition/collections/{collection_id}, /v2/face-recognition/collections/{id}

## Endpoint

```
GET https://api.verifik.co/v2/face-recognition/collections/{id}
```

Obtén una colección usando su `_id` único. No lo confundas con el `code` (UUID) de la colección usado en otros flujos.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `id` | string (ruta) | Sí | Identificador único de la colección (`_id` en las respuestas) |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

const collectionId = "65b9592267cc4f096dbe743d";

async function run() {
  const res = await fetch(
    `https://api.verifik.co/v2/face-recognition/collections/${collectionId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
      },
    }
  );
  console.log(await res.json());
}

run();
```

  
  

```php

  

```python

collection_id = "65b9592267cc4f096dbe743d"
url = f"https://api.verifik.co/v2/face-recognition/collections/{collection_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
r = requests.get(url, headers=headers)
print(r.json())
```

  
  

```go
package main

    "encoding/json"
    "fmt"
    "net/http"
    "os"
)

func main() {
    collectionId := "65b9592267cc4f096dbe743d"
    url := fmt.Sprintf("https://api.verifik.co/v2/face-recognition/collections/%s", collectionId)
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
