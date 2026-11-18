---
id: "es-docs-es-scan-docs-apis-scan-studio-example-tarjeta-de-propiedad"
title: "Ejemplo - Tarjeta de Propiedad — Endpoint"
sourcePath: "docs-es/scan-docs-apis/scan-studio/example-tarjeta-de-propiedad.mdx"
locale: "es"
category: "scan-docs-apis"
tags:
  - "scan-docs-apis"
sourceAnchor: "Endpoint"
slug: "/scan-docs-apis/scan-studio/example-tarjeta-de-propiedad"
url: "https://docs.verifik.co/verifik-es/scan-docs-apis/scan-studio/example-tarjeta-de-propiedad"
---

# Ejemplo - Tarjeta de Propiedad

## Endpoint

Este ejemplo muestra cómo escanear una tarjeta de propiedad usando Scan Studio.

### Endpoint

```
POST https://api.verifik.co/v3/ocr/scan-studio
```

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | string | Sí | Imagen en formato Base64 o URL |
| `documentType` | string | Sí | Tipo de documento (para tarjeta de propiedad, consulta tipos soportados) |

### Solicitud

  

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "image": "",
  "documentType": "CC"
});

let config = {
  method: 'post',
  url: 'https://api.verifik.co/v3/ocr/scan-studio',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer '
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

### Respuesta

  

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "firstName": "John",
    "lastName": "Doe"
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  }
}
```

## Recursos

- [Scan Studio - Documentación Completa](/verifik-es/ocr-engines/escaneo-estudio)
- [Documentos Permitidos](/verifik-es/apis-de-escaneo-de-documnetos/scan-studio/documentos-permitidos)
