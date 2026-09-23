---
id: "es-docs-es-resources-proyectos-actualizar-un-proyecto-endpoint"
title: "Actualizar un proyecto — Endpoint"
sourcePath: "docs-es/resources/proyectos/actualizar-un-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
endpoints:
  - "/v3/projects/${projectid}"
  - "/v3/projects/%s"
  - "/v3/projects/{id}"
  - "/v3/projects/{project_id}"
sourceAnchor: "Endpoint"
---

# Actualizar un proyecto
**API path(s):** /v3/projects/${projectid}, /v3/projects/%s, /v3/projects/{id}, /v3/projects/{project_id}

## Endpoint

```
PUT https://api.verifik.co/v3/projects/{id}
```

Actualiza la configuración de un proyecto usando un enfoque paso a paso (wizard). Soporta actualizaciones parciales.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `id` | string | Sí | Identificador único del proyecto |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const projectId = "64a1b2c3d4e5f6789012345";
  const res = await fetch(`https://api.verifik.co/v3/projects/${projectId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      name: "Updated Project Name",
      allowedCountries: ["United States", "Canada"],
      dataProtection: {
        name: "Updated DPO",
        email: "updated-dpo@example.com",
        address: "789 New St",
        city: "Toronto",
        country: "Canada",
        postalCode: "M5H 2N2"
      }
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "Updated Project Name",
    "allowedCountries" => ["United States", "Canada"],
    "dataProtection" => [
        "name" => "Updated DPO",
        "email" => "updated-dpo@example.com",
        "address" => "789 New St",
        "city" => "Toronto",
        "country" => "Canada",
        "postalCode" => "M5H 2N2"
    ]
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

project_id = "64a1b2c3d4e5f6789012345"
url = f"https://api.verifik.co/v3/projects/{project_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "name": "Updated Project Name",
    "allowedCountries": ["United States", "Canada"],
    "dataProtection": {
        "name": "Updated DPO",
        "email": "updated-dpo@example.com",
        "address": "789 New St",
        "city": "Toronto",
        "country": "Canada",
        "postalCode": "M5H 2N2"
    }
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
    projectId := "64a1b2c3d4e5f6789012345"
    payload := map[string]interface{}{
        "name": "Updated Project Name",
        "allowedCountries": []string{"United States", "Canada"},
        "dataProtection": map[string]string{
            "name": "Updated DPO",
            "email": "updated-dpo@example.com",
            "address": "789 New St",
            "city": "Toronto",
            "country": "Canada",
            "postalCode": "M5H 2N2",
        },
    }
    b, _ := json.Marshal(payload)
    url := fmt.Sprintf("https://api.verifik.co/v3/projects/%s", projectId)
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
