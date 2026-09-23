---
id: "es-docs-es-validacion-identidad-colombia-guia-documentos-identidad-colombia-como-ingresar-el-numero-2"
title: "Colombia — Guía de documentos de identidad — Cómo ingresar el número"
sourcePath: "docs-es/validacion-identidad/colombia/guia-documentos-identidad-colombia.mdx"
locale: "es"
category: "validacion-identidad"
tags:
  - "co"
  - "validacion-identidad"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/foreigner-id/ce"
  - "/v2/co/foreigner-id/pep"
  - "/v2/co/foreigner-id/ppt"
  - "/v2/co/politically-exposed-persons"
  - "/v2/co/runt/conductor"
sourceAnchor: "Cómo ingresar el número"
slug: "/validacion-identidad/colombia/guia-documentos-identidad-colombia"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/guia-documentos-identidad-colombia"
---

# Colombia — Guía de documentos de identidad
**API path(s):** /v2/co/cedula, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/pep, /v2/co/foreigner-id/ppt, /v2/co/politically-exposed-persons, /v2/co/runt/conductor

Usa esta página cuando no estés seguro de **qué tipo de documento** tiene tu usuario o **qué endpoint de Verifik** debes llamar. Cada documento colombiano tiene un emisor distinto y una ruta de API diferente.

## Cómo ingresar el número

- Envía **solo dígitos** — sin puntos, espacios ni guiones (Verifik elimina caracteres no numéricos).
- **No** rellenes con ceros a la izquierda salvo que así figure en el documento físico o en tu sistema origen.
- Si recibes **409** de validación, revisa la longitud en `/v2/co/cedula` (**5–10**) o una **`expeditionDate`** faltante o incorrecta en rutas foreigner-id.

## Tipos de documento explicados

### CC — Cédula de Ciudadanía

Para personas **ciudadanas colombianas**. El número las identifica en la *Registraduría*.

- **Cédulas antiguas** (antes de ~2004): suelen tener **6–8 dígitos**.
- **NUIP actual** (desde ~2004): **10 dígitos**, normalmente desde `1.000.000.000`.
- **Cédulas históricas muy antiguas** pueden tener **3 dígitos**; la ruta `/v2/co/cedula` de Verifik exige **mínimo 5 dígitos**. Si solo tienes un número histórico más corto, contacta a soporte Verifik.

**Endpoint:** [Ciudadano colombiano](/verifik-es/validacion-identidad/colombia/ciudadano-colombiano) — `documentType=CC`.

### CE — Cédula de Extranjería

Para **extranjeros** con residencia legal en Colombia. Lo expide **Migración Colombia**, no el flujo de cédula de la *Registraduría*.

- Los números suelen tener **6 o 7 dígitos** (longitud variable).
- Debes enviar la **fecha de expedición** en formato **`DD/MM/YYYY`**.

**Endpoint:** [Colombia CE](/verifik-es/identidad/colombia-ce) — **no** uses `/v2/co/cedula`.

### PPT — Permiso de Protección Temporal

Para **nacionales venezolanos** bajo el régimen de protección temporal en Colombia.

- El número del permiso suele tener **hasta 7 dígitos**. Algunos portales (SENA, nómina, etc.) lo muestran **rellenado con ceros hasta 15 caracteres** — usa el formato que ya maneja tu integración.
- **Dos endpoints:**
  - **Consulta de nombre / identidad:** `/v2/co/cedula` con `documentType=PPT` (validación 5–10 dígitos).
  - **Estado migratorio (VIGENTE, vencimiento, etc.):** `/v2/co/foreigner-id/ppt` con **`expeditionDate`**.

**Endpoints:** [Ciudadano colombiano (PPT nombres)](/verifik-es/validacion-identidad/colombia/ciudadano-colombiano) · [PPT Migración](/verifik-es/identidad/colombia-ppt).

PPT **no** es pasaporte. En RUNT el PPT aparece como **`Y.`**. El pasaporte es **`PA`** (RUNT **`P.`**).
