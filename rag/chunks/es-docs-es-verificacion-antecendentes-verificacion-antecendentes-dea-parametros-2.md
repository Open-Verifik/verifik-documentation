---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-dea-parametros-2"
title: "Verificación de Antecedentes DEA — Parámetros"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-dea.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "dea"
  - "dea?fullname=mateo"
  - "dea?fullname=mateo%20verifik"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/dea"
  - "/v2/dea?fullname=mateo"
  - "/v2/dea?fullname=mateo%20verifik"
sourceAnchor: "Parámetros"
slug: "/verificacion-antecendentes/verificacion-antecendentes-dea"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-dea"
---

# Verificación de Antecedentes DEA
**API path(s):** /v2/dea, /v2/dea?fullname=mateo, /v2/dea?fullname=mateo%20verifik

## Parámetros

:::info
Para consultar la lista completa de **Tipos de Documento** soportados y sus parámetros obligatorios específicos, visita la guía de [Tipos de Documento](/verifik-es/verificacion-antecendentes/tipos-documento).
:::

#### Consulta por Documento

| Nombre           | Tipo   | Requerido | Descripción                                              |
| ---------------- | ------ | --------- | -------------------------------------------------------- |
| `documentType`   | string | No        | El tipo de documento que desea solicitar.                |
| `documentNumber` | string | No        | Número de documento a consultar, sin espacios ni puntos. |

#### Consulta por Nombre Completo

| Nombre     | Tipo   | Requerido | Descripción                                                                                          |
| ---------- | ------ | --------- | ---------------------------------------------------------------------------------------------------- |
| `fullName` | string | No        | En lugar de documentType y documentNumber, puede pasar el nombre directamente de la persona/empresa. |

### Solicitud

  

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/dea",
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

conn.request("GET", "/v2/dea?fullName=Mateo%20Verifik", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/dea?fullName=Mateo%20Verifik")! as URL,
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
request('GET', 'https://api.verifik.co/v2/dea?fullName=Mateo Verifik', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
]);

echo $response->getBody();
```
