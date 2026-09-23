---
id: "es-docs-es-resources-validaciones-documentos-recuperar-una-validacion-documento-endpoint"
title: "Recuperar una Validación de Documento — Endpoint"
sourcePath: "docs-es/resources/validaciones-documentos/recuperar-una-validacion-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoints:
  - "/v2/document-validations/document_validation_123456789"
  - "/v2/document-validations/document_validation_123456789?populates[]=appregistration&populates[]=projectflow"
  - "/v2/document-validations/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/recuperar-una-validacion-documento"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-una-validacion-documento"
---

# Recuperar una Validación de Documento
**API path(s):** /v2/document-validations/document_validation_123456789, /v2/document-validations/document_validation_123456789?populates[]=appregistration&populates[]=projectflow, /v2/document-validations/{id}

## Endpoint

**GET** `https://api.verifik.co/v2/document-validations/{id}`

Con este servicio puedes obtener todas las Validaciones de Documentos que has creado o, si solo deseas una, especifica el ID de la validación y el endpoint devolverá únicamente la validación seleccionada.

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

ID de la Validación de Documento cuya información deseas obtener.

### Parámetros de Consulta

#### `populates[]`

Tipo: string  
Requerido: No

Opciones: `appRegistration`, `projectFlow`

### Solicitud

```javascript

const options = {
    method: "GET",
    url: "https://api.verifik.co/v2/document-validations/document_validation_123456789",
    params: {
        "populates[]": ["appRegistration", "projectFlow"],
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

conn.request("GET", "/v2/document-validations/document_validation_123456789?populates[]=appRegistration&populates[]=projectFlow", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/document-validations/document_validation_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'query' => [
    'populates[]' => ['appRegistration', 'projectFlow']
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
  url := "https://api.verifik.co/v2/document-validations/document_validation_123456789?populates[]=appRegistration&populates[]=projectFlow"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
