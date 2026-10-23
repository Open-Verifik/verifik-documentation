---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-contra-referencia-de-api"
title: "Colombia - Certificado de Contraloría — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-contraloria.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoint: "/v2/co/contraloria/certificado"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-contraloria"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-contraloria"
---

# Colombia - Certificado de Contraloría
**API path(s):** /v2/co/contraloria/certificado

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/co/contraloria/certificado
```

El servicio permite verificar el certificado de buena conducta emitido por la Contraloría General de Colombia ingresando el tipo y número de documento, y devuelve la fecha de consulta junto con el certificado en formato PDF codificado en base64. Este servicio es ideal para confirmar rápidamente el estatus de buena conducta de una empresa o individuo colombiano.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

:::info
Para consultar la lista completa de **Tipos de Documento** soportados y sus parámetros obligatorios específicos, visita la guía de [Tipos de Documento](/verifik-es/verificacion-antecendentes/tipos-documento).
:::

| Nombre             | Tipo   | Requerido | Descripción                                                                 |
| ------------------ | ------ | --------- | --------------------------------------------------------------------------- |
| `documentType`     | string | Sí        | Tipo de documento. Parámetros válidos: CC, CE, PA, PEP.                      |
| `documentNumber`   | string | Sí        | Número de documento de la persona a consultar, sin espacios ni puntos.       |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/contraloria/certificado',
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

conn.request("GET", "/v2/co/contraloria/certificado?documentType=CC&documentNumber=123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/co/contraloria/certificado?documentType=CC&documentNumber=123456789")! as URL,
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
request('GET', 'https://api.verifik.co/v2/co/contraloria/certificado?documentType=CC&documentNumber=123456789', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
]);

echo $response->getBody();
```
