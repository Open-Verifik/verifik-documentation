---
id: "en-docs-biometrics-search-live-face-endpoint"
title: "Face Search 1:N (Live) — Endpoint"
sourcePath: "docs/biometrics/search-live-face.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search-live-face"
sourceAnchor: "Endpoint"
---

# Face Search 1:N (Live)
**API path(s):** /v2/face-recognition/search-live-face

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/search-live-face
```

Runs liveness on a single probe image and, if passed, performs 1:N search in a collection.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | string | Yes | Base64 image string. |
| `collection_id` | string | No | Restrict search to this collection. |
| `os` | string | Yes | `ANDROID`, `IOS`, or `DESKTOP`. |
| `liveness_min_score` | number | Yes | Liveness threshold (0.5–1.0). |
| `min_score` | number | Yes | Match threshold (0.5–1.0). |
| `search_mode` | string | Yes | One of `FAST` or `ACCURATE`. |

### Image requirements

This endpoint runs a liveness check as well as a search, so the stricter liveness capture rules apply: a single fully visible face, a face box of at least `224x224` pixels, at least 25 pixels of border padding, at least 80 pixels between the pupils, and no more than ±30 degrees of pitch or yaw.

See [Face Image Requirements](/biometrics/face-image-requirements) for the full rules, the rejection reason codes and the threshold reference.

### Request

  

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
