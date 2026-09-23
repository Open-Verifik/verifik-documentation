---
id: "es-docs-es-resources-phone-validations-retrieve-a-phone-validation-endpoint"
title: "Recuperar una Validación de Teléfono — Endpoint"
sourcePath: "docs-es/resources/phone-validations/retrieve-a-phone-validation.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/v2/phone-validations/phone_validation_123456789"
  - "/v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectflow"
  - "/v2/phone-validations/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/phone-validations/retrieve-a-phone-validation"
url: "https://docs.verifik.co/verifik-es/resources/phone-validations/retrieve-a-phone-validation"
---

# Recuperar una Validación de Teléfono
**API path(s):** /v2/phone-validations/phone_validation_123456789, /v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectflow, /v2/phone-validations/{id}

## Endpoint

```
GET https://api.verifik.co/v2/phone-validations/{id}
```

Este servicio recupera un registro específico de validación de teléfono usando su identificador único. La respuesta incluye todos los detalles sobre el proceso de validación, incluyendo estado, información del OTP y datos del proyecto asociado. Este endpoint es útil para verificar el estado actual de una validación de teléfono o recuperar detalles para fines de auditoría.

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

El identificador único de la Validación de Teléfono que deseas recuperar.

### Parámetros de Consulta

#### `populates[]`

**Tipo:** String  
**Requerido:** No

Opcional. Una lista de objetos relacionados a incluir en la respuesta. Opciones disponibles: `client`, `project`, `projectFlow`.

### Solicitud

  

```javascript

const options = {
    method: "GET",
    url: "https://api.verifik.co/v2/phone-validations/phone_validation_123456789",
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

conn.request("GET", "/v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/phone-validations/phone_validation_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
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
	url := "https://api.verifik.co/v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow"

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
