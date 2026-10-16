---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-europol-solicitud-2"
title: "Verificación de Antecedentes Europol — Solicitud"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-europol.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "europol"
  - "verificacion-antecendentes"
endpoint: "/v2/europol"
sourceAnchor: "Solicitud"
slug: "/verificacion-antecendentes/verificacion-antecendentes-europol"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-europol"
---

# Verificación de Antecedentes Europol
**API path(s):** /v2/europol

## Solicitud

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/europol",
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

conn.request("GET", "/v2/europol?fullName=Mateo%20Verifik", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/europol?fullName=Mateo Verifik', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/europol?fullName=Mateo%20Verifik")! as URL,
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
