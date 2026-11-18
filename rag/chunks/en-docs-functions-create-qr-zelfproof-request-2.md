---
id: "en-docs-functions-create-qr-zelfproof-request-2"
title: "Create a QR-Code ZelfProof — Request"
sourcePath: "docs/functions/create-qr-zelfproof.md"
locale: "en"
category: "functions"
tags:
  - "functions"
endpoint: "/api/zelf-proof/encrypt"
sourceAnchor: "Request"
---

# Create a QR-Code ZelfProof
**API path(s):** /api/zelf-proof/encrypt

## Request

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "livenessDetectionPriorCreation": true,
  "publicData": {
    "publicKeyA": "ABC",
    "publicKeyB": "DEF",
    "publicKeyC": "XYZ"
  },
  "livenessLevel": "REGULAR",
  "metadata": {
    "secretA": "123456",
    "secretB": "789456",
    "secretC": "121336"
  },
  "os": "DESKTOP",
  "password": "123456",
  "identifier": "133445",
  "faceBase64": "/9j/4AAQSkZJRgABA...QAAAQABAAD/2wBDA",
  "requireLiveness": true,
  "tolerance": "REGULAR"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.zelf.world/api/zelf-proof/encrypt-qr-code',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzCI6IkpX....HAiOjE3NTIzNTEyMjgsImlhdCaSTrcoSI', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

```

```rust
#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::builder()
        .build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpyV8...Efi1do_A06aSTrcoSI".parse()?);
    headers.insert("Content-Type", "application/json".parse()?);

    let data = r#"{
    "livenessDetectionPriorCreation": true,
    "publicData": {
        "publicKeyA": "ABC",
        "publicKeyB": "DEF",
        "publicKeyC": "XYZ"
    },
    "livenessLevel": "REGULAR",
    "metadata": {
        "secretA": "123456",
        "secretB": "789456",
        "secretC": "121336"
    },
    "os": "DESKTOP",
    "password": "123456",
    "identifier": "133445",
    "faceBase64": "{{fakeBase64}}",
    "requireLiveness": true,
    "tolerance": "REGULAR"
}"#;

    let json: serde_json::Value = serde_json::from_str(&data)?;

    let request = client.request(reqwest::Method::POST, "https://api.zelf.world/api/zelf-proof/encrypt-qr-code")
        .headers(headers)
        .json(&json);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
```

```go
package main

  "fmt"
  "strings"
  "net/http"
  "io"
)

func main() {

  url := "https://api.zelf.world/api/zelf-proof/encrypt-qr-code"
  method := "POST"

  payload := strings.NewReader(`{
    "livenessDetectionPriorCreation": true,
     "publicData": {
        "publicKeyA": "ABC",
        "publicKeyB": "DEF",
        "publicKeyC": "XYZ"
    },
    "livenessLevel": "REGULAR",
    "metadata": {
        "secretA": "123456",
        "secretB": "789456",
        "secretC": "121336" 
    },
  "os": "DESKTOP",
  "password": "123456",
  "identifier": "133445",
  "faceBase64": "{{fakeBase64}}",
  "requireLiveness": true,
  "tolerance": "REGULAR"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6I...31YEfi1do_A06aSTrcoSI")
  req.Header.Add("Content-Type", "application/json")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := io.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

```python

url = "https://api.zelf.world/api/zelf-proof/encrypt-qr-code"

payload = json.dumps({
  "livenessDetectionPriorCreation": True,
  "publicData": {
    "publicKeyA": "ABC",
    "publicKeyB": "DEF",
    "publicKeyC": "XYZ"
  },
  "livenessLevel": "REGULAR",
  "metadata": {
    "secretA": "123456",
    "secretB": "789456",
    "secretC": "121336"
  },
  "os": "DESKTOP",
  "password": "123456",
  "identifier": "133445",
  "faceBase64": "{{fakeBase64}}",
  "requireLiveness": True,
  "tolerance": "REGULAR"
})
headers = {
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC...1YEfi1do_A06aSTrcoSI',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

```
