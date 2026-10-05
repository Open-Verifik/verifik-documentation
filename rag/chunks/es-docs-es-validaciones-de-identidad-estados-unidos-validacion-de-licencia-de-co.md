---
id: "es-docs-es-validaciones-de-identidad-estados-unidos-validacion-de-licencia-de-co"
title: "Validación de Licencia de Conducir de Florida — Endpoint"
sourcePath: "docs-es/validaciones-de-identidad/estados-unidos/validacion-de-licencia-de-conducir-de-florida.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "usa"
  - "validaciones-de-identidad"
endpoint: "/v2/usa/florida/driver-license"
sourceAnchor: "Endpoint"
slug: "/validaciones-de-identidad/estados-unidos/validacion-de-licencia-de-conducir-de-florida"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/estados-unidos/validacion-de-licencia-de-conducir-de-florida"
---

# Validación de Licencia de Conducir de Florida
**API path(s):** /v2/usa/florida/driver-license

## Endpoint

La API de Verificación de Licencias de Conducir de Verifik te ayuda a autenticar licencias de conducir emitidas en el estado de Florida, Estados Unidos.

### Endpoint

```
GET https://api.verifik.co/v2/usa/florida/driver-license
```

Consulta el estado, vigencia, restricciones, endosos y designaciones de una licencia de conducir de Florida mediante `documentNumber`.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Sí** | Número de licencia de conducir de Florida. | `D12345678901234` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/florida/driver-license',
  params: {
    documentNumber: 'D12345678901234'
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
    "designations": "None on Record",
    "documentNumber": "D12345678901234",
    "endorsements": "None on Record",
    "restrictions": "None on Record",
    "status": "As of February 26, 2024, at 12:11 AM, Florida driver license number D12345678901234 is Valid. This license is a Class E with an expiration date of 12/28/2026."
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  }
}
```
