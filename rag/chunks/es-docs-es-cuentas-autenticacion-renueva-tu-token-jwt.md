---
id: "es-docs-es-cuentas-autenticacion-renueva-tu-token-jwt"
title: "Renueva tu Token (JWT) — Endpoint"
sourcePath: "docs-es/cuentas/autenticacion/renueva-tu-token-jwt.mdx"
locale: "es"
category: "cuentas"
tags:
  - "auth"
  - "cuentas"
endpoint: "/v2/auth/session"
sourceAnchor: "Endpoint"
slug: "/cuentas/autenticacion/renueva-tu-token-jwt"
url: "https://docs.verifik.co/verifik-es/cuentas/autenticacion/renueva-tu-token-jwt"
---

# Renueva tu Token (JWT)
**API path(s):** /v2/auth/session

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/auth/session
```

Este método renueva el token de acceso generado con otros endpoints de login, con un periodo de validez de **30 días**. Después de este periodo, es necesario **generar** un nuevo Access Token. El único parámetro requerido para la renovación es el token anterior, siempre que no haya expirado. Este servicio solo renueva tokens aún válidos.

### Encabezados

| Nombre         | Valor              |
| -------------- | ------------------ |
| Authorization  | ``          |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                    |
| ---------------- | ------ | --------- | ---------------------------------------------- |
| `origin`         | string | No        | Define la acción a realizar con el token. En este caso, la acción será "refresh". |
| `expiresIn`      | number | No        | Número entero que representa meses: 1 = 1 mes, 2 = 2 meses, etc. |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/auth/session',
  params: {origin: 'refresh', expiresIn: 120},
  headers: {
    Authorization: ''
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
    "accessToken": "eyJhbGcpXVCJ9.eyJjbGllbnR...JZCIYiUzNjEaIWxYShWeBaRs",
    "tokenType": "bearer"
}
```
