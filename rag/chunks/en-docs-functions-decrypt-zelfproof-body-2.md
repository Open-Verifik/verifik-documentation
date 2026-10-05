---
id: "en-docs-functions-decrypt-zelfproof-body-2"
title: "Decrypt a ZelfProof — **Body**"
sourcePath: "docs/functions/decrypt-zelfproof.md"
locale: "en"
category: "functions"
tags:
  - "functions"
endpoint: "/api/zelf-proof/decrypt"
sourceAnchor: "**Body**"
---

# Decrypt a ZelfProof
**API path(s):** /api/zelf-proof/decrypt

## **Body**

The request body should be a JSON object containing the following fields:

```json
{
  "faceBase64": "face_base_64_photo",
  "livenessLevel": "REGULAR",
  "os": "DESKTOP",
  "password": "(optional) password",
  "zelfProof": "",
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

```python

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

```javascript
#[tokio::main]
async fn main() -> Result> {
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
