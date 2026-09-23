---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-cumpli-request-2"
title: "Colombia - Verificar Cumplimiento Policial con Medidas Correctivas — Request"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/co/policia/rnmc"
  - "/v2/co/policia/rnmc?documenttype=cc&documentnumber=123456789&date=10/10/2020"
sourceAnchor: "Request"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial"
---

# Colombia - Verificar Cumplimiento Policial con Medidas Correctivas
**API path(s):** /v2/co/policia/rnmc, /v2/co/policia/rnmc?documenttype=cc&documentnumber=123456789&date=10/10/2020

## Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/policia/rnmc',
  params: {
    documentType: 'CC', 
    documentNumber: '123456789', 
    date: '10/10/2020'
  },  
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

conn.request("GET", "/v2/co/policia/rnmc?documentType=CC&documentNumber=123456789&date=10/10/2020", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/co/policia/rnmc?documentType=CC&documentNumber=123456789&date=10/10/2020")! as URL,
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
request('GET', 'https://api.verifik.co/v2/co/policia/rnmc?documentType=CC&documentNumber=123456789&date=10/10/2020', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
]);

echo $response->getBody();
```
