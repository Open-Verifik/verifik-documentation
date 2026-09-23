---
id: "es-docs-es-identity-venezuela-foreigner-id-que-valida-esta-api"
title: "🇻🇪 Venezuela - Cédula de extranjero (CEVE) — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/venezuela-foreigner-id.mdx"
locale: "es"
category: "identity"
tags:
  - "ve"
  - "identity"
endpoints:
  - "/v2/ve/cedula"
  - "/v2/ve/foreigner-id"
  - "/v2/ve/foreigner-id?documentnumber=10000001"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/venezuela-foreigner-id"
url: "https://docs.verifik.co/verifik-es/identidad/venezuela-foreigner-id"
---

# 🇻🇪 Venezuela - Cédula de extranjero (CEVE)
**API path(s):** /v2/ve/cedula, /v2/ve/foreigner-id, /v2/ve/foreigner-id?documentnumber=10000001

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te permite autenticar a personas extranjeras en Venezuela usando datos oficiales. Está pensada para agilizar el **KYC**, reducir fraude y apoyar el cumplimiento normativo.

## ¿Qué valida esta API?

Nuestra API se conecta con registros oficiales para validar:

-   **Nombre completo y número de documento**: identificación de extranjeros (**CEVE**—*Cédula de Identidad de Extranjero*).
-   **Coincidencia de identidad**: los nombres devueltos coinciden con el documento en archivo.
-   **Tipo de documento**: la respuesta incluye `documentType: "CEVE"` en esta ruta.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/ve/foreigner-id
```

Usa este endpoint para **extranjeros** con cédula **CEVE**. Pasa el número como **`documentNumber`**; el servicio aplica **CEVE** y devuelve campos de identidad estructurados. Para **ciudadanos venezolanos** (cédula nacional **CCVE**), usa [`GET /v2/ve/cedula`](/verifik-es/identidad/venezuela).

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentNumber` | string | Sí      | Número de cédula CEVE. Se eliminan puntos y espacios. No envíes `documentType`: esta ruta siempre usa **CEVE**. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ve/foreigner-id", {
  params: { documentNumber: "10000001" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

headers = {
    'Accept': "application/json",
    'Authorization': "Bearer "
}

conn.request("GET", "/v2/ve/foreigner-id?documentNumber=10000001", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/ve/foreigner-id?documentNumber=10000001', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/ve/foreigner-id?documentNumber=10000001")! as URL,
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
