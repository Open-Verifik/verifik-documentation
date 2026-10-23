---
id: "es-docs-es-legal-certificate-of-validity-for-legal-professionals-endpoint"
title: "Certificado de Vigencia para Profesionales Legales — Endpoint"
sourcePath: "docs-es/legal/certificate-of-validity-for-legal-professionals.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/certificado/vigencia"
sourceAnchor: "Endpoint"
slug: "/legal/certificado-vigencia-profesionales-legales"
url: "https://docs.verifik.co/verifik-es/legal/certificado-vigencia-profesionales-legales"
---

# Certificado de Vigencia para Profesionales Legales
**API path(s):** /v2/co/rama/certificado/vigencia

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/co/rama/certificado/vigencia
```

Consulta la vigencia del certificado profesional en Colombia enviando **`documentType`**, **`documentNumber`** y **`quality`** en la **query**. Solo se aceptan **`CC`** o **`CE`**. El campo **`encalidad`** llega con la grafía devuelta por la API.

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                                                 |
| ---------------- | ------ | --------- | --------------------------------------------------------------------------- |
| `documentType`   | string | Sí        | `CC` o `CE` solamente.                                                      |
| `documentNumber` | string | Sí        | Número de documento del profesional a consultar.                             |
| `quality`        | string | Sí        | Código de calidad profesional (p. ej. `ABG`, `JUEZPAZ`, `LT`).              |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/rama/certificado/vigencia',
  params: {
    documentType: 'CC',
    documentNumber: '123456789',
    quality: 'ABG'
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

conn.request("GET", "/v2/co/rama/certificado/vigencia?documentType=CC&documentNumber=123456789&quality=ABG", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/co/rama/certificado/vigencia?documentType=CC&documentNumber=123456789&quality=ABG', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/co/rama/certificado/vigencia?documentType=CC&documentNumber=123456789&quality=ABG")! as URL,
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
