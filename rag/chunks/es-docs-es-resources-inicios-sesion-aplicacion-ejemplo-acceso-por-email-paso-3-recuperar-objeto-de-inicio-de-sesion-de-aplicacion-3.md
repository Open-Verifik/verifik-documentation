---
id: "es-docs-es-resources-inicios-sesion-aplicacion-ejemplo-acceso-por-email-paso-3-recuperar-objeto-de-inicio-de-sesion-de-aplicacion-3"
title: "Ejemplo de Acceso por Email — Paso 3: Recuperar Objeto de Inicio de Sesión de Aplicación"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/ejemplo-acceso-por-email.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "Paso 3: Recuperar Objeto de Inicio de Sesión de Aplicación"
slug: "/resources/ejemplo-acceso-por-email"
url: "https://docs.verifik.co/verifik-es/resources/ejemplo-acceso-por-email"
---

# Ejemplo de Acceso por Email
**API path(s):** /v2/email-validations

## Paso 3: Recuperar Objeto de Inicio de Sesión de Aplicación

Después de una validación de correo electrónico exitosa, usa el token para recuperar el objeto AppLogin completo con todos sus detalles.

**Endpoint:**
```
GET https://api.verifik.co/v2/app-logins/{appLoginId}
```

**Ejemplo de Solicitud:**

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/app-logins/app_login_id',
  params: {
    'populates[]': ['emailValidation']
  },
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  }
};

try {
  const { data } = await axios.request(options);
  console.log('App Login retrieved:', data);
} catch (error) {
  console.error('Error retrieving app login:', error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("GET", "/v2/app-logins/app_login_id?populates[]=emailValidation", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/app-logins/app_login_id?populates[]=emailValidation', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
]);

echo $response->getBody();
```

  
  

```swift

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer "
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/app-logins/app_login_id?populates[]=emailValidation")! as URL,
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

  

**Respuesta:**
```json
{
  "data": {
    "_id": "app_login_id",
    "client": "client_id",
    "name": "User Login Session",
    "status": "completed",
    "project": "project_id",
    "projectFlow": "project_flow_id",
    "type": "email",
    "emailValidation": {
      "_id": "email_validation_id",
      "email": "user@example.com",
      "status": "validated",
      "validationMethod": "verificationCode",
      "otp": "$2a$10$encrypted_otp",
      "expiresAt": "2024-01-15T11:30:00Z",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:32:00Z"
    },
    "phoneValidation": null,
    "biometricValidation": null,
    "face": null,
    "accessControlLog": "access_control_log_id",
    "updatedAt": "2024-01-15T10:32:00Z",
    "createdAt": "2024-01-15T10:30:00Z",
    "__v": 0
  }
}
```
