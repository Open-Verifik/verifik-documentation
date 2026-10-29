---
id: "es-docs-es-identity-venezuela-parametros-2"
title: "Ciudadano venezolano (CCVE) — Parámetros"
sourcePath: "docs-es/identity/venezuela.mdx"
locale: "es"
category: "identity"
tags:
  - "ve"
  - "identity"
endpoint: "/v2/ve/cedula"
sourceAnchor: "Parámetros"
slug: "/identidad/venezuela"
url: "https://docs.verifik.co/verifik-es/identidad/venezuela"
---

# Ciudadano venezolano (CCVE)
**API path(s):** /v2/ve/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos venezolanos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentNumber` | string | Sí      | Número de cédula nacional (CCVE). Se eliminan puntos y espacios. No envíes `documentType`: esta ruta siempre usa **CCVE**. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ve/cedula", {
  params: { documentNumber: "10000001" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "10000001"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/ve/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/ve/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "10000001"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/ve/cedula?documentNumber=10000001"
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
      "CARLA",
      "SARAI",
      "PULIDO",
      "RAMIREZ"
    ],
    "documentNumber": "30246051",
    "documentType": "CCVE",
    "firstName": "CARLA SARAI",
    "fullName": "CARLA SARAI PULIDO RAMIREZ",
    "lastName": "PULIDO RAMIREZ"
  },
  "signature": {
    "dateTime": "November 13, 2025 3:52 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "OHZC9"
}
```

  
  

```json
{
  "data": {
    "arrayName": [
      "NEIVIS",
      "JOSEFINA",
      "PEREZ",
      "VARGAS"
    ],
    "birthDate": "1998-03-01",
    "documentNumber": "28055196",
    "documentType": "CCVE",
    "firstName": "NEIVIS JOSEFINA",
    "fullName": "NEIVIS JOSEFINA PEREZ VARGAS",
    "gender": "FEMENINO",
    "lastName": "PEREZ VARGAS"
  },
  "signature": {
    "dateTime": "November 13, 2025 8:12 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "GGLIK"
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
  "message": "missing documentNumber"
}
```

  
  

```json
{
  "code": "Endpoint_out_of_service",
  "message": "Endpoint_out_of_service"
}
```

  
  

```json
{
    "code": "InternalServerError",
    "message": "Server error."
}
```
