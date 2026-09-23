---
id: "es-docs-es-resources-flujos-de-proyecto-actualizar-un-flujo-de-proyecto-endpoint"
title: "Actualizar un flujo de proyecto — Endpoint"
sourcePath: "docs-es/resources/flujos-de-proyecto/actualizar-un-flujo-de-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
endpoints:
  - "/v3/project-flows/${flowid}"
  - "/v3/project-flows/%s"
  - "/v3/project-flows/{flow_id}"
  - "/v3/project-flows/{id}"
sourceAnchor: "Endpoint"
---

# Actualizar un flujo de proyecto
**API path(s):** /v3/project-flows/${flowid}, /v3/project-flows/%s, /v3/project-flows/{flow_id}, /v3/project-flows/{id}

## Endpoint

```
PUT https://api.verifik.co/v3/project-flows/{id}
```

Actualiza la configuración de un flujo de proyecto. Soporta actualizaciones parciales.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `id` | string | Sí | ID del flujo de proyecto a actualizar |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const flowId = "64a1b2c3d4e5f6789012346";
  const res = await fetch(`https://api.verifik.co/v3/project-flows/${flowId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      documents: {
        attemptLimit: 5,
        verificationMethods: ["SCAN_PROMPT"],
      },
      liveness: {
        attemptLimit: 3,
        minScore: 0.7
      },
      steps: { document: "mandatory", liveness: "mandatory" }
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 [
        "attemptLimit" => 5,
        "verificationMethods" => ["SCAN_PROMPT"],
    ],
    "liveness" => [
        "attemptLimit" => 3,
        "minScore" => 0.7
    ],
    "steps" => ["document" => "mandatory", "liveness" => "mandatory"]
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

flow_id = "64a1b2c3d4e5f6789012346"
url = f"https://api.verifik.co/v3/project-flows/{flow_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "documents": {
        "attemptLimit": 5,
        "verificationMethods": ["SCAN_PROMPT"],
    },
    "liveness": {"attemptLimit": 3, "minScore": 0.7},
    "steps": {"document": "mandatory", "liveness": "mandatory"}
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
    flowId := "64a1b2c3d4e5f6789012346"
    payload := map[string]interface{}{
        "documents": map[string]interface{}{
            "attemptLimit": 5,
            "verificationMethods": []string{"SCAN_PROMPT"},
        },
        "liveness": map[string]interface{}{
            "attemptLimit": 3,
            "minScore": 0.7,
        },
        "steps": map[string]interface{}{
            "document": "mandatory",
            "liveness": "mandatory",
        },
    }
    b, _ := json.Marshal(payload)
    url := fmt.Sprintf("https://api.verifik.co/v3/project-flows/%s", flowId)
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
