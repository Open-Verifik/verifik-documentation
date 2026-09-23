---
id: "es-docs-es-validacion-empresarial-colombia-registro-empresarial-rues-cual-endpoint-usar-v2"
title: "Colombia - Registro Empresarial RUES — ¿Cuál endpoint usar? (v2)"
sourcePath: "docs-es/validacion-empresarial/colombia-registro-empresarial-rues.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "co"
  - "validacion-empresarial"
endpoint: "/v2/co/rues"
sourceAnchor: "¿Cuál endpoint usar? (v2)"
slug: "/validacion-empresarial/colombia-registro-empresarial-rues"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/colombia-registro-empresarial-rues"
---

# Colombia - Registro Empresarial RUES
**API path(s):** /v2/co/rues

## ¿Cuál endpoint usar? (v2)

Consulta **básica** en RUES por **NIT** (API v2, legado). Devuelve datos esenciales de registro; para el expediente completo en v2 usa `GET /v2/co/rues/complete`.

## ¿Cuál endpoint usar? (v2)

| | **`GET /v2/co/rues`** (este API) | **`GET /v2/co/rues/complete`** |
| --- | --- | --- |
| **Uso** | Validación rápida por NIT | Información empresarial **completa** (representantes, actividades, etc.) |
| **Parámetro** | `nit` | `nit` |
| **Precio en catálogo** | Menor (ej. **0,2** / **0,3** SmartCheck) | Mayor (ej. **0,3** / **0,4** SmartCheck) |

Para integraciones nuevas, preferir **v3**: [Consulta RUES (v3)](/verifik-es/business-validation/colombia-rues-v3) y [RUES completo (v3)](/verifik-es/business-validation/rues-complete-v3).

### Endpoint

```
GET https://api.verifik.co/v2/co/rues
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `nit` | string | **Sí** | NIT de la empresa a consultar, sin espacios ni puntos. | `123456789` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/rues',
  params: {
    nit: '123456789'
  },
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer '
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

### Respuesta

  

```json
{
  "data": {
    "nit": "123456789",
    "companyName": "EMPRESA EJEMPLO S.A.S",
    "status": "ACTIVA"
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  }
}
```
