---
id: "es-docs-es-resources-inicios-sesion-aplicacion-validar-una-validacion-biometrica-endpoint"
title: "Validar una Validación Biométrica de Inicio de Sesión de Aplicación — Endpoint"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/validar-una-validacion-biometrica-inicio-sesion-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/validate"
sourceAnchor: "Endpoint"
slug: "/resources/validar-una-validacion-biometrica-inicio-sesion-aplicacion"
url: "https://docs.verifik.co/verifik-es/resources/validar-una-validacion-biometrica-inicio-sesion-aplicacion"
---

# Validar una Validación Biométrica de Inicio de Sesión de Aplicación
**API path(s):** /v2/biometric-validations/validate

## Endpoint

```
POST https://api.verifik.co/v2/biometric-validations/validate
```

### Descripción General

Una Validación Biométrica es una instancia dentro del sistema de Verifik que te permite procesar y validar identidades de usuarios mediante reconocimiento facial y detección de vida. Este endpoint procesa los datos biométricos enviados por los usuarios para verificar su identidad y completar el proceso de validación. Esto se utiliza típicamente después de que un usuario ha completado su sesión de detección de vida.

### Encabezados

| Nombre        | Valor                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

:::warning
El Token JWT que debes usar al validar validaciones biométricas debe contener un token de `livenessSession` válido que fue proporcionado durante la creación de la validación biométrica.

El token proporcionado en esta respuesta es el token que puedes pasar a tu propia aplicación para iniciar sesión en tu aplicación. En la solución sin código, este token se agrega al `redirectUrl` de tu `projectFlow`.

Por ejemplo, `https://verifik.co?token={token}`
:::

### Parámetros

| Nombre  | Tipo   | Requerido | Descripción                                                                |
| ------- | ------ | --------- | -------------------------------------------------------------------------- |
| `image` | string | Sí        | Imagen codificada en Base64 del rostro del usuario para validación biométrica. |

### Solicitud

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/biometric-validations/validate',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  data: {
    image: 'base64_encoded_image_data'
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

payload = json.dumps({
  "image": "base64_encoded_image_data"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/biometric-validations/validate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/biometric-validations/validate', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'image' => 'base64_encoded_image_data'
  ]
]);

echo $response->getBody();
```

  
  

```swift

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer "
]

let parameters = [
  "image": "base64_encoded_image_data"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/biometric-validations/validate")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

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
