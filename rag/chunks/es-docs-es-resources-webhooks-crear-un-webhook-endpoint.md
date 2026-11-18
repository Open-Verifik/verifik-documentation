---
id: "es-docs-es-resources-webhooks-crear-un-webhook-endpoint"
title: "Crear un Webhook — Endpoint"
sourcePath: "docs-es/resources/webhooks/crear-un-webhook.mdx"
locale: "es"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoint: "/v2/webhooks"
sourceAnchor: "Endpoint"
slug: "/resources/webhooks/crear-un-webhook"
url: "https://docs.verifik.co/verifik-es/resources/webhooks/crear-un-webhook"
---

# Crear un Webhook
**API path(s):** /v2/webhooks

## Endpoint

```
POST https://api.verifik.co/v2/webhooks
```

Esta API te permite crear un nuevo webhook dentro de tu cuenta. Puedes asociar un webhook con flujos de proyecto en este paso o cuando actualices el webhook.

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros de Cuerpo

#### `url`

**Tipo:** string  
**Requerido:** Sí

La URL donde enviaremos la información vía POST.

#### `name`

**Tipo:** string  
**Requerido:** Sí

El nombre de tu webhook para identificarlo fácilmente.

#### `isActive`

**Tipo:** boolean  
**Requerido:** Sí

Este booleano habilitará/deshabilitará el webhook cuando lo requieras.

#### `description`

**Tipo:** string  
**Requerido:** No

Descripción para saber qué información estarás enviando allí.

#### `link`

**Tipo:** array  
**Requerido:** No

Arreglo de projectFlows a los que quieres vincular este webhook.

### Ejemplo de Solicitud

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/webhooks',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  data: {
    url: 'https://sandbox.verifik.co/v2/webhooks/logs',
    name: 'Postman sample',
    isActive: true,
    description: 'This is an example',
    link: ['66df24f4c80823e06a348019']
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
  "name": "Postman sample",
  "isActive": True,
  "description": "This is an example",
  "link": ["66df24f4c80823e06a348019"]
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/webhooks", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/webhooks', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'url' => 'https://sandbox.verifik.co/v2/webhooks/logs',
    'name' => 'Postman sample',
    'isActive' => true,
    'description' => 'This is an example',
    'link' => ['66df24f4c80823e06a348019']
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
	url := "https://api.verifik.co/v2/webhooks"

	payload := map[string]interface{}{
		"url":         "https://sandbox.verifik.co/v2/webhooks/logs",
		"name":        "Postman sample",
		"isActive":    true,
		"description": "This is an example",
		"link":        []string{"66df24f4c80823e06a348019"},
	}

	jsonData, _ := json.Marshal(payload)

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
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
