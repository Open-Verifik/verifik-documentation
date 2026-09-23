---
id: "en-docs-resources-project-flows-project-flows-delete-endpoint"
title: "Delete Project Flow — Endpoint"
sourcePath: "docs/resources/project-flows/project-flows-delete.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
endpoints:
  - "/v3/project-flows/${flowid}"
  - "/v3/project-flows/%s"
  - "/v3/project-flows/{flow_id}"
  - "/v3/project-flows/{id}"
sourceAnchor: "Endpoint"
---

# Delete Project Flow
**API path(s):** /v3/project-flows/${flowid}, /v3/project-flows/%s, /v3/project-flows/{flow_id}, /v3/project-flows/{id}

## Endpoint

```
DELETE https://api.verifik.co/v3/project-flows/{id}
```

Permanently delete a project flow and all its associated configuration. This action cannot be undone.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | The unique identifier of the project flow to delete |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const flowId = "64a1b2c3d4e5f6789012346";
  const res = await fetch(`https://api.verifik.co/v3/project-flows/${flowId}`, {
    method: "DELETE",
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

flow_id = "64a1b2c3d4e5f6789012346"
url = f"https://api.verifik.co/v3/project-flows/{flow_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
r = requests.delete(url, headers=headers)
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
    flowId := "64a1b2c3d4e5f6789012346"
    url := fmt.Sprintf("https://api.verifik.co/v3/project-flows/%s", flowId)
    req, _ := http.NewRequest("DELETE", url, nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
