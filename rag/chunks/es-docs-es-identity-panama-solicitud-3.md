---
id: "es-docs-es-identity-panama-solicitud-3"
title: "Ciudadano Panameño — Solicitud"
sourcePath: "docs-es/identity/panama.mdx"
locale: "es"
category: "identity"
tags:
  - "pa"
  - "identity"
endpoints:
  - "/v2/pa/cedula"
  - "/v2/pa/cedula?"
  - "/v2/pa/cedula?documenttype=ccpa&documentnumber=8-1251-1829"
sourceAnchor: "Solicitud"
slug: "/identidad/panama"
url: "https://docs.verifik.co/verifik-es/identidad/panama"
---

# Ciudadano Panameño
**API path(s):** /v2/pa/cedula, /v2/pa/cedula?, /v2/pa/cedula?documenttype=ccpa&documentnumber=8-1251-1829

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos panameños. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/pa/cedula", {
  params: { documentType: "CCPA", documentNumber: "8-1251-1829" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CCPA",
    "documentNumber" => "8-1251-1829"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/pa/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/pa/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CCPA", "documentNumber": "8-1251-1829"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/pa/cedula?documentType=CCPA&documentNumber=8-1251-1829"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```

### Respuesta

  

```json
{
  "data": {
    "documentType": "CCPA",
    "documentNumber": "8-1251-1829",
    "firstName": "Roberto",
    "lastName": "Martínez",
    "fullName": "Roberto Martínez"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "PA001"
}
```

  
  

```json
{
  "message": "Invalid document number",
  "code": "INVALID_DOCUMENT"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber"
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
    "code": "InternalServerError",
    "message": "Server error."
}
```
