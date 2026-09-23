---
id: "es-docs-es-resources-persons-lookup-a-person-endpoint"
title: "Buscar una Persona por Nombre — Endpoint"
sourcePath: "docs-es/resources/persons/lookup-a-person.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons"
  - "/v2/face-recognition/persons/lookup"
sourceAnchor: "Endpoint"
slug: "/resources/lookup-a-person"
url: "https://docs.verifik.co/verifik-es/resources/lookup-a-person"
---

# Buscar una Persona por Nombre
**API path(s):** /v2/face-recognition/persons, /v2/face-recognition/persons/lookup

## Endpoint

```
GET https://api.verifik.co/v2/face-recognition/persons/lookup
```

Encuentra personas ya guardadas para tu cliente por **nombre** (requerido) y **fecha de nacimiento** opcional. Úsalo cuando crear devuelve `412 person_already_set`, o antes de enrolar, para obtener el **`_id` de la persona** y los **`code`** de colección sin una búsqueda facial 1:N.

Esto es una consulta de **metadatos en Mongo**, no un match de rostro. Los dígitos en `name` se eliminan igual que en create (`"Maria 123"` queda `"Maria"`). La coincidencia es **contains** e insensible a mayúsculas (`Maria` encuentra `Maria Perez Gonzalez`). Usa al menos 3 caracteres.

Usa `collections[].code` (UUID de 36 caracteres) como `collection_id` en la búsqueda facial. No envíes el `_id` Mongo de la colección.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `name` | string | Sí | Nombre parcial o completo (mínimo 3 caracteres después de quitar dígitos). Contains, sin distinguir mayúsculas. |
| `date_of_birth` | string | No | `YYYY-MM-DD`. Si se envía, filtra ese día. |
| `page` | number | No | Página (por defecto: `1`). |
| `limit` | number | No | Tamaño de página (por defecto: `20`, máximo: `100`). |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const params = new URLSearchParams({
    name: "Maria Perez",
    date_of_birth: "1994-02-07",
    page: "1",
    limit: "20",
  });

  const res = await fetch(`https://api.verifik.co/v2/face-recognition/persons/lookup?${params}`, {
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
 "Maria Perez",
    "date_of_birth" => "1994-02-07",
    "page" => 1,
    "limit" => 20,
]);
$ch = curl_init("https://api.verifik.co/v2/face-recognition/persons/lookup?" . $query);
curl_setopt($ch, CURLOPT_HTTPGET, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . getenv("VERIFIK_TOKEN"),
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/persons/lookup"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
params = {"name": "Maria Perez", "date_of_birth": "1994-02-07", "page": 1, "limit": 20}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "io"
    "net/http"
    "os"
)

func main() {
    url := "https://api.verifik.co/v2/face-recognition/persons/lookup?name=Maria%20Perez&date_of_birth=1994-02-07&page=1&limit=20"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    res, err := http.DefaultClient.Do(req)
    if err != nil {
        panic(err)
    }
    defer res.Body.Close()
    body, _ := io.ReadAll(res.Body)
    fmt.Println(string(body))
}
```
