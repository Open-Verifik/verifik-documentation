---
id: "es-docs-es-check-list-obtener-un-check-list-endpoint"
title: "Obtener una checklist — Endpoint"
sourcePath: "docs-es/check-list/obtener-un-check-list.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists/${id}"
  - "/v2/check-lists/{check_list_id}"
  - "/v2/check-lists/{id}"
sourceAnchor: "Endpoint"
slug: "/check-list/obtener-un-check-list"
url: "https://docs.verifik.co/verifik-es/check-list/obtener-un-check-list"
---

# Obtener una checklist
**API path(s):** /v2/check-lists, /v2/check-lists/${id}, /v2/check-lists/{check_list_id}, /v2/check-lists/{id}

## Endpoint

Carga una Check List por id. La lista debe pertenecer al cliente del JWT. Un ObjectId inválido, una lista inexistente o una lista de otro cliente responden `404`.

Esta llamada no ejecuta consultas y no gasta créditos. Usa `featureCodes` del documento para llamar cada API del catálogo tú mismo.

### Endpoint

```
GET https://api.verifik.co/v2/check-lists/{id}
```

Devuelve la lista guardada: `name`, `countries`, `domains`, `featureCodes` y `status`. Usa esos códigos con las URLs de SmartCheck / catálogo. No hay una acción de ejecutar checklist en esta ruta.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

El token debe ser un **JWT de cliente**. Un token sin `clientId` responde `403`.

### Parameters

| Name | Type   | Required | Description                          |
| ---- | ------ | -------- | ------------------------------------ |
| `id` | string | Yes      | ObjectId de la Check List al crear o listar. |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
    const id = "6aa224c87034a338385c28c0";
    const res = await fetch(`https://api.verifik.co/v2/check-lists/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
        },
    });
    console.log(await res.json());
}

run();
```

  
  

```php

  

```python

check_list_id = "6aa224c87034a338385c28c0"
url = f"https://api.verifik.co/v2/check-lists/{check_list_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
r = requests.get(url, headers=headers)
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
    id := "6aa224c87034a338385c28c0"
    req, _ := http.NewRequest("GET", "https://api.verifik.co/v2/check-lists/"+id, nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
