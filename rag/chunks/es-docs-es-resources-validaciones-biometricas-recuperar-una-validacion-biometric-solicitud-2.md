---
id: "es-docs-es-resources-validaciones-biometricas-recuperar-una-validacion-biometric-solicitud-2"
title: "Recuperar una Validación Biométrica — Solicitud"
sourcePath: "docs-es/resources/validaciones-biometricas/recuperar-una-validacion-biometrica.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/{id}"
sourceAnchor: "Solicitud"
slug: "/resources/validaciones-biometricas/recuperar-una-validacion-biometrica"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-biometricas/recuperar-una-validacion-biometrica"
---

# Recuperar una Validación Biométrica
**API path(s):** /v2/biometric-validations/{id}

## Solicitud

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/biometric-validations/biometric_validation_123456789",
  headers: {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    "populates[]": ["client", "project", "projectFlow"],
    "sort": "-createdAt",
    "limit": 10
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

```python

url = "https://api.verifik.co/v2/biometric-validations/biometric_validation_123456789"

params = {
  'populates[]': ['client', 'project', 'projectFlow'],
  'sort': '-createdAt',
  'limit': 10
}

headers = {
  'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
}

response = requests.request("GET", url, headers=headers, params=params)

print(response.text)
```

```php
 'https://api.verifik.co/v2/biometric-validations/biometric_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow&sort=-createdAt&limit=10',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer YOUR_ACCESS_TOKEN'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>
```

```go
package main

  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {
  url := "https://api.verifik.co/v2/biometric-validations/biometric_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow&sort=-createdAt&limit=10"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Authorization", "Bearer YOUR_ACCESS_TOKEN")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
