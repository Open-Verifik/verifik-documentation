---
id: "en-docs-check-list-delete-a-check-list-endpoint"
title: "Delete a checklist — Endpoint"
sourcePath: "docs/check-list/delete-a-check-list.mdx"
locale: "en"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/api/check-lists"
  - "/v2/check-lists"
  - "/v2/check-lists/{id}"
sourceAnchor: "Endpoint"
slug: "/check-list/delete-a-check-list"
url: "https://docs.verifik.co/check-list/delete-a-check-list"
---

# Delete a checklist
**API path(s):** /api/check-lists, /v2/check-lists, /v2/check-lists/{id}

## Endpoint

Delete a Check List you own. The API returns the deleted document in `{ data }`. An invalid ObjectId, a missing list, or a list owned by another client returns `404`.

Delete does not run lookups and does not spend credits. Catalog history and SmartBatch jobs that used the same feature codes are not removed.

### Endpoint

```
DELETE https://api.verifik.co/v2/check-lists/{id}
```

Removes the list from the client's collection and returns the document that was deleted. After this call, GET / PUT / DELETE on the same id return `404`.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

The token must be a **client JWT**. A token without `clientId` returns `403`.

### Parameters

| Name | Type   | Required | Description                          |
| ---- | ------ | -------- | ------------------------------------ |
| `id` | string | Yes      | Check List ObjectId from create or list. |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
    const id = "6aa224c87034a338385c28c0";
    const res = await fetch(`https://api.verifik.co/v2/check-lists/${id}`, {
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

check_list_id = "6aa224c87034a338385c28c0"
url = f"https://api.verifik.co/v2/check-lists/{check_list_id}"
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
    id := "6aa224c87034a338385c28c0"
    req, _ := http.NewRequest("DELETE", "https://api.verifik.co/v2/check-lists/"+id, nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
