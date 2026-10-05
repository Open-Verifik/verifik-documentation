---
id: "es-docs-es-resources-registros-aplicacion-sincronizar-estado-registro-aplicacion-request-3"
title: "Sincronizar Estado de Registro de Aplicación — Request"
sourcePath: "docs-es/resources/registros-aplicacion/sincronizar-estado-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations/{id}/sync"
sourceAnchor: "Request"
---

# Sincronizar Estado de Registro de Aplicación
**API path(s):** /v2/app-registrations/{id}/sync

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
	const appRegistrationId = "507f1f77bcf86cd799439011";
	const res = await fetch(`https://api.verifik.co/v2/app-registrations/${appRegistrationId}/sync`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
		},
		body: JSON.stringify({
			step: "end",
			status: "COMPLETED",
		}),
	});
	console.log(await res.json());
}

run();
```

  
  

```php
 "end",
    "status" => "COMPLETED"
]);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

app_registration_id = "507f1f77bcf86cd799439011"
url = f"https://api.verifik.co/v2/app-registrations/{app_registration_id}/sync"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "step": "end",
    "status": "COMPLETED"
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
    appRegistrationId := "507f1f77bcf86cd799439011"
    url := fmt.Sprintf("https://api.verifik.co/v2/app-registrations/%s/sync", appRegistrationId)
    payload := map[string]interface{}{
        "step": "end",
        "status": "COMPLETED",
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
