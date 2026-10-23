---
id: "es-docs-es-resources-inicios-sesion-aplicacion-listar-todos-los-inicios-sesion-a-solicitud-2"
title: "Listar Todos los Inicios de Sesión de Aplicación — Solicitud"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/listar-todos-los-inicios-sesion-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-logins"
  - "resources"
endpoint: "/v2/app-logins"
sourceAnchor: "Solicitud"
slug: "/resources/listar-todos-los-inicios-sesion-aplicacion"
url: "https://docs.verifik.co/verifik-es/resources/listar-todos-los-inicios-sesion-aplicacion"
---

# Listar Todos los Inicios de Sesión de Aplicación
**API path(s):** /v2/app-logins

## Solicitud

```javascript

const options = {
	method: 'GET',
	url: 'https://api.verifik.co/v2/app-logins',
	params: {
		page: 1,
		'populates[]': ['emailValidation', 'phoneValidation', 'biometricValidation'],
		sort: '-createdAt'
	},
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

conn.request("GET", "/v2/app-logins?page=1&populates[]=emailValidation&populates[]=phoneValidation&populates[]=biometricValidation&sort=-createdAt", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

	
	

```php
request('GET', 'https://api.verifik.co/v2/app-logins?page=1&populates[]=emailValidation&populates[]=phoneValidation&populates[]=biometricValidation&sort=-createdAt', [
	'headers' => [
		'Content-Type' => 'application/json',
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
		url := "https://api.verifik.co/v2/app-logins?page=1&populates[]=emailValidation&populates[]=phoneValidation&populates[]=biometricValidation&sort=-createdAt"
    
		req, _ := http.NewRequest("GET", url, nil)
    
		req.Header.Add("Content-Type", "application/json")
		req.Header.Add("Authorization", "Bearer ")
    
		res, _ := http.DefaultClient.Do(req)
    
		defer res.Body.Close()
		body, _ := io.ReadAll(res.Body)
    
		fmt.Println(string(body))
}
```
