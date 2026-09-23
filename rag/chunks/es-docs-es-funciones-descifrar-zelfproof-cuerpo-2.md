---
id: "es-docs-es-funciones-descifrar-zelfproof-cuerpo-2"
title: "Descifrar un ZelfProof — **Cuerpo**"
sourcePath: "docs-es/funciones/descifrar-zelfproof.md"
locale: "es"
category: "funciones"
tags:
  - "funciones"
endpoint: "/api/zelf-proof/decrypt"
sourceAnchor: "**Cuerpo**"
---

# Descifrar un ZelfProof
**API path(s):** /api/zelf-proof/decrypt

## **Cuerpo**

El cuerpo de la solicitud debe ser un objeto JSON que contenga los siguientes campos:

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

#### Campos:

* **faceBase64**: `string` (Requerido) - Datos de imagen facial codificados en Base64 que serán comparados contra el **ZelfProof**.
* **livenessLevel**: `string` (Opcional) - Especifica la tolerancia para las verificaciones de vida facial. Ej., `"REGULAR"`.
* **os**: `string` (Opcional) - El sistema operativo desde donde se origina la solicitud, ej., `"DESKTOP"`.
* **password**: `string` (Opcional) - Una contraseña si se requiere para descifrar el ZelfProof.
* **zelfProof**: `string` (Requerido) - El **ZelfProof** en formato base64 que necesita ser verificado y descifrado.
* **verifierKey**: `string` (Opcional) - Una clave de autenticación requerida para descifrar el ZelfProof si se especifica.

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
