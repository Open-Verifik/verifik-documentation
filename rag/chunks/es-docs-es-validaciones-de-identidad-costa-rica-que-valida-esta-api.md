---
id: "es-docs-es-validaciones-de-identidad-costa-rica-que-valida-esta-api"
title: "Ciudadano Costarricense — ¿Qué valida esta API?"
sourcePath: "docs-es/validaciones-de-identidad/costa-rica.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "cr"
  - "validaciones-de-identidad"
endpoints:
  - "/v2/cr/cedula"
  - "/v2/cr/cedula?"
  - "/v2/cr/cedula?documenttype=cccr&documentnumber=010000001"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validaciones-de-identidad/costa-rica"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/costa-rica"
---

# Ciudadano Costarricense
**API path(s):** /v2/cr/cedula, /v2/cr/cedula?, /v2/cr/cedula?documenttype=cccr&documentnumber=010000001

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos costarricenses usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número CCCR**: Soporta *Cédula de Identidad Costarricense* (CCCR).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CCCR.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/cr/cedula
```

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Tipo de documento. Valor permitido: `CCCR`. |
| `documentNumber` | string | Sí | Número de cédula sin espacios. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cr/cedula", {
  params: { documentType: "CCCR", documentNumber: "010000001" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CCCR",
    "documentNumber" => "010000001"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/cr/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/cr/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CCCR", "documentNumber": "010000001"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/cr/cedula?documentType=CCCR&documentNumber=010000001"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
