---
id: "es-docs-es-resources-personas-listar-todas-las-personas-endpoint"
title: "Listar Todas las Personas — Endpoint"
sourcePath: "docs-es/resources/personas/listar-todas-las-personas.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons"
  - "/v2/face-recognition/persons?page=1&limit=10&status=active&populates[]=collections"
sourceAnchor: "Endpoint"
slug: "/resources/listar-todas-las-personas"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-personas"
---

# Listar Todas las Personas
**API path(s):** /v2/face-recognition/persons, /v2/face-recognition/persons?page=1&limit=10&status=active&populates[]=collections

## Endpoint

```
https://api.verifik.co/v2/face-recognition/persons
```

Este endpoint te permite traer todas las personas almacenadas en Verifik para todas las colecciones.

#### Encabezados

#### `Content-Type`

**Tipo:** String  
**Requerido:** Requerido  
**Valor:** `application/json`

#### `Authorization`

**Tipo:** String  
**Requerido:** Requerido  
**Valor:** `Bearer `

#### Parámetros de Consulta

#### `page`

**Tipo:** Number  
**Requerido:** No

Número de página para paginación (predeterminado: 1).

#### `limit`

**Tipo:** Number  
**Requerido:** No

Número de registros por página (predeterminado: 10, máximo: 100).

#### `collection`

**Tipo:** String  
**Requerido:** No

Filtrar por ID de colección específico.

#### `status`

**Tipo:** String  
**Requerido:** No

Filtrar por estado: `active`, `inactive`, `pending`.

#### `populates[]`

**Tipo:** String  
**Requerido:** No

Array opcional de datos relacionados a incluir. Opciones disponibles: `collections`, `client`.

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/face-recognition/persons',
  params: {
    page: 1,
    limit: 10,
    status: "active",
    "populates[]": ["collections"]
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

conn.request("GET", "/v2/face-recognition/persons?page=1&limit=10&status=active&populates[]=collections", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/face-recognition/persons?page=1&limit=10&status=active&populates[]=collections', [
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
	"io"
	"net/http"
)

func main() {
	url := "https://api.verifik.co/v2/face-recognition/persons?page=1&limit=10&status=active&populates[]=collections"

	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Add("Accept", "application/json")
	req.Header.Add("Authorization", "JWT token")

	client := &http.Client{}
	res, _ := client.Do(req)
	defer res.Body.Close()

	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}
```
