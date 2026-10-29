---
id: "es-docs-es-check-list-crear-un-check-list-request-2"
title: "Crear una checklist — Request"
sourcePath: "docs-es/check-list/crear-un-check-list.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoint: "/v2/check-lists"
sourceAnchor: "Request"
slug: "/check-list/crear-un-check-list"
url: "https://docs.verifik.co/verifik-es/check-list/crear-un-check-list"
---

# Crear una checklist
**API path(s):** /v2/check-lists

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
    const res = await fetch("https://api.verifik.co/v2/check-lists", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
        },
        body: JSON.stringify({
            name: "KYC Colombia",
            countries: ["Colombia"],
            domains: [],
            featureCodes: [],
            status: "draft",
        }),
    });
    console.log(await res.json());
}

run();
```

  
  

```php
 "KYC Colombia",
    "countries" => ["Colombia"],
    "domains" => [],
    "featureCodes" => [],
    "status" => "draft"
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
echo curl_exec($ch);
```

  
  

```python

url = "https://api.verifik.co/v2/check-lists"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "name": "KYC Colombia",
    "countries": ["Colombia"],
    "domains": [],
    "featureCodes": [],
    "status": "draft",
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
    body, _ := json.Marshal(map[string]interface{}{
        "name":         "KYC Colombia",
        "countries":    []string{"Colombia"},
        "domains":      []string{},
        "featureCodes": []string{},
        "status":       "draft",
    })
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/check-lists", bytes.NewReader(body))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
