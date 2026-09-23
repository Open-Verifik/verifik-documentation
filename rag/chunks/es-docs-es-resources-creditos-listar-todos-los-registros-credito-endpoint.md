---
id: "es-docs-es-resources-creditos-listar-todos-los-registros-credito-endpoint"
title: "Listar Todos los Registros de Crédito — Endpoint"
sourcePath: "docs-es/resources/creditos/listar-todos-los-registros-credito.mdx"
locale: "es"
category: "resources"
tags:
  - "credits"
  - "credits?page=1&perpage=20&populates[]=client&where_status=approved&where_category=purchase"
  - "resources"
endpoints:
  - "/v2/credits"
  - "/v2/credits?page=1&perpage=20&populates[]=client&where_status=approved&where_category=purchase"
sourceAnchor: "Endpoint"
slug: "/resources/listar-todos-los-registros-credito"
url: "https://docs.verifik.co/verifik-es/resources/listar-todos-los-registros-credito"
---

# Listar Todos los Registros de Crédito
**API path(s):** /v2/credits, /v2/credits?page=1&perpage=20&populates[]=client&where_status=approved&where_category=purchase

## Endpoint

**GET** `https://api.verifik.co/v2/credits`

Recupera una lista de registros de Crédito en el sistema de Verifik. Este endpoint devuelve un array de objetos de crédito, cada uno conteniendo información detallada sobre transacciones de crédito, saldos y cuentas de cliente asociadas.

### Encabezados

#### Content-Type
Tipo: String  
Requerido: Sí

`application/json`

#### Authorization
Tipo: String  
Requerido: Sí

`Bearer `

### Parámetros

#### `page`
Tipo: Number  
Requerido: No

Especifica el número de página para la paginación, comenzando desde 1.

#### `perPage`
Tipo: Number  
Requerido: No

Define el número de elementos por página para la paginación.

#### `populates[]`
Tipo: String  
Requerido: No

Rellena el campo especificado, transformando referencias por id en objetos completos. Opciones disponibles: `client`, `superAdmin`

#### `where_status`
Tipo: String  
Requerido: No

Condición where para filtrar por estado. Opciones: `approved`, `pending`, `failed`, `postPaid`

#### `where_category`
Tipo: String  
Requerido: No

Condición where para filtrar por categoría. Opciones: `purchase`, `usage`

#### `where_client`
Tipo: String  
Requerido: No

Filtrar por ID de cliente específico

### Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/credits',
  params: {
    page: 1,
    perPage: 20,
    "populates[]": ["client"],
    where_status: "approved",
    where_category: "purchase"
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt '
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
    'Accept': "application/json",
    'Authorization': "JWT token"
}

conn.request("GET", "/v2/credits?page=1&perPage=20&populates[]=client&where_status=approved&where_category=purchase", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php
request('GET', 'https://api.verifik.co/v2/credits?page=1&perPage=20&populates[]=client&where_status=approved&where_category=purchase', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
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
  url := "https://api.verifik.co/v2/credits?page=1&perPage=20&populates[]=client&where_status=approved&where_category=purchase"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Accept", "application/json")
  req.Header.Add("Authorization", "JWT token")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
