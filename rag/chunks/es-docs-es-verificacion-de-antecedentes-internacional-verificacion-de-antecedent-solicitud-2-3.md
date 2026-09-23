---
id: "es-docs-es-verificacion-de-antecedentes-internacional-verificacion-de-antecedent-solicitud-2-3"
title: "Verificación de Antecedentes OFAC — Solicitud"
sourcePath: "docs-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-ofac.mdx"
locale: "es"
category: "verificacion-de-antecedentes"
tags:
  - "ofac"
  - "verificacion-de-antecedentes"
endpoint: "/v2/ofac"
sourceAnchor: "Solicitud"
slug: "/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-ofac"
url: "https://docs.verifik.co/verifik-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-ofac"
---

# Verificación de Antecedentes OFAC
**API path(s):** /v2/ofac

## Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ofac',
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
    "documentNumber": "80927603",
    "fullName": "MATEO ANDRES VERIFIK",
    "firstName": "MATEO ANDRES",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "ANDRES",
      "VERIFIK"
    ],
    "foundInOFAC": false,
    "details": {}
  },
  "signature": {
    "dateTime": "June 27, 2025 4:33 PM",
    "message": "Certified by Verifik.co"
  }
}
```
