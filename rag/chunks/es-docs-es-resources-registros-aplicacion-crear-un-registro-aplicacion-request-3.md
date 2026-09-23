---
id: "es-docs-es-resources-registros-aplicacion-crear-un-registro-aplicacion-request-3"
title: "Crear un Registro de Aplicación — Request"
sourcePath: "docs-es/resources/registros-aplicacion/crear-un-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations"
sourceAnchor: "Request"
---

# Crear un Registro de Aplicación
**API path(s):** /v2/app-registrations

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
	const res = await fetch("https://api.verifik.co/v2/app-registrations", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
		},
		body: JSON.stringify({
			project: "507f1f77bcf86cd799439011",
			projectFlow: "507f1f77bcf86cd799439015",
			email: "user@example.com",
			phone: "1234567890",
			countryCode: "+1",
			fullName: "John Doe",
			language: "en",
		}),
	});
	console.log(await res.json());
}

run();
```

  
  

```php
 "507f1f77bcf86cd799439011",
    "projectFlow" => "507f1f77bcf86cd799439015",
    "email" => "user@example.com",
    "phone" => "1234567890",
    "countryCode" => "+1",
    "fullName" => "John Doe",
    "language" => "en"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/app-registrations"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "project": "507f1f77bcf86cd799439011",
    "projectFlow": "507f1f77bcf86cd799439015",
    "email": "user@example.com",
    "phone": "1234567890",
    "countryCode": "+1",
    "fullName": "John Doe",
    "language": "en"
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
        "project": "507f1f77bcf86cd799439011",
        "projectFlow": "507f1f77bcf86cd799439015",
        "email": "user@example.com",
        "phone": "1234567890",
        "countryCode": "+1",
        "fullName": "John Doe",
        "language": "en",
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/app-registrations", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
