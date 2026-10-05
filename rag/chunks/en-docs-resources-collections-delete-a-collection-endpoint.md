---
id: "en-docs-resources-collections-delete-a-collection-endpoint"
title: "Delete a Collection — Endpoint"
sourcePath: "docs/resources/collections/delete-a-collection.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/collections"
sourceAnchor: "Endpoint"
slug: "/resources/delete-a-collection"
url: "https://docs.verifik.co/resources/delete-a-collection"
---

# Delete a Collection
**API path(s):** /v2/face-recognition/collections

## Endpoint

```
DELETE https://api.verifik.co/v2/face-recognition/collections/{id}
```

Deletes a collection owned by your client. The `{id}` path parameter is the collection’s unique `_id`.

The server removes the collection document and runs cleanup so it is no longer linked to projects or persons. This is a hard delete of the collection record (not a soft flag).

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string (path) | Yes | Unique identifier of the collection to delete (`_id` in responses) |

There is no request body.

### Request

  

```javascript
const fetch = require("node-fetch");

const collectionId = "65b9592267cc4f096dbe743d";

async function run() {
  const res = await fetch(
    `https://api.verifik.co/v2/face-recognition/collections/${collectionId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
      },
    }
  );
  console.log(await res.json());
}

run();
```

  
  

```php

  

```python

collection_id = "65b9592267cc4f096dbe743d"
url = f"https://api.verifik.co/v2/face-recognition/collections/{collection_id}"
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
    collectionId := "65b9592267cc4f096dbe743d"
    url := fmt.Sprintf("https://api.verifik.co/v2/face-recognition/collections/%s", collectionId)
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
