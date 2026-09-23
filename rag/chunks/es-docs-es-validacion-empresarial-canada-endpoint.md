---
id: "es-docs-es-validacion-empresarial-canada-endpoint"
title: "Verificación Empresarial Canadiense — Endpoint"
sourcePath: "docs-es/validacion-empresarial/canada.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "ca"
  - "validacion-empresarial"
endpoint: "/v2/ca/company"
sourceAnchor: "Endpoint"
---

# Verificación Empresarial Canadiense
**API path(s):** /v2/ca/company

## Endpoint

```
GET https://api.verifik.co/v2/ca/company
```

Consulta registros empresariales **provinciales** en Canadá con **`business`** (nombre de la empresa) y **`province`** (código de provincia de dos letras). Suele devolver número de empresa, estado, identificadores de registro y domicilio cuando hay coincidencia. Apto para **KYB**, **debida diligencia** y **cumplimiento**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `business` | string | Yes | Nombre de la empresa. |
| `province` | string | Yes | Código de provincia canadiense. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ca/company", {
  params: { business: "BAI HENG PACKAGING SUPPLIES INC", province: "ON" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "BAI HENG PACKAGING SUPPLIES INC",
    "province" => "ON"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/ca/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/ca/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"business": "BAI HENG PACKAGING SUPPLIES INC", "province": "ON"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/ca/company?business=BAI%20HENG%20PACKAGING%20SUPPLIES%20INC&province=ON"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
