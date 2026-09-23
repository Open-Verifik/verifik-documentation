---
id: "es-docs-es-biometrics-compare-endpoint"
title: "Comparación Facial — Endpoint"
sourcePath: "docs-es/biometrics/compare.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "app-registrations"
  - "face-recognition"
  - "face-verifications"
endpoints:
  - "/v2/app-registrations/:id"
  - "/v2/face-recognition/compare"
  - "/v2/face-verifications/:id"
sourceAnchor: "Endpoint"
slug: "/comparar"
url: "https://docs.verifik.co/verifik-es/comparar"
---

# Comparación Facial
**API path(s):** /v2/app-registrations/:id, /v2/face-recognition/compare, /v2/face-verifications/:id

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/compare
```

Compara una imagen de prueba contra una o más imágenes de galería y retorna un puntaje de similitud. Usa `search_mode` para balancear velocidad y precisión.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `probe` | string[] | Sí | Array con al menos una cadena de imagen base64. |
| `gallery` | string[] | Sí | Array de cadenas de imagen base64 para comparar. |
| `search_mode` | string | Sí | Uno de `FAST` o `ACCURATE`. |
| `compare_min_score` | number | No | Umbral de aprobación del score de comparación (`0.67`–`0.95`). Por defecto: `0.85`. |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/compare", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      probe: [""];
      gallery: ["", ""];
      search_mode: "ACCURATE"
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 [""],
    "gallery" => ["", ""],
    "search_mode" => "FAST"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/compare"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "probe": [""],
    "gallery": ["", ""],
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
        "probe": []string{""},
        "gallery": []string{"", ""},
        "search_mode": "ACCURATE",
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/compare", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
