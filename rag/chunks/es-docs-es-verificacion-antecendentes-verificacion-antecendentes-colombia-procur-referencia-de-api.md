---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-procur-referencia-de-api"
title: "Colombia - Antecedentes Disciplinarios (Procuraduría) — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-procuraduria.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/co/procuraduria/antecedentes"
  - "/v2/co/procuraduria/antecedentes?documenttype=cc&documentnumber=123456789"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-procuraduria"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-procuraduria"
---

# Colombia - Antecedentes Disciplinarios (Procuraduría)
**API path(s):** /v2/co/procuraduria/antecedentes, /v2/co/procuraduria/antecedentes?documenttype=cc&documentnumber=123456789

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/co/procuraduria/antecedentes
```

El servicio para verificar antecedentes disciplinarios de individuos en Colombia (procuraduría). Al proporcionar el tipo de documento y número, puede recuperar información sobre el nombre del individuo y si tiene antecedentes disciplinarios. La respuesta incluye detalles sobre sanciones, instancias, delitos e inhabilidades asociadas con el registro del individuo.

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
| `documentType`     | string | Sí        | Tipo de documento. Parámetro permitido: CC, PEP, CE.                        |
| `documentNumber`   | string | Sí        | Número de documento de la persona a consultar, sin espacios ni puntos.       |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/procuraduria/antecedentes',
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

conn.request("GET", "/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=123456789")! as URL,
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
request('GET', 'https://api.verifik.co/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=123456789', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
]);

echo $response->getBody();
```
