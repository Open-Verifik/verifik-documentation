---
id: "en-docs-resources-persons-create-a-person-endpoint"
title: "Create a Person — Endpoint"
sourcePath: "docs/resources/persons/create-a-person.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/persons"
sourceAnchor: "Endpoint"
slug: "/resources/create-a-person"
url: "https://docs.verifik.co/resources/create-a-person"
---

# Create a Person
**API path(s):** /v2/face-recognition/persons

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/persons
```

Creates a new person in the facial recognition system. Provide at least a **name** and **images** (base64). You can set gender, date of birth, nationality, **collections** (Mongo `_id` or collection `code` strings, depending on your integration), and **notes**.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | Yes | Full name of the person. |
| `images` | string[] | Yes | 1–3 raw base64 face images (no `data:` URL prefix). Sending more than one pose (front + slight profile + another light) makes enrollment more robust. |
| `gender` | string | No | `M` or `F`. |
| `date_of_birth` | string | No | ISO 8601 date (e.g. `1990-01-15`). |
| `nationality` | string | No | Nationality or country code. |
| `collections` | string[] | No | Collection identifiers to associate the person with. |
| `notes` | string | No | Free-form notes. |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/persons", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      name: "John Doe",
      images: ["", ""],
      gender: "M",
      date_of_birth: "1990-01-15",
      nationality: "US",
      collections: [""],
      notes: "VIP customer",
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "John Doe",
    "images" => ["", ""],
    "gender" => "M",
    "date_of_birth" => "1990-01-15",
    "nationality" => "US",
    "collections" => [""],
    "notes" => "VIP customer",
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/persons"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
payload = {
    "name": "John Doe",
    "images": ["", ""],
    "gender": "M",
    "date_of_birth": "1990-01-15",
    "nationality": "US",
    "collections": [""],
    "notes": "VIP customer",
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
    payload := map[string]interface{}{
        "name":           "John Doe",
        "images":         []string{"", ""},
        "gender":         "M",
        "date_of_birth":  "1990-01-15",
        "nationality":    "US",
        "collections":    []string{""},
        "notes":          "VIP customer",
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/persons", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
