---
id: "es-docs-es-identity-argentina-extra-que-valida-esta-api"
title: "Argentina - Ciudadano Argentino Completo — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/argentina-extra.mdx"
locale: "es"
category: "identity"
tags:
  - "ar"
  - "identity"
endpoints:
  - "/v2/ar/cedula/extra"
  - "/v2/ar/cedula/extra?documenttype=dniar&documentnumber=44768756"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/argentina-extra"
url: "https://docs.verifik.co/verifik-es/identidad/argentina-extra"
---

# Argentina - Ciudadano Argentino Completo
**API path(s):** /v2/ar/cedula/extra, /v2/ar/cedula/extra?documenttype=dniar&documentnumber=44768756

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos argentinos usando datos oficiales del gobierno. Este endpoint devuelve campos ampliados respecto a la cédula estándar, entre ellos **fecha de nacimiento**, **género**, partes del nombre e **indicador de vida** (`isAlive`).

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre completo y número de DNI**: Soporta *Documento Nacional de Identidad* (DNI), tipo de documento `DNIAR`.
-   **Coincidencia de identidad**: Confirma que el número de documento corresponde a una persona registrada.
-   **Datos extra**: Devuelve **fecha de nacimiento**, **género**, **nombre**, **apellido**, **nombre completo**, **arrayName** (tokens del nombre) e **isAlive**.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/ar/cedula/extra
```

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre             | Tipo   | Requerido | Descripción                                                                 |
| ------------------ | ------ | --------- | --------------------------------------------------------------------------- |
| `documentType`     | string | Sí        | Tipo de documento. Valor permitido: `DNIAR`.                                |
| `documentNumber`   | string | Sí        | Número de DNI a consultar, sin espacios.                                    |
