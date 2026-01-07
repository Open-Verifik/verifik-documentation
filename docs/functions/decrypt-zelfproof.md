# Decrypt a ZelfProof

### Endpoint

```
https://api.zelf.world/api/zelf-proof/decrypt
```

#### This endpoint is used to verify the raw hash bytes against a face, thereby decrypting the associated metadata.

[Watch the video: Decrypt ZelfProof](https://youtu.be/WPTtR7Jtung)

#### Request

* **Endpoint**: `/api/zelf-proof/decrypt`
* **Method**: POST
* **Content-Type**: `application/json`

### **Body**

The request body should be a JSON object containing the following fields:

```json
{
  "faceBase64": "face_base_64_photo",
  "livenessLevel": "REGULAR",
  "os": "DESKTOP",
  "password": "(optional) password",
  "zelfProof": "<your_zelf_proof>",
  "verifierKey": "(optional) verifiers_auth_key"
}
```

#### Fields:

* **faceBase64**: `string` (Required) - Base64 encoded face image data that will be compared against the **ZelfProof**.
* **livenessLevel**: `string` (Optional) - Specifies the tolerance for face liveness checks. E.g., `"REGULAR"`.
* **os**: `string` (Optional) - The operating system from where the request originates, e.g., `"DESKTOP"`.
* **password**: `string` (Optional) - A password if required to decrypt the ZelfProof.
* **zelfProof**: `string` (Required) - The **ZelfProof** in base64 format that needs to be verified and decrypted.
* **verifierKey**: `string` (Optional) - An authentication key required for decrypting the ZelfProof if specified.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Python" label="Python">

```python
import requests
import json

url = "https://api.zelf.world/api/zelf-proof/decrypt"

payload = json.dumps({
  "faceBase64": "{{sampleFaceInBase64}}",
  "livenessLevel": "REGULAR",
  "os": "DESKTOP",
  "password": "123456",
  "identifier": "133445",
  "requireLiveness": True,
  "tolerance": "REGULAR",
  "zelfProof": "A14THLzLTzI+57Nb52+PGXvcekz9u9OdYlvvWNFErGr2Ljh8/LNBaxbDlPXbJyVqzyXho2SHDGl9ZTGDV+x1uEbwZG7DsenIL/33HcydSCswYao/LQ2E9l7efGu/7lTYkdMAiENpZrQRobSit8m3lnLL/M9mWIyDiIXjkhZM/W0plGG1tBuhKYBwYtq7cyj5C4TwLkTdy6zVt8dok1WCYMoYMDrUutGjr/nhFImsjeoEvegPv4darhgp3XIGmfmOSFvuwW6/4aEj6mn7q0sbyKiKbtcHqa8+BVSAbdWdY1V0SixkRFt/5I9rvGzhxi1SX0sPj2iwOZFqow/goUxKnBwEinhO9pLngx+6+fd5HYY/MN4LoS18iRp2oL/BZP6wafo8MiA3ZFSLgyJDsGNIBmUAbQ0aPQCEeo18GO0IXqYogbZUFWyDTlj89XyFTpML/ExvNfGifYFt/6HXPlRto4IN8d+NoCb6LWIHLOABeT9jiWEgV97rRhkfyvNRYkQRO8EsR6UjHNlDLZLAhuOy80n7HG7L9tyCAl4mrR9LfGTU/QhiyoWnsRycmgsSyk+TnBeS1oWaqZ47b+vDgRRe+pSo"
})
headers = {
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...do_A06aSTrcoSI ',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

```

</TabItem>

<TabItem value="NodeJS" label="NodeJS">

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "faceBase64": "{{sampleFaceInBase64}}",
  "livenessLevel": "REGULAR",
  "os": "DESKTOP",
  "password": "123456",
  "identifier": "133445",
  "requireLiveness": true,
  "tolerance": "REGULAR",
  "zelfProof": "A14THLzLTzI+57Nb52+PGXvcekz9u9OdYlvvWNFErGr2Ljh8/LNBaxbDlPXbJyVqzyXho2SHDGl9ZTGDV+x1uEbwZG7DsenIL/33HcydSCswYao/LQ2E9l7efGu/7lTYkdMAiENpZrQRobSit8m3lnLL/M9mWIyDiIXjkhZM/W0plGG1tBuhKYBwYtq7cyj5C4TwLkTdy6zVt8dok1WCYMoYMDrUutGjr/nhFImsjeoEvegPv4darhgp3XIGmfmOSFvuwW6/4aEj6mn7q0sbyKiKbtcHqa8+BVSAbdWdY1V0SixkRFt/5I9rvGzhxi1SX0sPj2iwOZFqow/goUxKnBwEinhO9pLngx+6+fd5HYY/MN4LoS18iRp2oL/BZP6wafo8MiA3ZFSLgyJDsGNIBmUAbQ0aPQCEeo18GO0IXqYogbZUFWyDTlj89XyFTpML/ExvNfGifYFt/6HXPlRto4IN8d+NoCb6LWIHLOABeT9jiWEgV97rRhkfyvNRYkQRO8EsR6UjHNlDLZLAhuOy80n7HG7L9tyCAl4mrR9LfGTU/QhiyoWnsRycmgsSyk+TnBeS1oWaqZ47b+vDgRRe+pSo"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.zelf.world/api/zelf-proof/decrypt',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...i1do_A06aSTrcoSI ', 
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

<TabItem value="Rust" label="Rust">

```javascript
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder()
        .build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZC...8n31YEfi1do_A06aSTrcoSI ".parse()?);
    headers.insert("Content-Type", "application/json".parse()?);

    let data = r#"{
    "faceBase64": "{{sampleFaceInBase64}}",
    "livenessLevel": "REGULAR",
    "os": "DESKTOP",
    "password": "123456",
    "identifier": "133445",
    "requireLiveness": true,
    "tolerance": "REGULAR",
    "zelfProof": "A14THLzLTzI+57Nb52+PGXvcekz9u9OdYlvvWNFErGr2Ljh8/LNBaxbDlPXbJyVqzyXho2SHDGl9ZTGDV+x1uEbwZG7DsenIL/33HcydSCswYao/LQ2E9l7efGu/7lTYkdMAiENpZrQRobSit8m3lnLL/M9mWIyDiIXjkhZM/W0plGG1tBuhKYBwYtq7cyj5C4TwLkTdy6zVt8dok1WCYMoYMDrUutGjr/nhFImsjeoEvegPv4darhgp3XIGmfmOSFvuwW6/4aEj6mn7q0sbyKiKbtcHqa8+BVSAbdWdY1V0SixkRFt/5I9rvGzhxi1SX0sPj2iwOZFqow/goUxKnBwEinhO9pLngx+6+fd5HYY/MN4LoS18iRp2oL/BZP6wafo8MiA3ZFSLgyJDsGNIBmUAbQ0aPQCEeo18GO0IXqYogbZUFWyDTlj89XyFTpML/ExvNfGifYFt/6HXPlRto4IN8d+NoCb6LWIHLOABeT9jiWEgV97rRhkfyvNRYkQRO8EsR6UjHNlDLZLAhuOy80n7HG7L9tyCAl4mrR9LfGTU/QhiyoWnsRycmgsSyk+TnBeS1oWaqZ47b+vDgRRe+pSo"
}"#;

    let json: serde_json::Value = serde_json::from_str(&data)?;

    let request = client.request(reqwest::Method::POST, "https://api.zelf.world/api/zelf-proof/decrypt")
        .headers(headers)
        .json(&json);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
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

  url := "https://api.zelf.world/api/zelf-proof/decrypt"
  method := "POST"

  payload := strings.NewReader(`{
  "faceBase64": "{{sampleFaceInBase64}}",
  "livenessLevel": "REGULAR",
  "os": "DESKTOP",
  "password": "123456",
  "identifier": "133445",
  "requireLiveness": true,
  "tolerance": "REGULAR",
  "zelfProof": "A14THLzLTzI+57Nb52+PGXvcekz9u9OdYlvvWNFErGr2Ljh8/LNBaxbDlPXbJyVqzyXho2SHDGl9ZTGDV+x1uEbwZG7DsenIL/33HcydSCswYao/LQ2E9l7efGu/7lTYkdMAiENpZrQRobSit8m3lnLL/M9mWIyDiIXjkhZM/W0plGG1tBuhKYBwYtq7cyj5C4TwLkTdy6zVt8dok1WCYMoYMDrUutGjr/nhFImsjeoEvegPv4darhgp3XIGmfmOSFvuwW6/4aEj6mn7q0sbyKiKbtcHqa8+BVSAbdWdY1V0SixkRFt/5I9rvGzhxi1SX0sPj2iwOZFqow/goUxKnBwEinhO9pLngx+6+fd5HYY/MN4LoS18iRp2oL/BZP6wafo8MiA3ZFSLgyJDsGNIBmUAbQ0aPQCEeo18GO0IXqYogbZUFWyDTlj89XyFTpML/ExvNfGifYFt/6HXPlRto4IN8d+NoCb6LWIHLOABeT9jiWEgV97rRhkfyvNRYkQRO8EsR6UjHNlDLZLAhuOy80n7HG7L9tyCAl4mrR9LfGTU/QhiyoWnsRycmgsSyk+TnBeS1oWaqZ47b+vDgRRe+pSo"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5c...31YEfi1do_A06aSTrcoSI ")
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
</Tabs>

### Responses

<Tabs>
<TabItem value="200" label="200">

```json
{
    "identifier": "133445",
    "metadata": {
        "secret": "238289372983",
        "email": "miguel@verifik.co",
        "zelfName": "randomtext982.zelf",
        "name": "Miguel"
    },
    "publicData": {
        "test": "ABC",
        "instruction2": "efjidjfidjf",
        "instruction": "123939",
        "name": "Miguel"
    },
    "faceCropBase64": "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",
    "difficulty": "EASY"
}
```

</TabItem>

<TabItem value="409" label="409">

```json
{
    "validationError": "missing zelfProof\n"
}
```

</TabItem>
</Tabs>

* **200 OK**: The request was successful, and the decrypted data from the **ZelfProof** is returned in JSON format.

  ```json
  {
    "publicData": {
      "variable1": "string",
      "variable2": "string",
      "variable3": "string"
    },
    "difficulty": "EASY",
    "faceCropBase64": "string",
    "metadata": {
      "mnemonic": "string",
      "variable2": "string",
      "variable3": "string"
    },
    "identifier": "string"
  }
  ```
* **400 Bad Request**: There was an error with the request. Possible error codes include:

  ```json
  {
    "code": "ERR_INVALID_IMAGE",
    "message": "Invalid base64 string for the face image."
  }
  ```
* **401 Unauthorized**: The API Key is not present in the `X-api-key` header.

  ```json
  {
    "code": "ERR_API_KEY_NOT_PRESENT",
    "message": "API Key must be present in the x-api-key header."
  }
  ```
* **403 Forbidden**: The API Key is incorrect or there is an issue with licensing. Possible error codes include:
  * `ERR_API_KEY_NOT_VALID`: The provided API Key is not valid.
  * `ERR_LICENSE_EXPIRED`: The Zelf SDK license has expired.
  * `ERR_CANNOT_CONNECT_TO_TIME_SERVER`: Cannot connect to the time server to verify license expiry.
  * `ERR_CANNOT_CONNECT_TO_HOME_SERVER`: Cannot connect to the home server to verify license expiry.
  * `ERR_NUMBER_OF_AVAILABLE_INSTANCES_EXCEEDED`: The number of available instances for this license has been exceeded.
* **413 Payload Too Large**: The request sent is too large. Reduce the size of the image or data.

  ```json
  {
    "code": "ERR_PAYLOAD_IS_TOO_LARGE",
    "message": "The request sent is too big. Please try reducing the size of image(s)/data."
  }
  ```
* **422 Unprocessable Entity**: The request is invalid due to a specific error related to its content.

  ```json
  {
    "code": "ERR_UNPROCESSABLE_CONTENT",
    "message": "Invalid request: <specific message related to error>"
  }
  ```

#### Error Codes

Here are some specific error codes that might be returned during verification:

* **ERR\_INVALID\_IMAGE**: Invalid base64 string for the face image.
* **ERR\_NO\_FACE\_DETECTED**: No face detected in the image.
* **ERR\_MULTIPLE\_FACES\_DETECTED**: Multiple faces detected in the image.
* **ERR\_INVALID\_ZELFPROOF\_BYTES**: The provided hash bytes could not be interpreted as a valid base64 string.
* **ERR\_PARSE\_FAILED**: The hash could not be interpreted as a valid hash.
* **ERR\_PASSWORD\_REQUIRED**: A password is required to decrypt the hash but was not provided.
* **ERR\_INVALID\_PASSWORD**: The provided password is invalid.
* **ERR\_LIVENESS\_FAILED**: The user's face image in `face_base_64` is determined to not be live and `require_live_face` was set to true during hash creation.
* **ERR\_VERIFICATION\_FAILED**: Decryption failed due to the `face_base_64` not matching the face used to create the hash.

**Additional Liveness Error Codes:**

If the `face_base_64` is determined to be not suitable for liveness, the following error codes may be returned:

* **ERR\_LIVENESS\_FACE\_ANGLE\_TOO\_LARGE**: The face angle is too large (the user is not facing the camera).
* **ERR\_LIVENESS\_FACE\_IS\_OCCLUDED**: The face is occluded (e.g., by a mask).
* **ERR\_LIVENESS\_FACE\_CLOSE\_TO\_BORDER**: The face is too close to the border of the image.
* **ERR\_LIVENESS\_FACE\_TOO\_SMALL**: The face is too small in the image.
* **ERR\_LIVENESS\_EYES\_CLOSED**: The eyes are closed in the image.
