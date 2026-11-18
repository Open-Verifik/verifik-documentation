---
id: "es-docs-es-identity-honduras-que-valida-esta-api"
title: "Ciudadano Hondureño — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/honduras.mdx"
locale: "es"
category: "identity"
tags:
  - "hn"
  - "identity"
endpoint: "/v2/hn/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/honduras"
url: "https://docs.verifik.co/verifik-es/identidad/honduras"
---

# Ciudadano Hondureño
**API path(s):** /v2/hn/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos hondureños usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número DNIHN**: Soporta *Documento Nacional de Identidad de Honduras* (DNIHN).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número DNIHN.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/hn/cedula
```

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Sí      | Tipo de documento. Valor permitido: `DNIHN`. |
| `documentNumber` | string | Sí      | Número de documento. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/hn/cedula", {
  params: { documentType: "DNIHN", documentNumber: "123456789" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "DNIHN",
    "documentNumber" => "123456789"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/hn/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/hn/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "DNIHN", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/hn/cedula?documentType=DNIHN&documentNumber=123456789"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
