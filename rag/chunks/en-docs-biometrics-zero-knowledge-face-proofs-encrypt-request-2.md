---
id: "en-docs-biometrics-zero-knowledge-face-proofs-encrypt-request-2"
title: "Encrypt HumanID — Request"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-encrypt.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/encrypt"
sourceAnchor: "Request"
slug: "/biometrics/humanID-encrypt"
url: "https://docs.verifik.co/biometrics/humanID-encrypt"
---

# Encrypt HumanID
**API path(s):** /v2/human-id/encrypt

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/human-id/encrypt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      faceBase64: "",
      requireLiveness: false,
      tolerance: "HARDENED",
      password: "1234",
      os: "DESKTOP",
      identifier: "randomid",
      publicData: {
        "a": "1",
        "b": "2",
        "vida": "true"
      },
      metadata: {
        "secretA": "3",
        "secretB": "sijfoidjfijdifj"
      }
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "",
    "requireLiveness" => false,
    "tolerance" => "HARDENED",
    "password" => "1234",
    "os" => "DESKTOP",
    "identifier" => "randomid",
    "publicData" => [
        "a" => "1",
        "b" => "2",
        "vida" => "true"
    ],
    "metadata" => [
        "secretA" => "3",
        "secretB" => "4"
    ]
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/human-id/encrypt"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "faceBase64": "",
    "requireLiveness": False,
    "tolerance": "HARDENED",
    "password": "1234",
    "os": "DESKTOP",
    "identifier": "randomid",
    "publicData": {
        "a": "1",
        "b": "2",
        "vida": "true"
    },
    "metadata": {
        "secretA": "3",
        "secretB": "4"
    }
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
        "faceBase64": "",
        "requireLiveness": false,
        "tolerance": "HARDENED",
        "password": "1234",
        "os": "DESKTOP",
        "identifier": "randomid",
        "publicData": map[string]string{
            "a": "1",
            "b": "2",
            "vida": "true",
        },
        "metadata": map[string]string{
            "secretA": "3",
            "secretB": "4",
        },
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/human-id/encrypt", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
