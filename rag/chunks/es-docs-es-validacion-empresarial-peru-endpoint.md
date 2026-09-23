---
id: "es-docs-es-validacion-empresarial-peru-endpoint"
title: "Verificación Empresarial Peruana v3 — Endpoint"
sourcePath: "docs-es/validacion-empresarial/peru.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "pe"
  - "validacion-empresarial"
endpoint: "/v3/pe/company"
sourceAnchor: "Endpoint"
---

# Verificación Empresarial Peruana v3
**API path(s):** /v3/pe/company

## Endpoint

```
https://api.verifik.co/v3/pe/company
```

Consulta una empresa peruana por **RUC** con `documentType=RUC` y `documentNumber`. Devuelve razón social, estado, dirección y condición del contribuyente desde registros oficiales (KYB y debida diligencia).

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

const { data } = await axios.get("https://api.verifik.co/v3/pe/company", {
  params: { documentType: "RUC", documentNumber: "20605980008" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "RUC",
    "documentNumber" => "20605980008"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v3/pe/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v3/pe/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "RUC", "documentNumber": "20605980008"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v3/pe/company?documentType=RUC&documentNumber=20605980008"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
