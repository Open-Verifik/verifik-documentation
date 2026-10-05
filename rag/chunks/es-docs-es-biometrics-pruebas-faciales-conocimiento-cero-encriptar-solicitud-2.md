---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-encriptar-solicitud-2"
title: "Encriptar HumanID — Solicitud"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-encriptar.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/encrypt"
sourceAnchor: "Solicitud"
slug: "/biometrics/humanID-encriptar"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-encriptar"
---

# Encriptar HumanID
**API path(s):** /v2/human-id/encrypt

## Solicitud

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
      livenessLevel: "REGULAR",
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
        "secretB": "4"
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
    "livenessLevel" => "REGULAR",
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
    "livenessLevel": "REGULAR",
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
        "livenessLevel": "REGULAR",
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
