---
id: "es-docs-es-identity-dominican-republic-que-valida-esta-api"
title: "Ciudadano Dominicano — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/dominican-republic.mdx"
locale: "es"
category: "identity"
tags:
  - "do"
  - "identity"
endpoints:
  - "/v2/do/cedula"
  - "/v2/do/cedula?"
  - "/v2/do/cedula?documentnumber=123456789&documenttype=cie"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/republica-dominicana"
url: "https://docs.verifik.co/verifik-es/identidad/republica-dominicana"
---

# Ciudadano Dominicano
**API path(s):** /v2/do/cedula, /v2/do/cedula?, /v2/do/cedula?documentnumber=123456789&documenttype=cie

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos dominicanos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número CIE**: Soporta *Cédula de Identidad y Electoral* (CIE).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CIE.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/do/cedula
```

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Sí      | Tipo de documento. Valor permitido: `CIE`. |
| `documentNumber` | string | Sí      | Número de documento. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/do/cedula", {
  params: { documentNumber: "123456789", documentType: "CIE" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "123456789",
    "documentType" => "CIE"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/do/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/do/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "123456789", "documentType": "CIE"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/do/cedula?documentNumber=123456789&documentType=CIE"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
