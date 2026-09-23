---
id: "en-docs-resources-projects-projects-delete-endpoint"
title: "Delete Project — Endpoint"
sourcePath: "docs/resources/projects/projects-delete.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
endpoints:
  - "/v3/projects/${projectid}"
  - "/v3/projects/%s"
  - "/v3/projects/{id}"
  - "/v3/projects/{project_id}"
sourceAnchor: "Endpoint"
---

# Delete Project
**API path(s):** /v3/projects/${projectid}, /v3/projects/%s, /v3/projects/{id}, /v3/projects/{project_id}

## Endpoint

```
DELETE https://api.verifik.co/v3/projects/{id}
```

Permanently delete a project and all its associated project flows. This action cannot be undone.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | The unique identifier of the project to delete |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const projectId = "64a1b2c3d4e5f6789012345";
  const res = await fetch(`https://api.verifik.co/v3/projects/${projectId}`, {
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

project_id = "64a1b2c3d4e5f6789012345"
url = f"https://api.verifik.co/v3/projects/{project_id}"
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
    projectId := "64a1b2c3d4e5f6789012345"
    url := fmt.Sprintf("https://api.verifik.co/v3/projects/%s", projectId)
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
