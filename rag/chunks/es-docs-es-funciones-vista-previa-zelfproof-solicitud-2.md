---
id: "es-docs-es-funciones-vista-previa-zelfproof-solicitud-2"
title: "Vista Previa ZelfProof — Solicitud"
sourcePath: "docs-es/funciones/vista-previa-zelfproof.md"
locale: "es"
category: "funciones"
tags:
  - "funciones"
sourceAnchor: "Solicitud"
---

# Vista Previa ZelfProof

## Solicitud

* **Endpoint**: `/api/zelf-proof/preview`
* **Método**: POST
* **Content-Type**: `application/json`

**Cuerpo de la Solicitud**

El cuerpo de la solicitud debe ser un objeto JSON que contenga los siguientes campos:

```json
{
  "zelfProof": "",
  "verifierKey": "(optional) key_here"
}
```

#### Campos:

* **zelfProof**: `string` (*Requerido*) - El **ZelfProof** en formato base64 que necesita ser analizado.
* **verifierKey**: `string` (*Opcional*) - Una clave de autenticación requerida si se especifica para el **ZelfProof**. Esta clave puede ser necesaria para obtener cierta información del ZelfProof.

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "zelfProof": "A14THLzLTzI+57Nb52+PGXvcekz9u9OdYlvvWNFErGr2Ljh8/LNBaxbDlPXbJyVqzyXho2SHDGl9ZTGDV+x1uEbwZG7DsenIL/33HcydSCswYao/LQ2E9l7efGu/7lTYkdMAiENpZrQRobSit8m3lnLL/M9mWIyDiIXjkhZM/W0plGG1tBuhKYBwYtq7cyj5C4TwLkTdy6zVt8dok1WCYMoYMDrUutGjr/nhFImsjeoEvegPv4darhgp3XIGmfmOSFvuwW6/4aEj6mn7q0sbyKiKbtcHqa8+BVSAbdWdY1V0SixkRFt/5I9rvGzhxi1SX0sPj2iwOZFqow/goUxKnBwEinhO9pLngx+6+fd5HYY/MN4LoS18iRp2oL/BZP6wafo8MiA3ZFSLgyJDsGNIBmUAbQ0aPQCEeo18GO0IXqYogbZUFWyDTlj89XyFTpML/ExvNfGifYFt/6HXPlRto4IN8d+NoCb6LWIHLOABeT9jiWEgV97rRhkfyvNRYkQRO8EsR6UjHNlDLZLAhuOy80n7HG7L9tyCAl4mrR9LfGTU/QhiyoWnsRycmgsSyk+TnBeS1oWaqZ47b+vDgRRe+pSo"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.zelf.world/api/zelf-proof/preview',
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

```go
package main

  "fmt"
  "strings"
  "net/http"
  "io"
)

func main() {

  url := "https://api.zelf.world/api/zelf-proof/preview"
  method := "POST"

  payload := strings.NewReader(`{
    "zelfProof": "A14THLzLTzI+57Nb52+PGXvcekz9u9OdYlvvWNFErGr2Ljh8/LNBaxbDlPXbJyVqzyXho2SHDGl9ZTGDV+x1uEbwZG7DsenIL/33HcydSCswYao/LQ2E9l7efGu/7lTYkdMAiENpZrQRobSit8m3lnLL/M9mWIyDiIXjkhZM/W0plGG1tBuhKYBwYtq7cyj5C4TwLkTdy6zVt8dok1WCYMoYMDrUutGjr/nhFImsjeoEvegPv4darhgp3XIGmfmOSFvuwW6/4aEj6mn7q0sbyKiKbtcHqa8+BVSAbdWdY1V0SixkRFt/5I9rvGzhxi1SX0sPj2iwOZFqow/goUxKnBwEinhO9pLngx+6+fd5HYY/MN4LoS18iRp2oL/BZP6wafo8MiA3ZFSLgyJDsGNIBmUAbQ0aPQCEeo18GO0IXqYogbZUFWyDTlj89XyFTpML/ExvNfGifYFt/6HXPlRto4IN8d+NoCb6LWIHLOABeT9jiWEgV97rRhkfyvNRYkQRO8EsR6UjHNlDLZLAhuOy80n7HG7L9tyCAl4mrR9LfGTU/QhiyoWnsRycmgsSyk+TnBeS1oWaqZ47b+vDgRRe+pSo"
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

```javascript
#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::builder()
        .build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("x-api-key", "b8vG/ZwC+OmsM0g1yIiOin7nKdow0re5ka7Ex+M4C8U=".parse()?);
    headers.insert("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV...06aSTrcoSI".parse()?);
    headers.insert("Content-Type", "application/json".parse()?);

    let data = r#"{
    "zelfProof": "A14THLzLTzI+57Nb52+PGXvcekz9u9OdYlvvWNFErGr2Ljh8/LNBaxbDlPXbJyVqzyXho2SHDGl9ZTGDV+x1uEbwZG7DsenIL/33HcydSCswYao/LQ2E9l7efGu/7lTYkdMAiENpZrQRobSit8m3lnLL/M9mWIyDiIXjkhZM/W0plGG1tBuhKYBwYtq7cyj5C4TwLkTdy6zVt8dok1WCYMoYMDrUutGjr/nhFImsjeoEvegPv4darhgp3XIGmfmOSFvuwW6/4aEj6mn7q0sbyKiKbtcHqa8+BVSAbdWdY1V0SixkRFt/5I9rvGzhxi1SX0sPj2iwOZFqow/goUxKnBwEinhO9pLngx+6+fd5HYY/MN4LoS18iRp2oL/BZP6wafo8MiA3ZFSLgyJDsGNIBmUAbQ0aPQCEeo18GO0IXqYogbZUFWyDTlj89XyFTpML/ExvNfGifYFt/6HXPlRto4IN8d+NoCb6LWIHLOABeT9jiWEgV97rRhkfyvNRYkQRO8EsR6UjHNlDLZLAhuOy80n7HG7L9tyCAl4mrR9LfGTU/QhiyoWnsRycmgsSyk+TnBeS1oWaqZ47b+vDgRRe+pSo"
}"#;

    let json: serde_json::Value = serde_json::from_str(&data)?;

    let request = client.request(reqwest::Method::POST, "https://api.zelf.world/api/zelf-proof/preview")
        .headers(headers)
        .json(&json);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
```
