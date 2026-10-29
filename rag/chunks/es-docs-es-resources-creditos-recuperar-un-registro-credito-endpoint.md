---
id: "es-docs-es-resources-creditos-recuperar-un-registro-credito-endpoint"
title: "Recuperar un Registro de Crédito — Endpoint"
sourcePath: "docs-es/resources/creditos/recuperar-un-registro-credito.mdx"
locale: "es"
category: "resources"
tags:
  - "credits"
  - "resources"
endpoint: "/v2/credits/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/recuperar-un-registro-credito"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-un-registro-credito"
---

# Recuperar un Registro de Crédito
**API path(s):** /v2/credits/{id}

## Endpoint

**GET** `https://api.verifik.co/v2/credits/{id}`

Recupera un registro de crédito específico por su identificador único. Este endpoint devuelve información detallada sobre una sola transacción de crédito incluyendo su estado, monto e información del cliente asociado.

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

#### `id`
Tipo: String  
Requerido: Sí

El identificador único del registro de crédito que deseas recuperar.

#### `populates[]`
Tipo: Array  
Requerido: No

Array opcional de datos relacionados a incluir. Opciones disponibles: `client`, `superAdmin`.

### Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/credits/credit_123456789',
  params: {
    "populates[]": ["client", "superAdmin"]
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

conn.request("GET", "/v2/credits/credit_123456789?populates[]=client&populates[]=superAdmin", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php
request('GET', 'https://api.verifik.co/v2/credits/credit_123456789?populates[]=client&populates[]=superAdmin', [
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
  url := "https://api.verifik.co/v2/credits/credit_123456789?populates[]=client&populates[]=superAdmin"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Accept", "application/json")
  req.Header.Add("Authorization", "JWT token")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
