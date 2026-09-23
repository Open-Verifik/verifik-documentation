---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-contra-referencia-de-api-2"
title: "Colombia - Contratos Públicos — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-contratos-publicos.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/co/contracts"
  - "/v2/co/contracts?documenttype=cc&documentnumber=63535790"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-contratos-publicos"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-contratos-publicos"
---

# Colombia - Contratos Públicos
**API path(s):** /v2/co/contracts, /v2/co/contracts?documenttype=cc&documentnumber=63535790

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/co/contracts
```

El servicio de Contratos Públicos permite a los usuarios recuperar una lista de contratos públicos asociados con una persona o empresa proporcionando su número de documento y tipo de documento. La respuesta incluye detalles valiosos sobre cada contrato, como información del contratista, valores del contrato, entidades involucradas, duración del contrato y más.

Este servicio promueve la transparencia y facilita el monitoreo de contratos públicos con el estado en Colombia.

### Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization  | `Bearer `   |

### Parámetros

:::info
Para consultar la lista completa de **Tipos de Documento** soportados y sus parámetros obligatorios específicos, visita la guía de [Tipos de Documento](/verifik-es/verificacion-antecendentes/tipos-documento).
:::

| Nombre             | Tipo   | Requerido | Descripción                                                                 |
| ------------------ | ------ | --------- | --------------------------------------------------------------------------- |
| `documentType`     | string | Sí        | Tipo de Documento. Parámetros permitidos: CC, NIT.                         |
| `documentNumber`   | string | Sí        | Número de Documento a solicitar                                              |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/contracts',
  params: {documentType: 'CC', documentNumber: '123456789'},
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt '
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
    'Authorization': "JWT token"
}

conn.request("GET", "/v2/co/contracts?documentType=CC&documentNumber=63535790", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/co/contracts?documentType=CC&documentNumber=63535790")! as URL,
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
request('GET', 'https://api.verifik.co/v2/co/contracts?documentType=CC&documentNumber=63535790', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
]);

echo $response->getBody();
```
