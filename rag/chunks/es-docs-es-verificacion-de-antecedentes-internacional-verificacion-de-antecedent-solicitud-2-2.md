---
id: "es-docs-es-verificacion-de-antecedentes-internacional-verificacion-de-antecedent-solicitud-2-2"
title: "Verificación de Antecedentes FBI — Solicitud"
sourcePath: "docs-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-del-fbi.mdx"
locale: "es"
category: "verificacion-de-antecedentes"
tags:
  - "fbi"
  - "verificacion-de-antecedentes"
endpoint: "/v2/fbi"
sourceAnchor: "Solicitud"
slug: "/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-del-fbi"
url: "https://docs.verifik.co/verifik-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-del-fbi"
---

# Verificación de Antecedentes FBI
**API path(s):** /v2/fbi

## Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/fbi',
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
    "documentNumber": "80251972",
    "fullName": "WILVER VILLEGAS PALOMINO",
    "firstName": "WILVER",
    "lastName": "VILLEGAS PALOMINO",
    "arrayName": [
      "WILVER",
      "VILLEGAS",
      "PALOMINO"
    ],
    "foundInFBI": true,
    "urlFBI": "https://www.fbi.gov/wanted/cei/wilver-villegas-palomino-"
  },
  "signature": {
    "dateTime": "June 28, 2022 12:36 PM",
    "message": "Certified by Verifik.co"
  }
}
```
