---
id: "es-docs-es-legal-colombia-copnia-casos-de-uso-3"
title: "Colombia — COPNIA matrículas profesionales por documento — Casos de uso"
sourcePath: "docs-es/legal/colombia-copnia.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/copnia"
sourceAnchor: "Casos de uso"
slug: "/legal/colombia-copnia"
url: "https://docs.verifik.co/verifik-es/legal/colombia-copnia"
---

# Colombia — COPNIA matrículas profesionales por documento
**API path(s):** /v2/co/copnia

Verifik consulta **COPNIA** (*Consejo Profesional Nacional de Ingeniería*) con **`documentType`** y **`documentNumber`**. La fuente en vivo es el portal de Certificado de Vigencia de COPNIA. Úsalo para **contratación**, **habilitación** y **cumplimiento** de profesionales de ingeniería en Colombia.

## Casos de uso

- **Contratación** y habilitación de ingenieros
- **Cumplimiento** antes de adjudicar contratos
- **Onboarding** cuando se exige matrícula COPNIA

### Notas

- Ejemplo sandbox: **`CC` / `80176161`**. La matrícula sandbox es **`091132-0839078 CNDC`**.
- Como máximo se hidratan **10** matrículas. Las filas extra conservan `licenseNumber` y `profession`. Si falla el detalle, la fila de lista se mantiene.
- Una falla de sesión o de la fuente puede devolver **`409`** con `timeout_data_source`.
- Trata la respuesta como **dato personal sensible** y cumple habeas data.
- Para consultar una matrícula por número, usa [COPNIA por matrícula](/verifik-es/legal/colombia-copnia-license).
