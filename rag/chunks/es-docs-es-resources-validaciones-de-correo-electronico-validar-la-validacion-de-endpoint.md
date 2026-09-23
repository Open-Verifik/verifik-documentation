---
id: "es-docs-es-resources-validaciones-de-correo-electronico-validar-la-validacion-de-endpoint"
title: "Validar la Validación de Correo Electrónico — Endpoint"
sourcePath: "docs-es/resources/validaciones-de-correo-electronico/validar-la-validacion-de-correo-electronico.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/email-validations/email_validation_123456789/validate"
  - "/v2/email-validations/{id}/validate"
sourceAnchor: "Endpoint"
slug: "/resources/validaciones-de-correo-electronico/validar-la-validacion-de-correo-electronico"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-de-correo-electronico/validar-la-validacion-de-correo-electronico"
---

# Validar la Validación de Correo Electrónico
**API path(s):** /v2/email-validations/email_validation_123456789/validate, /v2/email-validations/{id}/validate

## Endpoint

```
POST https://api.verifik.co/v2/email-validations/{id}/validate
```

Este servicio valida una validación de email proporcionando el código de verificación. El sistema verificará el código contra el código almacenado y actualizará el estado de la validación según corresponda.

### Encabezados

#### `Content-Type`

**Tipo:** String  
**Requerido:** Sí  
**Valor:** `application/json`

#### `Authorization`

**Tipo:** String  
**Requerido:** Sí  
**Valor:** `Bearer {YOUR_ACCESS_TOKEN}`

### Parámetros de Ruta

#### `id`

**Tipo:** String  
**Requerido:** Sí

El identificador único del registro de validación de email que deseas validar.

### Parámetros del Cuerpo

#### `verificationCode`

**Tipo:** String  
**Requerido:** Sí

El código de verificación recibido por email.

### Solicitud

  

```javascript

const options = {
    method: "POST",
    url: "https://api.verifik.co/v2/email-validations/email_validation_123456789/validate",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
    },
    data: {
        verificationCode: "123456",
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

payload = json.dumps({
  "verificationCode": "123456"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/email-validations/email_validation_123456789/validate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/email-validations/email_validation_123456789/validate', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'verificationCode' => '123456'
  ]
]);

echo $response->getBody();
```

  
  

```go
package main

	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func main() {
	url := "https://api.verifik.co/v2/email-validations/email_validation_123456789/validate"

	payload := map[string]interface{}{
		"verificationCode": "123456",
	}

	jsonData, _ := json.Marshal(payload)

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Authorization", "Bearer ")

	client := &http.Client{}
	res, _ := client.Do(req)
	defer res.Body.Close()

	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}
```
