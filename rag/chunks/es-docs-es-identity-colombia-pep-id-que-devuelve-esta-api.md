---
id: "es-docs-es-identity-colombia-pep-id-que-devuelve-esta-api"
title: "Colombia — PEP (Permiso Especial de Permanencia) — Qué devuelve esta API"
sourcePath: "docs-es/identity/colombia-pep-id.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/foreigner-id/pep"
sourceAnchor: "Qué devuelve esta API"
slug: "/identidad/colombia-id-pep"
url: "https://docs.verifik.co/verifik-es/identidad/colombia-id-pep"
---

# Colombia — PEP (Permiso Especial de Permanencia)
**API path(s):** /v2/co/foreigner-id/pep

## Qué devuelve esta API

Verifik valida registros de **PEP** publicados por **Migración Colombia** para KYC, elegibilidad y cumplimiento.

## Qué devuelve esta API

- **Estado** (p. ej. **VIGENTE** / **VENCIDO**) y fechas clave, incluidas **expedición** y **vencimiento** cuando la fuente las entrega
- **Nombre** estructurado, metadatos del documento **PEP** e **identificación venezolana** cuando aplica
- Respuestas **firmadas** y posible **caché**

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/foreigner-id/pep
```

La misma integración está disponible como **`POST`** con cuerpo JSON con los mismos campos. En **`GET`** usa **parámetros de query** como abajo.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Requisitos del documento

**¿Para quién es?** **Nacionales venezolanos** con *Permiso Especial de Permanencia* (**PEP**) — permiso **migratorio**, no el screening AML de “personas expuestas políticamente”.

| Campo | Orientación |
| --- | --- |
| **`documentNumber`** | Número del PEP, **solo dígitos**. En Colombia tiene **siempre 15 dígitos**. Ejemplo: `123456789012345`. |
| **`expeditionDate`** | Fecha de expedición en **`DD/MM/AAAA`** (ej. `10/10/2024`). Obligatoria. |

Guía completa: [Guía de documentos](/verifik-es/validacion-identidad/colombia/guia-documentos-identidad-colombia).

### Parámetros

| nombre | tipo | requerido | descripción |
| --- | --- | --- | --- |
| `documentNumber` | string | sí | Número del PEP, **solo dígitos**. **15 dígitos** (longitud fija). Ejemplo: `123456789012345`. |
| `expeditionDate` | string | sí | Fecha de expedición en **`DD/MM/AAAA`** (ej. `10/10/2024`). Debe coincidir con el documento. |
