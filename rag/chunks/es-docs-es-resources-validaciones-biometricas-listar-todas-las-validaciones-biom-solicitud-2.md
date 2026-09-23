---
id: "es-docs-es-resources-validaciones-biometricas-listar-todas-las-validaciones-biom-solicitud-2"
title: "Listar Todas las Validaciones Biométricas — Solicitud"
sourcePath: "docs-es/resources/validaciones-biometricas/listar-todas-las-validaciones-biometricas.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations"
sourceAnchor: "Solicitud"
slug: "/resources/listar-todas-las-validaciones-biometricas"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-validaciones-biometricas"
---

# Listar Todas las Validaciones Biométricas
**API path(s):** /v2/biometric-validations

## Solicitud

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/biometric-validations",
  headers: {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    perPage: 10,
    "populates[]": ["client", "project"],
    where_status: "validated",
    where_type: "login",
    sort: "-createdAt"
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

url = "https://api.verifik.co/v2/biometric-validations"

params = {
  'page': 1,
  'perPage': 10,
  'populates[]': ['client', 'project'],
  'where_status': 'validated',
  'where_type': 'login',
  'sort': '-createdAt'
}

headers = {
  'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
}

response = requests.request("GET", url, headers=headers, params=params)

print(response.text)
```

```php
 'https://api.verifik.co/v2/biometric-validations?page=1&perPage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdAt',
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
  url := "https://api.verifik.co/v2/biometric-validations?page=1&perPage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdAt"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Authorization", "Bearer YOUR_ACCESS_TOKEN")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
