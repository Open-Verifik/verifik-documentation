---
id: "es-docs-es-identity-validation-colombia-colombian-cedula-premium-referencia-de-api"
title: "Colombia — Cédula nacional premium (CC) — Referencia de API"
sourcePath: "docs-es/identity-validation/colombia/colombian-cedula-premium.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/premium"
sourceAnchor: "Referencia de API"
slug: "/validacion-identidad/colombia/cedula-premium-cc"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/cedula-premium-cc"
---

# Colombia — Cédula nacional premium (CC)
**API path(s):** /v2/co/cedula/premium

## Referencia de API

**Finalidad:** **verificar** una **Cédula de Ciudadanía (CC)** frente a **fuentes oficiales** y devolver un **registro de identidad estructurado** para procesos de KYC y cumplimiento, no un simple sí/no sobre el número. Incluye **cómo figura el nombre**, **fecha de nacimiento**, **lugar y fecha de expedición** y, cuando las fuentes lo aportan, **género** e **indicación de supervivencia**, con un bloque de **certificación firmada**. Se **envía únicamente el número**; la **fecha de expedición se resuelve en el servidor** (sin tipo de documento ni fecha en la petición). El detalle equivale a [**cédula extra**](../../identity/colombia-full-id.mdx). El consumo de **créditos** es **superior** al de la [**consulta básica**](./colombian-citizen.mdx) por los pasos de resolución adicionales.

## Referencia de API

### Punto de acceso

```
GET https://api.verifik.co/v2/co/cedula/premium
```

**Respuesta:** devuelve **`data`** (atributos de identidad disponibles para el número enviado), **`signature`** (metadatos de certificación del payload) e **`id`** (identificador de la solicitud). **HTTP 404**: no fue posible constituir un registro completo para el número en este flujo. **HTTP 409**: la solicitud no superó la validación de entrada (p. ej. longitud de `documentNumber`) antes de la resolución. El **coste en créditos** por solicitud es **superior** al de `/v2/co/cedula` básico por la cadena de resolución.

### Cabeceras

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| `documentNumber` | string | Sí | Número de **CC**; el servidor deja solo dígitos. **Entre 5 y 10** caracteres (validación API). |
