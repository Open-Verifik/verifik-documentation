---
id: "es-docs-es-biometrics-search-crops-endpoint"
title: "Búsqueda Facial 1:N (Recortes) — Endpoint"
sourcePath: "docs-es/biometrics/search-crops.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search/crops"
sourceAnchor: "Endpoint"
slug: "/buscar-recortes"
url: "https://docs.verifik.co/verifik-es/buscar-recortes"
---

# Búsqueda Facial 1:N (Recortes)
**API path(s):** /v2/face-recognition/search/crops

## Endpoint

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

  
  

```php
 [""],
    "collection_id" => "",
    "min_score" => 0.7,
    "search_mode" => "ACCURATE",
    "max_results" => 10
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/search/crops"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "images": [""],
    "collection_id": "",
    "min_score": 0.7,
    "search_mode": "FAST",
    "max_results": 10
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
        "images": []string{""},
        "collection_id": "",
        "min_score": 0.7,
        "search_mode": "ACCURATE",
        "max_results": 10,
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/search/crops", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
