---
id: "es-docs-es-resources-webhooks-listar-todos-los-webhooks-endpoint"
title: "Listar Todos los Webhooks — Endpoint"
sourcePath: "docs-es/resources/webhooks/listar-todos-los-webhooks.mdx"
locale: "es"
category: "resources"
tags:
  - "webhooks"
  - "webhooks?page=1&perpage=20&like_name=postman"
  - "resources"
endpoints:
  - "/v2/webhooks"
  - "/v2/webhooks?page=1&perpage=20&like_name=postman"
sourceAnchor: "Endpoint"
slug: "/resources/listar-todos-los-webhooks"
url: "https://docs.verifik.co/verifik-es/resources/listar-todos-los-webhooks"
---

# Listar Todos los Webhooks
**API path(s):** /v2/webhooks, /v2/webhooks?page=1&perpage=20&like_name=postman

## Endpoint

```
GET https://api.verifik.co/v2/webhooks
```

Con este servicio, puedes traer todos los Webhooks que has creado.

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros de Consulta

#### `page`

**Tipo:** number  
**Requerido:** No

Puedes definir el número de página si tienes demasiados registros.

#### `perPage`

**Tipo:** number  
**Requerido:** No

Cuántos registros necesitas por página.

#### `like_name`

**Tipo:** string  
**Requerido:** No

Puedes consultar una condición de tipo 'like'.

#### `where_url`

**Tipo:** string  
**Requerido:** No

Puedes hacer una comparación exacta dentro de un campo.

### Ejemplo de Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/webhooks',
  params: {
    page: 1,
    perPage: 20,
    like_name: 'Postman'
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

conn.request("GET", "/v2/webhooks?page=1&perPage=20&like_name=Postman", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/webhooks?page=1&perPage=20&like_name=Postman', [
  'headers' => [
    'Content-Type': 'application/json',
    'Authorization' => 'Bearer ',
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
	url := "https://api.verifik.co/v2/webhooks?page=1&perPage=20&like_name=Postman"

	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer ")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	fmt.Println(string(body))
}
```
