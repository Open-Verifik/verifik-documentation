---
id: "es-docs-es-resources-registros-aplicacion-crear-una-validacion-email-registro-ap-request-2"
title: "Crear una Validación de Email de Registro de Aplicación — Request"
sourcePath: "docs-es/resources/registros-aplicacion/crear-una-validacion-email-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations/app-registration"
sourceAnchor: "Request"
---

# Crear una Validación de Email de Registro de Aplicación
**API path(s):** /v2/email-validations/app-registration

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
	const res = await fetch("https://api.verifik.co/v2/email-validations/app-registration", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
		},
		body: JSON.stringify({
			project: "6266193db77ccc8111730c90",
			validationMethod: "verificationCode",
			email: "user@example.com",
			type: "onboarding",
		}),
	});
	console.log(await res.json());
}

run();
```

  
  

```php
 "6266193db77ccc8111730c90",
    "validationMethod" => "verificationCode",
    "email" => "user@example.com",
    "type" => "onboarding"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/email-validations/app-registration"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "project": "6266193db77ccc8111730c90",
    "validationMethod": "verificationCode",
    "email": "user@example.com",
    "type": "onboarding"
}
r = requests.post(url, json=payload, headers=headers)
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
    payload := map[string]interface{}{
        "project": "6266193db77ccc8111730c90",
        "validationMethod": "verificationCode",
        "email": "user@example.com",
        "type": "onboarding",
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/email-validations/app-registration", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
