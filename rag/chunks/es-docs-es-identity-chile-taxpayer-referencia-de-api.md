---
id: "es-docs-es-identity-chile-taxpayer-referencia-de-api"
title: "Chile — Consulta de contribuyente (RUT) — Referencia de API"
sourcePath: "docs-es/identity/chile-taxpayer.mdx"
locale: "es"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoint: "/v2/cl/taxpayer"
sourceAnchor: "Referencia de API"
slug: "/identidad/chile-taxpayer"
url: "https://docs.verifik.co/verifik-es/identidad/chile-taxpayer"
---

# Chile — Consulta de contribuyente (RUT)
**API path(s):** /v2/cl/taxpayer

## Referencia de API

Usa este endpoint cuando necesites datos **orientados al contribuyente** para un **RUT** chileno (no el flujo de cédula del registro civil). Complementa **[Verificación de identidad en Chile](/verifik-es/identidad/chile)** (`v2/cl/cedula`), pensado para **RUN / registro civil**.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/cl/taxpayer
```

Devuelve campos de nombre e identificadores alineados con uso **tributario**—útil para **KYB**, **altas de proveedores** y validación de **facturación** donde el **RUT** debe coincidir con el **contribuyente** registrado.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Debe ser `RUT`. |
| `documentNumber` | string | Sí | Identificador tributario (dígitos; el servicio normaliza formato). |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cl/taxpayer", {
  params: { documentType: "RUT", documentNumber: "263007905" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/cl/taxpayer"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "RUT", "documentNumber": "263007905"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "arrayName": ["RICHARD", "DANIEL", "BARBERA", "MARICHAL"],
    "documentNumber": "263007905",
    "documentType": "RUT",
    "firstName": "RICHARD DANIEL",
    "fullName": "RICHARD DANIEL BARBERA MARICHAL",
    "lastName": "BARBERA MARICHAL"
  },
  "signature": {
    "dateTime": "April 9, 2026 3:02 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "S40CG"
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
  "message": "documentNumber maximum length exceeded.\n"
}
```
