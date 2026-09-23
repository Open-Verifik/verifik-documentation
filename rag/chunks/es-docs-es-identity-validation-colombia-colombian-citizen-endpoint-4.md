---
id: "es-docs-es-identity-validation-colombia-colombian-citizen-endpoint-4"
title: "Ciudadano Colombiano — Endpoint"
sourcePath: "docs-es/identity-validation/colombia/colombian-citizen.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/foreigner-id/ce"
  - "/v2/co/foreigner-id/ppt"
  - "/v2/co/procuraduria"
sourceAnchor: "Endpoint"
slug: "/validacion-identidad/colombia/ciudadano-colombiano"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/ciudadano-colombiano"
---

# Ciudadano Colombiano
**API path(s):** /v2/co/cedula, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/ppt, /v2/co/procuraduria

## Endpoint

```
https://api.verifik.co/v2/co/cedula
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Requisitos del documento

**¿Para quién es?** Cualquier documento cuyos nombres se puedan resolver en fuentes oficiales. `/v2/co/cedula` consolida Procuraduría, DIAN, ADRES y Registraduría. **CE**, **PEP** y **NIT** suelen resolverse por Procuraduría.

| Tipo | Quién lo tiene | `documentType` | Longitud típica en Colombia | Esta API acepta |
| --- | --- | --- | --- | --- |
| **CC** | Ciudadanos colombianos | `CC` | **3–10** dígitos (común: **8** o **10** NUIP) | **5–10** dígitos, solo números |
| **CE** | Residentes extranjeros (nombres) | `CE` | Suele tener **6–7** dígitos | **5–10** dígitos, solo números |
| **PPT** | Migrantes venezolanos (nombres en esta ruta) | `PPT` | Hasta **7** dígitos | **5–10** dígitos, solo números |
| **PEP** | Permiso Especial de Permanencia (nombres) | `PEP` | Típicamente **7–10** dígitos en esta ruta | **5–10** dígitos, solo números |
| **NIT** | Identificación tributaria | `NIT` | **9–10** dígitos | **5–10** dígitos, solo números |

**Cómo ingresar `documentNumber`:** solo dígitos — sin puntos, espacios ni guiones. Ejemplo CC: `1032386359`.

**Usa otro endpoint para:**
- **Solo nombres Procuraduría** → [Colombia Procuraduría](/verifik-es/identity/colombia-procuraduria) (`/v2/co/procuraduria`)
- **Estado migratorio CE** (vencimiento) → [Colombia CE](/verifik-es/identidad/colombia-ce) (`/v2/co/foreigner-id/ce` + `expeditionDate`)
- **Estado migratorio PPT** (VIGENTE / vencimiento) → [Colombia PPT](/verifik-es/identidad/colombia-ppt) (`/v2/co/foreigner-id/ppt` + `expeditionDate`)
- **Estado migratorio PEP** (15 dígitos Migración) → [Colombia PEP](/verifik-es/identidad/colombia-id-pep)

Guía completa: [Guía de documentos de identidad](/verifik-es/validacion-identidad/colombia/guia-documentos-identidad-colombia).
