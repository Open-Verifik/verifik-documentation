---
id: "es-docs-es-validacion-empresarial-validacion-empresarial-rues-completa-v3-cual-endpoint-usar"
title: "Colombia — RUES expediente completo (v3) — ¿Cuál endpoint usar?"
sourcePath: "docs-es/validacion-empresarial/validacion-empresarial-rues-completa-v3.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "validacion-empresarial"
endpoint: "/v3/co/rues-complete"
sourceAnchor: "¿Cuál endpoint usar?"
slug: "/business-validation/rues-complete-v3"
url: "https://docs.verifik.co/verifik-es/business-validation/rues-complete-v3"
---

# Colombia — RUES expediente completo (v3)
**API path(s):** /v3/co/rues-complete

## ¿Cuál endpoint usar?

Recupera información empresarial **completa** del registro RUES de Colombia (mismos parámetros que `GET /v3/co/rues`, con mucho más detalle en la respuesta).

## ¿Cuál endpoint usar?

| | **`GET /v3/co/rues`** (básico) | **`GET /v3/co/rues-complete`** (este API) |
| --- | --- | --- |
| **Uso** | Verificación KYB rápida; **resumen** por categoría | **Expediente completo** para onboarding o debida diligencia |
| **Datos típicos** | Campos principales de la categoría (ej. RM: razón social, NIT, cámara, estado de matrícula) | Registro mercantil, **actividades económicas**, **establecimientos**, **representantes legales**, etc. |
| **Parámetros** | `documentType` (**`NIT`**), `documentNumber`, `category` opcional | **Los mismos** |
| **Precio en catálogo** | Menor (ej. **0,2** créditos / **0,3** SmartCheck) | Mayor (ej. **0,3** créditos / **0,4** SmartCheck) por agregar más fuentes oficiales |

Usa el endpoint **básico** para confirmar existencia e identificadores. Usa **completo** cuando necesites representantes, actividades, establecimientos o un registro firmado para cumplimiento.

Ver también: [Colombia — Consulta RUES (v3)](/verifik-es/business-validation/colombia-rues-v3).

### Endpoint

```
GET https://api.verifik.co/v3/co/rues-complete
```

También disponible como `GET https://verifik.app/v3/co/rues-complete` (misma ruta en el host de la aplicación).

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Debe ser **`NIT`**. |
| `documentNumber` | string | Sí | NIT; el servidor elimina caracteres no alfanuméricos. |
| `category` | string | No | **`RM`**, **`PROP`**, **`RUNEOL`**, **`RNT`**, **`ESAL`**, **`ESOL`**, **`JUEGOS`**, **`EXTRANJERAS`**. Por defecto **`RM`**. |
