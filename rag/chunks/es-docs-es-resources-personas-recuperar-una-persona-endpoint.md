---
id: "es-docs-es-resources-personas-recuperar-una-persona-endpoint"
title: "Recuperar una Persona — Endpoint"
sourcePath: "docs-es/resources/personas/recuperar-una-persona.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons/person_123456789"
  - "/v2/face-recognition/persons/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/recuperar-una-persona"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-una-persona"
---

# Recuperar una Persona
**API path(s):** /v2/face-recognition/persons/person_123456789, /v2/face-recognition/persons/{id}

## Endpoint

```
https://api.verifik.co/v2/face-recognition/persons/{id}
```

Este endpoint te permite consultar una persona almacenada por la clave primaria.

#### Encabezados

#### `Content-Type`

**Tipo:** String  
**Requerido:** Requerido  
**Valor:** `application/json`

#### `Authorization`

**Tipo:** String  
**Requerido:** Requerido  
**Valor:** `Bearer `

#### Parámetros

#### `id`

**Tipo:** String  
**Requerido:** Sí

ID de la persona de la cual deseas obtener la información.

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/face-recognition/persons/person_123456789',
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

conn.request("GET", "/v2/face-recognition/persons/person_123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/face-recognition/persons/person_123456789', [
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
	url := "https://api.verifik.co/v2/face-recognition/persons/person_123456789"

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
