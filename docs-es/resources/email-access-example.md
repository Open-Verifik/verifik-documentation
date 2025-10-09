---
id: email-access-example
title: Ejemplo de Acceso por Email
description: Tutorial completo para implementar autenticación de inicio de sesión de aplicación basada en email
slug: /recursos/ejemplo-de-acceso-por-email
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ejemplo de Acceso por Email

Este tutorial demuestra cómo implementar autenticación basada en email para flujos de inicio de sesión de aplicación usando el sistema de validación de email de Verifik.

## Prerrequisitos

Antes de comenzar, asegúrate de tener:

- Un **Proyecto** con configuración de inicio de sesión
- Un **ProjectFlow** con `type = "login"`
- Validación de email habilitada en tu flujo de proyecto

### Configuración Inicial

Si no has creado un proyecto y un ProjectFlow con la propiedad `type = "login"`, sigue estas guías:

- [Crear un Proyecto](/doc-es/recursos/proyectos/crear-un-proyecto)
- [Crear un Flujo de Proyecto](/doc-es/recursos/flujos-de-proyecto/crear-un-flujo-de-proyecto)

## Flujo de Implementación

El flujo de acceso por email consiste en tres pasos principales:

1. **Crear Validación de Email** - Generar un OTP y enviarlo al email del usuario
2. **Validar Validación de Email** - Verificar el OTP ingresado por el usuario
3. **Recuperar Objeto de Inicio de Sesión de Aplicación** - Obtener los detalles completos del inicio de sesión

### Paso 1: Crear Validación de Email

Primero, crea una validación de email para enviar un OTP al email del usuario.

**Endpoint:**
```
POST https://api.verifik.co/v2/email-validations
```

**Ejemplo de Solicitud:**

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/email-validations',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <tu_token>'
  },
  data: {
    project: 'tu_id_de_proyecto',
    projectFlow: 'tu_id_de_flujo_de_proyecto',
    email: 'usuario@ejemplo.com',
    type: 'login',
    redirectUrl: 'https://tuaplicacion.com/exito'
  }
};

try {
  const { data } = await axios.request(options);
  console.log('Validación de email creada:', data);
} catch (error) {
  console.error('Error al crear validación de email:', error);
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "project": "tu_id_de_proyecto",
  "projectFlow": "tu_id_de_flujo_de_proyecto",
  "email": "usuario@ejemplo.com",
  "type": "login",
  "redirectUrl": "https://tuaplicacion.com/exito"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <tu_token>'
}

conn.request("POST", "/v2/email-validations", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/email-validations', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
  'json' => [
    'project' => 'tu_id_de_proyecto',
    'projectFlow' => 'tu_id_de_flujo_de_proyecto',
    'email' => 'usuario@ejemplo.com',
    'type' => 'login',
    'redirectUrl' => 'https://tuaplicacion.com/exito'
  ]
]);

echo $response->getBody();
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
import Foundation

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer <tu_token>"
]

let parameters = [
  "project": "tu_id_de_proyecto",
  "projectFlow": "tu_id_de_flujo_de_proyecto",
  "email": "usuario@ejemplo.com",
  "type": "login",
  "redirectUrl": "https://tuaplicacion.com/exito"
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

  </TabItem>
</Tabs>

**Respuesta:**
```json
{
  "data": {
    "_id": "email_validation_id",
    "email": "usuario@ejemplo.com",
    "status": "pendiente",
    "otp": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

### Paso 2: Validar Validación de Email

Después de que el usuario recibe el OTP por email, valídalo para completar el proceso de inicio de sesión.

**Endpoint:**
```
POST https://api.verifik.co/v2/email-validations/validate
```

**Ejemplo de Solicitud:**

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/email-validations/validate',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <tu_token>'
  },
  data: {
    emailValidationId: 'email_validation_id',
    otp: '123456'
  }
};

try {
  const { data } = await axios.request(options);
  console.log('Validación de email exitosa:', data);
} catch (error) {
  console.error('Error al validar email:', error);
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "emailValidationId": "email_validation_id",
  "otp": "123456"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <tu_token>'
}

conn.request("POST", "/v2/email-validations/validate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/email-validations/validate', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
  'json' => [
    'emailValidationId' => 'email_validation_id',
    'otp' => '123456'
  ]
]);

echo $response->getBody();
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
import Foundation

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer <tu_token>"
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

  </TabItem>
</Tabs>

**Respuesta:**
```json
{
  "success": true,
  "data": {
    "status": "validado",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "appLogin": {
      "_id": "app_login_id",
      "type": "email",
      "status": "completado",
      "emailValidation": "email_validation_id"
    }
  }
}
```

### Paso 3: Recuperar Objeto de Inicio de Sesión de Aplicación

Después de la validación exitosa del email, usa el token para recuperar el objeto AppLogin completo con todos sus detalles.

**Endpoint:**
```
GET https://api.verifik.co/v2/app-logins/{appLoginId}
```

**Ejemplo de Solicitud:**

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/app-logins/app_login_id',
  params: {
    'populates[]': ['emailValidation']
  },
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <tu_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log('Inicio de sesión de aplicación recuperado:', data);
} catch (error) {
  console.error('Error al recuperar inicio de sesión de aplicación:', error);
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <tu_token>'
}

conn.request("GET", "/v2/app-logins/app_login_id?populates[]=emailValidation", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/app-logins/app_login_id?populates[]=emailValidation', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
]);

echo $response->getBody();
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
import Foundation

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer <tu_token>"
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

  </TabItem>
</Tabs>

**Respuesta:**
```json
{
  "data": {
    "_id": "app_login_id",
    "client": "client_id",
    "name": "Sesión de Inicio de Usuario",
    "status": "completado",
    "project": "project_id",
    "projectFlow": "project_flow_id",
    "type": "email",
    "emailValidation": {
      "_id": "email_validation_id",
      "email": "usuario@ejemplo.com",
      "status": "validado",
      "validationMethod": "verificationCode",
      "otp": "$2a$10$otp_encriptado",
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

## Resumen del Flujo Completo

1. **El usuario inicia sesión** con su dirección de email
2. **El sistema crea validación de email** y envía OTP al email del usuario
3. **El usuario recibe OTP** por email
4. **El usuario ingresa OTP** en tu aplicación
5. **El sistema valida OTP** y crea registro AppLogin
6. **El sistema recupera objeto AppLogin** con detalles completos de validación
7. **El usuario obtiene acceso** con token de autenticación y datos completos de inicio de sesión

## Documentación Relacionada

- [Crear una Validación de Email](/doc-es/recursos/crear-una-validacion-de-email)
- [Validar una Validación de Email](/doc-es/recursos/validar-una-validacion-de-email)
- [Recuperar un Inicio de Sesión de Aplicación](/doc-es/recursos/recuperar-un-inicio-de-sesion-de-aplicacion)
- [Crear un Inicio de Sesión de Aplicación](/doc-es/recursos/crear-un-inicio-de-sesion-de-aplicacion)

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/wYJcFnMhtKg" title="Tutorial de Ejemplo de Acceso por Email" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Características

- **Autenticación Basada en Email**: Inicio de sesión seguro usando verificación OTP por email
- **Creación Automática de AppLogin**: Los registros AppLogin se crean automáticamente tras validación exitosa
- **OTP con Tiempo Limitado**: Los códigos OTP expiran por seguridad
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Integración Completa**: Tutorial de extremo a extremo para flujos de autenticación por email
- **Acceso Basado en Token**: Tokens de autenticación seguros para acceso a la aplicación
