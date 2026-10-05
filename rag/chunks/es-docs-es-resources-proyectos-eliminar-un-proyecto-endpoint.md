---
id: "es-docs-es-resources-proyectos-eliminar-un-proyecto-endpoint"
title: "Eliminar un proyecto — Endpoint"
sourcePath: "docs-es/resources/proyectos/eliminar-un-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Endpoint"
---

# Eliminar un proyecto

## Endpoint

```
DELETE https://api.verifik.co/v3/projects/{id}
```

Elimina permanentemente un proyecto y todos sus flujos asociados. Esta acción no se puede deshacer.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `id` | string | Sí | Identificador único del proyecto a eliminar |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const projectId = "64a1b2c3d4e5f6789012345";
  const res = await fetch(`https://api.verifik.co/v3/projects/${projectId}`, {
    method: "DELETE",
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

project_id = "64a1b2c3d4e5f6789012345"
url = f"https://api.verifik.co/v3/projects/{project_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
r = requests.delete(url, headers=headers)
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
    projectId := "64a1b2c3d4e5f6789012345"
    url := fmt.Sprintf("https://api.verifik.co/v3/projects/%s", projectId)
    req, _ := http.NewRequest("DELETE", url, nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
