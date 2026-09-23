---
id: "es-docs-es-validacion-empresarial-verificacion-facturador-legal-notas-2"
title: "Colombia — Facturador electrónico DIAN (NIT) — Notas"
sourcePath: "docs-es/validacion-empresarial/verificacion-facturador-legal.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "co"
  - "validacion-empresarial"
endpoints:
  - "/v2/co/company/dian"
  - "/v2/co/company/dian/invoicer"
sourceAnchor: "Notas"
slug: "/business-validation/colombia-legal-invoicer-verification"
url: "https://docs.verifik.co/verifik-es/business-validation/colombia-legal-invoicer-verification"
---

# Colombia — Facturador electrónico DIAN (NIT)
**API path(s):** /v2/co/company/dian, /v2/co/company/dian/invoicer

## Notas

- Solo **`GET`** con parámetros en query (sin cuerpo). Usa **`Accept`** para respuestas JSON.
- Devuelve datos del **facturador / facturación electrónica** (p. ej. **correo** cuando DIAN lo expone). **404** si no hay **email** en la respuesta de DIAN para ese NIT.
- Para **obligaciones y estado** del contribuyente en general, usa **[Verificación DIAN](./verificacion-dian.mdx)**.
