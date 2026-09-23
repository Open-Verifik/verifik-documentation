---
id: "es-docs-es-resources-colecciones-crear-una-coleccion-endpoint"
title: "Crear una Colección — Endpoint"
sourcePath: "docs-es/resources/colecciones/crear-una-coleccion.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/collections"
sourceAnchor: "Endpoint"
slug: "/resources/crear-una-coleccion"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-coleccion"
---

# Crear una Colección
**API path(s):** /v2/face-recognition/collections

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/collections
```

Crea una nueva colección para almacenar rostros generados utilizando los servicios de Detección de Vida de Verifik. Las colecciones son necesarias para la mayoría de los servicios biométricos.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `name` | string | Sí | Nombre visible de la colección |
| `description` | string | No | Descripción opcional |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/collections", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      name: "Ejemplo de prueba",
      description: "Ejemplo de cómo crear una colección",
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "Ejemplo de prueba",
    "description" => "Ejemplo de cómo crear una colección",
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/collections"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
payload = {
    "name": "Ejemplo de prueba",
    "description": "Ejemplo de cómo crear una colección",
}
r = requests.post(url, json=payload, headers=headers)
print(r.json())
```

  
  

```go
package main

    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
)

func main() {
    payload, _ := json.Marshal(map[string]string{
        "name":        "Ejemplo de prueba",
        "description": "Ejemplo de cómo crear una colección",
    })
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/collections", bytes.NewReader(payload))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
