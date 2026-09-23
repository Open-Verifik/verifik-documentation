---
id: "es-docs-es-resources-validaciones-documentos-crear-una-validacion-nombre-solicitud-2"
title: "Crear una Validación de Nombre — Solicitud"
sourcePath: "docs-es/resources/validaciones-documentos/crear-una-validacion-nombre.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoints:
  - "/v2/document-validations/document_validation_123456789/validate"
  - "/v2/document-validations/{id}/validate"
sourceAnchor: "Solicitud"
slug: "/resources/crear-una-validacion-nombre"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-nombre"
---

# Crear una Validación de Nombre
**API path(s):** /v2/document-validations/document_validation_123456789/validate, /v2/document-validations/{id}/validate

## Solicitud

```javascript

const options = {
  method: 'PUT',

  params: {
    force: false
  },
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  }
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

conn.request("PUT", "/v2/document-validations/document_validation_123456789/validate?force=false", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php
request('PUT', 'https://api.verifik.co/v2/document-validations/document_validation_123456789/validate', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'query' => [
    'force' => false
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
  url := "https://api.verifik.co/v2/document-validations/document_validation_123456789/validate?force=false"

  req, _ := http.NewRequest("PUT", url, nil)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```

### Respuesta

```json
{
    "success": true,
    "data": {
        "_id": "document_validation_123456789",
        "status": "ACTIVE",
        "nameValidation": {
            "firstName": {
                "provided": "John",
                "official": "John",
                "match": true,
                "confidence": 0.95
            },
            "lastName": {
                "provided": "Doe",
                "official": "Doe",
                "match": true,
                "confidence": 0.95
            },
            "overallMatch": true,
            "validationDate": "2024-01-15T10:32:00Z"
        },
        "updatedAt": "2024-01-15T10:32:00Z"
    },
    "signature": {
        "dateTime": "April 11, 2023 12:25 PM",
        "message": "Certified by Verifik.co"
    }
}
```

  

```json
{
    "error": "Name validation not supported for this document type",
    "message": "UNSUPPORTED_DOCUMENT_TYPE"
}
```

```json
{
    "error": "Prerequisites not met",
    "message": "MISSING_PREREQUISITES"
}
```
