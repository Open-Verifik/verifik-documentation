---
id: "es-docs-es-resources-registros-aplicacion-recuperar-un-registro-aplicacion-request-2"
title: "Obtener Registro de Aplicación — Request"
sourcePath: "docs-es/resources/registros-aplicacion/recuperar-un-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations/${appregistrationid}"
  - "/v2/app-registrations/%s"
  - "/v2/app-registrations/{app_registration_id}"
  - "/v2/app-registrations/{id}"
sourceAnchor: "Request"
---

# Obtener Registro de Aplicación
**API path(s):** /v2/app-registrations/${appregistrationid}, /v2/app-registrations/%s, /v2/app-registrations/{app_registration_id}, /v2/app-registrations/{id}

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
    const appRegistrationId = "674de8df21c72be3cc42b8a7";
    const res = await fetch(
        `https://api.verifik.co/v2/app-registrations/${appRegistrationId}?populates[]=project&populates[]=projectFlow&populates[]=emailValidation`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
            },
        }
    );
    console.log(await res.json());
}

run();
```

  
  

```php

  

```python

app_registration_id = "674de8df21c72be3cc42b8a7"
url = f"https://api.verifik.co/v2/app-registrations/{app_registration_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {"populates[]": ["project", "projectFlow", "emailValidation"]}
r = requests.get(url, params=params, headers=headers)
print(r.json())
```

  
  

```go
package main

    "encoding/json"
    "fmt"
    "net/http"
    "os"
)

func main() {
    appRegistrationId := "674de8df21c72be3cc42b8a7"
    url := fmt.Sprintf("https://api.verifik.co/v2/app-registrations/%s?populates[]=project&populates[]=projectFlow", appRegistrationId)
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
