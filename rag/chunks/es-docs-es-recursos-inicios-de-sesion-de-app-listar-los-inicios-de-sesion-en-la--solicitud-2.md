---
id: "es-docs-es-recursos-inicios-de-sesion-de-app-listar-los-inicios-de-sesion-en-la--solicitud-2"
title: "Listar Todos los Inicios de Sesión de Aplicación — Solicitud"
sourcePath: "docs-es/recursos/inicios-de-sesion-de-app/listar-los-inicios-de-sesion-en-la-app.mdx"
locale: "es"
category: "recursos"
tags:
  - "app-logins"
  - "app-logins?page=1&populates[]=emailvalidation&populates[]=phonevalidation&populates[]=biometricvalidation&sort=-createdat"
  - "recursos"
endpoints:
  - "/v2/app-logins"
  - "/v2/app-logins?page=1&populates[]=emailvalidation&populates[]=phonevalidation&populates[]=biometricvalidation&sort=-createdat"
sourceAnchor: "Solicitud"
slug: "/recursos/inicios-de-sesion-de-app/listar-los-inicios-de-sesion-en-la-app"
url: "https://docs.verifik.co/verifik-es/recursos/inicios-de-sesion-de-app/listar-los-inicios-de-sesion-en-la-app"
---

# Listar Todos los Inicios de Sesión de Aplicación
**API path(s):** /v2/app-logins, /v2/app-logins?page=1&populates[]=emailvalidation&populates[]=phonevalidation&populates[]=biometricvalidation&sort=-createdat

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
