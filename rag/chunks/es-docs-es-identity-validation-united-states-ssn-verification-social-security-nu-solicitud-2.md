---
id: "es-docs-es-identity-validation-united-states-ssn-verification-social-security-nu-solicitud-2"
title: "Verificación de SSN en Estados Unidos — Solicitud"
sourcePath: "docs-es/identity-validation/united-states/ssn-verification-social-security-number.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "us"
  - "usa"
  - "identity-validation"
endpoint: "/v2/usa/ssn"
sourceAnchor: "Solicitud"
slug: "/identity-validation/united-states/ssn-verification-social-security-number"
url: "https://docs.verifik.co/verifik-es/identity-validation/united-states/ssn-verification-social-security-number"
---

# Verificación de SSN en Estados Unidos
**API path(s):** /v2/usa/ssn

La API de Verificación de SSN de Verifik te ayuda a autenticar Números de Seguro Social (SSN) emitidos en Estados Unidos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la validez de Números de Seguro Social.

## Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/ssn',
  params: {
    documentNumber: '123-45-678'
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
    "firstYearIssued": "1936",
    "issuingState": "Oklahoma (OK)",
    "SSN": "123-45-678",
    "valid": true
  },
  "signature": {
    "dateTime": "April 11, 2023 3:42 PM",
    "message": "Certified by Verifik.co"
  }
}
```
