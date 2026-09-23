---
id: "en-docs-biometrics-compare-endpoint"
title: "Face Comparison — Endpoint"
sourcePath: "docs/biometrics/compare.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "app-registrations"
  - "face-recognition"
  - "face-verifications"
endpoints:
  - "/v2/app-registrations/:id?populates[]=comparefaceverification"
  - "/v2/face-recognition/compare"
  - "/v2/face-verifications/:id"
sourceAnchor: "Endpoint"
slug: "/biometrics/compare"
url: "https://docs.verifik.co/biometrics/compare"
---

# Face Comparison
**API path(s):** /v2/app-registrations/:id?populates[]=comparefaceverification, /v2/face-recognition/compare, /v2/face-verifications/:id

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/compare
```

Compares a probe image against one or more gallery images and returns a similarity score. Use `search_mode` to balance speed and accuracy.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `probe` | string[] | Yes | Array with at least one base64 image string. |
| `gallery` | string[] | Yes | Array of base64 image strings to compare against. |
| `search_mode` | string | Yes | One of `FAST` or `ACCURATE`. |
| `compare_min_score` | number | No | Pass threshold for the comparison score (`0.67`–`0.95`). Default: `0.85`. |

### Image requirements

Match scores degrade when either face is small, cropped, heavily rotated or occluded. Comparison is more forgiving than liveness, but the same capture guidance still raises your match rates.

See [Face Image Requirements](/biometrics/face-image-requirements) for the capture rules and threshold reference shared by the comparison, liveness and search endpoints.

### Request

  

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
