---
id: "en-docs-biometrics-liveness-score-image-requirements-2"
title: "Liveness Score — Image requirements"
sourcePath: "docs/biometrics/liveness-score.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoints:
  - "/v2/face-recognition/liveness"
  - "/v2/face-recognition/liveness-score"
sourceAnchor: "Image requirements"
---

# Liveness Score
**API path(s):** /v2/face-recognition/liveness, /v2/face-recognition/liveness-score

## Image requirements

Liveness rejects unusable frames before scoring them, so capture quality drives your pass rate. The frame must contain a single fully visible face with a face box of at least `224x224` pixels, at least 25 pixels of padding from the image borders, at least 80 pixels between the pupils, and no more than ±30 degrees of pitch or yaw. Sunglasses and fish-eye lenses are not supported.

See [Face Image Requirements](/biometrics/face-image-requirements) for the full rules, the rejection reason codes and the guidance to show users for each one.

### Request

  

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
