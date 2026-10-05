---
id: "es-docs-es-check-list-eliminar-un-check-list-endpoint"
title: "Eliminar una checklist — Endpoint"
sourcePath: "docs-es/check-list/eliminar-un-check-list.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists/{id}"
sourceAnchor: "Endpoint"
slug: "/check-list/eliminar-un-check-list"
url: "https://docs.verifik.co/verifik-es/check-list/eliminar-un-check-list"
---

# Eliminar una checklist
**API path(s):** /v2/check-lists, /v2/check-lists/{id}

## Endpoint

Elimina una Check List tuya. La API devuelve el documento eliminado en `{ data }`. Un ObjectId inválido, una lista inexistente o una lista de otro cliente responden `404`.

Eliminar no ejecuta consultas y no gasta créditos. El historial del catálogo y los trabajos de SmartBatch que usaron los mismos códigos no se borran.

### Endpoint

```
DELETE https://api.verifik.co/v2/check-lists/{id}
```

Quita la lista de la colección del cliente y devuelve el documento eliminado. Después de esta llamada, GET / PUT / DELETE en el mismo id responden `404`.

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
        method: "DELETE",
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
r = requests.delete(url, headers=headers)
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
    req, _ := http.NewRequest("DELETE", "https://api.verifik.co/v2/check-lists/"+id, nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
