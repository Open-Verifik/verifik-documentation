---
id: "en-docs-biometrics-search-endpoint"
title: "Face Search (1:N) — Endpoint"
sourcePath: "docs/biometrics/search.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search"
sourceAnchor: "Endpoint"
---

# Face Search (1:N)
**API path(s):** /v2/face-recognition/search

## Endpoint

```
https://api.verifik.co/v2/face-recognition/search
```

Searches one or more images against a face collection and returns potential matches ranked by similarity.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `images` | string[] | Yes | Array of base64 images (max suggested: 3) of the same person. |
| `collection_id` | string | No | Restrict search to this collection. |
| `max_results` | number | No | Maximum results to return. Default `10`, up to `100`. |
| `min_score` | number | Yes | Match threshold (0.2–1.0). No default — the request fails with `409 MissingParameter` if omitted. |
| `search_mode` | string | Yes | One of `FAST` or `ACCURATE`. |

### Image requirements

Results are ranked by descending similarity score, and only entries above `min_score` are returned. Recall depends on the quality of the probe image: a face that is small, cropped, heavily rotated or occluded will match poorly even against a good enrolment.

See [Face Image Requirements](/biometrics/face-image-requirements) for the capture rules and threshold reference shared by the search, liveness and comparison endpoints.

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/search", {
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

url = "https://api.verifik.co/v2/face-recognition/search"
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
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/search", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
