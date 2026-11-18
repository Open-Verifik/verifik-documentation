---
id: "es-docs-es-biometrics-compare-live-endpoint"
title: "Comparación Facial (En Vivo) — Endpoint"
sourcePath: "docs-es/biometrics/compare-live.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/compare-live"
sourceAnchor: "Endpoint"
slug: "/comparar-en-vivo"
url: "https://docs.verifik.co/verifik-es/comparar-en-vivo"
---

# Comparación Facial (En Vivo)
**API path(s):** /v2/face-recognition/compare-live

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/compare-live
```

Compara una imagen de prueba en vivo contra una galería y realiza validación de vitalidad en la prueba. Tanto el umbral de comparación como el de vitalidad son configurables.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `probe` | string | Sí | Cadena de imagen base64 para la captura en vivo. |
| `gallery` | string[] | Sí | Array de cadenas de imagen base64 para comparar. |
| `os` | string | Sí | Origen de captura. Sugerido: `DESKTOP`, `IOS`, `ANDROID`. |
| `search_mode` | string | Sí | Uno de `FAST` o `ACCURATE`. |
| `liveness_min_score` | number | Sí | Umbral de vitalidad (0.52–1.0). |
| `compare_min_score` | number | No | Umbral de comparación opcional (0.67–0.95). |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/compare-live", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      probe: "",
      gallery: [""],
      os: "DESKTOP",
      search_mode: "ACCURATE",
      liveness_min_score: 0.65,
      compare_min_score: 0.8
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "",
    "gallery" => [""],
    "os" => "DESKTOP",
    "search_mode" => "FAST",
    "liveness_min_score" => 0.65,
    "compare_min_score" => 0.8
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/compare-live"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "probe": "",
    "gallery": [""],
    "os": "DESKTOP",
    "search_mode": "FAST",
    "liveness_min_score": 0.65,
    "compare_min_score": 0.8
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
        "probe": "",
        "gallery": []string{""},
        "os": "DESKTOP",
        "search_mode": "ACCURATE",
        "liveness_min_score": 0.65,
        "compare_min_score": 0.8,
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/compare-live", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
