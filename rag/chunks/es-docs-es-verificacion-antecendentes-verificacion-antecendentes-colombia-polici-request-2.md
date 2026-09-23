---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-polici-request-2"
title: "Colombia - Verificación de Antecedentes Policiales — Request"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/co/policia/consultar"
  - "/v2/co/policia/consultar?documenttype=cc&documentnumber=1032386359"
  - "/v2/co/policia/rnmc"
sourceAnchor: "Request"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-policia"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia"
---

# Colombia - Verificación de Antecedentes Policiales
**API path(s):** /v2/co/policia/consultar, /v2/co/policia/consultar?documenttype=cc&documentnumber=1032386359, /v2/co/policia/rnmc

## Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/policia/consultar',
  params: {documentType: 'CC', documentNumber: '1032386359'},
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
    'Authorization': "Bearer token"
}

conn.request("GET", "/v2/co/policia/consultar?documentType=CC&documentNumber=1032386359", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "Bearer token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/co/policia/consultar?documentType=CC&documentNumber=1032386359")! as URL,
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
request('GET', 'https://api.verifik.co/v2/co/policia/consultar?documentType=CC&documentNumber=1032386359', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'Bearer token',
  ],
]);

echo $response->getBody();
```
