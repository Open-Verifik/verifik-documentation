---
id: "es-docs-es-verificacion-de-antecedentes-internacional-verificacion-de-antecedent-solicitud-2"
title: "Verificación de Antecedentes Europol — Solicitud"
sourcePath: "docs-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-de-europol.mdx"
locale: "es"
category: "verificacion-de-antecedentes"
tags:
  - "europol"
  - "verificacion-de-antecedentes"
endpoint: "/v2/europol"
sourceAnchor: "Solicitud"
slug: "/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-de-europol"
url: "https://docs.verifik.co/verifik-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-de-europol"
---

# Verificación de Antecedentes Europol
**API path(s):** /v2/europol

## Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/europol',
  params: {documentType: 'CC', documentNumber: '80251972'},
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt '
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
    "documentType": "CC",
    "documentNumber": "123456789",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "foundInEuropol": true,
    "urlEuropol": "https://eumostwanted.eu/es#/es/node/162"
  },
  "signature": {
    "dateTime": "June 28, 2022 12:40 PM",
    "message": "Certified by Verifik.co"
  }
}
```
