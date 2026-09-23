---
id: "es-docs-es-verificacion-de-antecedentes-internacional-verificacion-de-antecedent-solicitud-2-4"
title: "Verificación de Antecedentes ONU — Solicitud"
sourcePath: "docs-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-onu.mdx"
locale: "es"
category: "verificacion-de-antecedentes"
tags:
  - "onu"
  - "onu?fullname="
  - "verificacion-de-antecedentes"
endpoints:
  - "/v2/onu"
  - "/v2/onu?fullname="
sourceAnchor: "Solicitud"
slug: "/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-onu"
url: "https://docs.verifik.co/verifik-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-onu"
---

# Verificación de Antecedentes ONU
**API path(s):** /v2/onu, /v2/onu?fullname=

## Solicitud

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/onu",
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

### Respuesta

  

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "1234567894",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": ["MATEO", "VERIFIK"],
    "foundInONU": true
  },
  "signature": {
    "dateTime": "August 4, 2022 3:57 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n. missing documentNumber\n"
}
```
