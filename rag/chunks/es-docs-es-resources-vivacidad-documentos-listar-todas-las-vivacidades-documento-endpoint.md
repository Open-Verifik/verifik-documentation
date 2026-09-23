---
id: "es-docs-es-resources-vivacidad-documentos-listar-todas-las-vivacidades-documento-endpoint"
title: "Listar Todas las Validaciones de Vivacidad de Documento — Endpoint"
sourcePath: "docs-es/resources/vivacidad-documentos/listar-todas-las-vivacidades-documentos.mdx"
locale: "es"
category: "resources"
tags:
  - "document-liveness"
  - "document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appregistration"
  - "resources"
endpoints:
  - "/v2/document-liveness"
  - "/v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appregistration"
sourceAnchor: "Endpoint"
slug: "/resources/listar-todas-las-vivacidades-documentos"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-vivacidades-documentos"
---

# Listar Todas las Validaciones de Vivacidad de Documento
**API path(s):** /v2/document-liveness, /v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appregistration

## Endpoint

```
GET https://api.verifik.co/v2/document-liveness
```

Con este servicio, puedes recuperar todas las validaciones de vivacidad de documentos que has procesado.

### Encabezados

#### Content-Type
Tipo: String  
Requerido: Sí

`application/json`

#### Authorization
Tipo: String  
Requerido: Sí

`Bearer `

### Parámetros de Consulta

#### `page`
Tipo: number  
Requerido: No

Número de página para la paginación (por defecto: 1)

#### `limit`
Tipo: number  
Requerido: No

Número de registros por página (por defecto: 10, máximo: 100)

#### `status`
Tipo: string  
Requerido: No

Filtra por estado: `new`, `processing`, `completed`, `failed`

#### `populates[]`
Tipo: string  
Requerido: No

Arreglo opcional de datos relacionados a incluir. Opciones disponibles: `client`, `appRegistration`.

### Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/document-liveness',
  params: {
    page: 1,
    limit: 10,
    status: 'completed',
    'populates[]': ['client', 'appRegistration']
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

conn.request("GET", "/v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appRegistration", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php
request('GET', 'https://api.verifik.co/v2/document-liveness', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'query' => [
    'page' => 1,
    'limit' => 10,
    'status' => 'completed',
    'populates[]' => ['client', 'appRegistration']
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
  url := "https://api.verifik.co/v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appRegistration"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
