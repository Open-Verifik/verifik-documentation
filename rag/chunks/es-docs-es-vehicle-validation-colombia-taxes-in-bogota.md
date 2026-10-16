---
id: "es-docs-es-vehicle-validation-colombia-taxes-in-bogota"
title: "Impuestos en Bogotá — Endpoint"
sourcePath: "docs-es/vehicle-validation/colombia/taxes-in-bogota.mdx"
locale: "es"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/bogota/impuestos"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/taxes-in-bogota"
url: "https://docs.verifik.co/verifik-es/vehicle-validation/colombia/taxes-in-bogota"
---

# Impuestos en Bogotá
**API path(s):** /v2/co/bogota/impuestos

## Endpoint

Este servicio te permite consultar información sobre impuestos de vehículos en Bogotá, Colombia.

### Endpoint

```
GET https://api.verifik.co/v2/co/bogota/impuestos
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Sí** | Placa del vehículo a consultar. | `ABC123` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/bogota/impuestos',
  params: {
    plate: 'ABC123'
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
    "plate": "ABC123",
    "taxes": {
      "amount": "150000",
      "status": "PAGADO",
      "year": "2024"
    }
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  }
}
```
