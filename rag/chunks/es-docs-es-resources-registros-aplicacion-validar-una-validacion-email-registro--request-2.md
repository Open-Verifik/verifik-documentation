---
id: "es-docs-es-resources-registros-aplicacion-validar-una-validacion-email-registro--request-2"
title: "Validar una Validación de Email de Registro de Aplicación — Request"
sourcePath: "docs-es/resources/registros-aplicacion/validar-una-validacion-email-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/email-validations/${emailvalidationid}"
  - "/v2/email-validations/%s"
  - "/v2/email-validations/{email_validation_id}"
  - "/v2/email-validations/{id}"
sourceAnchor: "Request"
---

# Validar una Validación de Email de Registro de Aplicación
**API path(s):** /v2/email-validations/${emailvalidationid}, /v2/email-validations/%s, /v2/email-validations/{email_validation_id}, /v2/email-validations/{id}

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
	const emailValidationId = "674de8df21c72be3cc42b8a7";
	const res = await fetch(`https://api.verifik.co/v2/email-validations/${emailValidationId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
		},
		body: JSON.stringify({
			email: "user@example.com",
			otp: 123456,
		}),
	});
	console.log(await res.json());
}

run();
```

  
  

```php
 "user@example.com",
    "otp" => 123456
]);
curl_setopt($ch, CURLOPT_PUT, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

email_validation_id = "674de8df21c72be3cc42b8a7"
url = f"https://api.verifik.co/v2/email-validations/{email_validation_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "email": "user@example.com",
    "otp": 123456
}
r = requests.put(url, json=payload, headers=headers)
print(r.json())
```

  
  

```go
package main

    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
)

func main() {
    emailValidationId := "674de8df21c72be3cc42b8a7"
    url := fmt.Sprintf("https://api.verifik.co/v2/email-validations/%s", emailValidationId)
    payload := map[string]interface{}{
        "email": "user@example.com",
        "otp": 123456,
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("PUT", url, bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
