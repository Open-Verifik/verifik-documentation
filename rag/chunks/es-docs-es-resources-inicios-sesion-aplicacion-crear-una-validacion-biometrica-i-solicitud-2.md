---
id: "es-docs-es-resources-inicios-sesion-aplicacion-crear-una-validacion-biometrica-i-solicitud-2"
title: "Crear una Validación Biométrica de Inicio de Sesión de Aplicación — Solicitud"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/crear-una-validacion-biometrica-inicio-sesion-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/app-login"
sourceAnchor: "Solicitud"
slug: "/resources/crear-una-validacion-biometrica-inicio-sesion-aplicacion"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-biometrica-inicio-sesion-aplicacion"
---

# Crear una Validación Biométrica de Inicio de Sesión de Aplicación
**API path(s):** /v2/biometric-validations/app-login

## Solicitud

```javascript

const options = {
	method: 'POST',
	url: 'https://api.verifik.co/v2/biometric-validations/app-login',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer '
	},
	data: {
		project: '507f1f77bcf86cd799439011',
		projectFlow: '507f1f77bcf86cd799439015',
		identifier: 'user@example.com',
		type: 'login',
		expiresAt: '2024-12-31T23:59:59.000Z',
		redirectUrl: 'https://yourapp.com/success',
		webhookUrl: 'https://yourapp.com/webhook',
		requires2FA: false,
		ipAddress: '192.168.1.1',
		sendViaEmail: true,
		email: 'user@example.com',
		language: 'en'
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
	"project": "507f1f77bcf86cd799439011",
	"projectFlow": "507f1f77bcf86cd799439015",
	"identifier": "user@example.com",
	"type": "login",
	"expiresAt": "2024-12-31T23:59:59.000Z",
	"redirectUrl": "https://yourapp.com/success",
	"webhookUrl": "https://yourapp.com/webhook",
	"requires2FA": False,
	"ipAddress": "192.168.1.1",
	"sendViaEmail": True,
	"email": "user@example.com",
	"language": "en"
})

headers = {
	'Content-Type': 'application/json',
	'Authorization': 'Bearer '
}

conn.request("POST", "/v2/biometric-validations/app-login", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

	
	

```php
request('POST', 'https://api.verifik.co/v2/biometric-validations/app-login', [
	'headers' => [
		'Content-Type' => 'application/json',
		'Authorization' => 'Bearer ',
	],
	'json' => [
		'project' => '507f1f77bcf86cd799439011',
		'projectFlow' => '507f1f77bcf86cd799439015',
		'identifier' => 'user@example.com',
		'type' => 'login',
		'expiresAt' => '2024-12-31T23:59:59.000Z',
		'redirectUrl' => 'https://yourapp.com/success',
		'webhookUrl' => 'https://yourapp.com/webhook',
		'requires2FA' => false,
		'ipAddress' => '192.168.1.1',
		'sendViaEmail' => true,
		'email' => 'user@example.com',
		'language' => 'en'
	]
]);

echo $response->getBody();
```

	
	

```swift

let headers = [
	"Content-Type": "application/json",
	"Authorization": "Bearer "
]

let parameters = [
	"project": "507f1f77bcf86cd799439011",
	"projectFlow": "507f1f77bcf86cd799439015",
	"identifier": "user@example.com",
	"type": "login",
	"expiresAt": "2024-12-31T23:59:59.000Z",
	"redirectUrl": "https://yourapp.com/success",
	"webhookUrl": "https://yourapp.com/webhook",
	"requires2FA": false,
	"ipAddress": "192.168.1.1",
	"sendViaEmail": true,
	"email": "user@example.com",
	"language": "en"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/biometric-validations/app-login")! as URL,
																				cachePolicy: .useProtocolCachePolicy,
																		timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
	if (error != nil) {
		print(error as Any)
	} else {
		let httpResponse = response as? HTTPURLResponse
		print(httpResponse)
	}
})

dataTask.resume()
```
