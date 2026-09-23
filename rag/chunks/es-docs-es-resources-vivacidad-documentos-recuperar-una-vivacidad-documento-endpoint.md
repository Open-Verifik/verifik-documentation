---
id: "es-docs-es-resources-vivacidad-documentos-recuperar-una-vivacidad-documento-endpoint"
title: "Recuperar una Validación de Vivacidad de Documento — Endpoint"
sourcePath: "docs-es/resources/vivacidad-documentos/recuperar-una-vivacidad-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "document-liveness"
  - "resources"
endpoints:
  - "/v2/document-liveness/document_liveness_123456789"
  - "/v2/document-liveness/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/recuperar-una-vivacidad-documento"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-una-vivacidad-documento"
---

# Recuperar una Validación de Vivacidad de Documento
**API path(s):** /v2/document-liveness/document_liveness_123456789, /v2/document-liveness/{id}

## Endpoint

```
GET https://api.verifik.co/v2/document-liveness/{id}
```

Este servicio recupera un registro específico de vivacidad de documento usando su identificador único. La respuesta incluye los detalles de las verificaciones anti-fraude, estado y metadatos asociados.

### Encabezados

#### Content-Type
Tipo: String  
Requerido: Sí

`application/json`

#### Authorization
Tipo: String  
Requerido: Sí

`Bearer `

### Parámetros de Ruta

#### `id`
Tipo: string  
Requerido: Sí

ID del registro de Vivacidad de Documento del cual deseas recuperar la información.

### Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/document-liveness/document_liveness_123456789',
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

conn.request("GET", "/v2/document-liveness/document_liveness_123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php
request('GET', 'https://api.verifik.co/v2/document-liveness/document_liveness_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
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
  url := "https://api.verifik.co/v2/document-liveness/document_liveness_123456789"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
