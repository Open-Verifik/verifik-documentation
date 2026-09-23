---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-chile-certifica-referencia-de-api"
title: "Chile - Verificación de Certificado del Registro Civil — Referencia de API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-chile-certificado-registro-civil.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "cl"
  - "verificacion-antecendentes"
endpoint: "/v2/cl/registro-civil/certificado"
sourceAnchor: "Referencia de API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-chile-certificado-registro-civil"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-chile-certificado-registro-civil"
---

# Chile - Verificación de Certificado del Registro Civil
**API path(s):** /v2/cl/registro-civil/certificado

## Referencia de API

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/cl/registro-civil/certificado
```

Verifica un certificado del **Registro Civil (SRCEI)** de Chile usando el **folio** y el **código verificador** (`Código Verificador`) impresos en el documento. Devuelve datos de identidad, **registros de condenas** y el **PDF del certificado en base64** cuando la verificación es exitosa.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre               | Tipo   | Requerido | Descripción                                                           |
| -------------------- | ------ | --------- | --------------------------------------------------------------------- |
| `folio`              | string | Sí        | Folio del certificado (10–15 caracteres). Ejemplo: `50070080804`.     |
| `verificationCode`   | string | Sí        | Código verificador del certificado. Ejemplo: `2aacbb9a636a`.         |

### Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/cl/registro-civil/certificado',
  params: {
    folio: '50070080804',
    verificationCode: '2aacbb9a636a',
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
    "/v2/cl/registro-civil/certificado?folio=50070080804&verificationCode=2aacbb9a636a",
    headers=headers,
)
res = conn.getresponse()
print(res.read().decode("utf-8"))
```
