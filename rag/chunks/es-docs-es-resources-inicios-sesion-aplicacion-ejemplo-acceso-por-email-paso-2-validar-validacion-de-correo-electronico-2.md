---
id: "es-docs-es-resources-inicios-sesion-aplicacion-ejemplo-acceso-por-email-paso-2-validar-validacion-de-correo-electronico-2"
title: "Ejemplo de Acceso por Email — Paso 2: Validar Validación de Correo Electrónico"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/ejemplo-acceso-por-email.mdx"
locale: "es"
category: "resources"
tags:
  - "app-logins"
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/app-logins/app_login_id"
  - "/v2/app-logins/{apploginid}"
  - "/v2/email-validations"
  - "/v2/email-validations/validate"
sourceAnchor: "Paso 2: Validar Validación de Correo Electrónico"
slug: "/resources/ejemplo-acceso-por-email"
url: "https://docs.verifik.co/verifik-es/resources/ejemplo-acceso-por-email"
---

# Ejemplo de Acceso por Email
**API path(s):** /v2/app-logins/app_login_id, /v2/app-logins/{apploginid}, /v2/email-validations, /v2/email-validations/validate

## Paso 2: Validar Validación de Correo Electrónico

Después de que el usuario recibe el OTP por correo electrónico, valídalo para completar el proceso de inicio de sesión.

**Endpoint:**
```
POST https://api.verifik.co/v2/email-validations/validate
```

**Ejemplo de Solicitud:**

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/email-validations/validate',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  data: {
    emailValidationId: 'email_validation_id',
    otp: '123456'
  }
};

try {
  const { data } = await axios.request(options);
  console.log('Email validation successful:', data);
} catch (error) {
  console.error('Error validating email:', error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "emailValidationId": "email_validation_id",
  "otp": "123456"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/email-validations/validate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/email-validations/validate', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'emailValidationId' => 'email_validation_id',
    'otp' => '123456'
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
  "emailValidationId": "email_validation_id",
  "otp": "123456"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/email-validations/validate")! as URL,
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

  

**Respuesta:**
```json
{
  "success": true,
  "data": {
    "status": "validated",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "appLogin": {
      "_id": "app_login_id",
      "type": "email",
      "status": "completed",
      "emailValidation": "email_validation_id"
    }
  }
}
```
