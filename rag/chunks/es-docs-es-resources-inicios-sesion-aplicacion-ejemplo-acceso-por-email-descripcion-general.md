---
id: "es-docs-es-resources-inicios-sesion-aplicacion-ejemplo-acceso-por-email-descripcion-general"
title: "Ejemplo de Acceso por Email — Descripción General"
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
sourceAnchor: "Descripción General"
slug: "/resources/ejemplo-acceso-por-email"
url: "https://docs.verifik.co/verifik-es/resources/ejemplo-acceso-por-email"
---

# Ejemplo de Acceso por Email
**API path(s):** /v2/app-logins/app_login_id, /v2/app-logins/{apploginid}, /v2/email-validations, /v2/email-validations/validate

## Descripción General

Este tutorial demuestra cómo implementar autenticación basada en correo electrónico para flujos de inicio de sesión de aplicación utilizando el sistema de validación de correo electrónico de Verifik.

### Requisitos Previos

Antes de comenzar, asegúrate de tener:

- Un **Proyecto** con configuración de inicio de sesión
- Un **ProjectFlow** con `type = "login"`
- Validación de correo electrónico habilitada en tu flujo de proyecto

### Configuración Inicial

Si no has creado un proyecto y un projectFlow con la propiedad `type = "login"`, sigue estas guías:

- [Crear un Proyecto](/verifik-es/resources/proyectos/crear-un-proyecto)
- [Crear un Flujo de Proyecto](/verifik-es/resources/flujos-de-proyecto/actualizar-un-flujo-de-proyecto)

## Flujo de Implementación

El flujo de acceso por correo electrónico consta de dos pasos principales:

1. **Crear Validación de Correo Electrónico** - Generar un OTP y enviarlo al correo electrónico del usuario
2. **Validar Validación de Correo Electrónico** - Verificar el OTP ingresado por el usuario

### Paso 1: Crear Validación de Correo Electrónico

Primero, crea una validación de correo electrónico para enviar un OTP a la dirección de correo electrónico del usuario.

**Endpoint:**
```
POST https://api.verifik.co/v2/email-validations
```

**Ejemplo de Solicitud:**

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/email-validations',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  data: {
    project: 'your_project_id',
    projectFlow: 'your_project_flow_id',
    email: 'user@example.com',
    type: 'login',
    redirectUrl: 'https://yourapp.com/success'
  }
};

try {
  const { data } = await axios.request(options);
  console.log('Email validation created:', data);
} catch (error) {
  console.error('Error creating email validation:', error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "project": "your_project_id",
  "projectFlow": "your_project_flow_id",
  "email": "user@example.com",
  "type": "login",
  "redirectUrl": "https://yourapp.com/success"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/email-validations", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/email-validations', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'project' => 'your_project_id',
    'projectFlow' => 'your_project_flow_id',
    'email' => 'user@example.com',
    'type' => 'login',
    'redirectUrl' => 'https://yourapp.com/success'
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
  "project": "your_project_id",
  "projectFlow": "your_project_flow_id",
  "email": "user@example.com",
  "type": "login",
  "redirectUrl": "https://yourapp.com/success"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/email-validations")! as URL,
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
  "data": {
    "_id": "email_validation_id",
    "email": "user@example.com",
    "status": "pending",
    "otp": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```
