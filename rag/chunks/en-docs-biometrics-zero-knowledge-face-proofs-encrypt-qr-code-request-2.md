---
id: "en-docs-biometrics-zero-knowledge-face-proofs-encrypt-qr-code-request-2"
title: "Encrypt HumanID QR Code — Request"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-encrypt-qr-code.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/encrypt-qr-code"
sourceAnchor: "Request"
slug: "/biometrics/humanID-encrypt-qr-code"
url: "https://docs.verifik.co/biometrics/humanID-encrypt-qr-code"
---

# Encrypt HumanID QR Code
**API path(s):** /v2/human-id/encrypt-qr-code

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/human-id/encrypt-qr-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      faceBase64: "",
      tolerance: "HARDENED",
      os: "DESKTOP",
      identifier: "random",
      publicData: {
        "a": "1",
        "b": "2"
      },
      metadata: {
        "c": "3"
      },
      requireLiveness: false
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "",
    "tolerance" => "HARDENED",
    "os" => "DESKTOP",
    "identifier" => "random",
    "publicData" => [
        "a" => "1",
        "b" => "2"
    ],
    "metadata" => [
        "c" => "3"
    ],
    "requireLiveness" => false
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/human-id/encrypt-qr-code"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "faceBase64": "",
    "tolerance": "HARDENED",
    "os": "DESKTOP",
    "identifier": "random",
    "publicData": {
        "a": "1",
        "b": "2"
    },
    "metadata": {
        "c": "3"
    },
    "requireLiveness": False
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
        "tolerance": "HARDENED",
        "os": "DESKTOP",
        "identifier": "random",
        "publicData": map[string]string{
            "a": "1",
            "b": "2",
        },
        "metadata": map[string]string{
            "c": "3",
        },
        "requireLiveness": false,
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/human-id/encrypt-qr-code", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
