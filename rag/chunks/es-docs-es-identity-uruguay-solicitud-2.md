---
id: "es-docs-es-identity-uruguay-solicitud-2"
title: "Ciudadano Uruguayo — Solicitud"
sourcePath: "docs-es/identity/uruguay.mdx"
locale: "es"
category: "identity"
tags:
  - "uy"
  - "identity"
endpoint: "/v2/uy/cedula"
sourceAnchor: "Solicitud"
slug: "/identidad/uruguay"
url: "https://docs.verifik.co/verifik-es/identidad/uruguay"
---

# Ciudadano Uruguayo
**API path(s):** /v2/uy/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos uruguayos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/uy/cedula", {
  params: { documentType: "CCUY", documentNumber: "123456789", dateOfBirth: "20/02/1978" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CCUY",
    "documentNumber" => "123456789",
    "dateOfBirth" => "20/02/1978"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/uy/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/uy/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CCUY", "documentNumber": "123456789", "dateOfBirth": "20/02/1978"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/uy/cedula?documentType=CCUY&documentNumber=123456789&dateOfBirth=20/02/1978"
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
    "documentType": "CCUY",
    "documentNumber": "123456789",
    "firstName": "Ana",
    "lastName": "García",
    "fullName": "Ana García"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "UY001"
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
  "message": "Access forbidden",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing dateOfBirth"
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [CCUY]"
}
```

  
  

```json
{
    "code": "InternalServerError",
    "message": "Server error."
}
```
