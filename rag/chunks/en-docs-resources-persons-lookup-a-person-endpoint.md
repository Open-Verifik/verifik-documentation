---
id: "en-docs-resources-persons-lookup-a-person-endpoint"
title: "Lookup a Person by Name — Endpoint"
sourcePath: "docs/resources/persons/lookup-a-person.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons"
  - "/v2/face-recognition/persons/lookup"
sourceAnchor: "Endpoint"
slug: "/resources/lookup-a-person"
url: "https://docs.verifik.co/resources/lookup-a-person"
---

# Lookup a Person by Name
**API path(s):** /v2/face-recognition/persons, /v2/face-recognition/persons/lookup

## Endpoint

```
GET https://api.verifik.co/v2/face-recognition/persons/lookup
```

Finds persons already stored for your client by **name** (required) and optional **date of birth**. Use this when create returns `412 person_already_set`, or before you enroll, so you can get the **person `_id`** and collection **`code`** values without running a 1:N face search.

This is a **Mongo metadata** lookup, not a face match. Digits in `name` are stripped the same way as create (`"Maria 123"` becomes `"Maria"`). Name match is case-insensitive **contains** (`Maria` finds `Maria Perez Gonzalez`). Use at least 3 characters.

Use `collections[].code` (36-character UUID) as `collection_id` on face search. Do not send the Mongo collection `_id`.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | Yes | Partial or full name (min 3 characters after stripping digits). Case-insensitive contains. |
| `date_of_birth` | string | No | `YYYY-MM-DD`. When set, narrows to that day. |
| `page` | number | No | Page number (default: `1`). |
| `limit` | number | No | Page size (default: `20`, max: `100`). |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const params = new URLSearchParams({
    name: "Maria Perez",
    date_of_birth: "1994-02-07",
    page: "1",
    limit: "20",
  });

  const res = await fetch(`https://api.verifik.co/v2/face-recognition/persons/lookup?${params}`, {
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
 "Maria Perez",
    "date_of_birth" => "1994-02-07",
    "page" => 1,
    "limit" => 20,
]);
$ch = curl_init("https://api.verifik.co/v2/face-recognition/persons/lookup?" . $query);
curl_setopt($ch, CURLOPT_HTTPGET, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . getenv("VERIFIK_TOKEN"),
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/persons/lookup"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
params = {"name": "Maria Perez", "date_of_birth": "1994-02-07", "page": 1, "limit": 20}
r = requests.get(url, headers=headers, params=params)
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
    url := "https://api.verifik.co/v2/face-recognition/persons/lookup?name=Maria%20Perez&date_of_birth=1994-02-07&page=1&limit=20"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    res, err := http.DefaultClient.Do(req)
    if err != nil {
        panic(err)
    }
    defer res.Body.Close()
    body, _ := io.ReadAll(res.Body)
    fmt.Println(string(body))
}
```
