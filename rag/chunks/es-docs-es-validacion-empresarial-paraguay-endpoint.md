---
id: "es-docs-es-validacion-empresarial-paraguay-endpoint"
title: "Verificación Empresarial Paraguaya — Endpoint"
sourcePath: "docs-es/validacion-empresarial/paraguay.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "py"
  - "validacion-empresarial"
endpoint: "/v2/py/company"
sourceAnchor: "Endpoint"
---

# Verificación Empresarial Paraguaya
**API path(s):** /v2/py/company

## Endpoint

```
https://api.verifik.co/v2/py/company
```

Recuperar datos de empresa paraguaya por identificador.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Tipo de documento. Parámetro permitido: RUC. |
| `documentNumber` | string | Yes | Identificador de empresa. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/py/company", {
  params: { documentType: "RUC", documentNumber: "80033331" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "RUC",
    "documentNumber" => "80033331"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/py/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/py/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "RUC", "documentNumber": "80033331"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/py/company?documentType=RUC&documentNumber=80033331"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
