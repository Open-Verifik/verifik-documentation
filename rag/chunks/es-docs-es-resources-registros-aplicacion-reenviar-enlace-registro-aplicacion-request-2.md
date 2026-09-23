---
id: "es-docs-es-resources-registros-aplicacion-reenviar-enlace-registro-aplicacion-request-2"
title: "Reenviar enlace de registro de aplicación — Request"
sourcePath: "docs-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations/resend-link"
  - "/v2/app-registrations/{id}/resend-link"
sourceAnchor: "Request"
---

# Reenviar enlace de registro de aplicación
**API path(s):** /v2/app-registrations/resend-link, /v2/app-registrations/{id}/resend-link

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
	const appRegistrationId = "6a98727a47eb5690a7f0b68f";
	const res = await fetch(`https://api.verifik.co/v2/app-registrations/${appRegistrationId}/resend-link`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
		},
		body: JSON.stringify({
			sendEmail: false,
		}),
	});
	console.log(await res.json());
}

run();
```

  
  

```php
 false
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

app_registration_id = "6a98727a47eb5690a7f0b68f"
url = f"https://api.verifik.co/v2/app-registrations/{app_registration_id}/resend-link"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {"sendEmail": False}
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
    appRegistrationId := "6a98727a47eb5690a7f0b68f"
    url := fmt.Sprintf("https://api.verifik.co/v2/app-registrations/%s/resend-link", appRegistrationId)
    payload := map[string]interface{}{
        "sendEmail": false,
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
