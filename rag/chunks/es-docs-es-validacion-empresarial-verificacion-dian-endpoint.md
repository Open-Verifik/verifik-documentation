---
id: "es-docs-es-validacion-empresarial-verificacion-dian-endpoint"
title: "Colombia — Verificación DIAN (NIT) — Endpoint"
sourcePath: "docs-es/validacion-empresarial/verificacion-dian.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "co"
  - "validacion-empresarial"
endpoint: "/v2/co/company/dian"
sourceAnchor: "Endpoint"
slug: "/business-validation/colombia-dian-verification"
url: "https://docs.verifik.co/verifik-es/business-validation/colombia-dian-verification"
---

# Colombia — Verificación DIAN (NIT)
**API path(s):** /v2/co/company/dian

## Endpoint

```
GET https://api.verifik.co/v2/co/company/dian
```

Misma ruta en el host de la aplicación: `GET https://verifik.app/v2/co/company/dian`.

Valida el estado y los datos del contribuyente ante **DIAN** (*Dirección de Impuestos y Aduanas Nacionales*) por **NIT**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Debe ser **`NIT`**. |
| `documentNumber` | string | Sí | NIT; el servidor elimina espacios; **longitud mínima 5** caracteres (validación de API). |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/company/dian", {
  params: { documentType: "NIT", documentNumber: "901708460" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/company/dian"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NIT", "documentNumber": "901708460"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

La API puede devolver dos tipos de respuestas exitosas (200):

1. **Respuesta de Empresa**: Información estándar de empresa
2. **Respuesta de Persona Natural**: Cuando el NIT pertenece a una "persona natural" registrada en DIAN, la respuesta incluye campos adicionales de nombre que son divididos por las funciones internas de Verifik.

  

```json
{
  "data": {
    "date": "2025-10-10T16:49:00Z",
    "descripcion": "Los datos de la persona estan activos, es decir tiene vigentes sus responsabilidades ",
    "estado": "REGISTRO ACTIVO",
    "nombreRazon": "SAY SHANNON COLOMBIA SAS",
    "nit": "901708460"
  },
  "signature": {
    "dateTime": "October 10, 2025 4:49 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "5RCBO"
}
```

  
  

```json
{
  "data": {
    "date": "2026-01-20T22:07:00Z",
    "descripcion": "Los datos de la persona estan activos, es decir tiene vigentes sus responsabilidades ",
    "estado": "REGISTRO ACTIVO",
    "nombreRazon": "RODRIGUEZ MARTINEZ CARLOS ANDRES",
    "nit": "1234567890",
    "fullName": "CARLOS ANDRES RODRIGUEZ MARTINEZ",
    "firstName": "CARLOS ANDRES",
    "lastName": "RODRIGUEZ MARTINEZ",
    "arrayName": [
      "RODRIGUEZ",
      "MARTINEZ",
      "CARLOS",
      "ANDRES"
    ]
  },
  "signature": {
    "dateTime": "January 20, 2026 10:07 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "5SQEM"
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
  "message": "documentType must be one of: [NIT]"
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
  "message": "missing documentType\n"
}
```

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```
