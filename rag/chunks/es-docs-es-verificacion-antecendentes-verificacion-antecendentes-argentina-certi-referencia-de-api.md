---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-argentina-certi-referencia-de-api"
title: "Argentina - Certificado de Antecedentes Penales — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-argentina-certificado-penal.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "ar"
  - "verificacion-antecendentes"
endpoint: "/v2/ar/dnrec/antecedentes"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-argentina-certificado-penal"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-argentina-certificado-penal"
---

# Argentina - Certificado de Antecedentes Penales
**API path(s):** /v2/ar/dnrec/antecedentes

## Referencia de API

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/ar/dnrec/antecedentes
```

Verifica un certificado de antecedentes penales **DNREC** de Argentina usando el **código de solicitud** (`Solicitud`) y el **código de seguridad** (`Cod. Segur.`) impresos en el PDF oficial. Devuelve datos estructurados de identidad, la **declaración de antecedentes penales** extraída del certificado y el **PDF en base64**.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                                                 |
| ---------------- | ------ | --------- | --------------------------------------------------------------------------- |
| `requestCode`    | string | Sí        | Código de solicitud (`Solicitud`) del certificado. Ejemplo: `02118499487`. |
| `securityCode`   | string | Sí        | Código de seguridad (`Cod. Segur.`) del certificado. Ejemplo: `371488F861`. |

### Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/dnrec/antecedentes',
  params: {
    requestCode: '02118499487',
    securityCode: '371488F861',
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ',
  },
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```python

conn = http.client.HTTPSConnection("api.verifik.co")
headers = {
    "Accept": "application/json",
    "Authorization": "Bearer ",
}
conn.request(
    "GET",
    "/v2/ar/dnrec/antecedentes?requestCode=02118499487&securityCode=371488F861",
    headers=headers,
)
res = conn.getresponse()
print(res.read().decode("utf-8"))
```
