---
id: "es-docs-es-business-validation-colombia-complete-business-registry-rues-cual-endpoint-usar-v2"
title: "Validación Empresarial RUES Completa — ¿Cuál endpoint usar? (v2)"
sourcePath: "docs-es/business-validation/colombia/complete-business-registry-rues.mdx"
locale: "es"
category: "business-validation"
tags:
  - "co"
  - "business-validation"
endpoint: "/v2/co/rues/complete"
sourceAnchor: "¿Cuál endpoint usar? (v2)"
slug: "/business-validation/colombia/complete-business-registry-rues"
url: "https://docs.verifik.co/verifik-es/business-validation/colombia/complete-business-registry-rues"
---

# Validación Empresarial RUES Completa
**API path(s):** /v2/co/rues/complete

## ¿Cuál endpoint usar? (v2)

Recupera información empresarial **completa** del registro RUES de Colombia por **NIT** (API v2). Incluye más detalle que la consulta básica `GET /v2/co/rues`.

## ¿Cuál endpoint usar? (v2)

| | **`GET /v2/co/rues`** | **`GET /v2/co/rues/complete`** (este API) |
| --- | --- | --- |
| **Uso** | Resumen / validación rápida | Expediente **completo** |
| **Parámetro** | `nit` | `nit` |
| **Precio en catálogo** | Menor | Mayor por mayor agregación de datos oficiales |

Para nuevas integraciones, usar **v3**: [RUES expediente completo (v3)](/verifik-es/business-validation/rues-complete-v3).

### Endpoint

```
GET https://api.verifik.co/v2/co/rues/complete
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
  url: 'https://api.verifik.co/v2/co/rues/complete',
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
    "status": "ACTIVA",
    "legalRepresentative": "JUAN PEREZ"
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  }
}
```
