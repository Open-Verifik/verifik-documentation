---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-estados-unidos--referencia-de-api"
title: "Estados Unidos - Pasaporte y entradas/salidas a EE. UU. — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-estados-unidos-entradas-pasaporte.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "passport"
  - "verificacion-antecendentes"
endpoint: "/v2/passport/us/entries"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-estados-unidos-entradas-pasaporte"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-estados-unidos-entradas-pasaporte"
---

# Estados Unidos - Pasaporte y entradas/salidas a EE. UU.
**API path(s):** /v2/passport/us/entries

## Referencia de API

Utiliza este endpoint para solicitar **historial de viajes a EE. UU.** vinculado al pasaporte (entradas y salidas) en flujos de cumplimiento y screening. Proporciona los datos del viajero y del pasaporte como parámetros de consulta.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/passport/us/entries
```

Envía `firstName`, `lastName`, `dateOfBirth`, `passportNumber` y `passportCountry` como parámetros de consulta. El formato de fecha debe seguir el contrato de tu integración (por ejemplo `YYYY-MM-DD` o `dd/mm/yyyy`).

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `firstName` | string | **Sí** | Nombre del viajero según el pasaporte. |
| `lastName` | string | **Sí** | Apellido del viajero según el pasaporte. |
| `dateOfBirth` | string | **Sí** | Fecha de nacimiento (formato según contrato del proyecto). |
| `passportNumber` | string | **Sí** | Número de pasaporte. |
| `passportCountry` | string | **Sí** | País emisor del pasaporte (código ISO o nombre, según integración). |

### Solicitud

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/passport/us/entries",
  params: {
    firstName: "JUAN",
    lastName: "PÉREZ",
    dateOfBirth: "1990-01-15",
    passportNumber: "P12345678",
    passportCountry: "CO",
  },
  headers: {
    Accept: "application/json",
    Authorization: "Bearer ",
  },
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```python

params = urllib.parse.urlencode({
    "firstName": "JUAN",
    "lastName": "PÉREZ",
    "dateOfBirth": "1990-01-15",
    "passportNumber": "P12345678",
    "passportCountry": "CO",
})
conn = http.client.HTTPSConnection("api.verifik.co")
conn.request("GET", f"/v2/passport/us/entries?{params}", "", {})
res = conn.getresponse()
print(res.read().decode("utf-8"))
```
