---
id: "es-docs-es-resources-registros-aplicacion-listar-todos-los-registros-aplicacion-request-2"
title: "Listar Registros de Aplicación — Request"
sourcePath: "docs-es/resources/registros-aplicacion/listar-todos-los-registros-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations"
sourceAnchor: "Request"
---

# Listar Registros de Aplicación
**API path(s):** /v2/app-registrations

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
    const res = await fetch("https://api.verifik.co/v2/app-registrations?page=1&limit=10&where_status=ONGOING", {
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

url = "https://api.verifik.co/v2/app-registrations"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {"page": 1, "limit": 10, "where_status": "ONGOING"}
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
    req, _ := http.NewRequest("GET", "https://api.verifik.co/v2/app-registrations?page=1&limit=10&where_status=ONGOING", nil)
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
            "_id": "674de8df21c72be3cc42b8a7",
            "client": "507f1f77bcf86cd799439013",
            "project": "507f1f77bcf86cd799439011",
            "projectFlow": "507f1f77bcf86cd799439015",
            "status": "ONGOING",
            "email": "user@example.com",
            "phone": "1234567890",
            "countryCode": "+1",
            "currentStep": "1",
            "language": "en",
            "createdAt": "2024-12-02T17:05:36.788Z",
            "updatedAt": "2024-12-02T17:05:36.788Z"
        }
    ],
    "total": 1,
    "limit": 10,
    "page": 1,
    "pages": 1
}
```

  
  

```json
{
    "message": "Access forbidden",
    "code": "Forbidden"
}
```

  
  

```json
{
    "message": "Invalid parameter: limit must be between 1 and 100",
    "code": "MissingParameter"
}
```
