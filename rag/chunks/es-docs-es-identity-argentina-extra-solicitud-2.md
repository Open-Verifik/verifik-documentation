---
id: "es-docs-es-identity-argentina-extra-solicitud-2"
title: "Argentina - Ciudadano Argentino Completo — Solicitud"
sourcePath: "docs-es/identity/argentina-extra.mdx"
locale: "es"
category: "identity"
tags:
  - "ar"
  - "identity"
endpoint: "/v2/ar/cedula/extra"
sourceAnchor: "Solicitud"
slug: "/identidad/argentina-extra"
url: "https://docs.verifik.co/verifik-es/identidad/argentina-extra"
---

# Argentina - Ciudadano Argentino Completo
**API path(s):** /v2/ar/cedula/extra

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos argentinos usando datos oficiales del gobierno. Este endpoint devuelve campos ampliados respecto a la cédula estándar, entre ellos **fecha de nacimiento**, **género**, partes del nombre e **indicador de vida** (`isAlive`).

## Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/cedula/extra',
  params: { documentType: 'DNIAR', documentNumber: '44768756' },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ',
  },
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

conn.request(
    "GET",
    "/v2/ar/cedula/extra?documentType=DNIAR&documentNumber=44768756",
    headers=headers
)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/ar/cedula/extra', [
  'query' => [
    'documentType' => 'DNIAR',
    'documentNumber' => '44768756',
  ],
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
]);

echo $response->getBody();
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "Bearer "
]

let request = NSMutableURLRequest(
  url: NSURL(string: "https://api.verifik.co/v2/ar/cedula/extra?documentType=DNIAR&documentNumber=44768756")! as URL,
  cachePolicy: .useProtocolCachePolicy,
  timeoutInterval: 10.0
)
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
