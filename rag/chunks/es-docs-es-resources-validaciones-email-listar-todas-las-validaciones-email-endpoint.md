---
id: "es-docs-es-resources-validaciones-email-listar-todas-las-validaciones-email-endpoint"
title: "Listar todas las Validaciones de Email — Endpoint"
sourcePath: "docs-es/resources/validaciones-email/listar-todas-las-validaciones-email.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "email-validations?page=1&limit=10&status=validated&type=validation&populates[]=client&populates[]=project"
  - "resources"
endpoints:
  - "/v2/email-validations"
  - "/v2/email-validations?page=1&limit=10&status=validated&type=validation&populates[]=client&populates[]=project"
sourceAnchor: "Endpoint"
slug: "/resources/listar-todas-las-validaciones-email"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-validaciones-email"
---

# Listar todas las Validaciones de Email
**API path(s):** /v2/email-validations, /v2/email-validations?page=1&limit=10&status=validated&type=validation&populates[]=client&populates[]=project

## Endpoint

```
GET https://api.verifik.co/v2/email-validations
```

Este servicio recupera un listado de todas las validaciones de email con filtrado y paginación opcionales. Puedes filtrar por proyecto, estado, tipo y otros parámetros para encontrar validaciones específicas.

### Encabezados

#### `Content-Type`

**Tipo:** String  
**Requerido:** Sí  
**Valor:** `application/json`

#### `Authorization`

**Tipo:** String  
**Requerido:** Sí  
**Valor:** `Bearer {YOUR_ACCESS_TOKEN}`

### Parámetros de Consulta

#### `page`

**Tipo:** Number  
**Requerido:** No

Número de página para la paginación (por defecto: 1).

#### `limit`

**Tipo:** Number  
**Requerido:** No

Cantidad de registros por página (por defecto: 10, máx.: 100).

#### `project`

**Tipo:** String  
**Requerido:** No

Filtra por ID de proyecto.

#### `status`

**Tipo:** String  
**Requerido:** No

Filtra por estado: `new`, `sent`, `validated`, `expired`, `failed`.

#### `type`

**Tipo:** String  
**Requerido:** No

Filtra por tipo: `validation`, `login`, `onboarding`, `oneTimeLink`.

#### `email`

**Tipo:** String  
**Requerido:** No

Filtra por dirección de email.

#### `populates[]`

**Tipo:** String  
**Requerido:** No

Arreglo opcional de datos relacionados a incluir. Opciones disponibles: `client`, `project`, `projectFlow`.

### Solicitud

  

```javascript

const options = {
    method: "GET",
    url: "https://api.verifik.co/v2/email-validations",
    params: {
        page: 1,
        limit: 10,
        status: "validated",
        type: "validation",
        "populates[]": ["client", "project"],
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

conn.request("GET", "/v2/email-validations?page=1&limit=10&status=validated&type=validation&populates[]=client&populates[]=project", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/email-validations', [
  'headers' => [
    'Content-Type': 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'query' => [
    'page' => 1,
    'limit' => 10,
    'status' => 'validated',
    'type' => 'validation',
    'populates[]' => ['client', 'project']
  ]
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
	url := "https://api.verifik.co/v2/email-validations?page=1&limit=10&status=validated&type=validation&populates[]=client&populates[]=project"

	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Authorization", "Bearer ")

	client := &http.Client{}
	res, _ := client.Do(req)
	defer res.Body.Close()

	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}
```
