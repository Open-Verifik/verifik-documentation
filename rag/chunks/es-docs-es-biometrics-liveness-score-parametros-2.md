---
id: "es-docs-es-biometrics-liveness-score-parametros-2"
title: "Puntaje de Vitalidad — Parámetros"
sourcePath: "docs-es/biometrics/liveness-score.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoints:
  - "/v2/face-recognition/liveness"
  - "/v2/face-recognition/liveness-score"
sourceAnchor: "Parámetros"
slug: "/puntaje-vitalidad"
url: "https://docs.verifik.co/verifik-es/puntaje-vitalidad"
---

# Puntaje de Vitalidad
**API path(s):** /v2/face-recognition/liveness, /v2/face-recognition/liveness-score

## Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `os` | string | Sí | Origen de captura. Sugerido: `DESKTOP`, `IOS`, `ANDROID`. |
| `image` | string | Sí | Datos de imagen Base64 (data URI o base64 crudo). Si se proporciona una URL `https`, será descargada y convertida internamente. |
| `collection_id` | string | No | Colección opcional para asociar con el intento de vitalidad. |
| `liveness_min_score` | number | No | Umbral para aprobado/rechazado. Por defecto: `0.6`. |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/liveness-score", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      os: "DESKTOP",
      image: "",
      liveness_min_score: 0.6,
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "DESKTOP",
    "image" => "",
    "liveness_min_score" => 0.6
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/liveness-score"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "os": "DESKTOP",
    "image": "",
    "liveness_min_score": 0.6
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
        "os": "DESKTOP",
        "image": "",
        "liveness_min_score": 0.6,
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/liveness-score", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
