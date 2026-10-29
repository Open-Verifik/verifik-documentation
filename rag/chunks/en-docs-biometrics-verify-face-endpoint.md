---
id: "en-docs-biometrics-verify-face-endpoint"
title: "Verify Face (1:1 vs enrolled person) — Endpoint"
sourcePath: "docs/biometrics/verify-face.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/verify"
sourceAnchor: "Endpoint"
slug: "/biometrics/verify-face"
url: "https://docs.verifik.co/biometrics/verify-face"
---

# Verify Face (1:1 vs enrolled person)
**API path(s):** /v2/face-recognition/verify

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/verify
```

Verifies that one or more probe face images match a **specific enrolled person** identified by `id` (MongoDB person `_id`). Returns the enrolled profile and a **similarity score** when the match meets `min_score`. Use optional `collection_id` to scope the check.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | MongoDB `_id` of the enrolled person to verify against. |
| `images` | string[] | Yes | Base64 face images (raw base64; same subject as the enrolled person). |
| `min_score` | number | Yes | Match threshold between **0.5** and **1**. |
| `search_mode` | string | Yes | `FAST` or `ACCURATE`. |
| `collection_id` | string | No | Optional scope when the person belongs to multiple collections. |

### Request

  

```javascript
const fetch = require("node-fetch");

const personId = "68defec6a9a7b4933d5652f3";

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      id: personId,
      images: ["", ""],
      min_score: 0.75,
      search_mode: "FAST",
      collection_id: "",
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 $personId,
    "images" => ["", ""],
    "min_score" => 0.75,
    "search_mode" => "FAST",
    "collection_id" => "",
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

person_id = "68defec6a9a7b4933d5652f3"
url = "https://api.verifik.co/v2/face-recognition/verify"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
payload = {
    "id": person_id,
    "images": ["", ""],
    "min_score": 0.75,
    "search_mode": "FAST",
    "collection_id": "",
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
    personId := "68defec6a9a7b4933d5652f3"
    payload, _ := json.Marshal(map[string]interface{}{
        "id":             personId,
        "images":         []string{"", ""},
        "min_score":      0.75,
        "search_mode":    "FAST",
        "collection_id":  "",
    })
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/verify", bytes.NewReader(payload))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
