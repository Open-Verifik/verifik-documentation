---
id: "es-docs-es-identity-guatemala-extra-que-valida-esta-api"
title: "Guatemala Extra — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/guatemala-extra.mdx"
locale: "es"
category: "identity"
tags:
  - "gt"
  - "identity"
endpoints:
  - "/v2/gt/cedula/extra"
  - "/v2/gt/cedula/extra?"
  - "/v2/gt/cedula/extra?documenttype=cui&documentnumber=2222624190903&dateofbirth=12/03/1984"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/guatemala-extra"
url: "https://docs.verifik.co/verifik-es/identidad/guatemala-extra"
---

# Guatemala Extra
**API path(s):** /v2/gt/cedula/extra, /v2/gt/cedula/extra?, /v2/gt/cedula/extra?documenttype=cui&documentnumber=2222624190903&dateofbirth=12/03/1984

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos guatemaltecos usando datos oficiales del gobierno. Este endpoint proporciona detalles adicionales como fecha de nacimiento y género.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número CUI**: Soporta *Cédula de Vecindad* o *Documento Personal de Identificación* (CUI).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CUI.
-   **Datos Extra**: Recupera **Fecha de Nacimiento** y **Género**.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/gt/cedula/extra
```

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Sí      | Tipo de documento. Valor permitido: `CUI`. |
| `documentNumber` | string | Sí      | Número de documento. |
| `dateOfBirth`  | string  | Sí      | Fecha de nacimiento (`DD/MM/YYYY`). Obligatorio para esta ruta. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/gt/cedula/extra", {
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
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/gt/cedula/extra?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/gt/cedula/extra"
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
    url := "https://api.verifik.co/v2/gt/cedula/extra?documentType=CUI&documentNumber=2222624190903&dateOfBirth=12/03/1984"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
