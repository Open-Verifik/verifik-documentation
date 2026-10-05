---
id: "es-docs-es-identity-phone-lookup-referencia-de-api"
title: "Global - Consulta de Teléfono — Referencia de API"
sourcePath: "docs-es/identity/phone-lookup.mdx"
locale: "es"
category: "identity"
tags:
  - "look-ups"
  - "identity"
endpoint: "/v2/look-ups/phone"
sourceAnchor: "Referencia de API"
slug: "/identity/phone-lookup"
url: "https://docs.verifik.co/verifik-es/identity/phone-lookup"
---

# Global - Consulta de Teléfono
**API path(s):** /v2/look-ups/phone

## Referencia de API

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/look-ups/phone
```

El servicio de Consulta de Teléfono resuelve un número móvil o fijo en cualquier país al **nombre del titular listado** y a campos de perfil relacionados cuando la fuente tiene coincidencia. Envíe **`countryCode`** (código de llamada numérico) y **`phone`** (número nacional, sin prefijo de país) por **GET** (query) o **POST** (cuerpo JSON). Un `data` exitoso incluye `name`, `phone`, `countryCode` y puede incluir `score`, `gender`, `about`, `jobTitle`, `companyName`, `phones`, `addresses`, `internetAddresses`, `imId`, `access` y `enhanced`. Úselo para onboarding, detección de fraude y verificación de contactos — no como prueba OTP de tenencia del aparato.

Para enviar un código de un solo uso por SMS o WhatsApp, vea [Validaciones de Teléfono](/verifik-es/resources/validaciones-telefono).

### Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization  | `Bearer `   |

### Parámetros

| Nombre          | Tipo   | Requerido | Descripción                                                                 |
| --------------- | ------ | --------- | --------------------------------------------------------------------------- |
| `countryCode`   | string | Sí        | Código de llamada numérico, no ISO2. Ejemplo: `57` para Colombia, `1` para Estados Unidos. |
| `phone`         | string | Sí        | Número nacional de la línea a consultar, sin prefijo de país, espacios ni puntuación. |
