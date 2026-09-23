---
id: "es-docs-es-validacion-empresarial-costa-rica-referencia-de-api"
title: "Costa Rica — Verificación empresarial (NITE) — Referencia de API"
sourcePath: "docs-es/validacion-empresarial/costa-rica.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "cr"
  - "validacion-empresarial"
endpoints:
  - "/v2/cr/company"
  - "/v2/cr/company?"
  - "/v2/cr/company?documenttype=nite&documentnumber=3101122876"
sourceAnchor: "Referencia de API"
slug: "/validacion-empresarial/costa-rica"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/costa-rica"
---

# Costa Rica — Verificación empresarial (NITE)
**API path(s):** /v2/cr/company, /v2/cr/company?, /v2/cr/company?documenttype=nite&documentnumber=3101122876

## Referencia de API

Consulta registros de empresas costarricenses usando el **NITE** (*Número de Identificación Tributaria de Empresas*) para onboarding de proveedores, cumplimiento y prevención de fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/cr/company
```

Envía **`documentType`** con valor `NITE` y el **`documentNumber`** del contribuyente; la respuesta devuelve identificadores y datos de registro disponibles para **KYB**.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Tipo de documento. Valor permitido: `NITE`. |
| `documentNumber` | string | Sí | Identificador de la empresa (NITE). |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cr/company", {
  params: { documentType: "NITE", documentNumber: "3101122876" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "NITE",
    "documentNumber" => "3101122876"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/cr/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/cr/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NITE", "documentNumber": "3101122876"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/cr/company?documentType=NITE&documentNumber=3101122876"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
