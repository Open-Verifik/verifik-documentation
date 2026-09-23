---
id: "es-docs-es-identity-validation-colombia-colombian-citizen-by-name-que-devuelve-esta-api"
title: "Colombia — Búsqueda de ciudadano por nombre (SCCRC) — Qué devuelve esta API"
sourcePath: "docs-es/identity-validation/colombia/colombian-citizen-by-name.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/by-name"
sourceAnchor: "Qué devuelve esta API"
slug: "/validacion-identidad/colombia/ciudadano-colombiano-por-nombre"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/ciudadano-colombiano-por-nombre"
---

# Colombia — Búsqueda de ciudadano por nombre (SCCRC)
**API path(s):** /v2/co/cedula/by-name

## Qué devuelve esta API

Consulta el registro civil de nacimiento (**SCCRC**) de la **Registraduría Nacional del Estado Civil** usando **nombres**, **sexo** y **fecha de nacimiento**. A diferencia de [ciudadano colombiano por documento](/identity-validation/colombia/colombian-citizen), este endpoint es una **búsqueda inversa** y puede devolver **múltiples coincidencias**.

Úsalo cuando conoces atributos de identidad personal pero no el NUIP/CC, o cuando necesitas confirmar posibles hallazgos en el registro antes de una verificación por documento.

## Qué devuelve esta API

- **`matches`** — arreglo de hallazgos del registro civil (cero o más)
- **`documentNumber`**, **`documentType`** — NUIP/CC cuando está presente en el registro
- **`firstName`**, **`lastName`**, **`fullName`**, **`arrayName`** — partes del nombre
- **`sexo`**, **`serial`** — sexo y serial del registro civil
- **`oficina`** / **`expeditionPlace`**, **`fecha`** / **`dateOfBirth`** — cuando hay enriquecimiento Detalle
- **`recordType`** — `REGISTRO CIVIL DE NACIMIENTO`
- Un wrapper de respuesta Verifik **firmado**

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/cedula/by-name
```

Usa este endpoint cuando necesites **encontrar candidatos del registro de nacimiento por nombre**. La misma integración está disponible como **`POST`** con cuerpo JSON. **`GET`** usa **parámetros de consulta** como se muestra abajo.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description | Examples |
| --- | --- | --- | --- | --- |
| `primerNombre` | string | yes | Primer nombre | `MARIA` |
| `primerApellido` | string | yes | Primer apellido | `LOPEZ` |
| `sexo` | string | yes | Sexo según registro. Permitidos: `MASCULINO`, `FEMENINO` (también `M` / `F`) | `FEMENINO` |
| `fecha` | string | yes | Fecha de nacimiento en **`DD/MM/YYYY`** | `15/03/1990` |
| `segundoNombre` | string | no | Segundo nombre | `ELENA` |
| `segundoApellido` | string | no | Segundo apellido | `GARCIA` |
