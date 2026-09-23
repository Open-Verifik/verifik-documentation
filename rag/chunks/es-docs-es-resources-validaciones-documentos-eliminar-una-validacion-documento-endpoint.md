---
id: "es-docs-es-resources-validaciones-documentos-eliminar-una-validacion-documento-endpoint"
title: "Eliminar una Validación de Documento — Endpoint"
sourcePath: "docs-es/resources/validaciones-documentos/eliminar-una-validacion-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoints:
  - "/v2/document-validations/document_validation_123456789"
  - "/v2/document-validations/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/eliminar-una-validacion-documento"
url: "https://docs.verifik.co/verifik-es/resources/eliminar-una-validacion-documento"
---

# Eliminar una Validación de Documento
**API path(s):** /v2/document-validations/document_validation_123456789, /v2/document-validations/{id}

## Endpoint

**DELETE** `https://api.verifik.co/v2/document-validations/{id}`

Con este servicio puedes eliminar de forma permanente un registro específico de Validación de Documento de tu cuenta de Verifik. Esta acción no se puede deshacer y eliminará por completo los datos de la validación del documento.

### Encabezados

#### Content-Type

Tipo: String  
Requerido: Sí

`application/json`

#### Authorization

Tipo: String  
Requerido: Sí

`Bearer {YOUR_ACCESS_TOKEN}`

### Parámetros de Ruta

#### `id`

Tipo: string  
Requerido: Sí

El identificador único de la Validación de Documento que deseas eliminar.

### Solicitud

```javascript

const options = {
    method: "DELETE",
    url: "https://api.verifik.co/v2/document-validations/document_validation_123456789",
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

conn.request("DELETE", "/v2/document-validations/document_validation_123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('DELETE', 'https://api.verifik.co/v2/document-validations/document_validation_123456789', [
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
  url := "https://api.verifik.co/v2/document-validations/document_validation_123456789"

  req, _ := http.NewRequest("DELETE", url, nil)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
