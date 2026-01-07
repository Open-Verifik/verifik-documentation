# Preview ZelfProof

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Endpoint

```
https://api.zelf.world/api/tags/preview-zelfproof
```

This endpoint allows you to retrieve information about a **ZelfProof** without decrypting the metadata with a face and perform the liveness test. This can be useful for obtaining **basic details** about the **ZelfProof** when decryption is not necessary or possible.

[Watch the video](https://youtu.be/WPTtR7Jtung)

### Request

* **Endpoint**: `/api/tags/preview-zelfproof`
* **Method**: POST
* **Content-Type**: `application/json`

**Request Body**

The request body should be a JSON object containing the following fields:

```json
{
  "zelfProof": "[ZELFPROOF_BASE64_DATA]",
  "verifierKey": "(optional) key_here"
}
```

#### Fields:

* **zelfProof**: `string` (*Required*) - The **ZelfProof** in base64 format that needs to be parsed.
* **verifierKey**: `string` (*Optional*) - An authentication key required if specified for the **ZelfProof**. This key may be necessary for obtaining certain information from the ZelfProof.

<Tabs>
<TabItem value="Node.js" label="Node.js">

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "zelfProof": "[ZELFPROOF_BASE64_DATA]"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.zelf.world/api/tags/preview-zelfproof',
  headers: { 
    'x-api-key': 'b8vG/ZwC+OmsM0g1yIiOin7nKdow0re5ka7Ex+M4C8U=', 
    'Authorization': 'Bearer eyJhbGciOiJ5cCI6IkpXVCJ9.eyJjbGllb....aSTrcoSI', 
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

</TabItem>

<TabItem value="Go" label="Go">

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io"
)

func main() {

  url := "https://api.zelf.world/api/tags/preview-zelfproof"
  method := "POST"

  payload := strings.NewReader(`{
    "zelfProof": "[ZELFPROOF_BASE64_DATA]"
  }`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-api-key", "b8vG/ZwC+OmsM0g1yIiOin7nKdow0re5ka7Ex+M4C8U=")
  req.Header.Add("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cC...i1do_A06aSTrcoSI")
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

</TabItem>

<TabItem value="Rust" label="Rust">

```javascript
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder()
        .build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("x-api-key", "b8vG/ZwC+OmsM0g1yIiOin7nKdow0re5ka7Ex+M4C8U=".parse()?);
    headers.insert("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV...06aSTrcoSI".parse()?);
    headers.insert("Content-Type", "application/json".parse()?);

    let data = r#"{
    "zelfProof": "[ZELFPROOF_BASE64_DATA]"
}"#;

    let json: serde_json::Value = serde_json::from_str(&data)?;

    let request = client.request(reqwest::Method::POST, "https://api.zelf.world/api/tags/preview-zelfproof")
        .headers(headers)
        .json(&json);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
```

</TabItem>
</Tabs>

### Responses

<Tabs>
<TabItem value="200" label="200">

```json
{
    "passwordLayer": "WithPassword",
    "publicData": {
        "ethAddress": "0x1234567890123456789012345678901234567890",
        "btcAddress": "bc1qtest123456789012345678901234567890",
        "solanaAddress": "Test1234567890123456789012345678901234567890",
        "suiAddress": "0xtest1234567890123456789012345678901234567890"
    },
    "requireLiveness": true
}
```

</TabItem>

<TabItem value="500" label="500">

```json
{
    "error": "PROVIDED ZELFPROOF BYTES COULD NOT BE DECODED AS A BASE64 STRING."
}
```

</TabItem>
</Tabs>
