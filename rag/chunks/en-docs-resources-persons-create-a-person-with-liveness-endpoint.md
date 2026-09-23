---
id: "en-docs-resources-persons-create-a-person-with-liveness-endpoint"
title: "Create a Person with Liveness — Endpoint"
sourcePath: "docs/resources/persons/create-a-person-with-liveness.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/persons/search-live-face"
sourceAnchor: "Endpoint"
slug: "/resources/create-a-person-with-liveness"
url: "https://docs.verifik.co/resources/create-a-person-with-liveness"
---

# Create a Person with Liveness
**API path(s):** /v2/face-recognition/persons/search-live-face

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/persons/search-live-face
```

Creates or updates a person after **liveness** checks on the submitted face image(s), a **similarity search** against your index (`min_score`, `search_mode`), and deduplication scoped to the target **`collection_id`**. If a duplicate is found in that collection (in production), the API may return `409:duplicated_person`.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | Yes | Full name (digits are stripped server-side) |
| `images` | string[] | Yes | Base64 face images (raw base64, not data URLs) |
| `gender` | string | Yes | `M` or `F` |
| `date_of_birth` | string | Yes | Date of birth in the format required by Verifik validation (typically `YYYY-MM-DD`) |
| `nationality` | string | No | Optional nationality |
| `collection_id` | string | Yes | Unique `_id` of the collection to enroll into (and to check for duplicates) |
| `liveness_min_score` | number | Yes | Minimum liveness score, between **0.5** and **1** |
| `min_score` | number | Yes | Minimum face match score for the internal search, between **0.5** and **1** |
| `search_mode` | string | Yes | `FAST` or `ACCURATE` |

### Request

  

```javascript
const fetch = require("node-fetch");

const collectionId = "65b9592267cc4f096dbe743d";

async function run() {
  const res = await fetch(
    "https://api.verifik.co/v2/face-recognition/persons/search-live-face",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
      },
      body: JSON.stringify({
        name: "Jane Doe",
        gender: "F",
        date_of_birth: "1990-01-15",
        nationality: "CO",
        collection_id: collectionId,
        liveness_min_score: 0.65,
        min_score: 0.8,
        search_mode: "FAST",
        images: ["", ""],
      }),
    }
  );
  console.log(await res.json());
}

run();
```

  
  

```php
 "Jane Doe",
    "gender" => "F",
    "date_of_birth" => "1990-01-15",
    "nationality" => "CO",
    "collection_id" => $collectionId,
    "liveness_min_score" => 0.65,
    "min_score" => 0.8,
    "search_mode" => "FAST",
    "images" => ["", ""],
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

collection_id = "65b9592267cc4f096dbe743d"
url = "https://api.verifik.co/v2/face-recognition/persons/search-live-face"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
payload = {
    "name": "Jane Doe",
    "gender": "F",
    "date_of_birth": "1990-01-15",
    "nationality": "CO",
    "collection_id": collection_id,
    "liveness_min_score": 0.65,
    "min_score": 0.8,
    "search_mode": "FAST",
    "images": ["", ""],
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
    collectionId := "65b9592267cc4f096dbe743d"
    payload, _ := json.Marshal(map[string]interface{}{
        "name":                 "Jane Doe",
        "gender":               "F",
        "date_of_birth":        "1990-01-15",
        "nationality":          "CO",
        "collection_id":        collectionId,
        "liveness_min_score":   0.65,
        "min_score":            0.8,
        "search_mode":          "FAST",
        "images":               []string{"", ""},
    })
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/persons/search-live-face", bytes.NewReader(payload))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
