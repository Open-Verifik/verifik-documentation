---
id: "es-docs-es-resources-validaciones-email-recuperar-una-validacion-email-endpoint"
title: "Recuperar una Validación de Email — Endpoint"
sourcePath: "docs-es/resources/validaciones-email/recuperar-una-validacion-email.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/recuperar-una-validacion-email"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-una-validacion-email"
---

# Recuperar una Validación de Email
**API path(s):** /v2/email-validations/{id}

## Endpoint

```
GET https://api.verifik.co/v2/email-validations/{id}
```

Este servicio recupera un registro específico de validación de email usando su identificador único. La respuesta incluye todos los detalles del proceso de validación de email, incluyendo estado, información del OTP y datos del proyecto asociado.

### Encabezados

#### `Content-Type`

**Tipo:** String  
**Requerido:** Sí  
**Valor:** `application/json`

#### `Authorization`

**Tipo:** String  
**Requerido:** Sí  
**Valor:** `Bearer {YOUR_ACCESS_TOKEN}`

### Parámetros de Ruta

#### `id`

**Tipo:** String  
**Requerido:** Sí

El identificador único del registro de validación de email que deseas recuperar.

### Parámetros de Consulta

#### `populates[]`

**Tipo:** String  
**Requerido:** No

Arreglo opcional de datos relacionados a incluir. Opciones disponibles: `client`, `project`, `projectFlow`.

### Solicitud

  

```javascript

const options = {
    method: "GET",
    url: "https://api.verifik.co/v2/email-validations/email_validation_123456789",
    params: {
        "populates[]": ["client", "project", "projectFlow"],
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

conn.request("GET", "/v2/email-validations/email_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/email-validations/email_validation_123456789', [
  'headers' => [
    'Content-Type': 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'query' => [
    'populates[]' => ['client', 'project', 'projectFlow']
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
	url := "https://api.verifik.co/v2/email-validations/email_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow"

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
