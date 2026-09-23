---
id: "en-docs-resources-persons-delete-a-person-endpoint"
title: "Delete a Person — Endpoint"
sourcePath: "docs/resources/persons/delete-a-person.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/persons"
sourceAnchor: "Endpoint"
slug: "/resources/persons/delete-a-person"
url: "https://docs.verifik.co/resources/persons/delete-a-person"
---

# Delete a Person
**API path(s):** /v2/face-recognition/persons

## Endpoint

```
DELETE https://api.verifik.co/v2/face-recognition/persons/{id}
```

Removes a person (and associated face data) from the system. With optional query **`collection`**, the API may remove the person from that collection only instead of deleting the entire record when other collections remain.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Person ID in the URL path (`/persons/{id}`). |
| `collection` | string | No | If set, may detach the person from this collection only (behavior when other collections exist is server-defined). |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const id = "person_123456789";
  const res = await fetch(`https://api.verifik.co/v2/face-recognition/persons/${id}`, {
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

person_id = "person_123456789"
url = f"https://api.verifik.co/v2/face-recognition/persons/{person_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
r = requests.delete(url, headers=headers)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "io"
    "net/http"
    "os"
)

func main() {
    id := "person_123456789"
    url := "https://api.verifik.co/v2/face-recognition/persons/" + id
    req, _ := http.NewRequest("DELETE", url, nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}
```
