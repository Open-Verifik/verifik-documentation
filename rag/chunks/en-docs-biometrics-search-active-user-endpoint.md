---
id: "en-docs-biometrics-search-active-user-endpoint"
title: "Face Search 1:N (Active User) — Endpoint"
sourcePath: "docs/biometrics/search-active-user.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search-active-user"
sourceAnchor: "Endpoint"
---

# Face Search 1:N (Active User)
**API path(s):** /v2/face-recognition/search-active-user

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/search-active-user
```

Performs 1:N search using a single probe image without liveness. Intended for active-user verification flows.

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
| `min_score` | number | Yes | Match threshold (0.5–1.0). |
| `search_mode` | string | Yes | One of `FAST` or `ACCURATE`. |

### Image requirements

Recall depends on the quality of the probe image: a face that is small, cropped, heavily rotated or occluded will match poorly even against a good enrolment.

See [Face Image Requirements](/biometrics/face-image-requirements) for the capture rules and threshold reference shared by the search, liveness and comparison endpoints.

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/search-active-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      image: "",
      collection_id: "",
      os: "DESKTOP",
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

url = "https://api.verifik.co/v2/face-recognition/search-active-user"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "image": "",
    "collection_id": "",
    "os": "DESKTOP",
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
        "min_score": 0.7,
        "search_mode": "ACCURATE",
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/search-active-user", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
