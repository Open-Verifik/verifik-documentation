---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-inpec-request-2"
title: "Colombia - Consulta INPEC Población Privada de la Libertad — Request"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/co/inpec"
  - "/v2/co/inpec?documenttype=cc&documentnumber=80086615&firstsurname=murcia"
sourceAnchor: "Request"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec"
---

# Colombia - Consulta INPEC Población Privada de la Libertad
**API path(s):** /v2/co/inpec, /v2/co/inpec?documenttype=cc&documentnumber=80086615&firstsurname=murcia

## Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/inpec',
  params: {
    documentType: 'CC',
    documentNumber: '80086615',
    firstSurname: 'MURCIA'
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

conn.request("GET", "/v2/co/inpec?documentType=CC&documentNumber=80086615&firstSurname=MURCIA", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "Bearer "
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/co/inpec?documentType=CC&documentNumber=80086615&firstSurname=MURCIA")! as URL,
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
request('GET', 'https://api.verifik.co/v2/co/inpec?documentType=CC&documentNumber=80086615&firstSurname=MURCIA', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
]);

echo $response->getBody();
```
