---
id: "es-docs-es-resources-validaciones-documentos-listar-todas-las-validaciones-docum-solicitud-2"
title: "Listar todas las Validaciones de Documentos — Solicitud"
sourcePath: "docs-es/resources/validaciones-documentos/listar-todas-las-validaciones-documentos.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations"
sourceAnchor: "Solicitud"
slug: "/resources/listar-todas-las-validaciones-documentos"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-validaciones-documentos"
---

# Listar todas las Validaciones de Documentos
**API path(s):** /v2/document-validations

## Solicitud

```javascript

const options = {
    method: "GET",
    url: "https://api.verifik.co/v2/document-validations",
    params: {
        page: 1,
        perPage: 10,
        "populates[]": ["appRegistration", "projectFlow"],
        where_status: "ACTIVE",
        where_documentType: "driver_license",
        where_validationMethod: "OCR",
    },
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
    },
};

try {
    const { data } = await axios.request(options);
    console.log(data);
} catch (error) {
    console.error(error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
}

conn.request("GET", "/v2/document-validations?page=1&perPage=10&populates[]=appRegistration&populates[]=projectFlow&where_status=ACTIVE&where_documentType=driver_license&where_validationMethod=OCR", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/document-validations', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'query' => [
    'page' => 1,
    'perPage' => 10,
    'populates[]' => ['appRegistration', 'projectFlow'],
    'where_status' => 'ACTIVE',
    'where_documentType' => 'driver_license',
    'where_validationMethod' => 'OCR'
  ]
]);

echo $response->getBody();
```

```go
package main

  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {
  url := "https://api.verifik.co/v2/document-validations?page=1&perPage=10&populates[]=appRegistration&populates[]=projectFlow&where_status=ACTIVE&where_documentType=driver_license&where_validationMethod=OCR"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
