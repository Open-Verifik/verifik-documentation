---
id: "es-docs-es-resources-colecciones-listar-todas-las-colecciones-endpoint"
title: "Listar Todas las Colecciones — Endpoint"
sourcePath: "docs-es/resources/colecciones/listar-todas-las-colecciones.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/collections"
sourceAnchor: "Endpoint"
slug: "/resources/colecciones/listar-todas-las-colecciones"
url: "https://docs.verifik.co/verifik-es/resources/colecciones/listar-todas-las-colecciones"
---

# Listar Todas las Colecciones
**API path(s):** /v2/face-recognition/collections

## Endpoint

```
GET https://api.verifik.co/v2/face-recognition/collections
```

Obtén todas las colecciones generadas por un cliente específico. El único parámetro requerido es enviar el token de acceso. Con esto, Verifik identificará las colecciones generadas por este usuario.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| — | — | — | Sin parámetros de ruta ni query. El alcance lo define el cliente del token Bearer. |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/collections", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
  });
  console.log(await res.json());
}

run();
```

  
  

```php

  

```python

url = "https://api.verifik.co/v2/face-recognition/collections"
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
    req, _ := http.NewRequest("GET", "https://api.verifik.co/v2/face-recognition/collections", nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
