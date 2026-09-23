---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-brasil-solicitud-2"
title: "Verificación de antecedentes (CPF) — Solicitud"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-brasil.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "br"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/br/background-check"
  - "/v2/br/background-check?documenttype=cpf&documentnumber=012.345.678-01&dateofbirth=17/02/2002"
sourceAnchor: "Solicitud"
slug: "/verificacion-antecendentes/verificacion-antecendentes-brasil"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-brasil"
---

# Verificación de antecedentes (CPF)
**API path(s):** /v2/br/background-check, /v2/br/background-check?documenttype=cpf&documentnumber=012.345.678-01&dateofbirth=17/02/2002

## Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/br/background-check',
  params: {
    documentType: 'CPF',
    documentNumber: '012.345.678-01',
    dateOfBirth: '17/02/2002'
  },
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

conn.request("GET", "/v2/br/background-check?documentType=CPF&documentNumber=012.345.678-01&dateOfBirth=17/02/2002", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/br/background-check?documentType=CPF&documentNumber=012.345.678-01&dateOfBirth=17/02/2002', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/br/background-check?documentType=CPF&documentNumber=012.345.678-01&dateOfBirth=17/02/2002")! as URL,
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
