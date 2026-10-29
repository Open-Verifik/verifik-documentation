---
id: "en-docs-biometrics-compare-live-endpoint"
title: "Face Comparison (Live) — Endpoint"
sourcePath: "docs/biometrics/compare-live.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/compare-live"
sourceAnchor: "Endpoint"
---

# Face Comparison (Live)
**API path(s):** /v2/face-recognition/compare-live

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/compare-live
```

Compares a live probe image against a gallery and performs liveness validation on the probe. Both comparison and liveness thresholds are configurable.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `probe` | string | Yes | Base64 image string for the live capture. |
| `gallery` | string[] | Yes | Array of base64 image strings to compare against. |
| `os` | string | Yes | Origin of capture. Suggested: `DESKTOP`, `IOS`, `ANDROID`. |
| `search_mode` | string | Yes | One of `FAST` or `ACCURATE`. |
| `liveness_min_score` | number | Yes | Liveness threshold (0.52–1.0). |
| `compare_min_score` | number | No | Optional comparison threshold (0.67–0.95). |

### Image requirements

This endpoint runs a liveness check as well as a comparison, so the stricter liveness capture rules apply to the live frame: a single fully visible face, a face box of at least `224x224` pixels, at least 25 pixels of border padding, at least 80 pixels between the pupils, and no more than ±30 degrees of pitch or yaw.

See [Face Image Requirements](/biometrics/face-image-requirements) for the full rules, the rejection reason codes and the threshold reference.

### Request

  

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
