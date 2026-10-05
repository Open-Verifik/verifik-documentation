---
id: "es-docs-es-validacion-empresarial-brazil-endpoint"
title: "Verificación empresarial (CNPJ) — Endpoint"
sourcePath: "docs-es/validacion-empresarial/brazil.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "br"
  - "validacion-empresarial"
endpoint: "/v2/br/company"
sourceAnchor: "Endpoint"
---

# Verificación empresarial (CNPJ)
**API path(s):** /v2/br/company

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/br/company
```

Verifica una persona jurídica brasileña contra los registros oficiales de **CNPJ**. Usa `documentType=CNPJ` y un `documentNumber` de 14 dígitos sin separadores. Suele devolver situación registral, domicilio, naturaleza jurídica y actividades económicas. Apto para **KYB**, **debida diligencia** y **cumplimiento**.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Permitido: `CNPJ`. |
| `documentNumber` | string | Yes | CNPJ de 14 dígitos, sin separadores. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/br/company", {
  params: { documentType: "CNPJ", documentNumber: "09159197000180" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CNPJ",
    "documentNumber" => "09159197000180"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/br/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/br/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CNPJ", "documentNumber": "09159197000180"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/br/company?documentType=CNPJ&documentNumber=09159197000180"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
