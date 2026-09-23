---
id: "es-docs-es-validacion-empresarial-panama-que-valida-esta-api"
title: "Verificación empresarial en Panamá — ¿Qué valida esta API?"
sourcePath: "docs-es/validacion-empresarial/panama.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "pa"
  - "validacion-empresarial"
endpoints:
  - "/v2/pa/company"
  - "/v2/pa/company?"
  - "/v2/pa/company?documenttype=ruc&documentnumber=155703400-2-2021&dv=39"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validacion-empresarial/panama"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/panama"
---

# Verificación empresarial en Panamá
**API path(s):** /v2/pa/company, /v2/pa/company?, /v2/pa/company?documenttype=ruc&documentnumber=155703400-2-2021&dv=39

## ¿Qué valida esta API?

La API de Verifik te permite validar sociedades y personas jurídicas panameñas usando el **RUC** (*Registro Único de Contribuyente*) y datos oficiales del registro mercantil. Está pensada para **KYB** (Conozca a su Negocio), onboarding de proveedores y controles de cumplimiento.

## ¿Qué valida esta API?

- **RUC y dígito verificador (`dv`)**: confirma que el identificador tiene el formato esperado antes de consultar.
- **Datos registrales**: devuelve razón social, tipo de organización, estado, capital, vigencia y metadatos clave del folio.
- **Representación**: incluye cargos y nombres de representantes cuando el registro los expone.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/pa/company
```

Consulta de empresa en **Panamá** por **RUC**. Envías **`documentType`** (`RUC`), el **`documentNumber`** del contribuyente y el **`dv`** (dígito verificador). Sirve para **KYB**, alta de proveedores y revisiones de cumplimiento cuando necesitas razón social, estado y representación en una sola respuesta HTTPS.

### Encabezados

| Nombre          | Valor              |
| --------------- | ------------------ |
| Accept          | `application/json` |
| Authorization   | `Bearer `   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción |
| ---------------- | ------ | --------- | ----------- |
| `documentType`   | string | Sí        | Tipo de documento. Valor permitido: `RUC`. |
| `documentNumber` | string | Sí        | Número de registro del contribuyente (incluye el formato con guiones del RUC). |
| `dv`             | string | Sí        | Dígito verificador asociado al RUC. |
