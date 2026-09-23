---
id: "es-docs-es-resources-webhooks-actualizar-un-webhook-endpoint"
title: "Actualizar un Webhook — Endpoint"
sourcePath: "docs-es/resources/webhooks/actualizar-un-webhook.mdx"
locale: "es"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoint: "/v2/webhooks/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/actualizar-un-webhook"
url: "https://docs.verifik.co/verifik-es/resources/actualizar-un-webhook"
---

# Actualizar un Webhook
**API path(s):** /v2/webhooks/{id}

## Endpoint

```
PUT https://api.verifik.co/v2/webhooks/{id}
```

Método para actualizar un webhook existente. Para que el servicio funcione, se requiere el parámetro _id, que se genera cuando un webhook se crea correctamente.

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros de Ruta

#### `id`

**Tipo:** string  
**Requerido:** Sí

El identificador único del webhook a actualizar.

### Parámetros de Cuerpo

#### `name`

**Tipo:** string  
**Requerido:** No

El nuevo nombre que quieres que tenga este webhook.

#### `url`

**Tipo:** string  
**Requerido:** No

Puedes actualizar la URL a donde quieres recibir las llamadas POST.

#### `description`

**Tipo:** string  
**Requerido:** No

La nueva descripción que quieres que tenga este webhook.

#### `link`

**Tipo:** array  
**Requerido:** No

Arreglo de projectFlows que quieres **vincular** a este webhook.

#### `unlink`

**Tipo:** array  
**Requerido:** No

Arreglo de projectFlows que quieres **desvincular** de este webhook.

### Ejemplo de Solicitud

```javascript

const options = {
  method: 'PUT',
  url: 'https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  data: {
    url: 'https://sandbox.verifik.co/v2/webhooks/logs',
    name: 'Updated webhook name',
    description: 'Updated description'
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

payload = json.dumps({
  "url": "https://sandbox.verifik.co/v2/webhooks/logs",
  "name": "Updated webhook name",
  "description": "Updated description"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("PUT", "/v2/webhooks/66de320d6a5c6ef0e02d4223", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('PUT', 'https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223', [
  'headers' => [
    'Content-Type': 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'url' => 'https://sandbox.verifik.co/v2/webhooks/logs',
    'name' => 'Updated webhook name',
    'description' => 'Updated description'
  ]
]);

echo $response->getBody();
```

```go
package main

	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func main() {
	url := "https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223"

	payload := map[string]interface{}{
		"url":         "https://sandbox.verifik.co/v2/webhooks/logs",
		"name":        "Updated webhook name",
		"description": "Updated description",
	}

	jsonData, _ := json.Marshal(payload)

	req, _ := http.NewRequest("PUT", url, bytes.NewBuffer(jsonData))
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
