---
id: "es-docs-es-autenticacion-api-key-acceso-por-telefono-parametros-3"
title: "Acceso con API Key vía Teléfono — Parámetros"
sourcePath: "docs-es/autenticacion/api-key-acceso-por-telefono.mdx"
locale: "es"
category: "autenticacion"
tags:
  - "projects"
  - "autenticacion"
endpoint: "/v2/projects/phone-login"
sourceAnchor: "Parámetros"
slug: "/autenticacion/acceso-con-llave-por-telefono"
url: "https://docs.verifik.co/verifik-es/autenticacion/acceso-con-llave-por-telefono"
---

# Acceso con API Key vía Teléfono
**API path(s):** /v2/projects/phone-login

## Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                    |
| ---------------- | ------ | --------- | ---------------------------------------------- |
| `countryCode`    | string | Sí        | Código de país para el número de teléfono      |
| `phone`          | number | Sí        | Número de teléfono                              |
| `otp`            | string | Sí        | Contraseña de un solo uso recibida vía teléfono |

### Solicitud

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/projects/phone-login/confirm',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    countryCode: '+1',
    phone: 1234566663,
    otp: '123456'
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
    "otp": "123456"
})

headers = {
    'Content-Type': 'application/json'
}

conn.request("POST", "/v2/projects/phone-login/confirm", payload, headers)

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
    "otp": "123456"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/projects/phone-login/confirm")! as URL,
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
request('POST', 'https://api.verifik.co/v2/projects/phone-login/confirm', [
  'headers' => [
    'Content-Type' => 'application/json',
  ],
  'json' => [
    'countryCode' => '+1',
    'phone' => 1234566663,
    'otp' => '123456'
  ]
]);

echo $response->getBody();
```
