---
id: "es-docs-es-validacion-empresarial-spain-encabezados-2"
title: "España — Verificación empresarial (CIF/NIF) — Encabezados"
sourcePath: "docs-es/validacion-empresarial/spain.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "es"
  - "validacion-empresarial"
endpoint: "/v2/es/company"
sourceAnchor: "Encabezados"
slug: "/validacion-empresarial/espana"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/espana"
---

# España — Verificación empresarial (CIF/NIF)
**API path(s):** /v2/es/company

Este endpoint está pensado para equipos que deben **saber con quién contratan**: bancos, plataformas B2B, insuretech, operadores de marketplace o cualquier negocio que deba validar que una empresa existe, está activa y coincide con el identificador que te ha proporcionado el usuario o el fichero de alta.
**Qué hace en la práctica:** envías un **identificador de empresa** (por ejemplo CIF/NIF en el formato que admita el servicio) y recibes un objeto de datos que puedes usar para completar fichas de cliente, pipelines de aprobación o revisiones de cumplimiento. La respuesta incluye firma Verifik para trazabilidad. Los campos exactos dependen de la fuente y de tu configuración; si necesitas un listado campo a campo para tu sector, el equipo de soporte puede orientarte.
**Cuándo tiene sentido usarlo:** alta de proveedores, revisión previa a pagos recurrentes, apertura de cuentas corporativas, verificación de titulares reales en operaciones sensibles, o cualquier flujo KYB donde “la empresa es quien dice ser” sea un requisito previo a seguir adelante.
**Limitaciones y buenas prácticas:** no sustituye un informe legal completo ni una auditoría contable; es una capa de **verificación automatizada** encadenada a tu política interna. Asegúrate de manejar tokens de forma segura, de registrar intentos fallidos (empresa no encontrada) y de informar al usuario final cuando los datos no basten para una decisión automática.

## Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Tipo de documento (`CIF` o `NIF`). |
| `documentNumber` | string | Sí | Identificador fiscal de la empresa (p. ej. CIF). |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/es/company", {
  params: { documentType: "CIF", documentNumber: "33011826" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CIF",
    "documentNumber" => "33011826"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/es/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/es/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CIF", "documentNumber": "33011826"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/es/company?documentType=CIF&documentNumber=33011826"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
