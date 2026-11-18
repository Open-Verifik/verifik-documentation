---
id: "es-docs-es-funciones-descifrar-zelfproof-cuerpo-3"
title: "Descifrar un ZelfProof — **Cuerpo**"
sourcePath: "docs-es/funciones/descifrar-zelfproof.md"
locale: "es"
category: "funciones"
tags:
  - "funciones"
sourceAnchor: "**Cuerpo**"
---

# Descifrar un ZelfProof

## **Cuerpo**

let request = client.request(reqwest::Method::POST, "https://api.zelf.world/api/zelf-proof/decrypt")
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
