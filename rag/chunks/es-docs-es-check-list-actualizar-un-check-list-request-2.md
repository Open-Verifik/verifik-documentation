---
id: "es-docs-es-check-list-actualizar-un-check-list-request-2"
title: "Actualizar una checklist — Request"
sourcePath: "docs-es/check-list/actualizar-un-check-list.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists/{id}"
sourceAnchor: "Request"
slug: "/check-list/actualizar-un-check-list"
url: "https://docs.verifik.co/verifik-es/check-list/actualizar-un-check-list"
---

# Actualizar una checklist
**API path(s):** /v2/check-lists, /v2/check-lists/{id}

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
    const id = "6aa224c87034a338385c28c0";
    const res = await fetch(`https://api.verifik.co/v2/check-lists/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
        },
        body: JSON.stringify({
            featureCodes: ["co-cedula", "cl-rut"],
            domains: ["people"],
        }),
    });
    console.log(await res.json());
}

run();
```

  
  

```php
 ["co-cedula", "cl-rut"],
    "domains" => ["people"]
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
echo curl_exec($ch);
```

  
  

```python

check_list_id = "6aa224c87034a338385c28c0"
url = f"https://api.verifik.co/v2/check-lists/{check_list_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "featureCodes": ["co-cedula", "cl-rut"],
    "domains": ["people"],
}
r = requests.put(url, json=payload, headers=headers)
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
    id := "6aa224c87034a338385c28c0"
    body, _ := json.Marshal(map[string]interface{}{
        "featureCodes": []string{"co-cedula", "cl-rut"},
        "domains":      []string{"people"},
    })
    req, _ := http.NewRequest("PUT", "https://api.verifik.co/v2/check-lists/"+id, bytes.NewReader(body))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
