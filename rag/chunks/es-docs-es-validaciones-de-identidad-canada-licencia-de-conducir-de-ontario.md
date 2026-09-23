---
id: "es-docs-es-validaciones-de-identidad-canada-licencia-de-conducir-de-ontario"
title: "Licencia de Conducir de Ontario — Endpoint"
sourcePath: "docs-es/validaciones-de-identidad/canada/licencia-de-conducir-de-ontario.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "ca"
  - "validaciones-de-identidad"
endpoint: "/v2/ca/ontario/driver-license"
sourceAnchor: "Endpoint"
slug: "/validaciones-de-identidad/canada/licencia-de-conducir-de-ontario"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/canada/licencia-de-conducir-de-ontario"
---

# Licencia de Conducir de Ontario
**API path(s):** /v2/ca/ontario/driver-license

## Endpoint

El servicio de Licencia de Conducir de Ontario te permite obtener rápidamente información esencial sobre una licencia de conducir emitida en la provincia de Ontario, Canadá. Al proporcionar el número de documento, puedes acceder a detalles como el estado de la licencia y el número de verificación asociado.

Usa este servicio para validar y verificar la autenticidad de las licencias de conducir de Ontario de manera eficiente. Ya sea que necesites confirmar la validez de una licencia de conducir para fines de identificación o regulatorios, este servicio proporciona información precisa y actualizada de la licencia.

### Endpoint

```
GET https://api.verifik.co/v2/ca/ontario/driver-license
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Sí** | Licencia de conducir a consultar, todos los datos deben ingresarse exactamente como se encuentran en este documento. | `S123456789123456` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/ontario/driver-license',
  params: {
    documentNumber: 'S123456789123456'
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
    "documentNumber": "S123456789123456",
    "licenceStatus": "Valid",
    "verificationNumber": "123V5"
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  }
}
```
