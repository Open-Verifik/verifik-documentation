---
id: "es-docs-es-validaciones-de-identidad-colombia-permiso-especial-de-permanencia-pe"
title: "🇨🇴 Colombia - ID PEP — Endpoint"
sourcePath: "docs-es/validaciones-de-identidad/colombia/permiso-especial-de-permanencia-pep-documento-de-identificacion.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "co"
  - "validaciones-de-identidad"
endpoint: "/v2/co/foreigner-id/pep"
sourceAnchor: "Endpoint"
slug: "/validaciones-de-identidad/colombia/permiso-especial-de-permanencia-pep-documento-de-identificacion"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/colombia/permiso-especial-de-permanencia-pep-documento-de-identificacion"
---

# 🇨🇴 Colombia - ID PEP
**API path(s):** /v2/co/foreigner-id/pep

## Endpoint

Validar el Permiso Especial de Permanencia (PEP) para ciudadanos venezolanos en Colombia. Este endpoint de API recupera datos autenticados del PEP, incluyendo el nombre completo del titular del permiso, número de documento, fecha de vencimiento y estado, simplificando la verificación de identidad para cumplimiento, verificaciones de elegibilidad o provisión de servicios.

Ideal para organizaciones que necesitan verificar el estatus legal de nacionales venezolanos en Colombia, como para empleo, servicios financieros o programas humanitarios.

### Endpoint

```
GET https://api.verifik.co/v2/co/foreigner-id/pep
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Sí** | Número de documento sin espacios ni puntos. | `123456789` |
| `expeditionDate` | string | **Sí** | Fecha cuando se generó el documento. | `10/10/2024` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/foreigner-id/pep',
  params: {
    expeditionDate: '10/10/2024',
    documentNumber: '123456789'
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
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "documentNumber": "123456789012345",
    "documentType": "PEP",
    "expirationDate": "08/08/2018",
    "firstName": "MATEO",
    "fullName": "MATEO VERIFIK",
    "identification": "17609583",
    "lastName": "VERIFIK",
    "status": "VENCIDO"
  },
  "signature": {
    "dateTime": "August 22, 2023 8:02 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "tnlkb"
}
```
