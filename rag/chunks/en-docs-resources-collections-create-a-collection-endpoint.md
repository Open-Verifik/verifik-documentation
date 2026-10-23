---
id: "en-docs-resources-collections-create-a-collection-endpoint"
title: "Create a Collection — Endpoint"
sourcePath: "docs/resources/collections/create-a-collection.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/collections"
sourceAnchor: "Endpoint"
slug: "/resources/create-a-collection"
url: "https://docs.verifik.co/resources/create-a-collection"
---

# Create a Collection
**API path(s):** /v2/face-recognition/collections

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/collections
```

Create a new collection for storing faces generated using Verifik's Life Detection services. Collections are required for the majority of biometric services.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | Yes | Display name for the collection |
| `description` | string | No | Optional description |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/collections", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      name: "Test Example",
      description: "Example on how to create a collection",
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "Test Example",
    "description" => "Example on how to create a collection"
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/collections"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "name": "Test Example",
    "description": "Example on how to create a collection"
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
    payload, _ := json.Marshal(map[string]string{
        "name":        "Test Example",
        "description": "Example on how to create a collection",
    })
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/collections", bytes.NewReader(payload))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
