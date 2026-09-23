---
id: "en-docs-biometrics-search-crops-endpoint"
title: "Face Search 1:N (Crops) — Endpoint"
sourcePath: "docs/biometrics/search-crops.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoints:
  - "/v2/face-recognition/search"
  - "/v2/face-recognition/search/crops"
sourceAnchor: "Endpoint"
slug: "/biometrics/search-crops"
url: "https://docs.verifik.co/biometrics/search-crops"
---

# Face Search 1:N (Crops)
**API path(s):** /v2/face-recognition/search, /v2/face-recognition/search/crops

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/search/crops
```

Performs **1:N face search** using **cropped face images** instead of full frames. Use this when you only have tight face crops (for example after detection or from a low-resolution pipeline). Validation requires a **higher minimum score** than the standard [Face Search](/biometrics/search) endpoint (`min_score` **0.5–1** here vs **0.2–1** on `/search`).

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `images` | string[] | Yes | Base64 face crops and/or **HTTPS image URLs** (same subject; small crops work best). |
| `collection_id` | string | No | Restrict search to this collection. |
| `max_results` | number | No | Maximum results to return. Default `10`, up to `100`. |
| `min_score` | number | Yes | Match threshold **0.5–1**. |
| `search_mode` | string | Yes | One of `FAST` or `ACCURATE`. |

### Image requirements

Results are ranked by descending similarity score, and only entries above `min_score` are returned. Recall depends on the quality of each crop: a face that is small, heavily rotated or occluded will match poorly even against a good enrolment.

See [Face Image Requirements](/biometrics/face-image-requirements) for the capture rules and threshold reference shared by the search, liveness and comparison endpoints.

### Request

  

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
      max_results: 10,
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
        "images":          []string{""},
        "collection_id":   "",
        "min_score":       0.7,
        "search_mode":     "ACCURATE",
        "max_results":     10,
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
