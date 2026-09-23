---
id: "es-docs-es-biometrics-verificar-cara-endpoint"
title: "Verificar cara (1:1 contra persona enrolada) — Endpoint"
sourcePath: "docs-es/biometrics/verificar-cara.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/verify"
sourceAnchor: "Endpoint"
slug: "/verificar-cara"
url: "https://docs.verifik.co/verifik-es/verificar-cara"
---

# Verificar cara (1:1 contra persona enrolada)
**API path(s):** /v2/face-recognition/verify

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/verify
```

Verifica que una o más imágenes de rostro coincidan con una **persona enrolada concreta** identificada por `id` (MongoDB `_id` de la persona). Devuelve el perfil enrolado y un **score de similitud** cuando la coincidencia supera `min_score`. Opcionalmente usa `collection_id` para acotar la verificación.

### Headers

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| `id` | string | Sí | MongoDB `_id` de la persona enrolada contra la que verificar. |
| `images` | string[] | Sí | Imágenes de rostro en base64 (base64 crudo; mismo sujeto que la persona enrolada). |
| `min_score` | number | Sí | Umbral entre **0.5** y **1**. |
| `search_mode` | string | Sí | `FAST` o `ACCURATE`. |
| `collection_id` | string | No | Opcional para acotar cuando la persona pertenece a varias colecciones. |

### Solicitud

  

```javascript
const fetch = require("node-fetch");

const personId = "68defec6a9a7b4933d5652f3";

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      id: personId,
      images: ["", ""],
      min_score: 0.75,
      search_mode: "FAST",
      collection_id: "",
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 $personId,
    "images" => ["", ""],
    "min_score" => 0.75,
    "search_mode" => "FAST",
    "collection_id" => "",
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

person_id = "68defec6a9a7b4933d5652f3"
url = "https://api.verifik.co/v2/face-recognition/verify"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
payload = {
    "id": person_id,
    "images": ["", ""],
    "min_score": 0.75,
    "search_mode": "FAST",
    "collection_id": "",
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
    personId := "68defec6a9a7b4933d5652f3"
    payload, _ := json.Marshal(map[string]interface{}{
        "id":             personId,
        "images":         []string{"", ""},
        "min_score":      0.75,
        "search_mode":    "FAST",
        "collection_id":  "",
    })
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/face-recognition/verify", bytes.NewReader(payload))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
