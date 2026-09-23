---
id: "es-docs-es-validacion-identidad-colombia-guia-documentos-identidad-colombia-pa-pasaporte-3"
title: "Colombia — Guía de documentos de identidad — PA — Pasaporte"
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
sourceAnchor: "PA — Pasaporte"
slug: "/validacion-identidad/colombia/guia-documentos-identidad-colombia"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/guia-documentos-identidad-colombia"
---

# Colombia — Guía de documentos de identidad
**API path(s):** /v2/co/cedula, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/pep, /v2/co/foreigner-id/ppt, /v2/co/politically-exposed-persons, /v2/co/runt/conductor

Usa esta página cuando no estés seguro de **qué tipo de documento** tiene tu usuario o **qué endpoint de Verifik** debes llamar. Cada documento colombiano tiene un emisor distinto y una ruta de API diferente.

## PA — Pasaporte

Para personas identificadas con **pasaporte**, no con cédula colombiana ni permiso de protección temporal.

- `/v2/co/cedula` y Procuraduría **no** aceptan `PA`.
- Usa [licencia de conducir RUNT](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt) con `documentType=PA` y **`primerApellido`** obligatorio.

### PEP — Permiso Especial de Permanencia

Para **nacionales venezolanos** con este **permiso migratorio** (distinto de “persona expuesta políticamente” en AML).

- El número tiene **siempre 15 dígitos**.
- Requiere **`expeditionDate`** en **`DD/MM/YYYY`**.

**Endpoint:** [Colombia PEP (migración)](/verifik-es/identidad/colombia-id-pep).

## Distinción importante de nombres

| Término | Significado | Producto Verifik |
| --- | --- | --- |
| **PEP** (documento) | *Permiso Especial de Permanencia* — permiso migratorio | `/v2/co/foreigner-id/pep` |
| **Personas expuestas políticamente (PEP)** | Cumplimiento AML | `/v2/co/politically-exposed-persons` (CC o NIT) — ver [PEP colombiano (AML)](/verifik-es/identity-validation/colombia/colombian-politically-exposed-persons) |
| **PA** | *Pasaporte*. En RUNT aparece como **`P.`** | `/v2/co/runt/conductor` (`primerApellido` obligatorio) |
| **PPT** | *Permiso por Protección Temporal* — **no es pasaporte**. En RUNT aparece como **`Y.`** | `/v2/co/cedula` o `/v2/co/foreigner-id/ppt` |

No envíes un **PEP** migratorio al endpoint AML de personas expuestas políticamente, ni al revés.

## Preguntas frecuentes

  ¿Debo usar CC o CE?
  
    CC si la persona es ciudadana colombiana (Cédula de Ciudadanía). CE si es extranjero residente (Cédula de Extranjería). Usan fuentes gubernamentales y endpoints de Verifik distintos.
  

  ¿Qué endpoint PPT debo usar?
  
    Usa /v2/co/cedula con documentType=PPT cuando necesites datos de identidad/nombre similares a una cédula. Usa /v2/co/foreigner-id/ppt cuando necesites el estado migratorio ante Migración Colombia — debes incluir expeditionDate.
  

  ¿Por qué mi CC falla con 409?
  
    En /v2/co/cedula, documentNumber debe tener 5–10 dígitos tras la normalización. Números más cortos o formatos que dejen muy pocos dígitos se rechazan antes de consultar la fuente oficial.
