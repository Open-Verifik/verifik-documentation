---
id: "es-docs-es-autenticacion-api-key-acceso-por-telefono-endpoint"
title: "Acceso con API Key vía Teléfono — Endpoint"
sourcePath: "docs-es/autenticacion/api-key-acceso-por-telefono.mdx"
locale: "es"
category: "autenticacion"
tags:
  - "projects"
  - "autenticacion"
endpoints:
  - "/v2/projects/phone-login"
  - "/v2/projects/phone-login/confirm"
sourceAnchor: "Endpoint"
slug: "/autenticacion/acceso-con-llave-por-telefono"
url: "https://docs.verifik.co/verifik-es/autenticacion/acceso-con-llave-por-telefono"
---

# Acceso con API Key vía Teléfono
**API path(s):** /v2/projects/phone-login, /v2/projects/phone-login/confirm

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/projects/phone-login
```

Métodos usados para iniciar sesión con una cuenta ya generada en Verifik. Este procedimiento es importante porque todas las consultas requieren un Access Token, que solo se genera al iniciar sesión.

Estos servicios crean una solicitud de OTP (One Time Password) necesaria para validar que el teléfono o email pertenece a un cliente de Verifik.

### Encabezados

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                    |
| ---------------- | ------ | --------- | ---------------------------------------------- |
| `countryCode`    | string | Sí        | Código de país para el número de teléfono      |
| `phone`          | number | Sí        | Número de teléfono                              |
| `type`           | string | Sí        | Tipo de solicitud. Usar "login" para autenticación |

### Solicitud

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/projects/phone-login',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    countryCode: '+1',
    phone: 1234566663,
    type: 'login'
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
    "countryCode": "+1",
    "phone": 1234566663,
    "type": "login"
})

headers = {
    'Content-Type': 'application/json'
}

conn.request("POST", "/v2/projects/phone-login", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Content-Type": "application/json"
]

let parameters = [
    "countryCode": "+1",
    "phone": 1234566663,
    "type": "login"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/projects/phone-login")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData

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

  
  

```php
request('POST', 'https://api.verifik.co/v2/projects/phone-login', [
  'headers' => [
    'Content-Type' => 'application/json',
  ],
  'json' => [
    'countryCode' => '+1',
    'phone' => 1234566663,
    'type' => 'login'
  ]
]);

echo $response->getBody();
```
