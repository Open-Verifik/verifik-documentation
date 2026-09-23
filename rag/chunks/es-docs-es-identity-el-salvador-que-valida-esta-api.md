---
id: "es-docs-es-identity-el-salvador-que-valida-esta-api"
title: "Ciudadano Salvadoreño — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/el-salvador.mdx"
locale: "es"
category: "identity"
tags:
  - "sv"
  - "identity"
endpoints:
  - "/v2/sv/dui"
  - "/v2/sv/dui?"
  - "/v2/sv/dui?documentnumber=123456789&dateofbirth=01/12/1995"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/el-salvador"
url: "https://docs.verifik.co/verifik-es/identidad/el-salvador"
---

# Ciudadano Salvadoreño
**API path(s):** /v2/sv/dui, /v2/sv/dui?, /v2/sv/dui?documentnumber=123456789&dateofbirth=01/12/1995

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos salvadoreños usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número DUI**: Soporta *Documento Único de Identidad* (DUI).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número DUI.
-   **Verificación de Fecha de Nacimiento**: Valida que la fecha de nacimiento coincida con los registros oficiales.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/sv/dui
```

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentNumber` | string | Sí | Número DUI sin espacios. |
| `dateOfBirth` | string | Sí | Fecha de nacimiento en formato `DD/MM/YYYY`. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/sv/dui", {
  params: { documentNumber: "123456789", dateOfBirth: "01/12/1995" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "123456789",
    "dateOfBirth" => "01/12/1995"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/sv/dui?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/sv/dui"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "123456789", "dateOfBirth": "01/12/1995"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/sv/dui?documentNumber=123456789&dateOfBirth=01/12/1995"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
