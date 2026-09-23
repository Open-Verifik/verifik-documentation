---
id: "es-docs-es-validacion-empresarial-verificacion-facturador-legal-endpoint"
title: "Colombia — Facturador electrónico DIAN (NIT) — Endpoint"
sourcePath: "docs-es/validacion-empresarial/verificacion-facturador-legal.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "co"
  - "validacion-empresarial"
endpoints:
  - "/v2/co/company/dian"
  - "/v2/co/company/dian/invoicer"
sourceAnchor: "Endpoint"
slug: "/business-validation/colombia-legal-invoicer-verification"
url: "https://docs.verifik.co/verifik-es/business-validation/colombia-legal-invoicer-verification"
---

# Colombia — Facturador electrónico DIAN (NIT)
**API path(s):** /v2/co/company/dian, /v2/co/company/dian/invoicer

## Endpoint

```
GET https://api.verifik.co/v2/co/company/dian/invoicer
```

Misma ruta en el host de la aplicación: `GET https://verifik.app/v2/co/company/dian/invoicer`.

Comprueba el registro como **facturador electrónico** ante **DIAN** (*facturación electrónica*). Para el estado general del contribuyente, usa **[Verificación DIAN](./verificacion-dian.mdx)** (`GET /v2/co/company/dian`).

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

const { data } = await axios.get("https://api.verifik.co/v2/co/company/dian/invoicer", {
  params: { documentType: "NIT", documentNumber: "901708460" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/company/dian/invoicer"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NIT", "documentNumber": "901708460"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "documentNumber": "901708460",
    "documentType": "NIT",
    "email": "info@sayshannon.com",
    "nit": "901708460"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:11 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "JS4GP"
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
