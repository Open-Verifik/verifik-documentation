---
id: "es-docs-es-resources-inicios-sesion-aplicacion-recuperar-un-inicio-sesion-aplica-endpoint"
title: "Recuperar un Inicio de Sesión de Aplicación — Endpoint"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/recuperar-un-inicio-sesion-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-logins"
  - "resources"
endpoints:
  - "/v2/app-logins/66e464acbad79f3a380d408f"
  - "/v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricvalidation"
  - "/v2/app-logins/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/recuperar-un-inicio-sesion-aplicacion"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-un-inicio-sesion-aplicacion"
---

# Recuperar un Inicio de Sesión de Aplicación
**API path(s):** /v2/app-logins/66e464acbad79f3a380d408f, /v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricvalidation, /v2/app-logins/{id}

## Endpoint

```
GET https://api.verifik.co/v2/app-logins/{id}
```

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre | Tipo   | Requerido | Descripción                                                                       |
| ------ | ------ | --------- | --------------------------------------------------------------------------------- |
| `id`   | string | Sí        | El ID único del registro de inicio de sesión de aplicación que deseas recuperar  |

### Parámetros de Consulta

| Nombre        | Tipo  | Requerido | Descripción                                                                                         |
| ------------- | ----- | --------- | --------------------------------------------------------------------------------------------------- |
| `populates[]` | array | No        | Un array que especifica qué campos de validación poblar (por ejemplo, `biometricValidation`)       |

### Solicitud

	

```javascript

const options = {
	method: 'GET',
	url: 'https://api.verifik.co/v2/app-logins/66e464acbad79f3a380d408f',
	params: {
		'populates[]': ['biometricValidation']
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

conn.request("GET", "/v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricValidation", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

	
	

```php
request('GET', 'https://api.verifik.co/v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricValidation', [
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
		url := "https://api.verifik.co/v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricValidation"
    
		req, _ := http.NewRequest("GET", url, nil)
    
		req.Header.Add("Content-Type", "application/json")
		req.Header.Add("Authorization", "Bearer ")
    
		res, _ := http.DefaultClient.Do(req)
    
		defer res.Body.Close()
		body, _ := io.ReadAll(res.Body)
    
		fmt.Println(string(body))
}
```
