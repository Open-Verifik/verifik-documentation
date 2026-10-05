---
id: "es-docs-es-validacion-empresarial-bolivia-endpoint"
title: "Verificación Empresarial Boliviana — Endpoint"
sourcePath: "docs-es/validacion-empresarial/bolivia.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "bo"
  - "validacion-empresarial"
endpoint: "/v2/bo/company"
sourceAnchor: "Endpoint"
---

# Verificación Empresarial Boliviana
**API path(s):** /v2/bo/company

## Endpoint

```
GET https://api.verifik.co/v2/bo/company
```

Recuperar datos de empresa boliviana por identificador tributario.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentNumber` | string | Yes | Company identifier. |
| `documentType` | string | Yes | Allowed: `NIT`. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/bo/company", {
  params = {"documentNumber": "1234567","documentType" => "NIT"}
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "1234567"
    "documentType" => "NIT"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/bo/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/bo/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "1234567","documentType" => "NIT"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/bo/company?documentNumber=1234567"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
