---
id: "es-docs-es-legal-votacion-recuperar-informacion-de-votacion-para-ciudadanos-colombianos"
title: "Recuperar Información de Votación para Ciudadanos Colombianos — Recuperar Información de Votación para Ciudadanos Colombianos"
sourcePath: "docs-es/legal/votacion.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/registraduria/votacion"
  - "/v2/co/registraduria/votacion?documentnumber=123456789"
sourceAnchor: "Recuperar Información de Votación para Ciudadanos Colombianos"
slug: "/legal/votacion"
url: "https://docs.verifik.co/verifik-es/legal/votacion"
---

# Recuperar Información de Votación para Ciudadanos Colombianos
**API path(s):** /v2/co/registraduria/votacion, /v2/co/registraduria/votacion?documentnumber=123456789

## Recuperar Información de Votación para Ciudadanos Colombianos

## Recuperar Información de Votación para Ciudadanos Colombianos

### Endpoint

```
https://api.verifik.co/v2/co/registraduria/votacion
```

El servicio de Información de Votación permite recuperar detalles de votación de la "Registraduría Nacional del Estado Civil" para ciudadanos colombianos. Al proporcionar el número de documento del ciudadano, puedes acceder a información como su dirección, departamento, municipio, mesa de votación y puesto de votación.

Este servicio es valioso para verificar el registro de votantes y facilitar el proceso de votación.

### Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization  | `Bearer `   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                    |
| ---------------- | ------ | --------- | ---------------------------------------------- |
| `documentNumber` | string | Sí        | Número de documento de la persona a consultar, sin espacios ni puntos. |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/registraduria/votacion',
  params: {documentNumber: '123456789'},
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer '
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
    'Accept': "application/json",
    'Authorization': "Bearer "
}

conn.request("GET", "/v2/co/registraduria/votacion?documentNumber=123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "Bearer "
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/co/registraduria/votacion?documentNumber=123456789")! as URL,
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
request('GET', 'https://api.verifik.co/v2/co/registraduria/votacion?documentNumber=123456789', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
]);

echo $response->getBody();
```
