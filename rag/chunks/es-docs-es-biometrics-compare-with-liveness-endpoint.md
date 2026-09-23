---
id: "es-docs-es-biometrics-compare-with-liveness-endpoint"
title: "Comparar con Detección de Vitalidad (Secuencial) — Endpoint"
sourcePath: "docs-es/biometrics/compare-with-liveness.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/compare-with-liveness"
sourceAnchor: "Endpoint"
slug: "/comparar-con-deteccion-vitalidad"
url: "https://docs.verifik.co/verifik-es/comparar-con-deteccion-vitalidad"
---

# Comparar con Detección de Vitalidad (Secuencial)
**API path(s):** /v2/face-recognition/compare-with-liveness

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/compare-with-liveness
```

Realiza la comparación primero y, si la comparación cumple con `compare_min_score` (o si no se proporciona), procede a la detección de vitalidad en la prueba con `liveness_min_score`.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `probe` | string | Sí | Cadena de imagen base64 para la captura en vivo. |
| `gallery` | string[] | Sí | Array de cadenas de imagen base64 para comparar. Se admiten URLs y serán descargadas y convertidas internamente. |
| `search_mode` | string | Sí | Uno de `FAST` o `ACCURATE`. |
| `liveness_min_score` | number | No | Umbral de vitalidad; por defecto 0.6 si no se proporciona. |
| `compare_min_score` | number | No | Umbral de comparación opcional (`0.67`–`0.95`). El valor por defecto en SmartEnroll hospedado es `0.85`. |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/compare-with-liveness", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      probe: "",
      gallery: [""],
      search_mode: "FAST",
      liveness_min_score: 0.6,
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
    "search_mode" => "ACCURATE",
    "liveness_min_score" => 0.6,
    "compare_min_score" => 0.8
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/compare-with-liveness"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "probe": "",
    "gallery": [""],
    "search_mode": "FAST",
    "liveness_min_score": 0.6,
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
        "search_mode": "FAST",
        "liveness_min_score": 0.6,
        "compare_min_score": 0.8,
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/compare-with-liveness", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
