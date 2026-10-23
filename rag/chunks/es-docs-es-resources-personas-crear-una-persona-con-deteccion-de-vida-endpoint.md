---
id: "es-docs-es-resources-personas-crear-una-persona-con-deteccion-de-vida-endpoint"
title: "Crear una Persona con Detección de Vida — Endpoint"
sourcePath: "docs-es/resources/personas/crear-una-persona-con-deteccion-de-vida.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/persons/search-live-face"
sourceAnchor: "Endpoint"
slug: "/resources/personas/crear-una-persona-con-deteccion-de-vida"
url: "https://docs.verifik.co/verifik-es/resources/personas/crear-una-persona-con-deteccion-de-vida"
---

# Crear una Persona con Detección de Vida
**API path(s):** /v2/face-recognition/persons/search-live-face

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/persons/search-live-face
```

Crea o actualiza una persona después de comprobar **liveness** en la(s) imagen(es) enviadas, ejecutar una **búsqueda por similitud** (`min_score`, `search_mode`) y la deduplicación asociada al **`collection_id`**. En producción, si ya existe un duplicado en esa colección, la API puede responder `409:duplicated_person`.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros (cuerpo JSON)

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `name` | string | Sí | Nombre completo (el servidor elimina dígitos del nombre) |
| `images` | string[] | Sí | Imágenes faciales en Base64 (sin prefijo `data:`) |
| `gender` | string | Sí | `M` o `F` |
| `date_of_birth` | string | Sí | Fecha de nacimiento según validación de Verifik (típicamente `YYYY-MM-DD`) |
| `nationality` | string | No | Nacionalidad opcional |
| `collection_id` | string | Sí | `_id` único de la colección de destino (y ámbito de duplicados) |
| `liveness_min_score` | number | Sí | Puntuación mínima de liveness entre **0.5** y **1** |
| `min_score` | number | Sí | Puntuación mínima para la búsqueda interna, entre **0.5** y **1** |
| `search_mode` | string | Sí | `FAST` o `ACCURATE` |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

const collectionId = "65b9592267cc4f096dbe743d";

async function run() {
  const res = await fetch(
    "https://api.verifik.co/v2/face-recognition/persons/search-live-face",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
      },
      body: JSON.stringify({
        name: "Jane Doe",
        gender: "F",
        date_of_birth: "1990-01-15",
        nationality: "CO",
        collection_id: collectionId,
        liveness_min_score: 0.65,
        min_score: 0.8,
        search_mode: "FAST",
        images: ["", ""],
      }),
    }
  );
  console.log(await res.json());
}

run();
```

  
  

```php
 "Jane Doe",
    "gender" => "F",
    "date_of_birth" => "1990-01-15",
    "nationality" => "CO",
    "collection_id" => $collectionId,
    "liveness_min_score" => 0.65,
    "min_score" => 0.8,
    "search_mode" => "FAST",
    "images" => ["", ""],
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

collection_id = "65b9592267cc4f096dbe743d"
url = "https://api.verifik.co/v2/face-recognition/persons/search-live-face"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
payload = {
    "name": "Jane Doe",
    "gender": "F",
    "date_of_birth": "1990-01-15",
    "nationality": "CO",
    "collection_id": collection_id,
    "liveness_min_score": 0.65,
    "min_score": 0.8,
    "search_mode": "FAST",
    "images": ["", ""],
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
    collectionId := "65b9592267cc4f096dbe743d"
    payload, _ := json.Marshal(map[string]interface{}{
        "name":                 "Jane Doe",
        "gender":               "F",
        "date_of_birth":        "1990-01-15",
        "nationality":          "CO",
        "collection_id":        collectionId,
        "liveness_min_score":   0.65,
        "min_score":            0.8,
        "search_mode":          "FAST",
        "images":               []string{"", ""},
    })
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/persons/search-live-face", bytes.NewReader(payload))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
