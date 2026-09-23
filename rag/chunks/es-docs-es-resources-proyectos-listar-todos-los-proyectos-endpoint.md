---
id: "es-docs-es-resources-proyectos-listar-todos-los-proyectos-endpoint"
title: "Listar proyectos — Endpoint"
sourcePath: "docs-es/resources/proyectos/listar-todos-los-proyectos.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Endpoint"
slug: "/resources/proyectos/listar-todos-los-proyectos"
url: "https://docs.verifik.co/verifik-es/resources/proyectos/listar-todos-los-proyectos"
---

# Listar proyectos

## Endpoint

```
GET https://api.verifik.co/v3/projects
```

Recupera una lista paginada de todos los proyectos asociados al usuario autenticado.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `page` | integer | No | Número de página (defecto: 1) |
| `limit` | integer | No | Elementos por página (defecto: 10, máx: 100) |
| `like_name` | string | No | Búsqueda por nombre de proyecto |
| `where_status` | string | No | Filtra por estado (`draft`, `active`, `paused`) |
| `where_target` | string | No | Filtra por objetivo (`personal`, `business`) |
| `where_createdAt` | string | No | Filtra por fecha (ISO 8601) |
| `in_status` | array | No | Filtra por múltiples estados (`["active", "paused"]`) |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v3/projects?page=1&limit=10", {
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

url = "https://api.verifik.co/v3/projects"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {"page": 1, "limit": 10}
r = requests.get(url, params=params, headers=headers)
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
    req, _ := http.NewRequest("GET", "https://api.verifik.co/v3/projects?page=1&limit=10", nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
