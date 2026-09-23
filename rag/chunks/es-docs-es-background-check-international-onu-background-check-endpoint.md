---
id: "es-docs-es-background-check-international-onu-background-check-endpoint"
title: "Verificación de Antecedentes ONU — Endpoint"
sourcePath: "docs-es/background-check/international/onu-background-check.mdx"
locale: "es"
category: "background-check"
tags:
  - "onu"
  - "onu?fullname="
  - "background-check"
endpoints:
  - "/v2/onu"
  - "/v2/onu?fullname="
sourceAnchor: "Endpoint"
slug: "/background-check/international/onu-background-check"
url: "https://docs.verifik.co/verifik-es/background-check/international/onu-background-check"
---

# Verificación de Antecedentes ONU
**API path(s):** /v2/onu, /v2/onu?fullname=

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/onu
```

Esta API proporciona una forma simple y eficiente de verificar si una persona o entidad aparece en la lista de sanciones de las Naciones Unidas. Al enviar información de identificación como el tipo de documento y el número de documento, los usuarios pueden determinar rápidamente si un individuo u organización está sujeto a sanciones internacionales.

Esto es especialmente útil para asegurar el cumplimiento con regulaciones globales y realizar una debida diligencia exhaustiva en procesos de KYC (Conoce a tu Cliente) y AML (Anti-Lavado de Dinero).

### Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization  | `Bearer `   |

### Parámetros

| Nombre             | Tipo   | Requerido | Descripción                                                                 |
| ------------------ | ------ | --------- | --------------------------------------------------------------------------- |
| `documentType`     | string | No        | Tipo de documento que desea solicitar                                      |
| `documentNumber`   | string | No        | Número de documento a consultar, sin espacios ni puntos                    |
| `fullName`         | string | No        | En lugar de documentType y documentNumber, puede pasar el nombre directamente de la persona/empresa |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/onu',
  params: {documentType: 'CC', documentNumber: '80251972'},
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

conn.request("GET", "/v2/onu?fullName=", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/onu?fullName=")! as URL,
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
request('GET', 'https://api.verifik.co/v2/onu?fullName=', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
]);

echo $response->getBody();
```
