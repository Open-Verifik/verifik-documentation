---
id: "es-docs-es-resources-webhooks-recuperar-un-webhook-endpoint"
title: "Recuperar un Webhook — Endpoint"
sourcePath: "docs-es/resources/webhooks/recuperar-un-webhook.mdx"
locale: "es"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoint: "/v2/webhooks/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/webhooks/retrieve-a-webhook"
url: "https://docs.verifik.co/verifik-es/resources/webhooks/retrieve-a-webhook"
---

# Recuperar un Webhook
**API path(s):** /v2/webhooks/{id}

## Endpoint

```
GET https://api.verifik.co/v2/webhooks/{id}
```

Consultaremos por ID cualquier webhook que esté almacenado en nuestra Base de Datos.

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros de Ruta

#### `id`

**Tipo:** string  
**Requerido:** Sí

ID del webhook del cual quieres traer la información.

### Ejemplo de Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223',
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

conn.request("GET", "/v2/webhooks/66de320d6a5c6ef0e02d4223", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223', [
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
	url := "https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223"

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
