---
id: "es-docs-es-biometrics-search-live-face-endpoint"
title: "Búsqueda Facial 1:N (En Vivo) — Endpoint"
sourcePath: "docs-es/biometrics/search-live-face.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search-live-face"
sourceAnchor: "Endpoint"
slug: "/buscar-cara-en-vivo"
url: "https://docs.verifik.co/verifik-es/buscar-cara-en-vivo"
---

# Búsqueda Facial 1:N (En Vivo)
**API path(s):** /v2/face-recognition/search-live-face

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/search-live-face
```

Ejecuta detección de vitalidad en una sola imagen de prueba y, si pasa, realiza búsqueda 1:N en una colección.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | string | Sí | Cadena de imagen base64. |
| `collection_id` | string | No | Restringir búsqueda a esta colección. |
| `os` | string | Sí | `ANDROID`, `IOS`, o `DESKTOP`. |
| `liveness_min_score` | number | Sí | Umbral de vitalidad (0.5–1.0). |
| `min_score` | number | Sí | Umbral de coincidencia (0.5–1.0). |
| `search_mode` | string | Sí | Uno de `FAST` o `ACCURATE`. |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/search-live-face", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      image: "",
      collection_id: "",
      os: "DESKTOP",
      liveness_min_score: 0.6,
      min_score: 0.7,
      search_mode: "FAST"
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "",
    "collection_id" => "",
    "os" => "DESKTOP",
    "liveness_min_score" => 0.6,
    "min_score" => 0.7,
    "search_mode" => "ACCURATE"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/search-live-face"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "image": "",
    "collection_id": "",
    "os": "DESKTOP",
    "liveness_min_score": 0.6,
    "min_score": 0.7,
    "search_mode": "FAST"
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
    payload := map[string]interface{}{
        "image": "",
        "collection_id": "",
        "os": "DESKTOP",
        "liveness_min_score": 0.6,
        "min_score": 0.7,
        "search_mode": "ACCURATE",
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/search-live-face", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
