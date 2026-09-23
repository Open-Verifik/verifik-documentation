---
id: "es-docs-es-check-list-listar-check-lists-request-2"
title: "Listar checklists — Request"
sourcePath: "docs-es/check-list/listar-check-lists.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-lists?page=1&perpage=20&search=colombia"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists?page=1&perpage=20&search=colombia"
sourceAnchor: "Request"
slug: "/check-list/listar-check-lists"
url: "https://docs.verifik.co/verifik-es/check-list/listar-check-lists"
---

# Listar checklists
**API path(s):** /v2/check-lists, /v2/check-lists?page=1&perpage=20&search=colombia

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
    const res = await fetch("https://api.verifik.co/v2/check-lists?page=1&perPage=20&search=Colombia", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
        },
    });
    console.log(await res.json());
}

run();
```

  
  

```php

  

```python

url = "https://api.verifik.co/v2/check-lists"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {"page": 1, "perPage": 20, "search": "Colombia"}
r = requests.get(url, params=params, headers=headers)
print(r.json())
```

  
  

```go
package main

    "encoding/json"
    "fmt"
    "net/http"
    "os"
)

func main() {
    req, _ := http.NewRequest("GET", "https://api.verifik.co/v2/check-lists?page=1&perPage=20&search=Colombia", nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```

### Response

  

```json
{
    "data": [
        {
            "_id": "6aa224c87034a338385c28c0",
            "client": "507f1f77bcf86cd799439013",
            "name": "KYC Colombia",
            "countries": ["Colombia", "Chile"],
            "domains": ["people"],
            "featureCodes": ["co-cedula"],
            "status": "draft",
            "createdAt": "2026-09-10T03:32:00.000Z",
            "updatedAt": "2026-09-10T03:33:00.000Z"
        }
    ],
    "total": 1,
    "limit": 20,
    "page": 1,
    "pages": 1
}
```

  
  

```json
{
    "data": [
        {
            "_id": "6aa224c87034a338385c28c0",
            "client": "507f1f77bcf86cd799439013",
            "name": "KYC Colombia",
            "countries": ["Colombia", "Chile"],
            "domains": ["people"],
            "featureCodes": ["co-cedula"],
            "status": "draft",
            "createdAt": "2026-09-10T03:32:00.000Z",
            "updatedAt": "2026-09-10T03:33:00.000Z"
        }
    ]
}
```

  
  

```json
{
    "message": "Client context required",
    "code": "Forbidden"
}
```
