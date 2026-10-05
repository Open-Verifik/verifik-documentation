---
id: "es-docs-es-resources-webhooks-eliminar-un-webhook-endpoint"
title: "Eliminar un Webhook — Endpoint"
sourcePath: "docs-es/resources/webhooks/eliminar-un-webhook.mdx"
locale: "es"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoint: "/v2/webhooks/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/webhooks/delete-a-webhook"
url: "https://docs.verifik.co/verifik-es/resources/webhooks/delete-a-webhook"
---

# Eliminar un Webhook
**API path(s):** /v2/webhooks/{id}

## Endpoint

```
DELETE https://api.verifik.co/v2/webhooks/{id}
```

Para eliminar un webhook específico, haz una solicitud DELETE al endpoint donde `{id}` debe reemplazarse con el identificador único del webhook que deseas eliminar.

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros de Ruta

#### `id`

**Tipo:** string  
**Requerido:** Sí

ID del webhook que deseas eliminar.

### Ejemplo de Solicitud

```javascript

const options = {
  method: 'DELETE',
  url: 'https://api.verifik.co/v2/webhooks/66df1c0ad08b9d244bd1c806',
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

conn.request("DELETE", "/v2/webhooks/66df1c0ad08b9d244bd1c806", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('DELETE', 'https://api.verifik.co/v2/webhooks/66df1c0ad08b9d244bd1c806', [
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
	url := "https://api.verifik.co/v2/webhooks/66df1c0ad08b9d244bd1c806"

	req, _ := http.NewRequest("DELETE", url, nil)
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
