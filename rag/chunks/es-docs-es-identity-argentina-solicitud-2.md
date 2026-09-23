---
id: "es-docs-es-identity-argentina-solicitud-2"
title: "Ciudadano Argentino — Solicitud"
sourcePath: "docs-es/identity/argentina.mdx"
locale: "es"
category: "identity"
tags:
  - "ar"
  - "identity"
endpoint: "/v2/ar/cedula"
sourceAnchor: "Solicitud"
slug: "/identidad/argentina"
url: "https://docs.verifik.co/verifik-es/identidad/argentina"
---

# Ciudadano Argentino
**API path(s):** /v2/ar/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos argentinos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/cedula',
  params: {documentType: 'DNIAR', documentNumber: '123456789'},
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

conn.request("GET", "/v2/ar/cedula?documentType=DNIAR&documentNumber=123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/ar/cedula?documentType=DNIAR&documentNumber=123456789', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
]);

echo $response->getBody();
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/ar/cedula?documentType=DNIAR&documentNumber=123456789")! as URL,
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
