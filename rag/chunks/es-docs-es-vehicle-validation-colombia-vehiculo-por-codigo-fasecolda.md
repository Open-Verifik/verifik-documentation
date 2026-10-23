---
id: "es-docs-es-vehicle-validation-colombia-vehiculo-por-codigo-fasecolda"
title: "Valores de Vehículos por Código — Endpoint"
sourcePath: "docs-es/vehicle-validation/colombia/vehiculo-por-codigo-fasecolda.mdx"
locale: "es"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/fasecolda/values-by-code"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/vehiculo-por-codigo-fasecolda"
url: "https://docs.verifik.co/verifik-es/vehicle-validation/colombia/vehiculo-por-codigo-fasecolda"
---

# Valores de Vehículos por Código
**API path(s):** /v2/co/fasecolda/values-by-code

## Endpoint

Este servicio te permite obtener valores e información de vehículos Fasecolda por código en Colombia.

### Endpoint

```
GET https://api.verifik.co/v2/co/fasecolda/values-by-code
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `codeFasecolda` | string | **Sí** | Código Fasecolda del vehículo. | `12345` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/fasecolda/values-by-code',
  params: {
    codeFasecolda: '12345'
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
    "codeFasecolda": "12345",
    "value": "50000000",
    "brand": "TOYOTA",
    "model": "COROLLA",
    "year": "2023"
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  }
}
```
