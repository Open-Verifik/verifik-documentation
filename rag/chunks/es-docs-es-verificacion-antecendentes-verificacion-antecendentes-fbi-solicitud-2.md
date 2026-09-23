---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-fbi-solicitud-2"
title: "Verificación de Antecedentes FBI — Solicitud"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-fbi.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "fbi"
  - "fbi?fullname=mateo"
  - "fbi?fullname=mateo%20verifik"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/fbi"
  - "/v2/fbi?fullname=mateo"
  - "/v2/fbi?fullname=mateo%20verifik"
sourceAnchor: "Solicitud"
slug: "/verificacion-antecendentes/verificacion-antecendentes-fbi"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-fbi"
---

# Verificación de Antecedentes FBI
**API path(s):** /v2/fbi, /v2/fbi?fullname=mateo, /v2/fbi?fullname=mateo%20verifik

## Solicitud

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/fbi",
  params: { documentType: "CC", documentNumber: "80251972" },
  headers: {
    Accept: "application/json",
    Authorization: "jwt ",
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
    'Authorization': "JWT token"
}

conn.request("GET", "/v2/fbi?fullName=Mateo%20Verifik", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/fbi?fullName=Mateo%20Verifik")! as URL,
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
request('GET', 'https://api.verifik.co/v2/fbi?fullName=Mateo Verifik', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
]);

echo $response->getBody();
```
