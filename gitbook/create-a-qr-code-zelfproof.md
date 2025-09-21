# Create a QR-Code ZelfProof

### Endpoint

```
https://api.zelf.world/api/zelf-proof/encrypt 
```

This endpoint allows the creation of a new Zero Knowledge Face Proof "**ZelfProof"** as raw bytes encoded in base64. These are the same bytes used to generate the ZelfQR code.

### Request

* **Endpoint**: `/api/zelf-proof/encrypt`
* **Method**: POST
* **Content-Type**: `application/json`

#### **Body**

The request body should be a JSON object containing the following fields:

```json
{
  "livenessDetectionPriorCreation": false,
  "publicData": {
    "ethAddress": "0x13901AE0F17E2875E86C86721f9943598601b0C4"
  },
  "faceBase64": "face_image_bytes_as_base64",
  "livenessLevel": "REGULAR",
  "metadata": {
    "mnemonic": "pistol cloth equal legend category dry wine enjoy rookie artwork portion december"
  },
  "os": "DESKTOP",
  "password": "optional",
  "identifier": "A0123453",
  "referenceFaceBase64": "optional_base64_encoded_reference_face_image",
  "requireLiveness": true,
  "tolerance": "REGULAR",
  "verifierKey": "optional_auth_key"
}
```

#### Fields:

* **livenessDetectionPriorCreation**: `Boolean` (Optional) - If true, the face must be live to create the ZelfProof.
* **publicData**: `object` (Optional) - Cleartext data associated with the record, such as `masked_id`.
* **faceBase64**: `string` (Required) - Base64 encoded face image data.
* **livenessLevel**: `string` (Optional) - Specifies the tolerance for face liveness checks. E.g., `"REGULAR"`.
* **metadata**: `object` (Optional) - Additional metadata in JSON format associated with the ZelfProof.
* **os**: `string` (Optional) - The operating system where the request originates, e.g., `"DESKTOP"`.
* **password**: `string` (Optional) - A password for additional security.
* **identifier**: `string` (Optional) - An ID associated with the record.
* **referenceFaceBase64**: `string` (Optional) - Base64 encoded reference face image. Used for matching with the `faceBase64`.
* **requireLiveness**: `Boolean` (Optional) - If true, the face must be live.
* **tolerance**: `string` (Optional) - Specifies the tolerance for face matching. E.g., `"REGULAR"`.
* **verifierKey**: `string` (Optional) - An authentication key required for decrypting the ZelfProof if specified.

### Request

{% tabs %}
{% tab title="Node.js" %}

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

{% endtab %}

{% tab title="Rust" %}

```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
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

{% endtab %}

{% tab title="Go" %}

```go
package main

import (
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

{% endtab %}

{% tab title="Python" %}

```python
import requests
import json

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

{% endtab %}
{% endtabs %}

### Responses

{% tabs %}
{% tab title="200" %}

```json
{
    "zelfQR": "data:image/png;base64,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"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "validationError": "missing faceBase64\n"
}
```

{% endtab %}
{% endtabs %}
