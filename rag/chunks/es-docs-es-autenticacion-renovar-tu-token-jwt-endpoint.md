---
id: "es-docs-es-autenticacion-renovar-tu-token-jwt-endpoint"
title: "Renovar tu token (JWT) — Endpoint"
sourcePath: "docs-es/autenticacion/renovar-tu-token-jwt.mdx"
locale: "es"
category: "autenticacion"
tags:
  - "auth"
  - "autenticacion"
endpoint: "/v2/auth/session"
sourceAnchor: "Endpoint"
slug: "/autenticacion/renovar-tu-token-jwt"
url: "https://docs.verifik.co/verifik-es/autenticacion/renovar-tu-token-jwt"
---

# Renovar tu token (JWT)
**API path(s):** /v2/auth/session

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/auth/session
```

Este método renueva el token de acceso generado con otros endpoints de login, con un periodo de validez de **30 días**. Después de este periodo, es necesario **generar** un nuevo Access Token. El único parámetro requerido para la renovación es el token anterior, siempre que no haya expirado. Este servicio solo renueva tokens aún válidos.

### Encabezados

| Nombre         | Valor              |
| -------------- | ------------------ |
| Authorization  | ``          |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                    |
| ---------------- | ------ | --------- | ---------------------------------------------- |
| `origin`         | string | No        | Define la acción a realizar con el token. En este caso, la acción será "refresh". |
| `expiresIn`      | number | No        | Número entero que representa meses: 1 = 1 mes, 2 = 2 meses, etc. |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/auth/session',
  params: {origin: 'refresh', expiresIn: 120},
  headers: {
    Authorization: ''
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
    'Authorization': ''
}

conn.request("GET", "/v2/auth/session?origin=refresh&expiresIn=120", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Authorization": ""
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/auth/session?origin=refresh&expiresIn=120")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

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
request('GET', 'https://api.verifik.co/v2/auth/session?origin=refresh&expiresIn=120', [
  'headers' => [
    'Authorization' => '',
  ],
]);

echo $response->getBody();
```
