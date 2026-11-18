---
id: "es-docs-es-identity-validation-guatemala-solicitud-2"
title: "Ciudadano Guatemalteco — Solicitud"
sourcePath: "docs-es/identity-validation/guatemala.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "gt"
  - "identity-validation"
endpoint: "/v2/gt/cedula"
sourceAnchor: "Solicitud"
slug: "/identity-validation/guatemala"
url: "https://docs.verifik.co/verifik-es/identity-validation/guatemala"
---

# Ciudadano Guatemalteco
**API path(s):** /v2/gt/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos guatemaltecos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/gt/cedula", {
  params: { documentType: "CUI", documentNumber: "2222624190903", dateOfBirth: "12/03/1984" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CUI",
    "documentNumber" => "2222624190903",
    "dateOfBirth" => "12/03/1984"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/gt/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/gt/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CUI", "documentNumber": "2222624190903", "dateOfBirth": "12/03/1984"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/gt/cedula?documentType=CUI&documentNumber=2222624190903&dateOfBirth=12/03/1984"
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
    "arrayName": [
      "ERICK",
      "ROBERTO",
      "RAMIREZ",
      "MORALES"
    ],
    "documentNumber": "2222624190903",
    "documentType": "CUI",
    "firstName": "ERICK ROBERTO",
    "fullName": "ERICK ROBERTO RAMIREZ MORALES",
    "lastName": "RAMIREZ MORALES"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "GT001"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n. missing documentNumber\n. missing dateOfBirth\n"
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
