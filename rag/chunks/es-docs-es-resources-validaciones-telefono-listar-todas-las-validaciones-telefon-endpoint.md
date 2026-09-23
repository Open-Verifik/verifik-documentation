---
id: "es-docs-es-resources-validaciones-telefono-listar-todas-las-validaciones-telefon-endpoint"
title: "Listar todas las Validaciones de Teléfono — Endpoint"
sourcePath: "docs-es/resources/validaciones-telefono/listar-todas-las-validaciones-telefono.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "phone-validations?page=1&limit=10&status=validated&type=validation&countrycode=%2b1&populates[]=client&populates[]=project"
  - "resources"
endpoints:
  - "/v2/phone-validations"
  - "/v2/phone-validations?page=1&limit=10&status=validated&type=validation&countrycode=%2b1&populates[]=client&populates[]=project"
sourceAnchor: "Endpoint"
slug: "/resources/listar-todas-las-validaciones-telefono"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-validaciones-telefono"
---

# Listar todas las Validaciones de Teléfono
**API path(s):** /v2/phone-validations, /v2/phone-validations?page=1&limit=10&status=validated&type=validation&countrycode=%2b1&populates[]=client&populates[]=project

## Endpoint

```
GET https://api.verifik.co/v2/phone-validations
```

Este servicio recupera un listado de todas las validaciones de teléfono con filtrado y paginación opcionales. Puedes filtrar por proyecto, estado, tipo y otros parámetros para encontrar validaciones específicas.

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

Filtra por estado: `new`, `sent`, `validated`, `failed`.

#### `type`

**Tipo:** String  
**Requerido:** No

Filtra por tipo: `validation`, `login`, `onboarding`.

#### `countryCode`

**Tipo:** String  
**Requerido:** No

Filtra por código de país.

#### `phone`

**Tipo:** String  
**Requerido:** No

Filtra por número de teléfono.

#### `populates[]`

**Tipo:** String  
**Requerido:** No

Arreglo opcional de datos relacionados a incluir. Opciones disponibles: `client`, `project`, `projectFlow`.

### Solicitud

  

```javascript

const options = {
    method: "GET",
    url: "https://api.verifik.co/v2/phone-validations",
    params: {
        page: 1,
        limit: 10,
        status: "validated",
        type: "validation",
        countryCode: "+1",
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

conn.request("GET", "/v2/phone-validations?page=1&limit=10&status=validated&type=validation&countryCode=%2B1&populates[]=client&populates[]=project", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/phone-validations', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'query' => [
    'page' => 1,
    'limit' => 10,
    'status' => 'validated',
    'type' => 'validation',
    'countryCode' => '+1',
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
	url := "https://api.verifik.co/v2/phone-validations?page=1&limit=10&status=validated&type=validation&countryCode=%2B1&populates[]=client&populates[]=project"

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
